import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'my' | 'zh';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.how.it.works': 'How It Works',
    'nav.hyflo': 'HYFLO Protection',
    'nav.green.points': 'Green Points',
    'nav.insurance': 'Insurance',
    'nav.community': 'Community',
    'nav.donate': 'Donate/Swap',
    'nav.partners': 'Partners',
    'nav.get.involved': 'Get Involved',
    'nav.dashboard': 'Dashboard',
    'nav.trashstep': 'TrashStep',
    'nav.knowledge': 'Knowledge',
    'nav.rewards': 'Rewards',
    'nav.logout': 'Logout',

    // Hero Section
    'hero.turning.tide': 'Turning the Tide on Climate Risk',
    'hero.people.first': 'People-first insurance. Instant flood protection. Rewards for action.',
    'hero.get.insured': 'Get Insured',
    'hero.earn.points': 'Earn Green Points',
    'hero.watch.hyflo': 'Watch HYFLO in Action',
    'hero.family.protection': 'Protecting Families & Communities',
    'hero.title': 'Resilient ASEAN',
    'hero.subtitle': 'Empowering Southeast Asian communities to adapt to climate change through smart insurance, eco-actions, and collective impact',

    // Home Page
    'home.closing.belief.gap': 'Closing the Belief Gap with Action',
    'home.tools.reward.action': 'We close the belief gap with tools that reward action and protect lives.',
    'home.insurance': 'Insurance',
    'home.insurance.desc': 'Affordable, climate-smart protection for your family and property.',
    'home.incentives': 'Incentives',
    'home.incentives.desc': 'Earn Green Points for eco-actions and community participation.',
    'home.education': 'Education',
    'home.education.desc': 'Learn to prepare, protect, and thrive in a changing climate.',
    'home.real.impact': 'Making Real Impact Across ASEAN',
    'home.people.protected': 'People at Risk',
    'home.flood.protection': 'Flood Protection',
    'home.feel.control': 'Feel More in Control',
    'home.eco.aware': 'More Eco-Aware',
    'home.quote': 'Now I see how even my home can be part of saving the Earth.',
    'home.quote.author': 'ECOVO Youth Participant',
    'home.ready.to.start': 'Ready to Start Your Climate Journey?',
    'home.join.movement': 'Join thousands taking action for a sustainable future in Southeast Asia.',
    'home.get.started': 'Get Started Today',
    'home.learn.more': 'Learn More',

    // How It Works
    'how.it.works.title': 'How ECOVO Works',
    'how.it.works.subtitle': 'Transforming uncertainty into action with tools that reward resilience.',
    'how.problem.title': 'The Challenge We Face',
    'how.problem.description': '200 million people in ASEAN cities face climate threats. Most feel powerless. We\'re changing that.',
    'how.problem.point1': 'Increasing flood and climate risks',
    'how.problem.point2': 'Limited access to affordable protection',
    'how.problem.point3': 'Gap between awareness and action',
    'how.solution.title': 'The ECOVO Solution',
    'how.solution.description': 'We turn uncertainty into action with a system that rewards resilience.',
    'how.pillar.insurance': 'Smart Insurance',
    'how.pillar.insurance.desc': 'Climate-smart, affordable protection that adapts to your needs.',
    'how.pillar.incentives': 'Green Incentives',
    'how.pillar.incentives.desc': 'Earn points for eco-actions, redeem for practical rewards.',
    'how.pillar.education': 'Climate Education',
    'how.pillar.education.desc': 'Learn disaster preparedness and sustainable living practices.',
    'how.works.together': 'How It All Works Together',
    'how.step1.title': 'Sign Up',
    'how.step1.desc': 'Choose your insurance plan and join the community.',
    'how.step2.title': 'Take Action',
    'how.step2.desc': 'Participate in eco-activities and earn Green Points.',
    'how.step3.title': 'Get Rewarded',
    'how.step3.desc': 'Redeem points for useful items and premium discounts.',
    'how.step4.title': 'Stay Protected',
    'how.step4.desc': 'Benefit from HYFLO protection and community support.',
    'how.ready.to.join': 'Ready to Join the Movement?',
    'how.start.journey': 'Start your journey towards climate resilience today.',
    'how.get.started': 'Get Started',
    'how.explore.insurance': 'Explore Insurance',

    // HYFLO
    'hyflo.title': 'HYFLO Flood Protection',
    'hyflo.subtitle': 'Zero-Notice Flood Protection in 8 Seconds',
    'hyflo.watch.demo': 'Watch Demo',
    'hyflo.demo.video': 'HYFLO Deployment Demo',
    'hyflo.zero.notice': 'Revolutionary Flood Protection',
    'hyflo.zero.notice.desc': 'Self-closing, underground barrier tested in 2,000+ floods with zero failures.',
    'hyflo.feature.8sec': '8 Second Deployment',
    'hyflo.feature.8sec.desc': 'Fastest flood protection activation in the world.',
    'hyflo.feature.underground': 'Underground Storage',
    'hyflo.feature.underground.desc': 'Hidden infrastructure that doesn\'t impact daily life.',
    'hyflo.feature.tested': '2,000+ Tests',
    'hyflo.feature.tested.desc': 'Proven reliability in real flood conditions.',
    'hyflo.feature.urban': 'Urban Optimized',
    'hyflo.feature.urban.desc': 'Perfect for dense city environments.',
    'hyflo.pilot.cities': 'Pilot Cities & Results',
    'hyflo.pilot.cities.desc': 'See how HYFLO is protecting communities across ASEAN.',
    'hyflo.pilot.fewer.claims': 'Fewer flood claims',
    'hyflo.pilot.faster.response': 'Faster emergency response',
    'hyflo.pilot.community.satisfaction': 'Community satisfaction',
    'hyflo.pilot.reduced.damage': 'Reduced flood damage',
    'hyflo.request.area': 'Request HYFLO in My Area',
    'hyflo.technical.specs': 'Technical Specifications',
    'hyflo.spec.deployment': 'Automatic Deployment',
    'hyflo.spec.deployment.desc': 'Sensors trigger barrier activation within 8 seconds.',
    'hyflo.spec.height': 'Barrier Height',
    'hyflo.spec.height.desc': 'Adjustable height up to 1.5 meters for various flood levels.',
    'hyflo.spec.maintenance': 'Low Maintenance',
    'hyflo.spec.maintenance.desc': 'Annual inspection ensures optimal performance.',
    'hyflo.protect.community': 'Protect Your Community',
    'hyflo.protect.community.desc': 'Request HYFLO installation for your neighborhood today.',
    'hyflo.request.hyflo': 'Request HYFLO Now',

    // Dashboard
    'dashboard.impact': 'Your Impact',
    'dashboard.trash.items': 'Trash Items',
    'dashboard.co2.avoided': 'CO₂ Avoided',
    'dashboard.trees.planted': 'Trees Planted',
    'dashboard.day.streak': 'Day Streak',
    'dashboard.mission': 'Weekly Mission',
    'dashboard.mission.capture': 'Capture 10 trash items',
    'dashboard.mission.continue': 'Continue Mission',
    'dashboard.milestones': 'Milestones',
    'dashboard.current.streak': 'Current Streak',
    'dashboard.next.milestone': 'Next milestone: 30 days',
    'dashboard.trash.captured': 'Trash Captured',
    'dashboard.bronze.badge': 'Next: Bronze Badge',

    // Points and Rewards
    'points.green': 'Green Points',
    'streak.day': 'day streak',
    'rewards.solar': 'Solar Panel Kit',
    'rewards.solar.impact': 'Reduce home energy costs by 30%',
    'rewards.bag': 'Eco Shopping Bag',
    'rewards.bag.impact': 'Replace 100+ plastic bags',
    'rewards.insulation': 'Home Insulation Kit',
    'rewards.insulation.impact': 'Improve energy efficiency',
    'rewards.energy': 'Energy',
    'rewards.lifestyle': 'Lifestyle',
    'rewards.home': 'Home',
    'rewards.redeem': 'Redeem Now',
    'rewards.need.more': 'Need More Points',

    // Insurance
    'insurance.premium.title': 'Premium Plan',
    'insurance.premium.desc': 'Comprehensive Protection',
    'insurance.premium.detail': 'For high-value properties and businesses',
    'insurance.premium.feature1': 'Up to $100,000 coverage',
    'insurance.premium.feature2': 'Priority HYFLO installation',
    'insurance.premium.feature3': '24/7 emergency support',
    'insurance.middle.title': 'Middle Class Plan',
    'insurance.middle.desc': 'Balanced Coverage',
    'insurance.middle.detail': 'Perfect for families and small businesses',
    'insurance.middle.feature1': 'Up to $50,000 coverage',
    'insurance.middle.feature2': 'Standard HYFLO access',
    'insurance.middle.feature3': 'Community support network',
    'insurance.farmers.title': 'Farmers Plan',
    'insurance.farmers.desc': 'Agricultural Protection',
    'insurance.farmers.detail': 'Specialized for farming communities',
    'insurance.farmers.feature1': 'Crop and livestock coverage',
    'insurance.farmers.feature2': 'Weather-based payouts',
    'insurance.farmers.feature3': 'Farming equipment protection',
    'insurance.choose': 'Choose',

    // Community
    'community.events': 'Community Events',
    'community.joined': 'joined',
    'community.join': 'Join Event',
    'community.leaderboard': 'Community Leaderboard',
    'community.pts': 'pts',
    'community.items': 'items',

    // TrashStep
    'trashstep.qr.title': 'Your QR Code',
    'trashstep.qr.desc': 'Show this code to earn points when disposing trash',
    'trashstep.qr.copy': 'Copy Code',
    'trashstep.scanner': 'TrashStep Scanner',
    'trashstep.step1': 'Step 1: Capture Trash',
    'trashstep.step2': 'Step 2: Scan QR Code',
    'trashstep.captured': 'Trash Captured!',
    'trashstep.pedal': 'Pedal TrashStep',
    'trashstep.placeholder': 'Enter QR code or scan',
    'trashstep.camera': 'Use Camera',
    'trashstep.scan': 'Scan & Earn',
    'trashstep.streak': 'Current Streak',
    'trashstep.bonus': 'more for bonus',

    // Statistics
    'stats.active': 'Active This Week',
    'stats.trash': 'Trash Captured',
    'stats.protected': 'People Protected',

    // Toast Messages
    'toast.qr.copied': 'QR Code Copied',
    'toast.qr.desc': 'Your QR code has been copied to clipboard',
    'toast.trashstep.activated': 'TrashStep Activated!',
    'toast.trashstep.desc': 'Mechanism deployed, ready for QR scan',
    'toast.no.trash': 'No Trash Captured',
    'toast.no.trash.desc': 'Please activate TrashStep first',
    'toast.cooldown': 'Cooldown Active',
    'toast.cooldown.desc': 'Wait 30 minutes between scans',
    'toast.invalid.qr': 'Invalid QR Code',
    'toast.invalid.qr.desc': 'This QR code is not valid for your account',
    'toast.streak.bonus': 'Streak Bonus!',
    'toast.streak.desc': 'day streak achieved!',
    'toast.trash.success': 'Trash Captured Successfully!',
    'toast.points.earned': 'You earned {points} Green Points!',
  },
  my: {
    // Navigation (Burmese)
    'nav.home': 'ပင်မစာမျက်နှာ',
    'nav.how.it.works': 'ဘယ်လိုအလုပ်လုပ်လဲ',
    'nav.hyflo': 'HYFLO ကာကွယ်မှု',
    'nav.green.points': 'အစိမ်းရောင်ရမှတ်',
    'nav.insurance': 'အာမခံ',
    'nav.community': 'လူမှုအသိုင်းအဝိုင်း',
    'nav.donate': 'လှူဒါန်း/လဲလှယ်',
    'nav.partners': 'လုပ်ဖော်ကိုင်ဖက်များ',
    'nav.get.involved': 'ပါဝင်လိုက်ပါ',
    'nav.dashboard': 'ဒက်ရှ်ဘုတ်',
    'nav.trashstep': 'TrashStep',
    'nav.knowledge': 'အသိပညာ',
    'nav.rewards': 'ဆုလာဘ်များ',
    'nav.logout': 'ထွက်ရန်',

    // Hero Section (Burmese)
    'hero.turning.tide': 'ရာသီဥတုအန္တရာယ်ကို ရင်ဆိုင်ခြင်း',
    'hero.people.first': 'လူသားဗဟိုပြုအာမခံ။ ချက်ချင်းရေလွှမ်းမိုးမှုကာကွယ်မှု။ လုပ်ဆောင်မှုအတွက်ဆုလာဘ်။',
    'hero.get.insured': 'အာမခံရယူပါ',
    'hero.earn.points': 'အစိမ်းရောင်ရမှတ်ရယူပါ',
    'hero.watch.hyflo': 'HYFLO လုပ်ဆောင်ပုံကြည့်ပါ',
    'hero.title': 'ခံနိုင်ရည်ရှိသော အာဆီယံ',
    'hero.subtitle': 'အရှေ့တောင်အာရှအသိုင်းအဝိုင်းများကို ရာသီဥတုပြောင်းလဲမှုနှင့် လိုက်လျောညီထွေဖြစ်အောင် စမတ်အာမခံ၊ သဘာဝပတ်ဝန်းကျင်လုပ်ဆောင်မှုများနှင့် စုပေါင်းအကျိုးသက်ရောက်မှုများဖြင့် စွမ်းဆောင်ရည်မြှင့်တင်ခြင်း',

    // Points and Rewards (Burmese)
    'points.green': 'အစိမ်းရောင်ရမှတ်',
    'streak.day': 'ရက်ဆက်တိုက်',
    'rewards.redeem': 'ယခုပဲလဲလှယ်ပါ',
    'rewards.need.more': 'ရမှတ်ပိုလိုအပ်သည်',

    // Insurance (Burmese)
    'insurance.choose': 'ရွေးချယ်ပါ',

    // Community (Burmese)
    'community.events': 'အသိုင်းအဝိုင်းအစီအစဉ်များ',
    'community.joined': 'ပါဝင်ခဲ့သည်',
    'community.join': 'အစီအစဉ်တွင်ပါဝင်ပါ',
    'community.leaderboard': 'အသိုင်းအဝိုင်းအဆင့်စာရင်း',
    'community.pts': 'ရမှတ်',
    'community.items': 'ပစ္စည်းများ',

    // Statistics (Burmese)
    'stats.active': 'ဤအပတ်တွင်တက်ကြွ',
    'stats.trash': 'အမှိုက်ဖမ်းယူမှု',
    'stats.protected': 'ကာကွယ်ခံရသူများ',
  },
  zh: {
    // Navigation (Chinese)
    'nav.home': '首页',
    'nav.how.it.works': '工作原理',
    'nav.hyflo': 'HYFLO 防护',
    'nav.green.points': '绿色积分',
    'nav.insurance': '保险',
    'nav.community': '社区',
    'nav.donate': '捐赠/交换',
    'nav.partners': '合作伙伴',
    'nav.get.involved': '参与其中',
    'nav.dashboard': '仪表板',
    'nav.trashstep': 'TrashStep',
    'nav.knowledge': '知识',
    'nav.rewards': '奖励',
    'nav.logout': '登出',

    // Hero Section (Chinese)
    'hero.turning.tide': '扭转气候风险的潮流',
    'hero.people.first': '以人为本的保险。即时洪水保护。行动奖励。',
    'hero.get.insured': '获得保险',
    'hero.earn.points': '赚取绿色积分',
    'hero.watch.hyflo': '观看HYFLO实际运作',
    'hero.title': '韧性东盟',
    'hero.subtitle': '通过智能保险、生态行动和集体影响，赋能东南亚社区适应气候变化',

    // Points and Rewards (Chinese)
    'points.green': '绿色积分',
    'streak.day': '天连续',
    'rewards.redeem': '立即兑换',
    'rewards.need.more': '需要更多积分',

    // Insurance (Chinese)
    'insurance.choose': '选择',

    // Community (Chinese)
    'community.events': '社区活动',
    'community.joined': '已参加',
    'community.join': '参加活动',
    'community.leaderboard': '社区排行榜',
    'community.pts': '分',
    'community.items': '项目',

    // Statistics (Chinese)
    'stats.active': '本周活跃',
    'stats.trash': '垃圾收集',
    'stats.protected': '受保护人数',
  }
};

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
