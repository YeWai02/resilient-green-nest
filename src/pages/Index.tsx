
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Leaf, Shield, Users, Trophy, Camera, QrCode, Gift, TrendingUp, Heart, Star, Zap, LogOut, BookOpen } from "lucide-react";
import QRCodeDisplay from "@/components/QRCodeDisplay";
import TrashStepScanner from "@/components/TrashStepScanner";
import Leaderboard from "@/components/Leaderboard";
import LoginForm from "@/components/LoginForm";
import DisasterKnowledge from "@/components/DisasterKnowledge";
import LanguageSelector from "@/components/LanguageSelector";
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50">
      {/* Hero Section with Background Image and Glassmorphism */}
      <div className="relative overflow-hidden min-h-screen bg-cover bg-center bg-no-repeat text-white" 
           style={{ backgroundImage: "url('/lovable-uploads/00c73161-bb2d-4a38-bfaa-7d0669cafd22.png')" }}>
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/80 via-teal-600/70 to-cyan-600/80 backdrop-blur-none"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="text-center w-full">
            {/* Language Selector and Logout */}
            <div className="absolute top-4 right-4 flex items-center space-x-4">
              <LanguageSelector />
              <Button
                variant="outline"
                size="sm"
                onClick={logout}
                className="bg-white/20 backdrop-blur-md border-white/20 text-white hover:bg-white/30"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>

            <div className="flex items-center justify-center mb-6">
              <Leaf className="h-12 w-12 text-green-300 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
                {t('hero.title')}
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
            
            {/* Community Stats with Enhanced Glassmorphism */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-lg">
                <div className="text-2xl font-bold text-green-300">{communityStats.weeklyParticipants}</div>
                <div className="text-sm text-green-100">Active this week</div>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-lg">
                <div className="text-2xl font-bold text-blue-300">{communityStats.cityTrashCaptured}</div>
                <div className="text-sm text-blue-100">Trash captured</div>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-lg">
                <div className="text-2xl font-bold text-amber-300">{communityStats.insuredResidents}</div>
                <div className="text-sm text-amber-100">Protected residents</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* User Profile Header */}
        <div className="mb-8">
          <Card className="bg-gradient-to-r from-green-500 to-teal-500 text-white border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{user?.name}</h2>
                    <p className="text-green-100 flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {user?.location}
                    </p>
                    <Badge className="bg-amber-500 text-white mt-2">
                      <Star className="h-3 w-3 mr-1" />
                      {user?.level}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">{user?.greenPoints}</div>
                  <div className="text-green-100">{t('points.green')}</div>
                  <div className="text-sm text-green-200">🔥 {user?.streak} {t('streak.day')}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: "dashboard", label: t('nav.dashboard'), icon: TrendingUp },
            { id: "trashstep", label: t('nav.trashstep'), icon: QrCode },
            { id: "insurance", label: t('nav.insurance'), icon: Shield },
            { id: "community", label: t('nav.community'), icon: Users },
            { id: "rewards", label: t('nav.rewards'), icon: Gift },
            { id: "knowledge", label: t('nav.knowledge'), icon: BookOpen }
          ].map(tab => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              className={`flex items-center space-x-2 rounded-full ${
                activeTab === tab.id 
                  ? "bg-green-500 hover:bg-green-600 text-white" 
                  : "border-green-200 text-green-700 hover:bg-green-50"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </Button>
          ))}
        </div>

        {/* Dashboard Content */}
        {activeTab === "dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Impact Stats */}
            <Card className="col-span-full lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Your Environmental Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{user?.totalTrashCaptured}</div>
                    <div className="text-sm text-green-700">Trash Items</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{user?.co2Saved}</div>
                    <div className="text-sm text-blue-700">CO₂ Avoided</div>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <div className="text-2xl font-bold text-amber-600">{user?.treesPlanted}</div>
                    <div className="text-sm text-amber-700">Trees Planted</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{user?.streak}</div>
                    <div className="text-sm text-purple-700">Day Streak</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Mission */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-amber-700">
                  <Trophy className="h-5 w-5 mr-2" />
                  Weekly Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Capture 10 trash items</span>
                      <span>7/10</span>
                    </div>
                    <Progress value={70} className="h-3" />
                  </div>
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                    Continue Mission
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* TrashStep Content */}
        {activeTab === "trashstep" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <QRCodeDisplay userId={user?.id || "user123"} qrData={userQRCode} />
            <TrashStepScanner userId={user?.id || "user123"} onPointsEarned={handlePointsEarned} lastScanTime={lastScanTime} currentStreak={user?.streak || 0} />
            
            {/* Enhanced Stats & Milestones */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-purple-700">
                  <Zap className="h-5 w-5 mr-2" />
                  Your Milestones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>🔥 Current Streak</span>
                      <span>{user?.streak} days</span>
                    </div>
                    <Progress value={((user?.streak || 0) % 30) * 3.33} className="h-3" />
                    <div className="text-xs text-gray-600 mt-1">Next milestone: 30 days</div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>🗑️ Trash Captured</span>
                      <span>{user?.totalTrashCaptured}/50</span>
                    </div>
                    <Progress value={(user?.totalTrashCaptured || 0) / 50 * 100} className="h-3" />
                    <div className="text-xs text-gray-600 mt-1">22 more for Bronze Eco Badge</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Updated Insurance Content - Based on provided image */}
        {activeTab === "insurance" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <div className="text-2xl font-bold text-purple-600 mb-2">Comprehensive coverage</div>
                  <div className="text-sm text-gray-600">for high-value properties in high-risk areas.</div>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-sm">Ideal for high-risk zones and high-value properties</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-sm">Comprehensive protection coverage</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-sm">Premium support and fast claims</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                  Choose Premium
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
                  <div className="text-2xl font-bold text-blue-600 mb-2">Affordable coverage</div>
                  <div className="text-sm text-gray-600">for moderate-risk homeowners.</div>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-sm">Best for moderate to low-risk areas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-sm">Budget-conscious homeowners</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-sm">Balanced coverage and cost</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  Choose Middle Class
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
                  <div className="text-2xl font-bold text-green-600 mb-2">Flexible plans</div>
                  <div className="text-sm text-gray-600">with bundling options and additional support offers</div>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-sm">Bundling discounts available</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-sm">Additional flood mitigation services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-sm">Agricultural protection coverage</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                  Choose Farmers
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Community Content */}
        {activeTab === "community" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <Users className="h-5 w-5 mr-2" />
                  Nature Nest Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Community Garden Workshop",
                      date: "March 15, 2024",
                      location: "Inya Lake Park",
                      participants: 24,
                      points: 25
                    },
                    {
                      title: "Urban Mural Painting",
                      date: "March 20, 2024",
                      location: "Downtown Yangon",
                      participants: 18,
                      points: 30
                    }
                  ].map((event, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>📅 {event.date}</div>
                        <div>📍 {event.location}</div>
                        <div>👥 {event.participants} joined</div>
                        <div className="text-green-600 font-medium">+{event.points} Green Points</div>
                      </div>
                      <Button className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white">
                        Join Event
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Leaderboard />
          </div>
        )}

        {/* Rewards Content */}
        {activeTab === "rewards" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Solar Panel Kit",
                points: 500,
                price: "$50",
                impact: "Reduce 2 tons CO₂/year",
                category: "Energy"
              },
              {
                name: "Recycled Tote Bag",
                points: 50,
                price: "$5",
                impact: "Made from 10 bottles",
                category: "Lifestyle"
              },
              {
                name: "Home Insulation Kit",
                points: 300,
                price: "$30",
                impact: "Save 30% on cooling",
                category: "Home"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
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
                  <Button 
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white" 
                    disabled={(user?.greenPoints || 0) < item.points}
                  >
                    {(user?.greenPoints || 0) >= item.points ? "Redeem" : "Need more points"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Knowledge Content */}
        {activeTab === "knowledge" && <DisasterKnowledge />}
      </div>
    </div>
  );
};

export default Index;
