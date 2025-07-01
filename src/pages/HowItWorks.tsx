
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, BookOpen, Zap, ArrowRight, CheckCircle, Play } from "lucide-react";
import Navigation from "@/components/Navigation";

const HowItWorks = () => {
  const pillars = [
    {
      icon: Shield,
      title: "Climate Insurance",
      description: "Affordable protection against floods, storms, and climate disasters with community-based risk sharing.",
      features: ["Pay-as-you-go premiums", "Community risk pools", "Instant payouts", "HYFLO flood protection"]
    },
    {
      icon: Users,
      title: "Green Incentives",
      description: "Earn Green Points through environmental actions and redeem them for rewards and insurance discounts.",
      features: ["TrashStep recycling", "Workshop attendance", "Tree planting", "Energy conservation"]
    },
    {
      icon: BookOpen,
      title: "Climate Education",
      description: "Learn about climate risks, adaptation strategies, and sustainable living through interactive workshops.",
      features: ["Disaster preparedness", "Sustainable practices", "Community workshops", "Mobile education"]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Join ECOVO",
      description: "Sign up and choose your insurance plan based on your needs and location"
    },
    {
      step: "2", 
      title: "Take Action",
      description: "Participate in green activities, attend workshops, and earn Green Points"
    },
    {
      step: "3",
      title: "Get Protected",
      description: "Enjoy insurance coverage and redeem rewards while building community resilience"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6 text-sm font-medium">
            Climate Resilience Solution
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            How ECOVO
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent"> Works</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            ECOVO bridges the climate protection gap through an innovative combination of affordable insurance, 
            green incentives, and community education.
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Play className="h-5 w-5 mr-2" />
            Watch Demo Video
          </Button>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Climate Challenge
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold">!</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Climate Threats Are Increasing</h3>
                    <p className="text-gray-600">Floods, storms, and extreme weather events are becoming more frequent and severe across Southeast Asia.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-600 font-bold">$</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Insurance Gap</h3>
                    <p className="text-gray-600">Traditional insurance is too expensive or unavailable for many families and communities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">?</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Knowledge Barrier</h3>
                    <p className="text-gray-600">Limited awareness about climate risks and adaptation strategies in vulnerable communities.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-green-400 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">The Numbers</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold">90%</div>
                    <div className="text-blue-100">of climate disasters are uninsured in ASEAN</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">$35B</div>
                    <div className="text-blue-100">annual economic losses from climate events</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">650M</div>
                    <div className="text-blue-100">people at risk in Southeast Asia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Three Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ECOVO's integrated approach combines protection, incentives, and education to build truly resilient communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={index} className="relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="h-16 w-16 bg-gradient-to-br from-green-400 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <pillar.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6 leading-relaxed">{pillar.description}</p>
                  <div className="space-y-3">
                    {pillar.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Simple Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started with ECOVO is easy. Follow these three simple steps to build your climate resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="h-20 w-20 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full">
                    <ArrowRight className="h-6 w-6 text-green-400 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Climate Resilience?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join thousands of families already protected by ECOVO's innovative climate solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Get Started Today
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-3 rounded-full">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
