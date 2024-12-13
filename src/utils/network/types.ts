export type ConnectionType = 'slow-2g' | '2g' | '3g' | '4g' | 'unknown';

export interface ConnectionInfo {
  effectiveType: ConnectionType;
  saveData: boolean;
  downlink: number;
  rtt: number;
}

export interface NetworkStatus {
  isOnline: boolean;
  connectionType: ConnectionType;
  isSaveDataEnabled: boolean;
  isSlowConnection: boolean;
}
