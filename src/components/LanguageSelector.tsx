
import React from 'react';
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useTranslation();

  const languages = [
    { code: 'en', name: '🇺🇸 English', flag: '🇺🇸' },
    { code: 'my', name: '🇲🇲 မြန်မာ', flag: '🇲🇲' },
    { code: 'zh', name: '🇨🇳 中文', flag: '🇨🇳' }
  ];

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-gray-600" />
      <div className="flex space-x-1">
        {languages.map((lang) => (
          <Button
            key={lang.code}
            variant={language === lang.code ? "default" : "outline"}
            size="sm"
            className={`text-xs ${
              language === lang.code 
                ? "bg-green-500 hover:bg-green-600 text-white" 
                : "border-gray-200 text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => setLanguage(lang.code as any)}
          >
            {lang.flag}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
