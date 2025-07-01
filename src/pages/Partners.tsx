
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Handshake, 
  Building2, 
  Heart,
  Globe,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  Target,
  Zap
} from "lucide-react";

const Partners = () => {
  const partnerCategories = [
    {
      title: "Corporate Partners",
      icon: Building2,
      description: "Leading companies supporting climate resilience",
      partners: [
        {
          name: "GreenTech Solutions",
          type: "Technology Partner",
          contribution: "HYFLO system development",
          impact: "500+ families protected",
          logo: "🏢",
          featured: true
        },
        {
          name: "EcoMart Retail", 
          type: "Retail Partner",
          contribution: "Smart bin infrastructure",
          impact: "200 tons waste diverted",
          logo: "🛒",
          featured: false
        },
        {
          name: "CleanEnergy Corp",
          type: "Energy Partner", 
          contribution: "Solar-powered smart bins",
          impact: "50% energy reduction",
          logo: "⚡",
          featured: true
        }
      ]
    },
    {
      title: "NGO Partners",
      icon: Heart,
      description: "Non-profits amplifying our community impact",
      partners: [
        {
          name: "Climate Action Network",
          type: "Advocacy Partner",
          contribution: "Policy advocacy & awareness",
          impact: "3 policy changes influenced",
          logo: "🌍",
          featured: true
        },
        {
          name: "Community First Foundation",
          type: "Local Partner",
          contribution: "Workshop facilitation",
          impact: "150+ workshops conducted",
          logo: "🤝",
          featured: false
        },
        {
          name: "Disaster Relief Alliance",
          type: "Emergency Partner",
          contribution: "Emergency response coordination", 
          impact: "24hr response time",
          logo: "🚨",
          featured: false
        }
      ]
    },
    {
      title: "Government Partners",
      icon: Globe,
      description: "Official partnerships for policy implementation",
      partners: [
        {
          name: "Myanmar Climate Ministry",
          type: "Government Partner",
          contribution: "Policy framework & funding",
          impact: "National flood plan integration",
          logo: "🏛️",
          featured: true
        },
        {
          name: "Da Nang City Council",
          type: "Municipal Partner",
          contribution: "Local implementation support",
          impact: "City-wide program rollout",
          logo: "🏙️",
          featured: true
        }
      ]
    }
  ];

  const partnershipBenefits = [
    {
      title: "Brand Visibility",
      description: "Showcase your commitment to climate action",
      icon: Target
    },
    {
      title: "Community Impact",
      description: "Directly help vulnerable communities",
      icon: Users
    },
    {
      title: "Innovation Access",
      description: "Collaborate on cutting-edge solutions",
      icon: Zap
    },
    {
      title: "Sustainability Goals",
      description: "Achieve your ESG objectives",
      icon: TrendingUp
    }
  ];

  const partnershipTiers = [
    {
      name: "Community Supporter",
      price: "$1,000",
      period: "/year",
      features: [
        "Logo on website",
        "Quarterly impact reports",
        "Workshop sponsorship opportunities",
        "Basic marketing support"
      ],
      recommended: false
    },
    {
      name: "Climate Champion",
      price: "$5,000", 
      period: "/year",
      features: [
        "Featured partner status",
        "Co-branded initiatives",
        "Monthly impact meetings",
        "Priority event invitations",
        "Custom impact dashboard",
        "Social media collaboration"
      ],
      recommended: true
    },
    {
      name: "Innovation Leader",
      price: "Custom",
      period: "",
      features: [
        "Strategic partnership development",
        "Joint product development",
        "Executive advisory access",
        "Global expansion collaboration",
        "Custom integration opportunities",
        "Dedicated partnership manager"
      ],
      recommended: false
    }
  ];

  const successStories = [
    {
      partner: "GreenTech Solutions",
      story: "Partnering with ECOVO has allowed us to deploy our HYFLO technology to over 500 families, creating real-world impact while testing our innovation in challenging environments.",
      results: ["500+ families protected", "99.7% system uptime", "30% faster response time"],
      spokesperson: "Dr. Sarah Chen, CTO"
    },
    {
      partner: "Myanmar Climate Ministry",
      story: "ECOVO's community-centered approach perfectly complements our national climate strategy. Together, we're building resilience from the ground up.",
      results: ["National policy integration", "3 cities pilot program", "$2M additional funding secured"],
      spokesperson: "Minister Ko Thant, Climate Affairs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6">
              <Handshake className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Partners
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Together with leading organizations, we're building climate resilience across Southeast Asia
            </p>
          </div>

          {/* Partnership Impact Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <Building2 className="h-8 w-8 mx-auto mb-3" />
                <div className="text-3xl font-bold">25+</div>
                <div className="text-purple-100">Active Partners</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto mb-3" />
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-blue-100">Lives Impacted</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-green-500 to-teal-500 text-white border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 mx-auto mb-3" />
                <div className="text-3xl font-bold">$5.2M</div>
                <div className="text-green-100">Combined Investment</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <Globe className="h-8 w-8 mx-auto mb-3" />
                <div className="text-3xl font-bold">8</div>
                <div className="text-orange-100">Cities Served</div>
              </CardContent>
            </Card>
          </div>

          {/* Partner Categories */}
          <div className="mb-12">
            {partnerCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="mb-8 bg-white/70 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-gray-900">
                    <category.icon className="h-6 w-6 mr-3 text-blue-500" />
                    {category.title}
                  </CardTitle>
                  <p className="text-gray-600">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.partners.map((partner, index) => (
                      <div 
                        key={index}
                        className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                          partner.featured 
                            ? "bg-gradient-to-br from-blue-50 to-purple-50 border-blue-300 shadow-lg"
                            : "bg-white border-gray-200 shadow-md"
                        }`}
                      >
                        {partner.featured && (
                          <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-3">
                            Featured Partner
                          </Badge>
                        )}
                        
                        <div className="text-center mb-4">
                          <div className="text-4xl mb-3">{partner.logo}</div>
                          <h3 className="text-xl font-bold text-gray-900">{partner.name}</h3>
                          <Badge className="mt-2 bg-gray-100 text-gray-700">
                            {partner.type}
                          </Badge>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-gray-700 text-sm">Contribution:</h4>
                            <p className="text-gray-600">{partner.contribution}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-700 text-sm">Impact:</h4>
                            <p className="text-green-600 font-medium">{partner.impact}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Partnership Benefits */}
          <Card className="mb-12 bg-white/70 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 text-center">
                Why Partner With ECOVO?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {partnershipBenefits.map((benefit, index) => (
                  <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Partnership Tiers */}
          <Card className="mb-12 bg-white/70 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 text-center">
                Partnership Opportunities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-3 gap-8">
                {partnershipTiers.map((tier, index) => (
                  <div 
                    key={index}
                    className={`p-8 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                      tier.recommended 
                        ? "bg-gradient-to-br from-blue-50 to-purple-50 border-blue-300 shadow-lg relative"
                        : "bg-white border-gray-200 shadow-md"
                    }`}
                  >
                    {tier.recommended && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                        {tier.period && <span className="text-gray-600 ml-1">{tier.period}</span>}
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className={`w-full ${
                        tier.recommended 
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      {tier.name === "Innovation Leader" ? "Contact Us" : "Get Started"}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Success Stories */}
          <Card className="mb-12 bg-white/70 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-gray-900">
                <Award className="h-6 w-6 mr-3 text-yellow-500" />
                Partnership Success Stories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8">
                {successStories.map((story, index) => (
                  <div key={index} className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{story.partner}</h3>
                    <blockquote className="text-gray-700 mb-6 italic">
                      "{story.story}"
                    </blockquote>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Key Results:</h4>
                      <div className="space-y-1">
                        {story.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            <span className="text-gray-600">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-3">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{story.spokesperson}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 shadow-2xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Make an Impact Together?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Join our network of partners building climate resilience across Southeast Asia
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                  Become a Partner
                </Button>
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg font-semibold">
                  Download Partnership Guide
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default Partners;
