
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { 
  Shield, 
  Check, 
  X, 
  Calculator,
  Users,
  Home,
  Zap,
  Heart,
  Star
} from "lucide-react";
import { useState } from "react";

const Insurance = () => {
  const [selectedPlan, setSelectedPlan] = useState("plus");
  const [addOns, setAddOns] = useState({
    emergency: false,
    premium: false,
    family: false
  });

  const plans = [
    {
      id: "basic",
      name: "Basic Protection",
      price: "$5",
      period: "/month",
      description: "Essential climate protection for individuals",
      features: [
        "Flood damage coverage up to $1,000",
        "Basic emergency response",
        "Community workshop access",
        "Mobile app access",
        "Standard customer support"
      ],
      notIncluded: [
        "Personal evacuation assistance",
        "Premium recovery services",
        "Family coverage",
        "Advanced weather alerts"
      ],
      popular: false,
      color: "from-blue-400 to-blue-500"
    },
    {
      id: "plus",
      name: "Plus Protection",
      price: "$12",
      period: "/month",
      description: "Comprehensive protection with enhanced benefits",
      features: [
        "Flood damage coverage up to $5,000",
        "Priority emergency response",
        "Personal evacuation assistance",
        "Family coverage (up to 4 members)",
        "Advanced weather alerts",
        "Community workshop priority access",
        "24/7 customer support",
        "Recovery assistance coordination"
      ],
      notIncluded: [
        "Premium recovery services",
        "Business coverage"
      ],
      popular: true,
      color: "from-green-500 to-blue-500"
    },
    {
      id: "premium",
      name: "Premium Protection",
      price: "$25",
      period: "/month",
      description: "Maximum protection with all premium services",
      features: [
        "Flood damage coverage up to $15,000",
        "Instant emergency response",
        "Personal evacuation assistance",
        "Extended family coverage (up to 8 members)",
        "Real-time weather monitoring",
        "Exclusive workshop access",
        "Dedicated support manager",
        "Full recovery services",
        "Temporary accommodation",
        "Business interruption coverage",
        "Green Points bonus multiplier"
      ],
      notIncluded: [],
      popular: false,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const addOnOptions = [
    {
      id: "emergency",
      name: "Emergency Fund Access",
      price: "$3/month",
      description: "Instant access to emergency funds during disasters"
    },
    {
      id: "premium",
      name: "Premium Recovery Services",
      price: "$8/month",
      description: "Professional cleanup and restoration services"
    },
    {
      id: "family",
      name: "Extended Family Coverage",
      price: "$5/month",
      description: "Cover additional family members beyond standard limits"
    }
  ];

  const calculateTotal = () => {
    const selectedPlanData = plans.find(p => p.id === selectedPlan);
    const basePrice = parseInt(selectedPlanData?.price.replace('$', '') || '0');
    
    let addOnTotal = 0;
    if (addOns.emergency) addOnTotal += 3;
    if (addOns.premium) addOnTotal += 8;
    if (addOns.family) addOnTotal += 5;
    
    return basePrice + addOnTotal;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Climate Insurance Plans
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect yourself and your family from climate disasters with our comprehensive insurance coverage
            </p>
          </div>

          {/* Statistics Banner */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">12,543</div>
                <div className="text-gray-600">Protected Families</div>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <Home className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">$2.8M</div>
                <div className="text-gray-600">Claims Paid Out</div>
              </CardContent>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <Zap className="h-8 w-8 text-purple-500 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">24hrs</div>
                <div className="text-gray-600">Average Response</div>
              </CardContent>
            </Card>
          </div>

          {/* Plans Comparison */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {plans.map((plan) => (
              <Card 
                key={plan.id}
                className={`relative bg-white/70 backdrop-blur-sm border-0 shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                  selectedPlan === plan.id ? 'ring-4 ring-green-300' : ''
                } ${plan.popular ? 'ring-2 ring-blue-300' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.notIncluded.map((feature, index) => (
                      <div key={index} className="flex items-start opacity-60">
                        <X className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-500">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${
                      selectedPlan === plan.id 
                        ? `bg-gradient-to-r ${plan.color} hover:opacity-90` 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Add-ons Section */}
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-gray-900">
                  <Heart className="h-6 w-6 mr-3 text-red-500" />
                  Optional Add-ons
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {addOnOptions.map((addOn) => (
                    <div key={addOn.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{addOn.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{addOn.description}</p>
                        <p className="text-lg font-bold text-green-600 mt-2">{addOn.price}</p>
                      </div>
                      <Switch 
                        checked={addOns[addOn.id as keyof typeof addOns]}
                        onCheckedChange={(checked) => 
                          setAddOns(prev => ({ ...prev, [addOn.id]: checked }))
                        }
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Calculator Summary */}
            <Card className="bg-gradient-to-br from-green-500 to-blue-500 text-white border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Calculator className="h-6 w-6 mr-3" />
                  Your Plan Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Selected Plan:</span>
                    <span className="font-semibold">
                      {plans.find(p => p.id === selectedPlan)?.name}
                    </span>
                  </div>
                  
                  <Separator className="bg-white/20" />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Base Plan:</span>
                      <span>{plans.find(p => p.id === selectedPlan)?.price}/month</span>
                    </div>
                    
                    {Object.entries(addOns).map(([key, enabled]) => {
                      if (!enabled) return null;
                      const addOn = addOnOptions.find(a => a.id === key);
                      return (
                        <div key={key} className="flex justify-between text-sm">
                          <span>{addOn?.name}:</span>
                          <span>+{addOn?.price.split('/')[0]}/month</span>
                        </div>
                      );
                    })}
                  </div>
                  
                  <Separator className="bg-white/20" />
                  
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total:</span>
                    <span>${calculateTotal()}/month</span>
                  </div>
                  
                  <Button className="w-full bg-white text-green-600 hover:bg-gray-100 font-semibold mt-6">
                    Get Started Now
                  </Button>
                  
                  <div className="flex items-center justify-center mt-4 text-sm text-green-100">
                    <Star className="h-4 w-4 mr-1" />
                    <span>30-day money-back guarantee</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Insurance;
