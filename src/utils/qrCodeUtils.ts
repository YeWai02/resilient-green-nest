
export const generateUserQRCode = (userId: string): string => {
  // Generate a unique QR code data string for the user
  return `RESILIENT_ASEAN_USER_${userId}_${Date.now()}`;
};

export const validateQRScan = (qrData: string, userId: string): boolean => {
  // Validate that the QR code belongs to the user
  return qrData.includes(`RESILIENT_ASEAN_USER_${userId}`);
};

export const canEarnPoints = (lastScanTime: number | null, currentTime: number): boolean => {
  // Prevent multiple scans within 30 minutes
  const COOLDOWN_PERIOD = 30 * 60 * 1000; // 30 minutes in milliseconds
  
  if (!lastScanTime) return true;
  return (currentTime - lastScanTime) > COOLDOWN_PERIOD;
};
