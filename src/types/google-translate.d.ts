
declare global {
  interface Window {
    google?: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            autoDisplay: boolean;
            includedLanguages: string;
            layout: number;
          },
          elementId: string
        ) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

export {};
