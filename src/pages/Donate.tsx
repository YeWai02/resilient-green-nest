
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Gift, 
  MapPin, 
  Calendar,
  Truck,
  Recycle,
  Heart,
  Clock,
  CheckCircle,
  Star,
  Shirt,
  Package
} from "lucide-react";
import { useState } from "react";

const Donate = () => {
  const [selectedMethod, setSelectedMethod] = useState("dropoff");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const donationMethods = [
    {
      id: "dropoff",
      name: "Drop-off Points",
      description: "Bring items to our collection centers",
      icon: MapPin,
      points: 200,
      convenience: "Medium"
    },
    {
      id: "pickup",
      name: "Home Pickup",
      description: "Schedule a pickup from your home",
      icon: Truck,
      points: 150,
      convenience: "High"
    },
    {
      id: "smartbin",
      name: "Smart Bins",
      description: "Use TrashStep QR code scanning",
      icon: Recycle,
      points: 250,
      convenience: "High"
    }
  ];

  const dropOffLocations = [
    {
      name: "Thanlyin Community Center",
      address: "123 Main Street, Thanlyin",
      hours: "9 AM - 5 PM",
      distance: "0.8 km",
      items: ["Clothes", "Electronics", "Books"]
    },
    {
      name: "Da Nang Eco Hub",
      address: "456 Green Avenue, Da Nang", 
      hours: "8 AM - 6 PM",
      distance: "1.2 km",
      items: ["Clothes", "Toys", "Household Items"]
    },
    {
      name: "Yangon Recycling Center",
      address: "789 Sustainability Blvd, Yangon",
      hours: "10 AM - 4 PM", 
      distance: "2.1 km",
      items: ["All Items"]
    }
  ];

  const acceptedItems = [
    { name: "Clothing & Textiles", icon: Shirt, points: "50-200", popular: true },
    { name: "Electronics", icon: Package, points: "100-500", popular: true },
    { name: "Books & Media", icon: Package, points: "25-100", popular: false },
    { name: "Toys & Games", icon: Gift, points: "30-150", popular: true },
    { name: "Household Items", icon: Package, points: "40-300", popular: false },
    { name: "Shoes & Accessories", icon: Package, points: "35-180", popular: false }
  ];

  const recentDonations = [
    {
      donor: "Thant Zin",
      items: "Winter clothes (5 items)",
      points: 250,
      location: "Thanlyin Center",
      date: "2 hours ago"
    },
    {
      donor: "Mai Nguyen", 
      items: "Electronics bundle",
      points: 420,
      location: "Smart Bin #5",
      date: "5 hours ago"
    },
    {
      donor: "Soe Wai",
      items: "Children's books",
      points: 180,
      location: "Da Nang Hub",
      date: "1 day ago"
    }
  ];

  const impactStats = [
    { label: "Items Donated This Month", value: "2,847", icon: Gift },
    { label: "Families Helped", value: "1,234", icon: Heart },
    { label: "CO2 Prevented", value: "15.2 tons", icon: Recycle },
    { label: "Points Earned", value: "450K", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full mb-6">
              <Gift className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Donate & Swap Clothes
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Give your unused items a new life while earning Green Points and helping families in need
            </p>
          </div>

          {/* Impact Statistics */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {impactStats.map((stat, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 text-green-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Donation Methods */}
          <Card className="mb-12 bg-white/70 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Choose Your Donation Method</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {donationMethods.map((method) => (
                  <div 
                    key={method.id}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedMethod === method.id 
                        ? "bg-gradient-to-br from-green-50 to-blue-50 border-green-300 shadow-lg"
                        : "bg-white border-gray-200 shadow-md hover:border-green-200"
                    }`}
                    onClick={() => setSelectedMethod(method.id)}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <method.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.name}</h3>
                      <p className="text-gray-600 mb-4">{method.description}</p>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Green Points:</span>
                          <span className="font-bold text-green-600">+{method.points}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Convenience:</span>
                          <Badge className={method.convenience === "High" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                            {method.convenience}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            
            {/* Drop-off Locations or Pickup Scheduling */}
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-gray-900">
                  {selectedMethod === "pickup" ? (
                    <>
                      <Calendar className="h-5 w-5 mr-2" />
                      Schedule Pickup
                    </>
                  ) : selectedMethod === "smartbin" ? (
                    <>
                      <Recycle className="h-5 w-5 mr-2" />
                      Smart Bin Locations
                    </>
                  ) : (
                    <>
                      <MapPin className="h-5 w-5 mr-2" />
                      Drop-off Locations
                    </>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedMethod === "pickup" ? (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pickup Address
                      </label>
                      <Input placeholder="Enter your address" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Date
                        </label>
                        <Input type="date" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Time Slot
                        </label>
                        <select className="w-full p-2 border border-gray-300 rounded-md">
                          <option>9 AM - 12 PM</option>
                          <option>12 PM - 3 PM</option>
                          <option>3 PM - 6 PM</option>
                        </select>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                      Schedule Pickup
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {dropOffLocations.map((location, index) => (
                      <div key={index} className="p-4 bg-white rounded-lg shadow-md border border-gray-100">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{location.name}</h3>
                          <Badge className="bg-green-100 text-green-800">
                            {location.distance}
                          </Badge>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{location.address}</p>
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{location.hours}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {location.items.map((item, i) => (
                            <Badge key={i} className="bg-blue-100 text-blue-800 text-xs">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Accepted Items */}
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-gray-900">
                  <Package className="h-5 w-5 mr-2" />
                  What Can You Donate?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {acceptedItems.map((item, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        selectedItems.includes(item.name)
                          ? "bg-green-50 border-green-300"
                          : "bg-white border-gray-200 hover:border-green-200"
                      }`}
                      onClick={() => {
                        setSelectedItems(prev => 
                          prev.includes(item.name) 
                            ? prev.filter(i => i !== item.name)
                            : [...prev, item.name]
                        );
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-green-500 rounded-full flex items-center justify-center mr-3">
                            <item.icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{item.name}</h3>
                            <p className="text-sm text-gray-600">{item.points} points per item</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {item.popular && (
                            <Badge className="bg-orange-100 text-orange-800 text-xs">
                              Popular
                            </Badge>
                          )}
                          {selectedItems.includes(item.name) && (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Donations Feed */}
          <Card className="mb-12 bg-white/70 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-gray-900">
                <Heart className="h-6 w-6 mr-3 text-red-500" />
                Recent Community Donations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentDonations.map((donation, index) => (
                  <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                      <Gift className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{donation.donor}</h3>
                      <p className="text-gray-600">{donation.items}</p>
                      <p className="text-sm text-gray-500">{donation.location} • {donation.date}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-green-600">+{donation.points}</div>
                      <div className="text-xs text-gray-500">points earned</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-pink-500 to-orange-500 text-white border-0 shadow-2xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
                Every donation helps a family in need and moves us closer to a circular economy
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                  Start Donating Now
                </Button>
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-pink-600 px-8 py-3 text-lg font-semibold">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default Donate;
