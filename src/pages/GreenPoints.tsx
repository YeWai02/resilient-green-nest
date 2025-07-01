
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Star, 
  Gift, 
  Recycle, 
  Users, 
  Zap,
  Award,
  Target,
  TrendingUp
} from "lucide-react";

const GreenPoints = () => {
  const [userPoints] = useState(2850);
  const nextRewardThreshold = 3000;
  const progressPercentage = (userPoints / nextRewardThreshold) * 100;

  const actions = [
    { name: "Attend Workshop", points: 100, icon: Users, description: "Join our community workshops" },
    { name: "TrashStep Scan", points: 50, icon: Recycle, description: "Use smart bins for recycling" },
    { name: "Clothes Donation", points: 200, points_text: "200+", icon: Gift, description: "Donate through ECOVO" },
    { name: "Insurance Signup", points: 500, icon: Award, description: "Get climate protection" },
    { name: "HYFLO Request", points: 150, icon: Zap, description: "Request flood protection" },
    { name: "Refer Friend", points: 300, icon: Users, description: "Invite others to join" }
  ];

  const rewards = [
    { name: "Eco-Friendly Water Bottle", points: 500, available: true },
    { name: "Bamboo Utensil Set", points: 750, available: true },
    { name: "Organic Cotton T-Shirt", points: 1200, available: true },
    { name: "Solar Power Bank", points: 2000, available: true },
    { name: "Insurance Premium Discount", points: 2500, available: true },
    { name: "Eco-Tourism Voucher", points: 5000, available: false }
  ];

  const leaderboard = [
    { name: "Thant Zin", points: 8950, rank: 1, city: "Thanlyin" },
    { name: "Mai Nguyen", points: 7820, rank: 2, city: "Da Nang" },
    { name: "Soe Wai", points: 6750, rank: 3, city: "Yangon" },
    { name: "You", points: userPoints, rank: 12, city: "Thanlyin" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-6">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Green Points & Rewards
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Earn points for eco-friendly actions and redeem amazing rewards while protecting our planet
            </p>
          </div>

          {/* User Progress Card */}
          <Card className="mb-12 bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left mb-6 md:mb-0">
                  <h2 className="text-3xl font-bold mb-2">{userPoints.toLocaleString()} Points</h2>
                  <p className="text-green-100 mb-4">
                    {nextRewardThreshold - userPoints} points to next reward
                  </p>
                  <Progress 
                    value={progressPercentage} 
                    className="w-64 h-3 bg-white/20"
                  />
                </div>
                <div className="text-center">
                  <Trophy className="h-16 w-16 mx-auto mb-2 text-yellow-300" />
                  <Badge className="bg-white/20 text-white border-white/30">
                    Eco Champion
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            
            {/* Earn Points Section */}
            <div className="lg:col-span-2">
              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-gray-900">
                    <Target className="h-6 w-6 mr-3 text-green-500" />
                    Earn Points
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {actions.map((action, index) => (
                      <div 
                        key={index}
                        className="flex items-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      >
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                            <action.icon className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="ml-4 flex-1">
                          <h3 className="font-semibold text-gray-900">{action.name}</h3>
                          <p className="text-sm text-gray-600">{action.description}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-green-600">
                            +{action.points_text || action.points}
                          </span>
                          <p className="text-xs text-gray-500">points</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Leaderboard */}
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-gray-900">
                  <TrendingUp className="h-5 w-5 mr-2 text-blue-500" />
                  Community Leaders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((user, index) => (
                    <div 
                      key={index}
                      className={`flex items-center p-3 rounded-lg transition-all duration-300 ${
                        user.name === "You" 
                          ? "bg-gradient-to-r from-green-100 to-blue-100 border-2 border-green-300" 
                          : "bg-gray-50 hover:bg-gray-100"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        user.rank <= 3 
                          ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-white" 
                          : "bg-gray-200 text-gray-600"
                      }`}>
                        {user.rank}
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="font-semibold text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.city}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">{user.points.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Rewards Section */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-gray-900">
                <Gift className="h-6 w-6 mr-3 text-blue-500" />
                Redeem Rewards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rewards.map((reward, index) => (
                  <div 
                    key={index}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                      reward.available && userPoints >= reward.points
                        ? "bg-gradient-to-br from-green-50 to-blue-50 border-green-300 shadow-lg"
                        : reward.available
                        ? "bg-white border-gray-200 shadow-md"
                        : "bg-gray-50 border-gray-200 opacity-60"
                    }`}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Gift className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{reward.name}</h3>
                      <p className="text-lg font-bold text-green-600 mb-4">
                        {reward.points.toLocaleString()} points
                      </p>
                      <Button 
                        disabled={!reward.available || userPoints < reward.points}
                        className={`w-full ${
                          reward.available && userPoints >= reward.points
                            ? "bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                            : ""
                        }`}
                      >
                        {!reward.available 
                          ? "Coming Soon" 
                          : userPoints >= reward.points 
                            ? "Redeem Now" 
                            : "Not Enough Points"
                        }
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default GreenPoints;
