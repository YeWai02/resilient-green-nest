
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, BookOpen, MapPin, Mail, Phone } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

const GetInvolved: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-earth-beige">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-leaf-green to-deep-jungle-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Get Involved
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join the movement to build climate-resilient communities across ASEAN
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-jungle-green mb-6">
              Ways to Make a Difference
            </h2>
            <p className="text-xl text-deep-jungle-green/70">
              Choose how you want to contribute to our mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-premium group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-warm-clay rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-deep-jungle-green mb-4">
                  Volunteer
                </h3>
                <p className="text-deep-jungle-green/70 mb-6">
                  Help with community workshops, disaster response, and education programs
                </p>
                <ul className="text-left space-y-2 text-deep-jungle-green/70 mb-6">
                  <li>• Community education workshops</li>
                  <li>• Disaster response coordination</li>
                  <li>• Green Points program support</li>
                  <li>• Translation and outreach</li>
                </ul>
                <Button className="btn-premium w-full">
                  Become a Volunteer
                </Button>
              </CardContent>
            </Card>

            <Card className="card-premium group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-leaf-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-deep-jungle-green mb-4">
                  Host Workshops
                </h3>
                <p className="text-deep-jungle-green/70 mb-6">
                  Organize climate education workshops in your community
                </p>
                <ul className="text-left space-y-2 text-deep-jungle-green/70 mb-6">
                  <li>• Climate risk awareness</li>
                  <li>• Disaster preparedness training</li>
                  <li>• Sustainable living practices</li>
                  <li>• HYFLO installation guidance</li>
                </ul>
                <Button className="btn-premium w-full">
                  Host a Workshop
                </Button>
              </CardContent>
            </Card>

            <Card className="card-premium group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-warm-clay rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-deep-jungle-green mb-4">
                  Partner with Us
                </h3>
                <p className="text-deep-jungle-green/70 mb-6">
                  Collaborate as an organization, business, or local government
                </p>
                <ul className="text-left space-y-2 text-deep-jungle-green/70 mb-6">
                  <li>• Corporate partnerships</li>
                  <li>• NGO collaborations</li>
                  <li>• Government initiatives</li>
                  <li>• Technology integration</li>
                </ul>
                <Button className="btn-premium w-full">
                  Partner Inquiry
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sign Up Forms */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-jungle-green mb-6">
              Join the Movement
            </h2>
            <p className="text-xl text-deep-jungle-green/70">
              Fill out the form below to get started
            </p>
          </div>

          <Card className="card-premium">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-deep-jungle-green font-semibold mb-2">
                      First Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="Enter your first name" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leaf-green focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-deep-jungle-green font-semibold mb-2">
                      Last Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="Enter your last name" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leaf-green focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-deep-jungle-green font-semibold mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="Enter your email address" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leaf-green focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-deep-jungle-green font-semibold mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    placeholder="Enter your phone number" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leaf-green focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-deep-jungle-green font-semibold mb-2">
                    City / Location *
                  </label>
                  <select 
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leaf-green focus:border-transparent"
                  >
                    <option value="">Select your city</option>
                    <option value="thanlyin">Thanlyin, Myanmar</option>
                    <option value="danang">Da Nang, Vietnam</option>
                    <option value="manila">Manila, Philippines</option>
                    <option value="jakarta">Jakarta, Indonesia</option>
                    <option value="other">Other (please specify in message)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-deep-jungle-green font-semibold mb-2">
                    How would you like to get involved? *
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3 text-leaf-green focus:ring-leaf-green" />
                      <span className="text-deep-jungle-green">Volunteer for community programs</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3 text-leaf-green focus:ring-leaf-green" />
                      <span className="text-deep-jungle-green">Host educational workshops</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3 text-leaf-green focus:ring-leaf-green" />
                      <span className="text-deep-jungle-green">Partner as an organization</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3 text-leaf-green focus:ring-leaf-green" />
                      <span className="text-deep-jungle-green">Request HYFLO in my area</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-3 text-leaf-green focus:ring-leaf-green" />
                      <span className="text-deep-jungle-green">Join as an insurance member</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-deep-jungle-green font-semibold mb-2">
                    Additional Message
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us more about your interest in ECOVO..." 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leaf-green focus:border-transparent"
                  ></textarea>
                </div>

                <Button className="btn-premium w-full py-4 text-lg">
                  Join the Movement
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-r from-soft-sky-blue to-earth-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-jungle-green mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-deep-jungle-green/70">
              Have questions? We're here to help
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-premium">
              <CardContent className="p-8 text-center">
                <Mail className="h-12 w-12 text-warm-clay mx-auto mb-4" />
                <h3 className="text-xl font-bold text-deep-jungle-green mb-2">Email Us</h3>
                <p className="text-deep-jungle-green/70 mb-4">
                  Get in touch for partnerships and general inquiries
                </p>
                <a href="mailto:hello@ecovo.org" className="text-warm-clay hover:underline">
                  hello@ecovo.org
                </a>
              </CardContent>
            </Card>

            <Card className="card-premium">
              <CardContent className="p-8 text-center">
                <Phone className="h-12 w-12 text-leaf-green mx-auto mb-4" />
                <h3 className="text-xl font-bold text-deep-jungle-green mb-2">Call Us</h3>
                <p className="text-deep-jungle-green/70 mb-4">
                  Speak directly with our community team
                </p>
                <a href="tel:+856-20-5555-0123" className="text-leaf-green hover:underline">
                  +856-20-5555-0123
                </a>
              </CardContent>
            </Card>

            <Card className="card-premium">
              <CardContent className="p-8 text-center">
                <MapPin className="h-12 w-12 text-warm-clay mx-auto mb-4" />
                <h3 className="text-xl font-bold text-deep-jungle-green mb-2">Visit Us</h3>
                <p className="text-deep-jungle-green/70 mb-4">
                  Regional headquarters and community centers
                </p>
                <p className="text-deep-jungle-green">
                  ASEAN Climate Hub<br />
                  Vientiane, Laos
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-deep-jungle-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join thousands of climate heroes building resilient communities
          </p>
          <Button className="bg-warm-clay hover:bg-warm-clay/90 text-white px-8 py-4 text-lg">
            Sign Up for Updates
          </Button>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
