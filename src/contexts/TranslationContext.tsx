
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'my' | 'zh';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'hero.title': 'Resilient ASEAN',
    'hero.subtitle': 'Empowering Southeast Asian communities to adapt to climate change through smart insurance, eco-actions, and collective impact.',
    'hero.join': 'Join the Movement',
    'hero.explore': 'Explore Insurance',
    'nav.dashboard': 'Dashboard',
    'nav.trashstep': 'TrashStep',
    'nav.insurance': 'Insurance',
    'nav.community': 'Community',
    'nav.rewards': 'Rewards',
    'nav.knowledge': 'Knowledge',
    'points.green': 'Green Points',
    'streak.day': 'day streak',
    'insurance.premium.title': 'Premium',
    'insurance.middle.title': 'Middle Class',
    'insurance.farmers.title': 'Farmers',
    'disaster.title': 'Disaster Knowledge Center',
    'disaster.subtitle': 'Learn how to prevent, protect, and survive natural disasters'
  },
  my: {
    'hero.title': 'ခံနိုင်ရည်ရှိသော အာဆီယံ',
    'hero.subtitle': 'စမတ်အာမခံ၊ သဘာဝပတ်ဝန်းကျင်လုပ်ဆောင်ချက်များနှင့် စုပေါင်းအကျိုးသက်ရောက်မှုများမှတဆင့် ရာသီဥတုပြောင်းလဲမှုနှင့် လိုက်လျောညီထွေဖြစ်အောင် အရှေ့တောင်အာရှအသိုင်းအဝိုင်းများကို စွမ်းဆောင်နိုင်အောင် လုပ်ဆောင်ပေးခြင်း။',
    'hero.join': 'လှုပ်ရှားမှုတွင် ပါဝင်ပါ',
    'hero.explore': 'အာမခံကို ရှာဖွေကြည့်ပါ',
    'nav.dashboard': 'ဒက်ရှ်ဘုတ်',
    'nav.trashstep': 'TrashStep',
    'nav.insurance': 'အာမခံ',
    'nav.community': 'အသိုင်းအဝိုင်း',
    'nav.rewards': 'ဆုလာဘ်များ',
    'nav.knowledge': 'အသိပညာ',
    'points.green': 'စိမ်းလန်းသော အမှတ်များ',
    'streak.day': 'ရက် ဆက်တိုက်',
    'insurance.premium.title': 'ပရီမီယံ',
    'insurance.middle.title': 'အလယ်တန်းစား',
    'insurance.farmers.title': 'လယ်သမားများ',
    'disaster.title': 'သဘာဝဘေးဆိုင်ရာ အသိပညာစင်တာ',
    'disaster.subtitle': 'သဘာဝဘေးများကို ကာကွယ်ခြင်း၊ ကာကွယ်ခြင်းနှင့် အသက်ရှင်ကျန်ရစ်ခြင်းအကြောင်း လေ့လာပါ'
  },
  zh: {
    'hero.title': '韧性东盟',
    'hero.subtitle': '通过智能保险、环保行动和集体影响，赋能东南亚社区适应气候变化。',
    'hero.join': '加入运动',
    'hero.explore': '探索保险',
    'nav.dashboard': '仪表板',
    'nav.trashstep': 'TrashStep',
    'nav.insurance': '保险',
    'nav.community': '社区',
    'nav.rewards': '奖励',
    'nav.knowledge': '知识',
    'points.green': '绿色积分',
    'streak.day': '天连续',
    'insurance.premium.title': '高端',
    'insurance.middle.title': '中产阶级',
    'insurance.farmers.title': '农民',
    'disaster.title': '灾害知识中心',
    'disaster.subtitle': '学习如何预防、保护和在自然灾害中生存'
  }
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};
