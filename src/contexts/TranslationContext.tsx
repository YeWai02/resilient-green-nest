
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'my' | 'zh';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero section
    'hero.title': 'Resilient ASEAN',
    'hero.subtitle': 'Empowering Southeast Asian communities to adapt to climate change through smart insurance, eco-actions, and collective impact.',
    'hero.join': 'Join the Movement',
    'hero.explore': 'Explore Insurance',
    
    // Navigation
    'nav.dashboard': 'Dashboard',
    'nav.trashstep': 'TrashStep',
    'nav.insurance': 'Insurance',
    'nav.community': 'Community',
    'nav.rewards': 'Rewards',
    'nav.knowledge': 'Knowledge',
    'nav.logout': 'Logout',
    
    // User stats
    'points.green': 'Green Points',
    'streak.day': 'day streak',
    'stats.active': 'Active this week',
    'stats.trash': 'Trash captured',
    'stats.protected': 'Protected residents',
    
    // Insurance plans
    'insurance.premium.title': 'Premium',
    'insurance.middle.title': 'Middle Class',
    'insurance.farmers.title': 'Farmers',
    'insurance.premium.desc': 'Comprehensive coverage',
    'insurance.middle.desc': 'Affordable coverage',
    'insurance.farmers.desc': 'Flexible plans',
    'insurance.premium.detail': 'for high-value properties in high-risk areas.',
    'insurance.middle.detail': 'for moderate-risk homeowners.',
    'insurance.farmers.detail': 'with bundling options and additional support offers',
    'insurance.premium.feature1': 'Ideal for high-risk zones and high-value properties',
    'insurance.premium.feature2': 'Comprehensive protection coverage',
    'insurance.premium.feature3': 'Premium support and fast claims',
    'insurance.middle.feature1': 'Best for moderate to low-risk areas',
    'insurance.middle.feature2': 'Budget-conscious homeowners',
    'insurance.middle.feature3': 'Balanced coverage and cost',
    'insurance.farmers.feature1': 'Bundling discounts available',
    'insurance.farmers.feature2': 'Additional flood mitigation services',
    'insurance.farmers.feature3': 'Agricultural protection coverage',
    'insurance.choose': 'Choose',
    
    // Dashboard
    'dashboard.impact': 'Your Environmental Impact',
    'dashboard.trash.items': 'Trash Items',
    'dashboard.co2.avoided': 'CO₂ Avoided',
    'dashboard.trees.planted': 'Trees Planted',
    'dashboard.day.streak': 'Day Streak',
    'dashboard.mission': 'Weekly Mission',
    'dashboard.mission.capture': 'Capture 10 trash items',
    'dashboard.mission.continue': 'Continue Mission',
    'dashboard.milestones': 'Your Milestones',
    'dashboard.current.streak': 'Current Streak',
    'dashboard.next.milestone': 'Next milestone: 30 days',
    'dashboard.trash.captured': 'Trash Captured',
    'dashboard.bronze.badge': '22 more for Bronze Eco Badge',
    
    // TrashStep
    'trashstep.scanner': 'TrashStep Scanner',
    'trashstep.qr.title': 'Your Personal QR Code',
    'trashstep.qr.desc': 'Scan this code at TrashStep stations after capturing trash',
    'trashstep.qr.copy': 'Copy QR Data',
    'trashstep.step1': 'Step 1: Capture Trash',
    'trashstep.step2': 'Step 2: Scan Your QR Code',
    'trashstep.pedal': 'Step on TrashStep Pedal',
    'trashstep.captured': 'Trash Captured!',
    'trashstep.camera': 'Open Camera',
    'trashstep.scan': 'Scan & Earn Points',
    'trashstep.streak': 'Current Streak',
    'trashstep.bonus': 'more for bonus!',
    'trashstep.placeholder': 'Enter your QR code data or use camera',
    
    // Community
    'community.events': 'Nature Nest Events',
    'community.leaderboard': 'ASEAN Leaderboard',
    'community.join': 'Join Event',
    'community.joined': 'joined',
    'community.points': 'Green Points',
    'community.items': 'items',
    'community.pts': 'pts',
    
    // Rewards
    'rewards.solar': 'Solar Panel Kit',
    'rewards.bag': 'Recycled Tote Bag',
    'rewards.insulation': 'Home Insulation Kit',
    'rewards.solar.impact': 'Reduce 2 tons CO₂/year',
    'rewards.bag.impact': 'Made from 10 bottles',
    'rewards.insulation.impact': 'Save 30% on cooling',
    'rewards.energy': 'Energy',
    'rewards.lifestyle': 'Lifestyle',
    'rewards.home': 'Home',
    'rewards.redeem': 'Redeem',
    'rewards.need.more': 'Need more points',
    
    // Disaster Knowledge
    'disaster.title': 'Disaster Knowledge Center',
    'disaster.subtitle': 'Learn how to prevent, protect, and survive natural disasters',
    'disaster.prevention': 'Prevention',
    'disaster.protection': 'Protection',
    'disaster.survival': 'Survival',
    'disaster.emergency': 'Emergency Contacts',
    'disaster.fire': 'Fire Department',
    'disaster.police': 'Police',
    'disaster.medical': 'Emergency Medical',
    'disaster.flood': 'Flood Management',
    'disaster.typhoon': 'Typhoon Preparedness',
    'disaster.wildfire': 'Wildfire Safety',
    
    // Login
    'login.welcome': 'Welcome Back',
    'login.email': 'Email',
    'login.password': 'Password',
    'login.email.placeholder': 'Enter your email',
    'login.password.placeholder': 'Enter your password',
    'login.button': 'Log In',
    'login.logging': 'Logging in...',
    'login.demo': 'Demo: Use any email and password to login',
    'login.success.title': 'Welcome back!',
    'login.success.desc': "You've successfully logged in to Resilient ASEAN.",
    'login.error.title': 'Login failed',
    'login.error.desc': 'Please check your credentials and try again.',
    
    // Toast messages
    'toast.qr.copied': 'QR Code Copied',
    'toast.qr.desc': 'Your personal QR code has been copied to clipboard.',
    'toast.trashstep.activated': 'TrashStep Activated!',
    'toast.trashstep.desc': 'Trash has been lifted from drainage. Now scan your QR code.',
    'toast.no.trash': 'No Trash Captured',
    'toast.no.trash.desc': 'Please step on the TrashStep pedal first to capture trash.',
    'toast.cooldown': 'Cooldown Active',
    'toast.cooldown.desc': 'Please wait 30 minutes between trash captures to earn points.',
    'toast.invalid.qr': 'Invalid QR Code',
    'toast.invalid.qr.desc': "This QR code doesn't belong to your account.",
    'toast.streak.bonus': '🔥 Streak Bonus!',
    'toast.streak.desc': 'day streak! Earned bonus +10 points!',
    'toast.trash.success': '✅ Trash Captured!',
    'toast.points.earned': "You've earned +{points} Green Points!"
  },
  my: {
    // Hero section
    'hero.title': 'ခံနိုင်ရည်ရှိသော အာဆီယံ',
    'hero.subtitle': 'စမတ်အာမခံ၊ သဘာဝပတ်ဝန်းကျင်လုပ်ဆောင်ချက်များနှင့် စုပေါင်းအကျိုးသက်ရောက်မှုများမှတဆင့် ရာသီဥတုပြောင်းလဲမှုနှင့် လိုက်လျောညီထွေဖြစ်အောင် အရှေ့တောင်အာရှအသိုင်းအဝိုင်းများကို စွမ်းဆောင်နိုင်အောင် လုပ်ဆောင်ပေးခြင်း။',
    'hero.join': 'လှုပ်ရှားမှုတွင် ပါဝင်ပါ',
    'hero.explore': 'အာမခံကို ရှာဖွေကြည့်ပါ',
    
    // Navigation
    'nav.dashboard': 'ဒက်ရှ်ဘုတ်',
    'nav.trashstep': 'TrashStep',
    'nav.insurance': 'အာမခံ',
    'nav.community': 'အသိုင်းအဝိုင်း',
    'nav.rewards': 'ဆုလာဘ်များ',
    'nav.knowledge': 'အသိပညာ',
    'nav.logout': 'ထွက်ရန်',
    
    // User stats
    'points.green': 'စိမ်းလန်းသော အမှတ်များ',
    'streak.day': 'ရက် ဆက်တိုက်',
    'stats.active': 'ဤအပတ်တွင် တက်ကြွသူများ',
    'stats.trash': 'အမှိုက်စုဆောင်းမှု',
    'stats.protected': 'ကာကွယ်ထားသော နေထိုင်သူများ',
    
    // Insurance plans
    'insurance.premium.title': 'ပရီမီယံ',
    'insurance.middle.title': 'အလယ်တန်းစား',
    'insurance.farmers.title': 'လယ်သမားများ',
    'insurance.premium.desc': 'ပြည့်စုံသော အကာအကွယ်',
    'insurance.middle.desc': 'တတ်နိုင်သော အကာအကွယ်',
    'insurance.farmers.desc': 'ပြောင်းလွယ်သော အစီအစဉ်များ',
    'insurance.premium.detail': 'စွန့်စားရန်များသော နေရာများတွင် တန်ဖိုးကြီးသော အိမ်များအတွက်။',
    'insurance.middle.detail': 'အလယ်အလတ်စွန့်စားရန်ရှိသော အိမ်ပိုင်ရှင်များအတွက်။',
    'insurance.farmers.detail': 'ပေါင်းစပ်ရွေးချယ်မှုများနှင့် အပိုထောက်ပံ့မှုများနှင့်',
    'insurance.premium.feature1': 'စွန့်စားရန်များသော နေရာများနှင့် တန်ဖိုးကြီးသော အိမ်များအတွက် အကောင်းဆုံး',
    'insurance.premium.feature2': 'ပြည့်စုံသော ကာကွယ်မှု အကွယ်အကာ',
    'insurance.premium.feature3': 'အရည်အသွေးမြင့် ထောက်ပံ့မှုနှင့် မြန်ဆန်သော တောင်းခံမှုများ',
    'insurance.middle.feature1': 'အလယ်အလတ်မှ နည်းသော စွန့်စားရန်ရှိသော နေရာများအတွက် အကောင်းဆုံး',
    'insurance.middle.feature2': 'ဘတ်ဂျက်ကို ဂရုစိုက်သော အိမ်ပိုင်ရှင်များ',
    'insurance.middle.feature3': 'ဟန်ချက်ညီသော အကွယ်အကာနှင့် ကုန်ကျစရိတ်',
    'insurance.farmers.feature1': 'ပေါင်းစပ်လျှော့စျေး ရရှိနိုင်သည်',
    'insurance.farmers.feature2': 'အပိုရေလွှမ်းမိုးမှု လျှော့ချရေး ဝန်ဆောင်မှုများ',
    'insurance.farmers.feature3': 'စိုက်ပျိုးရေး ကာကွယ်မှု အကွယ်အကာ',
    'insurance.choose': 'ရွေးချယ်ပါ',
    
    // Dashboard
    'dashboard.impact': 'သင်၏ သဘာဝပတ်ဝန်းကျင် သက်ရောက်မှု',
    'dashboard.trash.items': 'အမှိုက်ပစ္စည်းများ',
    'dashboard.co2.avoided': 'ရှောင်ကြဉ်ထားသော CO₂',
    'dashboard.trees.planted': 'စိုက်ပျိုးထားသော သစ်ပင်များ',
    'dashboard.day.streak': 'ရက်ဆက်တိုက်',
    'dashboard.mission': 'အပတ်စဉ် မစ်ရှင်',
    'dashboard.mission.capture': 'အမှိုက် ၁၀ ခုကို စုဆောင်းပါ',
    'dashboard.mission.continue': 'မစ်ရှင် ဆက်လုပ်ပါ',
    'dashboard.milestones': 'သင်၏ မှတ်တိုင်များ',
    'dashboard.current.streak': 'လက်ရှိ ဆက်တိုက်',
    'dashboard.next.milestone': 'နောက်မှတ်တိုင်: ၃၀ ရက်',
    'dashboard.trash.captured': 'စုဆောင်းထားသော အမှိုက်',
    'dashboard.bronze.badge': 'ကြေးတံဆိပ် အတွက် နောက် ၂၂ ခု',
    
    // TrashStep
    'trashstep.scanner': 'TrashStep စကင်နာ',
    'trashstep.qr.title': 'သင်၏ ကိုယ်ပိုင် QR ကုဒ်',
    'trashstep.qr.desc': 'အမှိုက်စုဆောင်းပြီးနောက် TrashStep ဌာနများတွင် ဤကုဒ်ကို စကင်လုပ်ပါ',
    'trashstep.qr.copy': 'QR ဒေတာ ကော်ပီကူးပါ',
    'trashstep.step1': 'အဆင့် ၁: အမှိုက် စုဆောင်းပါ',
    'trashstep.step2': 'အဆင့် ၂: သင်၏ QR ကုဒ်ကို စကင်လုပ်ပါ',
    'trashstep.pedal': 'TrashStep ခြေနင်းပလိတ်ကို နင်းပါ',
    'trashstep.captured': 'အမှိုက်ကို စုဆောင်းပြီး!',
    'trashstep.camera': 'ကင်မရာ ဖွင့်ပါ',
    'trashstep.scan': 'စကင်လုပ်၍ အမှတ်များရပါ',
    'trashstep.streak': 'လက်ရှိ ဆက်တိုက်',
    'trashstep.bonus': 'ဆုအတွက် နောက်',
    'trashstep.placeholder': 'သင်၏ QR ကုဒ်ဒေတာ ရိုက်ထည့်ပါ သို့မဟုတ် ကင်မရာသုံးပါ',
    
    // Community
    'community.events': 'သဘာဝ အသိုက်အဝန်း အဖြစ်အပျက်များ',
    'community.leaderboard': 'အာဆီယံ ခေါင်းဆောင်ဘုတ်',
    'community.join': 'အဖြစ်အပျက်တွင် ပါဝင်ပါ',
    'community.joined': 'ပါဝင်ခဲ့သည်',
    'community.points': 'စိမ်းလန်းသော အမှတ်များ',
    'community.items': 'ပစ္စည်းများ',
    'community.pts': 'အမှတ်',
    
    // Rewards
    'rewards.solar': 'ဆိုလာ ပြားကိရိယာ အစုံ',
    'rewards.bag': 'ပြန်လည်အသုံးပြုထားသော လွယ်အိတ်',
    'rewards.insulation': 'အိမ် လှိုင်းကာကွယ်မှု အစုံ',
    'rewards.solar.impact': 'တစ်နှစ်လျှင် CO₂ ၂ တန် လျှော့ချပါ',
    'rewards.bag.impact': 'ပုလင်း ၁၀ လုံးဖြင့် ပြုလုပ်ထားသည်',
    'rewards.insulation.impact': 'အအေးပေးမှုတွင် ၃၀% ချွေတာပါ',
    'rewards.energy': 'စွမ်းအင်',
    'rewards.lifestyle': 'လူနေမှုဘဝ',
    'rewards.home': 'အိမ်',
    'rewards.redeem': 'ရယူပါ',
    'rewards.need.more': 'အမှတ်များ ပိုလိုအပ်သည်',
    
    // Disaster Knowledge
    'disaster.title': 'သဘာဝဘေးဆိုင်ရာ အသိပညာစင်တာ',
    'disaster.subtitle': 'သဘာဝဘေးများကို ကာကွယ်ခြင်း၊ ကာကွယ်ခြင်းနှင့် အသက်ရှင်ကျန်ရစ်ခြင်းအကြောင်း လေ့လာပါ',
    'disaster.prevention': 'ကာကွယ်ခြင်း',
    'disaster.protection': 'အကာအကွယ်',
    'disaster.survival': 'အသက်ရှင်ကျန်ရစ်ခြင်း',
    'disaster.emergency': 'အရေးပေါ် ဆက်သွယ်ရန်',
    'disaster.fire': 'မီးသတ်တပ်ဖွဲ့',
    'disaster.police': 'ရဲတပ်ဖွဲ့',
    'disaster.medical': 'အရေးပေါ် ဆေးဘက်ဆိုင်ရာ',
    'disaster.flood': 'ရေလွှမ်းမိုးမှု စီမံခန့်ခွဲမှု',
    'disaster.typhoon': 'တိုင်ဖွန်း ပြင်ဆင်မှု',
    'disaster.wildfire': 'သစ်တောမီး ဘေးကင်းရေး',
    
    // Login
    'login.welcome': 'ပြန်လည်ကြိုဆိုပါသည်',
    'login.email': 'အီးမေးလ်',
    'login.password': 'စကားဝှက်',
    'login.email.placeholder': 'သင်၏ အီးမေးလ် ရိုက်ထည့်ပါ',
    'login.password.placeholder': 'သင်၏ စကားဝှက် ရိုက်ထည့်ပါ',
    'login.button': 'ဝင်ရောက်ပါ',
    'login.logging': 'ဝင်ရောက်နေသည်...',
    'login.demo': 'သရုပ်ပြ: မည်သည့် အီးမေးလ်နှင့် စကားဝှက်မဆို အသုံးပြု၍ ဝင်ရောက်နိုင်သည်',
    'login.success.title': 'ပြန်လည်ကြိုဆိုပါသည်!',
    'login.success.desc': 'Resilient ASEAN သို့ အောင်မြင်စွာ ဝင်ရောက်ပြီးပါပြီ။',
    'login.error.title': 'ဝင်ရောက်မှု မအောင်မြင်ပါ',
    'login.error.desc': 'သင်၏ အထောက်အထားများကို စစ်ဆေးပြီး ပြန်လည်ကြိုးစားပါ။',
    
    // Toast messages
    'toast.qr.copied': 'QR ကုဒ် ကော်ပီကူးပြီး',
    'toast.qr.desc': 'သင်၏ ကိုယ်ပိုင် QR ကုဒ်ကို clipboard သို့ ကော်ပီကူးပြီးပါပြီ။',
    'toast.trashstep.activated': 'TrashStep စတင်လုပ်ဆောင်ပြီး!',
    'toast.trashstep.desc': 'အမှိုက်ကို ရေလောင်းစနစ်မှ ဖယ်ရှားပြီးပါပြီ။ ယခု သင်၏ QR ကုဒ်ကို စကင်လုပ်ပါ။',
    'toast.no.trash': 'အမှိုက် မစုဆောင်းရသေးပါ',
    'toast.no.trash.desc': 'ကျေးဇူးပြု၍ TrashStep ခြေနင်းပလိတ်ကို အရင်နင်းပါ။',
    'toast.cooldown': 'အေးသက်သက်အချိန် လုပ်ဆောင်နေသည်',
    'toast.cooldown.desc': 'အမှတ်များရရှိရန် အမှိုက်စုဆောင်းမှုများကြား ၃၀ မိနစ် စောင့်ပါ။',
    'toast.invalid.qr': 'မမှန်ကန်သော QR ကုဒ်',
    'toast.invalid.qr.desc': 'ဤ QR ကုဒ်သည် သင်၏ အကောင့်နှင့် မပိုင်ဆိုင်ပါ။',
    'toast.streak.bonus': '🔥 ဆက်တိုက် ဆုချေးမှု!',
    'toast.streak.desc': 'ရက် ဆက်တိုက်! ဆုချေးမှု +၁၀ အမှတ် ရရှိပြီး!',
    'toast.trash.success': '✅ အမှိုက် စုဆောင်းပြီး!',
    'toast.points.earned': 'သင်သည် +{points} စိမ်းလန်းသော အမှတ်များ ရရှိပြီး!'
  },
  zh: {
    // Hero section
    'hero.title': '韧性东盟',
    'hero.subtitle': '通过智能保险、环保行动和集体影响，赋能东南亚社区适应气候变化。',
    'hero.join': '加入运动',
    'hero.explore': '探索保险',
    
    // Navigation
    'nav.dashboard': '仪表板',
    'nav.trashstep': 'TrashStep',
    'nav.insurance': '保险',
    'nav.community': '社区',
    'nav.rewards': '奖励',
    'nav.knowledge': '知识',
    'nav.logout': '登出',
    
    // User stats
    'points.green': '绿色积分',
    'streak.day': '天连续',
    'stats.active': '本周活跃用户',
    'stats.trash': '垃圾收集量',
    'stats.protected': '受保护居民',
    
    // Insurance plans
    'insurance.premium.title': '高端',
    'insurance.middle.title': '中产阶级',
    'insurance.farmers.title': '农民',
    'insurance.premium.desc': '全面保障',
    'insurance.middle.desc': '经济实惠的保障',
    'insurance.farmers.desc': '灵活计划',
    'insurance.premium.detail': '适用于高风险地区的高价值房产。',
    'insurance.middle.detail': '适用于中等风险的房主。',
    'insurance.farmers.detail': '提供打包选项和额外支持服务',
    'insurance.premium.feature1': '适合高风险区域和高价值房产',
    'insurance.premium.feature2': '全面保护覆盖',
    'insurance.premium.feature3': '优质支持和快速理赔',
    'insurance.middle.feature1': '最适合中低风险地区',
    'insurance.middle.feature2': '预算意识强的房主',
    'insurance.middle.feature3': '平衡的保障和成本',
    'insurance.farmers.feature1': '可享受打包折扣',
    'insurance.farmers.feature2': '额外的洪水缓解服务',
    'insurance.farmers.feature3': '农业保护覆盖',
    'insurance.choose': '选择',
    
    // Dashboard
    'dashboard.impact': '您的环境影响',
    'dashboard.trash.items': '垃圾物品',
    'dashboard.co2.avoided': '减少的CO₂',
    'dashboard.trees.planted': '种植的树木',
    'dashboard.day.streak': '天连续',
    'dashboard.mission': '每周任务',
    'dashboard.mission.capture': '收集10个垃圾物品',
    'dashboard.mission.continue': '继续任务',
    'dashboard.milestones': '您的里程碑',
    'dashboard.current.streak': '当前连续',
    'dashboard.next.milestone': '下一个里程碑：30天',
    'dashboard.trash.captured': '收集的垃圾',
    'dashboard.bronze.badge': '还需22个获得青铜生态徽章',
    
    // TrashStep
    'trashstep.scanner': 'TrashStep 扫描器',
    'trashstep.qr.title': '您的个人二维码',
    'trashstep.qr.desc': '收集垃圾后在TrashStep站点扫描此代码',
    'trashstep.qr.copy': '复制二维码数据',
    'trashstep.step1': '步骤1：收集垃圾',
    'trashstep.step2': '步骤2：扫描您的二维码',
    'trashstep.pedal': '踩踏TrashStep踏板',
    'trashstep.captured': '垃圾已收集！',
    'trashstep.camera': '打开相机',
    'trashstep.scan': '扫描并获得积分',
    'trashstep.streak': '当前连续',
    'trashstep.bonus': '个更多获得奖励！',
    'trashstep.placeholder': '输入您的二维码数据或使用相机',
    
    // Community
    'community.events': '自然巢穴活动',
    'community.leaderboard': '东盟排行榜',
    'community.join': '参加活动',
    'community.joined': '已参加',
    'community.points': '绿色积分',
    'community.items': '个物品',
    'community.pts': '积分',
    
    // Rewards
    'rewards.solar': '太阳能板套件',
    'rewards.bag': '回收手提袋',
    'rewards.insulation': '家庭保温套件',
    'rewards.solar.impact': '每年减少2吨CO₂',
    'rewards.bag.impact': '由10个瓶子制成',
    'rewards.insulation.impact': '节省30%的制冷费用',
    'rewards.energy': '能源',
    'rewards.lifestyle': '生活方式',
    'rewards.home': '家居',
    'rewards.redeem': '兑换',
    'rewards.need.more': '需要更多积分',
    
    // Disaster Knowledge
    'disaster.title': '灾害知识中心',
    'disaster.subtitle': '学习如何预防、保护和在自然灾害中生存',
    'disaster.prevention': '预防',
    'disaster.protection': '保护',
    'disaster.survival': '生存',
    'disaster.emergency': '紧急联系方式',
    'disaster.fire': '消防部门',
    'disaster.police': '警察',
    'disaster.medical': '紧急医疗',
    'disaster.flood': '洪水管理',
    'disaster.typhoon': '台风准备',
    'disaster.wildfire': '野火安全',
    
    // Login
    'login.welcome': '欢迎回来',
    'login.email': '邮箱',
    'login.password': '密码',
    'login.email.placeholder': '输入您的邮箱',
    'login.password.placeholder': '输入您的密码',
    'login.button': '登录',
    'login.logging': '登录中...',
    'login.demo': '演示：使用任何邮箱和密码登录',
    'login.success.title': '欢迎回来！',
    'login.success.desc': '您已成功登录Resilient ASEAN。',
    'login.error.title': '登录失败',
    'login.error.desc': '请检查您的凭据并重试。',
    
    // Toast messages
    'toast.qr.copied': '二维码已复制',
    'toast.qr.desc': '您的个人二维码已复制到剪贴板。',
    'toast.trashstep.activated': 'TrashStep已激活！',
    'toast.trashstep.desc': '垃圾已从排水管中清除。现在扫描您的二维码。',
    'toast.no.trash': '未收集垃圾',
    'toast.no.trash.desc': '请先踩踏TrashStep踏板收集垃圾。',
    'toast.cooldown': '冷却时间激活',
    'toast.cooldown.desc': '请在垃圾收集之间等待30分钟以获得积分。',
    'toast.invalid.qr': '无效的二维码',
    'toast.invalid.qr.desc': '此二维码不属于您的账户。',
    'toast.streak.bonus': '🔥 连续奖励！',
    'toast.streak.desc': '天连续！获得奖励+10积分！',
    'toast.trash.success': '✅ 垃圾已收集！',
    'toast.points.earned': '您获得了+{points}绿色积分！'
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
