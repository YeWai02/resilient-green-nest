
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, Scan, CheckCircle, XCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { validateQRScan, canEarnPoints } from "@/utils/qrCodeUtils";

interface TrashStepScannerProps {
  userId: string;
  onPointsEarned: (points: number, streak: number) => void;
  lastScanTime: number | null;
  currentStreak: number;
}

const TrashStepScanner: React.FC<TrashStepScannerProps> = ({
  userId,
  onPointsEarned,
  lastScanTime,
  currentStreak
}) => {
  const [scanInput, setScanInput] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [trashCaptured, setTrashCaptured] = useState(false);
  const { toast } = useToast();

  const simulateTrashCapture = () => {
    // Simulate TrashStep mechanism activation
    setTrashCaptured(true);
    toast({
      title: "TrashStep Activated!",
      description: "Trash has been lifted from drainage. Now scan your QR code.",
    });
  };

  const processQRScan = () => {
    if (!trashCaptured) {
      toast({
        title: "No Trash Captured",
        description: "Please step on the TrashStep pedal first to capture trash.",
        variant: "destructive",
      });
      return;
    }

    if (!canEarnPoints(lastScanTime, Date.now())) {
      toast({
        title: "Cooldown Active",
        description: "Please wait 30 minutes between trash captures to earn points.",
        variant: "destructive",
      });
      return;
    }

    if (!validateQRScan(scanInput, userId)) {
      toast({
        title: "Invalid QR Code",
        description: "This QR code doesn't belong to your account.",
        variant: "destructive",
      });
      return;
    }

    // Calculate points and streak bonus
    let pointsEarned = 5; // Base points
    const newStreak = currentStreak + 1;
    
    // Streak bonus every 5 captures
    if (newStreak % 5 === 0) {
      pointsEarned += 10;
      toast({
        title: "🔥 Streak Bonus!",
        description: `${newStreak} day streak! Earned bonus +10 points!`,
      });
    }

    onPointsEarned(pointsEarned, newStreak);
    
    toast({
      title: "✅ Trash Captured!",
      description: `You've earned +${pointsEarned} Green Points!`,
    });

    // Reset state
    setScanInput('');
    setTrashCaptured(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-green-700">
          <Scan className="h-5 w-5 mr-2" />
          TrashStep Scanner
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Step 1: Trash Capture */}
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <span className="font-medium">Step 1: Capture Trash</span>
            {trashCaptured ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : (
              <XCircle className="h-5 w-5 text-gray-400" />
            )}
          </div>
          <Button
            onClick={simulateTrashCapture}
            disabled={trashCaptured}
            className={`w-full ${
              trashCaptured 
                ? 'bg-green-500 hover:bg-green-600' 
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white`}
          >
            {trashCaptured ? 'Trash Captured!' : 'Step on TrashStep Pedal'}
          </Button>
        </div>

        {/* Step 2: QR Scan */}
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <span className="font-medium">Step 2: Scan Your QR Code</span>
            <Camera className="h-5 w-5 text-gray-600" />
          </div>
          <div className="space-y-3">
            <Input
              placeholder="Enter your QR code data or use camera"
              value={scanInput}
              onChange={(e) => setScanInput(e.target.value)}
              disabled={!trashCaptured}
            />
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1"
                disabled={!trashCaptured}
                onClick={() => setIsScanning(!isScanning)}
              >
                <Camera className="h-4 w-4 mr-2" />
                Open Camera
              </Button>
              <Button
                onClick={processQRScan}
                disabled={!trashCaptured || !scanInput}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white"
              >
                Scan & Earn Points
              </Button>
            </div>
          </div>
        </div>

        {/* Current Streak Display */}
        <div className="text-center p-3 bg-amber-50 rounded-lg">
          <div className="text-2xl font-bold text-amber-600">🔥 {currentStreak}</div>
          <div className="text-sm text-amber-700">Current Streak</div>
          <div className="text-xs text-amber-600 mt-1">
            {5 - (currentStreak % 5)} more for bonus!
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrashStepScanner;
