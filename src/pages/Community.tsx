
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  MapPin, 
  TrendingUp, 
  Award,
  Heart,
  Recycle,
  Droplets,
  TreePine,
  Star,
  Calendar,
  MessageCircle
} from "lucide-react";

const Community = () => {
  const cityStats = [
    {
      city: "Thanlyin, Myanmar",
      population: "45,000",
      protected: "12,543",
      coverage: 78,
      wasteReduced: "245 tons",
      workshopsHeld: 24,
      featured: true
    },
    {
      city: "Da Nang, Vietnam", 
      population: "35,000",
      protected: "8,921",
      coverage: 65,
      wasteReduced: "189 tons",
      workshopsHeld: 18,
      featured: true
    },
    {
      city: "Yangon, Myanmar",
      population: "28,000", 
      protected: "6,432",
      coverage: 52,
      wasteReduced: "156 tons",
      workshopsHeld: 15,
      featured: false
    }
  ];

  const ecoHeroes = [
    {
      name: "Thant Zin Myat",
      city: "Thanlyin",
      points: 8950,
      achievement: "Workshop Leader",
      impact: "Organized 12 community workshops",
      avatar: "🌟"
    },
    {
      name: "Mai Nguyen",
      city: "Da Nang", 
      points: 7820,
      achievement: "Recycling Champion",
      impact: "Diverted 2.3 tons of waste",
      avatar: "♻️"
    },
    {
      name: "Soe Wai Lin",
      city: "Yangon",
      points: 6750,
      achievement: "Community Builder",
      impact: "Referred 45 new members",
      avatar: "👑"
    }
  ];

  const recentActivities = [
    {
      type: "workshop",
      title: "Flood Preparedness Workshop",
      location: "Thanlyin Community Center",
      date: "2 days ago",
      participants: 28,
      icon: Users
    },
    {
      type: "cleanup",
      title: "Neighborhood Cleanup Drive",
      location: "Da Nang Waterfront",
      date: "4 days ago", 
      participants: 42,
      icon: Recycle
    },
    {
      type: "tree",
      title: "Community Tree Planting",
      location: "Yangon Park",
      date: "1 week ago",
      participants: 35,
      icon: TreePine
    }
  ];

  const testimonials = [
    {
      name: "Zaw Zaw",
      role: "Local Business Owner",
      city: "Thanlyin",
      text: "ECOVO's workshops taught my family how to prepare for floods. When the last storm hit, we were ready and protected our shop.",
      rating: 5
    },
    {
      name: "Linh Pham", 
      role: "Teacher",
      city: "Da Nang",
      text: "The Green Points system motivated my students to recycle more. Now our school has the cleanest campus in the district!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Community Impact
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how communities across Southeast Asia are building climate resilience together
            </p>
          </div>

          {/* Overall Impact Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto mb-3" />
                <div className="text-3xl font-bold">27,896</div>
                <div className="text-blue-100">People Protected</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <Recycle className="h-8 w-8 mx-auto mb-3" />
                <div className="text-3xl font-bold">590</div>
                <div className="text-green-100">Tons Recycled</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 mx-auto mb-3" />
                <div className="text-3xl font-bold">157</div>
                <div className="text-purple-100">Workshops Held</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <Droplets className="h-8 w-8 mx-auto mb-3" />
                <div className="text-3xl font-bold">$2.8M</div>
                <div className="text-orange-100">Claims Paid</div>
              </CardContent>
            </Card>
          </div>

          {/* City Progress */}
          <Card className="mb-12 bg-white/70 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-gray-900">
                <MapPin className="h-6 w-6 mr-3 text-green-500" />
                City Progress Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-3 gap-6">
                {cityStats.map((city, index) => (
                  <div 
                    key={index}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                      city.featured 
                        ? "bg-gradient-to-br from-green-50 to-blue-50 border-green-300 shadow-lg"
                        : "bg-white border-gray-200 shadow-md"
                    }`}
                  >
                    {city.featured && (
                      <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white mb-3">
                        Featured City
                      </Badge>
                    )}
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{city.city}</h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Population:</span>
                        <span className="font-semibold">{city.population}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Protected:</span>
                        <span className="font-semibold text-green-600">{city.protected}</span>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600">Coverage:</span>
                          <span className="font-semibold">{city.coverage}%</span>
                        </div>
                        <Progress value={city.coverage} className="h-3" />
                      </div>
                      
                      <div className="pt-3 border-t border-gray-200">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-500">Waste Reduced:</span>
                          <span className="font-medium text-green-600">{city.wasteReduced}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Workshops:</span>
                          <span className="font-medium text-blue-600">{city.workshopsHeld}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            
            {/* Eco Heroes of the Month */}
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-gray-900">
                  <Award className="h-6 w-6 mr-3 text-yellow-500" />
                  Eco Heroes of the Month
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ecoHeroes.map((hero, index) => (
                    <div 
                      key={index}
                      className="flex items-center p-4 bg-white rounded-xl shadow-lg border-l-4 border-green-500"
                    >
                      <div className="text-2xl mr-4">{hero.avatar}</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900">{hero.name}</h3>
                        <p className="text-sm text-gray-600">{hero.city}</p>
                        <Badge className="mt-1 bg-green-100 text-green-800">
                          {hero.achievement}
                        </Badge>
                        <p className="text-sm text-gray-700 mt-2">{hero.impact}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">{hero.points.toLocaleString()}</div>
                        <div className="text-xs text-gray-500">points</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-gray-900">
                  <TrendingUp className="h-6 w-6 mr-3 text-blue-500" />
                  Recent Community Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div 
                      key={index}
                      className="flex items-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                        <activity.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{activity.title}</h3>
                        <p className="text-sm text-gray-600">{activity.location}</p>
                        <div className="flex items-center mt-2 text-sm text-gray-500">
                          <Users className="h-4 w-4 mr-1" />
                          <span>{activity.participants} participants</span>
                          <span className="mx-2">•</span>
                          <span>{activity.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Community Testimonials */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-gray-900">
                <MessageCircle className="h-6 w-6 mr-3 text-purple-500" />
                Community Stories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl border-2 border-blue-200"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 mb-4 italic">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-3">
                        <Heart className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.city}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 shadow-2xl">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Make an Impact?
                </h2>
                <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                  Join thousands of community members building climate resilience across Southeast Asia
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                    Join Your Community
                  </Button>
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg font-semibold">
                    Start a Workshop
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Community;
