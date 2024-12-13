// Network connection utilities
export function getConnectionType(): string {
  if (!('connection' in navigator)) return 'unknown';
  return (navigator as any).connection?.effectiveType || 'unknown';
}

export function isSaveDataEnabled(): boolean {
  return !!(navigator as any).connection?.saveData;
}

export function isSlowConnection(): boolean {
  const type = getConnectionType();
  return type === 'slow-2g' || type === '2g';
}

export function canPrefetch(): boolean {
  if (isSaveDataEnabled()) return false;
  if (isSlowConnection()) return false;
  return true;
}
