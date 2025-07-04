
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/contexts/TranslationContext";
import { useToast } from "@/hooks/use-toast";

interface QRCodeDisplayProps {
  userId: string;
  qrData: string;
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({ userId, qrData }) => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const copyQRData = () => {
    navigator.clipboard.writeText(qrData);
    toast({
      title: t('toast.qr.copied'),
      description: t('toast.qr.desc'),
    });
  };

  return (
    <Card className="border-green-200">
      <CardHeader>
        <CardTitle className="flex items-center text-green-700">
          <QrCode className="h-5 w-5 mr-2" />
          {t('trashstep.qr.title')}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="w-48 h-48 bg-white border-2 border-green-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
          <div className="grid grid-cols-8 gap-1">
            {Array.from({ length: 64 }, (_, i) => (
              <div
                key={i}
                className={`w-2 h-2 ${
                  Math.random() > 0.5 ? 'bg-green-600' : 'bg-white'
                }`}
              />
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          {t('trashstep.qr.desc')}
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={copyQRData}
          className="border-green-200 text-green-700 hover:bg-green-50"
        >
          <Copy className="h-4 w-4 mr-2" />
          {t('trashstep.qr.copy')}
        </Button>
      </CardContent>
    </Card>
  );
};

export default QRCodeDisplay;
