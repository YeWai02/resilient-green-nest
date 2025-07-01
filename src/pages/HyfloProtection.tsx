
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, MapPin, Zap, Users, CheckCircle, Play, ArrowRight, Phone, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";

const HyfloProtection = () => {
  const [requestForm, setRequestForm] = useState({
    name: "",
    location: "",
    email: "",
    phone: "",
    community: ""
  });

  const features = [
    {
      icon: Shield,
      title: "Early Warning System",
      description: "Advanced sensors detect rising water levels and send instant alerts to your mobile device"
    },
    {
      icon: Zap,
      title: "Automated Response",
      description: "Smart barriers deploy automatically when flood risk is detected, protecting your property"
    },
    {
      icon: Users,
      title: "Community Network",
      description: "Connected system protects entire neighborhoods with coordinated flood defense"
    },
    {
      icon: MapPin,
      title: "Precise Monitoring",
      description: "Hyper-local flood monitoring tailored to your specific area's risk profile"
    }
  ];

  const pilotCities = [
    { name: "Thanlyin", country: "Myanmar", status: "Active", protected: "2,450 homes" },
    { name: "Da Nang", country: "Vietnam", status: "Active", protected: "1,800 homes" },
    { name: "Mandalay", country: "Myanmar", status: "Pilot", protected: "850 homes" },
    { name: "Can Tho", country: "Vietnam", status: "Planning", protected: "TBD" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequestForm({
      ...requestForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("HYFLO request submitted:", requestForm);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 text-sm font-medium">
                Advanced Flood Protection
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                HYFLO
                <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent"> Protection</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Revolutionary flood protection system that combines IoT sensors, AI prediction, and automated barriers 
                to keep your community safe from flooding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Demo
                </Button>
                <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-full">
                  Request for My Area
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-green-400 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">HYFLO Impact</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-3xl font-bold">99.8%</div>
                    <div className="text-blue-100">Flood prediction accuracy</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">5,100+</div>
                    <div className="text-blue-100">Homes protected</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">$12M</div>
                    <div className="text-blue-100">Damage prevented</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            See HYFLO in Action
          </h2>
          <div className="relative bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center">
              <Button className="bg-white/20 backdrop-blur-md border-white/20 text-white hover:bg-white/30 px-8 py-4 rounded-full shadow-lg">
                <Play className="h-8 w-8 mr-3" />
                <span className="text-lg font-medium">Play Demo Video</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How HYFLO Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our intelligent flood protection system uses cutting-edge technology to predict, prevent, and protect against flooding.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="h-16 w-16 bg-gradient-to-br from-blue-400 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot Cities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              HYFLO Pilot Cities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See where HYFLO is already protecting communities across Southeast Asia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pilotCities.map((city, index) => (
              <Card key={index} className="bg-white shadow-lg rounded-2xl border-0 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900">{city.name}</h3>
                    <p className="text-gray-600">{city.country}</p>
                  </div>
                  <Badge className={`mb-3 ${
                    city.status === 'Active' ? 'bg-green-100 text-green-700' :
                    city.status === 'Pilot' ? 'bg-blue-100 text-blue-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {city.status}
                  </Badge>
                  <div className="text-2xl font-bold text-blue-600">{city.protected}</div>
                  <div className="text-sm text-gray-600">Protected</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Request HYFLO for Your Community
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Join the growing network of protected communities. Submit a request to bring HYFLO to your area.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={requestForm.name}
                    onChange={handleInputChange}
                    className="bg-white/20 border-white/20 text-white placeholder-white/70 rounded-xl"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="location" className="text-white mb-2 block">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    value={requestForm.location}
                    onChange={handleInputChange}
                    className="bg-white/20 border-white/20 text-white placeholder-white/70 rounded-xl"
                    placeholder="City, Country"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" className="text-white mb-2 block">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={requestForm.email}
                    onChange={handleInputChange}
                    className="bg-white/20 border-white/20 text-white placeholder-white/70 rounded-xl"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-white mb-2 block">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={requestForm.phone}
                    onChange={handleInputChange}
                    className="bg-white/20 border-white/20 text-white placeholder-white/70 rounded-xl"
                    placeholder="+95 xxx xxx xxx"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="community" className="text-white mb-2 block">Community Size</Label>
                <Input
                  id="community"
                  name="community"
                  value={requestForm.community}
                  onChange={handleInputChange}
                  className="bg-white/20 border-white/20 text-white placeholder-white/70 rounded-xl"
                  placeholder="Number of households at risk"
                />
              </div>

              <Button type="submit" className="w-full bg-white text-blue-600 hover:bg-gray-100 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                Submit Request
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HyfloProtection;
