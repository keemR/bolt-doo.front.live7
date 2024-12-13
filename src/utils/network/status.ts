import type { NetworkStatus, ConnectionType } from './types';

class NetworkStatusManager {
  private static instance: NetworkStatusManager;
  private status: NetworkStatus;
  private listeners: Set<(status: NetworkStatus) => void>;

  private constructor() {
    this.listeners = new Set();
    this.status = this.getCurrentStatus();
    this.setupListeners();
  }

  static getInstance(): NetworkStatusManager {
    if (!NetworkStatusManager.instance) {
      NetworkStatusManager.instance = new NetworkStatusManager();
    }
    return NetworkStatusManager.instance;
  }

  private getCurrentStatus(): NetworkStatus {
    const connection = (navigator as any).connection;
    const effectiveType = connection?.effectiveType || 'unknown';
    
    return {
      isOnline: navigator.onLine,
      connectionType: effectiveType as ConnectionType,
      isSaveDataEnabled: !!connection?.saveData,
      isSlowConnection: ['slow-2g', '2g'].includes(effectiveType)
    };
  }

  private setupListeners(): void {
    // Online/offline status
    window.addEventListener('online', () => this.updateStatus());
    window.addEventListener('offline', () => this.updateStatus());

    // Connection changes
    if ('connection' in navigator) {
      (navigator as any).connection.addEventListener('change', 
        () => this.updateStatus()
      );
    }
  }

  private updateStatus(): void {
    this.status = this.getCurrentStatus();
    this.notifyListeners();
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener(this.status));
  }

  public getStatus(): NetworkStatus {
    return { ...this.status };
  }

  public addListener(listener: (status: NetworkStatus) => void): void {
    this.listeners.add(listener);
  }

  public removeListener(listener: (status: NetworkStatus) => void): void {
    this.listeners.delete(listener);
  }
}

export const networkStatus = NetworkStatusManager.getInstance();
