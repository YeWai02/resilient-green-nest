import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Leaf, Shield, Users, Trophy, Camera, QrCode, Gift, TrendingUp, Heart, Star, Zap } from "lucide-react";
import QRCodeDisplay from "@/components/QRCodeDisplay";
import TrashStepScanner from "@/components/TrashStepScanner";
import Leaderboard from "@/components/Leaderboard";
import { generateUserQRCode } from "@/utils/qrCodeUtils";

const Index = () => {
  const [greenPoints, setGreenPoints] = useState(245);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [userQRCode, setUserQRCode] = useState("");
  const [lastScanTime, setLastScanTime] = useState<number | null>(null);
  const [currentStreak, setCurrentStreak] = useState(12);

  // Generate user QR code on login
  useEffect(() => {
    if (isLoggedIn && !userQRCode) {
      const userId = "user123"; // In real app, this would come from auth
      setUserQRCode(generateUserQRCode(userId));
    }
  }, [isLoggedIn, userQRCode]);

  // Demo user data
  const userData = {
    name: "Kyaw Gyi",
    location: "Yangon, Myanmar",
    level: "Climate Champion",
    streak: currentStreak,
    totalTrashCaptured: 28,
    co2Saved: "15.2 kg",
    treesPlanted: 3
  };

  // Community Stats
  const communityStats = {
    weeklyParticipants: 835,
    cityTrashCaptured: "2.3 tons",
    insuredResidents: "12,450"
  };
  const handlePointsEarned = (points: number, streak: number) => {
    setGreenPoints(prev => prev + points);
    setCurrentStreak(streak);
    setLastScanTime(Date.now());
  };
  return <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50">
      {/* Hero Section with Background Image and Glassmorphism */}
      <div className="relative overflow-hidden min-h-screen bg-cover bg-center bg-no-repeat text-white" 
           style={{ backgroundImage: "url('/lovable-uploads/00c73161-bb2d-4a38-bfaa-7d0669cafd22.png')" }}>
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/80 via-teal-600/70 to-cyan-600/80 backdrop-blur-none"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="text-center w-full">
            <div className="flex items-center justify-center mb-6">
              <Leaf className="h-12 w-12 text-green-300 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
                Resilient ASEAN
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
              Empowering Southeast Asian communities to adapt to climate change through smart insurance, 
              eco-actions, and collective impact.
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-500/90 backdrop-blur-sm hover:bg-green-600/90 text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-200 border border-white/20 shadow-lg" onClick={() => setIsLoggedIn(true)}>
                Join the Movement
              </Button>
              <Button size="lg" variant="outline" onClick={() => setActiveTab("insurance")} className="bg-white hover:bg-white/90 text-green-600 hover:text-green-700 border-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg">
                Explore Insurance
              </Button>
            </div>
          </div>
        </div>
      </div>

      {isLoggedIn ? <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
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
                      <h2 className="text-2xl font-bold">{userData.name}</h2>
                      <p className="text-green-100 flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {userData.location}
                      </p>
                      <Badge className="bg-amber-500 text-white mt-2">
                        <Star className="h-3 w-3 mr-1" />
                        {userData.level}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">{greenPoints}</div>
                    <div className="text-green-100">Green Points</div>
                    <div className="text-sm text-green-200">🔥 {userData.streak} day streak</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[{
          id: "dashboard",
          label: "Dashboard",
          icon: TrendingUp
        }, {
          id: "trashstep",
          label: "TrashStep",
          icon: QrCode
        }, {
          id: "insurance",
          label: "Insurance",
          icon: Shield
        }, {
          id: "community",
          label: "Community",
          icon: Users
        }, {
          id: "rewards",
          label: "Rewards",
          icon: Gift
        }].map(tab => <Button key={tab.id} variant={activeTab === tab.id ? "default" : "outline"} className={`flex items-center space-x-2 rounded-full ${activeTab === tab.id ? "bg-green-500 hover:bg-green-600 text-white" : "border-green-200 text-green-700 hover:bg-green-50"}`} onClick={() => setActiveTab(tab.id)}>
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </Button>)}
          </div>

          {/* Dashboard Content */}
          {activeTab === "dashboard" && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <div className="text-2xl font-bold text-green-600">{userData.totalTrashCaptured}</div>
                      <div className="text-sm text-green-700">Trash Items</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{userData.co2Saved}</div>
                      <div className="text-sm text-blue-700">CO₂ Avoided</div>
                    </div>
                    <div className="text-center p-4 bg-amber-50 rounded-lg">
                      <div className="text-2xl font-bold text-amber-600">{userData.treesPlanted}</div>
                      <div className="text-sm text-amber-700">Trees Planted</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">{userData.streak}</div>
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
            </div>}

          {/* TrashStep Content - Updated */}
          {activeTab === "trashstep" && <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* QR Code Display */}
              <QRCodeDisplay userId="user123" qrData={userQRCode} />

              {/* TrashStep Scanner */}
              <TrashStepScanner userId="user123" onPointsEarned={handlePointsEarned} lastScanTime={lastScanTime} currentStreak={currentStreak} />

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
                    {/* Streak Progress */}
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>🔥 Current Streak</span>
                        <span>{currentStreak} days</span>
                      </div>
                      <Progress value={currentStreak % 30 * 3.33} className="h-3" />
                      <div className="text-xs text-gray-600 mt-1">
                        Next milestone: 30 days
                      </div>
                    </div>

                    {/* Trash Milestone */}
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>🗑️ Trash Captured</span>
                        <span>{userData.totalTrashCaptured}/50</span>
                      </div>
                      <Progress value={userData.totalTrashCaptured / 50 * 100} className="h-3" />
                      <div className="text-xs text-gray-600 mt-1">
                        22 more for Bronze Eco Badge
                      </div>
                    </div>

                    {/* Available Badges */}
                    <div className="pt-4 border-t">
                      <h4 className="font-medium mb-3">Available Badges</h4>
                      <div className="space-y-2">
                        <Badge className="bg-amber-100 text-amber-800 w-full justify-start">
                          🥉 Bronze Eco (50 items)
                        </Badge>
                        <Badge variant="outline" className="w-full justify-start opacity-50">
                          🥈 Silver Eco (100 items)
                        </Badge>
                        <Badge variant="outline" className="w-full justify-start opacity-50">
                          🥇 Gold Eco (200 items)
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Nearby Bins - Enhanced */}
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-700">
                    <MapPin className="h-5 w-5 mr-2" />
                    Active TrashStep Stations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[{
                location: "Sule Pagoda Plaza",
                distance: "0.2 km",
                points: 5,
                status: "Active",
                trashLevel: "75%"
              }, {
                location: "Yangon Central Park",
                distance: "0.5 km",
                points: 5,
                status: "Active",
                trashLevel: "45%"
              }, {
                location: "Bogyoke Market",
                distance: "0.8 km",
                points: 5,
                status: "Full",
                trashLevel: "100%"
              }].map((station, index) => <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="font-medium">{station.location}</div>
                            <div className="text-sm text-gray-600">{station.distance} away</div>
                          </div>
                          <Badge className={`${station.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {station.status}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Trash Level</span>
                            <span>{station.trashLevel}</span>
                          </div>
                          <Progress value={parseInt(station.trashLevel)} className="h-2" />
                          <div className="flex justify-between items-center">
                            <span className="text-green-600 font-medium">
                              +{station.points} pts per capture
                            </span>
                            <Button size="sm" disabled={station.status === 'Full'} className="bg-green-500 hover:bg-green-600 text-white">
                              Navigate
                            </Button>
                          </div>
                        </div>
                      </div>)}
                  </div>
                </CardContent>
              </Card>
            </div>}

          {/* Community Content - Enhanced with Leaderboard */}
          {activeTab === "community" && <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Existing Nature Nest Events */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-green-700">
                    <Users className="h-5 w-5 mr-2" />
                    Nature Nest Events
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
                          <div>👥 {event.participants} joined</div>
                          <div className="text-green-600 font-medium">+{event.points} Green Points</div>
                        </div>
                        <Button className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white">
                          Join Event
                        </Button>
                      </div>)}
                  </div>
                </CardContent>
              </Card>

              {/* New Leaderboard */}
              <Leaderboard />
            </div>}

          {/* Insurance Content */}
          {activeTab === "insurance" && <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-green-700">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 mr-2" />
                      Basic Protection
                    </div>
                    <Badge className="bg-green-100 text-green-800">Popular</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600 mb-4">$12/month</div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Flood damage coverage up to $2,000
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      7-day claim window
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Basic weather alerts
                    </li>
                  </ul>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    Choose Basic
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-blue-700">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 mr-2" />
                      Premium Protection
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">Best Value</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-4">$25/month</div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Coverage up to $5,000
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      14-day claim window
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      2x Green Points multiplier
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Advanced weather alerts
                    </li>
                  </ul>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    Choose Premium
                  </Button>
                </CardContent>
              </Card>
            </div>}

          {/* Rewards Content */}
          {activeTab === "rewards" && <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{
          name: "Solar Panel Kit",
          points: 500,
          price: "$50",
          impact: "Reduce 2 tons CO₂/year",
          category: "Energy"
        }, {
          name: "Recycled Tote Bag",
          points: 50,
          price: "$5",
          impact: "Made from 10 bottles",
          category: "Lifestyle"
        }, {
          name: "Home Insulation Kit",
          points: 300,
          price: "$30",
          impact: "Save 30% on cooling",
          category: "Home"
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
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white" disabled={greenPoints < item.points}>
                      {greenPoints >= item.points ? "Redeem" : "Need more points"}
                    </Button>
                  </CardContent>
                </Card>)}
            </div>}
        </div> :
    // Landing page content for non-logged in users
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <Card className="transform hover:scale-105 transition-all duration-300 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center text-green-700">
                  <QrCode className="h-6 w-6 mr-2" />
                  TrashStep Rewards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Scan QR codes on smart bins, earn Green Points for every piece of trash you capture.
                </p>
                <div className="flex items-center text-green-600 font-medium">
                  <Heart className="h-4 w-4 mr-1" />
                  +5 points per scan
                </div>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-all duration-300 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-700">
                  <Shield className="h-6 w-6 mr-2" />
                  Climate Insurance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Affordable flood and storm protection tailored for ASEAN communities.
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <Shield className="h-4 w-4 mr-1" />
                  From $12/month
                </div>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-all duration-300 border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center text-amber-700">
                  <Users className="h-6 w-6 mr-2" />
                  Nature Nest
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Join community events: urban gardens, murals, cleanup drives that build resilience.
                </p>
                <div className="flex items-center text-amber-600 font-medium">
                  <Trophy className="h-4 w-4 mr-1" />
                  Earn bonus rewards
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Build Climate Resilience?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of Southeast Asian residents taking action for a sustainable future.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-12 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-200" onClick={() => setIsLoggedIn(true)}>
              Start Your Journey
            </Button>
          </div>
        </div>}
    </div>;
};

export default Index;
