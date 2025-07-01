
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { 
  UserPlus, 
  Users, 
  Calendar,
  MapPin,
  Zap,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Award,
  MessageCircle,
  BookOpen
} from "lucide-react";
import { useState } from "react";

const GetInvolved = () => {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    experience: ''
  });

  const involvementOptions = [
    {
      id: "volunteer",
      title: "Community Volunteer",
      description: "Help with workshops, events, and community outreach",
      commitment: "4-8 hours/month",
      benefits: ["Workshop access", "Green Points", "Training materials"],
      icon: Users,
      popular: true
    },
    {
      id: "workshop-host",
      title: "Workshop Host",
      description: "Lead climate education workshops in your community",
      commitment: "2-4 workshops/month",
      benefits: ["Host training", "Materials provided", "Recognition badge"],
      icon: BookOpen,
      popular: true
    },
    {
      id: "ambassador",
      title: "ECOVO Ambassador",
      description: "Represent ECOVO at events and in your network",
      commitment: "6-10 hours/month",
      benefits: ["Ambassador kit", "Exclusive events", "Leadership training"],
      icon: Star,
      popular: false
    },
    {
      id: "technical",
      title: "Technical Contributor",
      description: "Help develop and maintain our digital platforms",
      commitment: "Flexible hours",
      benefits: ["Technical mentorship", "Portfolio building", "Innovation access"],
      icon: Zap,
      popular: false
    },
    {
      id: "fundraiser",
      title: "Community Fundraiser",
      description: "Organize fundraising events and campaigns",
      commitment: "Project-based",
      benefits: ["Fundraising training", "Event support", "Impact recognition"],
      icon: Heart,
      popular: false
    },
    {
      id: "researcher",
      title: "Climate Researcher",
      description: "Contribute to climate impact research and documentation",
      commitment: "8-12 hours/month",
      benefits: ["Research training", "Publication opportunities", "Expert network"],
      icon: Award,
      popular: false
    }
  ];

  const upcomingEvents = [
    {
      title: "Community Volunteer Orientation",
      date: "Next Saturday, 10 AM",
      location: "Thanlyin Community Center",
      type: "Training",
      spots: "8 spots left"
    },
    {
      title: "Workshop Host Training",
      date: "Next Tuesday, 7 PM",
      location: "Online via Zoom",
      type: "Training",
      spots: "12 spots left"
    },
    {
      title: "Climate Action Planning Session",
      date: "Next Friday, 2 PM",
      location: "Da Nang Eco Hub",
      type: "Planning",
      spots: "15 spots left"
    }
  ];

  const currentOpportunities = [
    {
      title: "Emergency Response Coordinators",
      urgency: "Urgent",
      description: "Help coordinate disaster response in flood-prone areas",
      skills: ["Crisis management", "Community outreach"],
      timeCommitment: "On-call basis"
    },
    {
      title: "Youth Program Leaders",
      urgency: "High Priority",
      description: "Lead climate education programs for schools",
      skills: ["Teaching", "Youth engagement"],
      timeCommitment: "10 hours/week"
    },
    {
      title: "Social Media Content Creators",
      urgency: "Medium",
      description: "Create engaging content about climate action",
      skills: ["Content creation", "Social media"],
      timeCommitment: "5 hours/week"
    }
  ];

  const testimonials = [
    {
      name: "Thant Zin",
      role: "Workshop Host",
      experience: "6 months",
      text: "Leading workshops has been incredibly rewarding. I've helped 200+ community members prepare for climate disasters while learning so much myself.",
      impact: "12 workshops hosted, 200+ participants"
    },
    {
      name: "Mai Nguyen",
      role: "Community Ambassador", 
      experience: "1 year",
      text: "Being an ECOVO Ambassador connects me with amazing people working on climate solutions. It's given me purpose and new skills.",
      impact: "50+ people recruited, 3 events organized"
    }
  ];

  const handleRoleToggle = (roleId: string) => {
    setSelectedRoles(prev => 
      prev.includes(roleId) 
        ? prev.filter(id => id !== roleId)
        : [...prev, roleId]
    );
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6">
              <UserPlus className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get Involved
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of volunteers building climate resilience in Southeast Asia. Every action counts.
            </p>
          </div>

          {/* Impact Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gradient-to-r from-green-500 to-teal-500 text-white border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto mb-3" />
                <div className="text-3xl font-bold">2,847</div>
                <div className="text-green-100">Active Volunteers</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 mx-auto mb-3" />
                <div className="text-3xl font-bold">157</div>
                <div className="text-blue-100">Events This Month</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 mx-auto mb-3" />
                <div className="text-3xl font-bold">45K+</div>
                <div className="text-purple-100">Lives Impacted</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <Heart className="h-8 w-8 mx-auto mb-3" />
                <div className="text-3xl font-bold">98%</div>
                <div className="text-orange-100">Satisfaction Rate</div>
              </CardContent>
            </Card>
          </div>

          {/* Involvement Options */}
          <Card className="mb-12 bg-white/70 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Choose Your Impact</CardTitle>
              <p className="text-gray-600">Select one or more ways you'd like to contribute to climate resilience</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {involvementOptions.map((option) => (
                  <div 
                    key={option.id}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedRoles.includes(option.id)
                        ? "bg-gradient-to-br from-green-50 to-blue-50 border-green-300 shadow-lg"
                        : "bg-white border-gray-200 shadow-md hover:border-green-200"
                    }`}
                    onClick={() => handleRoleToggle(option.id)}
                  >
                    {option.popular && (
                      <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white mb-3">
                        Popular Choice
                      </Badge>
                    )}
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                        <option.icon className="h-6 w-6 text-white" />
                      </div>
                      {selectedRoles.includes(option.id) && (
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      )}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-gray-700">Time Commitment:</span>
                        <p className="text-green-600 font-semibold">{option.commitment}</p>
                      </div>
                      
                      <div>
                        <span className="text-sm font-medium text-gray-700">Benefits:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {option.benefits.map((benefit, index) => (
                            <Badge key={index} className="bg-blue-100 text-blue-800 text-xs">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            
            {/* Sign Up Form */}
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Join the Movement</CardTitle>
                <p className="text-gray-600">Tell us about yourself and how you'd like to contribute</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input 
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input 
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input 
                        placeholder="+95 xxx xxx xxxx"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <select 
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                      >
                        <option value="">Select your city</option>
                        <option value="thanlyin">Thanlyin, Myanmar</option>
                        <option value="yangon">Yangon, Myanmar</option>
                        <option value="danang">Da Nang, Vietnam</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Previous Experience (optional)
                    </label>
                    <textarea 
                      className="w-full p-3 border border-gray-300 rounded-md h-24 resize-none"
                      placeholder="Tell us about any relevant experience with volunteering, climate action, or community work..."
                      value={formData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="newsletter" />
                      <label htmlFor="newsletter" className="text-sm text-gray-700">
                        Subscribe to our newsletter for updates and opportunities
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="whatsapp" />
                      <label htmlFor="whatsapp" className="text-sm text-gray-700">
                        Join our WhatsApp community for real-time coordination
                      </label>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-lg py-3"
                    disabled={!formData.name || !formData.email || !formData.city || selectedRoles.length === 0}
                  >
                    Join ECOVO Community
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                  
                  {selectedRoles.length === 0 && (
                    <p className="text-sm text-orange-600 text-center">
                      Please select at least one way you'd like to get involved
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events & Opportunities */}
            <div className="space-y-6">
              
              {/* Upcoming Events */}
              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-gray-900">
                    <Calendar className="h-5 w-5 mr-2" />
                    Upcoming Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="p-4 bg-white rounded-lg shadow-md border-l-4 border-green-500">
                        <h3 className="font-semibold text-gray-900">{event.title}</h3>
                        <div className="flex items-center text-sm text-gray-600 mt-2">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex justify-between items-center mt-3">
                          <Badge className="bg-blue-100 text-blue-800">
                            {event.type}
                          </Badge>
                          <span className="text-sm text-orange-600 font-medium">{event.spots}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Current Opportunities */}
              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-gray-900">
                    <Zap className="h-5 w-5 mr-2" />
                    Current Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {currentOpportunities.map((opportunity, index) => (
                      <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{opportunity.title}</h3>
                          <Badge className={
                            opportunity.urgency === "Urgent" ? "bg-red-100 text-red-800" :
                            opportunity.urgency === "High Priority" ? "bg-orange-100 text-orange-800" :
                            "bg-yellow-100 text-yellow-800"
                          }>
                            {opportunity.urgency}
                          </Badge>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{opportunity.description}</p>
                        <div className="space-y-2">
                          <div>
                            <span className="text-xs font-medium text-gray-500">Skills needed:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {opportunity.skills.map((skill, skillIndex) => (
                                <Badge key={skillIndex} className="bg-green-100 text-green-800 text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="text-xs text-gray-500">
                            <span className="font-medium">Time:</span> {opportunity.timeCommitment}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Volunteer Testimonials */}
          <Card className="mb-12 bg-white/70 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-gray-900">
                <MessageCircle className="h-6 w-6 mr-3 text-purple-500" />
                Volunteer Stories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl border-2 border-blue-200">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.role} • {testimonial.experience}</p>
                      </div>
                    </div>
                    <blockquote className="text-gray-700 mb-4 italic">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="bg-white/50 p-3 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Impact:</span>
                      <p className="text-green-600 font-semibold">{testimonial.impact}</p>
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

export default GetInvolved;
