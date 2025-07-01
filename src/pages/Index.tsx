import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Leaf, Shield, Users, Trophy, Camera, QrCode, Gift, TrendingUp, Heart, Star, Zap, LogOut, BookOpen, ArrowRight, Play } from "lucide-react";
import QRCodeDisplay from "@/components/QRCodeDisplay";
import TrashStepScanner from "@/components/TrashStepScanner";
import Leaderboard from "@/components/Leaderboard";
import LoginForm from "@/components/LoginForm";
import DisasterKnowledge from "@/components/DisasterKnowledge";
import LanguageSelector from "@/components/LanguageSelector";
import Navigation from "@/components/Navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useTranslation } from "@/contexts/TranslationContext";
import { generateUserQRCode } from "@/utils/qrCodeUtils";

const Index = () => {
  const { user, isLoggedIn, logout, updateGreenPoints } = useAuth();
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [userQRCode, setUserQRCode] = useState("");
  const [lastScanTime, setLastScanTime] = useState<number | null>(null);

  // Generate user QR code on login
  useEffect(() => {
    if (isLoggedIn && user && !userQRCode) {
      setUserQRCode(generateUserQRCode(user.id));
    }
  }, [isLoggedIn, user, userQRCode]);

  // Community Stats
  const communityStats = {
    weeklyParticipants: 835,
    cityTrashCaptured: "2.3 tons",
    insuredResidents: "12,450"
  };

  const handlePointsEarned = (points: number, streak: number) => {
    updateGreenPoints(points);
    setLastScanTime(Date.now());
  };

  // If not logged in, show login form
  if (!isLoggedIn) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
      <Navigation />

      {/* Hero Section with Premium Design */}
      <div className="relative overflow-hidden min-h-screen bg-cover bg-center bg-no-repeat text-white" 
           style={{ backgroundImage: "url('/lovable-uploads/00c73161-bb2d-4a38-bfaa-7d0669cafd22.png')" }}>
        
        {/* Premium Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-green-600/70 to-blue-600/80 backdrop-blur-sm"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="text-center w-full">
            {/* Language Selector and Logout */}
            <div className="absolute top-4 right-4 flex items-center space-x-4">
              <LanguageSelector />
              <Button variant="outline" size="sm" onClick={logout} 
                      className="bg-white/20 backdrop-blur-md border-white/20 text-white hover:bg-white/30 rounded-full">
                <LogOut className="h-4 w-4 mr-2" />
                {t('nav.logout')}
              </Button>
            </div>

            <div className="flex items-center justify-center mb-8">
              <div className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center mr-4 animate-pulse">
                <Leaf className="h-8 w-8 text-green-300" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
                ECOVO
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Building climate resilience through community action, smart insurance, and environmental education
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Shield className="h-5 w-5 mr-2" />
                Get Protected Today
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button variant="outline" className="bg-white/20 backdrop-blur-md border-white/20 text-white hover:bg-white/30 px-8 py-3 rounded-full shadow-lg">
                <Play className="h-5 w-5 mr-2" />
                See How It Works
              </Button>
            </div>
            
            {/* Premium Community Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-3xl font-bold text-green-300 mb-2">{communityStats.weeklyParticipants}</div>
                <div className="text-green-100 text-sm uppercase tracking-wide">Active Community Members</div>
              </div>
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-3xl font-bold text-blue-300 mb-2">{communityStats.cityTrashCaptured}</div>
                <div className="text-blue-100 text-sm uppercase tracking-wide">Waste Diverted This Week</div>
              </div>
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">{communityStats.insuredResidents}</div>
                <div className="text-gray-100 text-sm uppercase tracking-wide">Protected Households</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Premium User Profile */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="h-20 w-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{user?.name}</h2>
                    <p className="text-green-100 flex items-center mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      {user?.location}
                    </p>
                    <Badge className="bg-white/20 backdrop-blur-md text-white border-white/20 px-4 py-2 rounded-full">
                      <Star className="h-4 w-4 mr-2" />
                      {user?.level} Member
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold mb-1">{user?.greenPoints}</div>
                  <div className="text-green-100 text-lg">Green Points</div>
                  <div className="text-sm text-green-200 mt-2 flex items-center">
                    🔥 {user?.streak} day streak
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Premium Navigation Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {[
            { id: "dashboard", label: "Dashboard", icon: TrendingUp },
            { id: "trashstep", label: "TrashStep", icon: QrCode },
            { id: "insurance", label: "Insurance", icon: Shield },
            { id: "community", label: "Community", icon: Users },
            { id: "rewards", label: "Rewards", icon: Gift },
            { id: "knowledge", label: "Learn", icon: BookOpen }
          ].map(tab => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              className={`flex items-center space-x-2 rounded-full px-6 py-3 transition-all duration-300 ${
                activeTab === tab.id 
                ? "bg-green-500 hover:bg-green-600 text-white shadow-lg transform scale-105" 
                : "border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon className="h-5 w-5" />
              <span className="font-medium">{tab.label}</span>
            </Button>
          ))}
        </div>

        {/* Dashboard Content */}
        {activeTab === "dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Impact Stats */}
            <Card className="col-span-full lg:col-span-2 shadow-xl rounded-2xl border-0 bg-white/80 backdrop-blur-md">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-green-700 text-2xl">
                  <TrendingUp className="h-6 w-6 mr-3" />
                  Your Environmental Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-green-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold text-green-600 mb-2">{user?.totalTrashCaptured}</div>
                    <div className="text-sm text-green-700 font-medium">Items Recycled</div>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{user?.co2Saved}kg</div>
                    <div className="text-sm text-blue-700 font-medium">CO₂ Prevented</div>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold text-green-600 mb-2">{user?.treesPlanted}</div>
                    <div className="text-sm text-green-700 font-medium">Trees Planted</div>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{user?.streak}</div>
                    <div className="text-sm text-blue-700 font-medium">Day Streak</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Mission */}
            <Card className="shadow-xl rounded-2xl border-0 bg-gradient-to-br from-green-50 to-blue-50">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-green-700 text-xl">
                  <Trophy className="h-5 w-5 mr-2" />
                  Weekly Challenge
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-3 font-medium">
                    <span>Capture 10 Items</span>
                    <span className="text-green-600">7/10</span>
                  </div>
                  <Progress value={70} className="h-3 rounded-full" />
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                  Continue Mission
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* TrashStep Content */}
        {activeTab === "trashstep" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <QRCodeDisplay userId={user?.id || "user123"} qrData={userQRCode} />
            <TrashStepScanner 
              userId={user?.id || "user123"} 
              onPointsEarned={handlePointsEarned} 
              lastScanTime={lastScanTime} 
              currentStreak={user?.streak || 0} 
            />
            
            {/* Enhanced Stats & Milestones */}
            <Card className="shadow-xl rounded-2xl border-0 bg-white/80 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <Zap className="h-5 w-5 mr-2" />
                  Your Milestones
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-3 font-medium">
                    <span>🔥 Current Streak</span>
                    <span className="text-green-600">{user?.streak} days</span>
                  </div>
                  <Progress value={(user?.streak || 0) % 30 * 3.33} className="h-3 rounded-full" />
                  <div className="text-xs text-gray-600 mt-2">Next milestone: 30 days</div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-3 font-medium">
                    <span>🗑️ Items Captured</span>
                    <span className="text-blue-600">{user?.totalTrashCaptured}/50</span>
                  </div>
                  <Progress value={(user?.totalTrashCaptured || 0) / 50 * 100} className="h-3 rounded-full" />
                  <div className="text-xs text-gray-600 mt-2">Unlock Bronze Badge</div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Updated Insurance Content */}
        {activeTab === "insurance" && <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Premium Plan */}
            <Card className="border-purple-200">
              <CardHeader className="bg-green-100">
                <CardTitle className="flex items-center justify-center text-purple-700">
                  <Shield className="h-5 w-5 mr-2" />
                  {t('insurance.premium.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-purple-600 mb-2">{t('insurance.premium.desc')}</div>
                  <div className="text-sm text-gray-600">{t('insurance.premium.detail')}</div>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-sm">{t('insurance.premium.feature1')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-sm">{t('insurance.premium.feature2')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-sm">{t('insurance.premium.feature3')}</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                  {t('insurance.choose')} {t('insurance.premium.title')}
                </Button>
              </CardContent>
            </Card>

            {/* Middle Class Plan */}
            <Card className="border-blue-200">
              <CardHeader className="bg-green-100">
                <CardTitle className="flex items-center justify-center text-blue-700">
                  <Shield className="h-5 w-5 mr-2" />
                  {t('insurance.middle.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{t('insurance.middle.desc')}</div>
                  <div className="text-sm text-gray-600">{t('insurance.middle.detail')}</div>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-sm">{t('insurance.middle.feature1')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-sm">{t('insurance.middle.feature2')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-sm">{t('insurance.middle.feature3')}</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  {t('insurance.choose')} {t('insurance.middle.title')}
                </Button>
              </CardContent>
            </Card>

            {/* Farmers Plan */}
            <Card className="border-green-200">
              <CardHeader className="bg-green-100">
                <CardTitle className="flex items-center justify-center text-green-700">
                  <Shield className="h-5 w-5 mr-2" />
                  {t('insurance.farmers.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-green-600 mb-2">{t('insurance.farmers.desc')}</div>
                  <div className="text-sm text-gray-600">{t('insurance.farmers.detail')}</div>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-sm">{t('insurance.farmers.feature1')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-sm">{t('insurance.farmers.feature2')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-sm">{t('insurance.farmers.feature3')}</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                  {t('insurance.choose')} {t('insurance.farmers.title')}
                </Button>
              </CardContent>
            </Card>
          </div>}

        {/* Community Content */}
        {activeTab === "community" && <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <Users className="h-5 w-5 mr-2" />
                  {t('community.events')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[{
                title: "Community Garden Workshop",
                date: "March 15, 2024",
                location: "Inya Lake Park",
                participants: 24,
                points: 25
              }, {
                title: "Urban Mural Painting",
                date: "March 20, 2024",
                location: "Downtown Yangon",
                participants: 18,
                points: 30
              }].map((event, index) => <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>📅 {event.date}</div>
                        <div>📍 {event.location}</div>
                        <div>👥 {event.participants} {t('community.joined')}</div>
                        <div className="text-green-600 font-medium">+{event.points} {t('points.green')}</div>
                      </div>
                      <Button className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white">
                        {t('community.join')}
                      </Button>
                    </div>)}
                </div>
              </CardContent>
            </Card>
            <Leaderboard />
          </div>}

        {/* Rewards Content */}
        {activeTab === "rewards" && <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
          name: t('rewards.solar'),
          points: 500,
          price: "$50",
          impact: t('rewards.solar.impact'),
          category: t('rewards.energy')
        }, {
          name: t('rewards.bag'),
          points: 50,
          price: "$5",
          impact: t('rewards.bag.impact'),
          category: t('rewards.lifestyle')
        }, {
          name: t('rewards.insulation'),
          points: 300,
          price: "$30",
          impact: t('rewards.insulation.impact'),
          category: t('rewards.home')
        }].map((item, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg mb-4 flex items-center justify-center">
                    <Gift className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <div className="space-y-1 mb-4">
                    <div className="flex justify-between">
                      <span className="text-green-600 font-bold">{item.points} points</span>
                      <span className="text-gray-600">+ {item.price}</span>
                    </div>
                    <div className="text-sm text-gray-600">{item.impact}</div>
                    <Badge className="bg-amber-100 text-amber-800 text-xs">{item.category}</Badge>
                  </div>
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white" disabled={(user?.greenPoints || 0) < item.points}>
                    {(user?.greenPoints || 0) >= item.points ? t('rewards.redeem') : t('rewards.need.more')}
                  </Button>
                </CardContent>
              </Card>)}
          </div>}

        {/* Knowledge Content */}
        {activeTab === "knowledge" && <DisasterKnowledge />}
      </div>
    </div>
  );
};

export default Index;
