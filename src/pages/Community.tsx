
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, Award, TrendingUp, MapPin, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";

const Community: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-earth-beige">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-deep-jungle-green to-leaf-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Community Impact
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Together we're building resilient communities across ASEAN cities
          </p>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="card-premium text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-warm-clay rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-deep-jungle-green mb-2">15,000+</div>
                <p className="text-deep-jungle-green/70">Families Protected</p>
              </CardContent>
            </Card>

            <Card className="card-premium text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-leaf-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-deep-jungle-green mb-2">2.5M</div>
                <p className="text-deep-jungle-green/70">Tons Waste Diverted</p>
              </CardContent>
            </Card>

            <Card className="card-premium text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-warm-clay rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-deep-jungle-green mb-2">850+</div>
                <p className="text-deep-jungle-green/70">Workshops Held</p>
              </CardContent>
            </Card>

            <Card className="card-premium text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-leaf-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-deep-jungle-green mb-2">92%</div>
                <p className="text-deep-jungle-green/70">Satisfaction Rate</p>
              </CardContent>
            </Card>
          </div>

          {/* Survey Results */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-deep-jungle-green mb-8">
                Real Impact on Families
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg premium-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-deep-jungle-green">Feel More in Control</span>
                    <span className="text-2xl font-bold text-leaf-green">70%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-leaf-green h-3 rounded-full" style={{width: '70%'}}></div>
                  </div>
                  <p className="text-sm text-deep-jungle-green/70 mt-2">of 500 surveyed families</p>
                </div>

                <div className="bg-white p-6 rounded-lg premium-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-deep-jungle-green">More Eco-Aware Parents</span>
                    <span className="text-2xl font-bold text-leaf-green">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-leaf-green h-3 rounded-full" style={{width: '90%'}}></div>
                  </div>
                  <p className="text-sm text-deep-jungle-green/70 mt-2">report increased environmental awareness</p>
                </div>

                <div className="bg-white p-6 rounded-lg premium-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-deep-jungle-green">Changed Habits</span>
                    <span className="text-2xl font-bold text-leaf-green">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-leaf-green h-3 rounded-full" style={{width: '80%'}}></div>
                  </div>
                  <p className="text-sm text-deep-jungle-green/70 mt-2">adopted new sustainable practices</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-soft-sky-blue/50 to-leaf-green/20 rounded-3xl flex items-center justify-center premium-shadow-lg">
                <Users className="h-32 w-32 text-deep-jungle-green/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-jungle-green mb-6">
              City Success Stories
            </h2>
            <p className="text-xl text-deep-jungle-green/70">
              See how ECOVO is transforming communities across ASEAN
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="card-premium">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-warm-clay mr-2" />
                  <h3 className="text-2xl font-bold text-deep-jungle-green">Thanlyin, Myanmar</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-leaf-green/10 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-leaf-green">65% Reduction</div>
                    <p className="text-deep-jungle-green/70">in flood-related insurance claims</p>
                  </div>
                  <div className="bg-warm-clay/10 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-warm-clay">450 Families</div>
                    <p className="text-deep-jungle-green/70">actively using HYFLO protection</p>
                  </div>
                  <p className="text-deep-jungle-green/70">
                    "ECOVO transformed our community's approach to flood risk. Families now feel empowered rather than helpless."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-premium">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-warm-clay mr-2" />
                  <h3 className="text-2xl font-bold text-deep-jungle-green">Da Nang, Vietnam</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-leaf-green/10 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-leaf-green">40% Fewer</div>
                    <p className="text-deep-jungle-green/70">flood claims post-HYFLO installation</p>
                  </div>
                  <div className="bg-warm-clay/10 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-warm-clay">12 Districts</div>
                    <p className="text-deep-jungle-green/70">now equipped with HYFLO barriers</p>
                  </div>
                  <p className="text-deep-jungle-green/70">
                    "The combination of insurance and instant protection has revolutionized our disaster preparedness."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-soft-sky-blue to-earth-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-jungle-green mb-6">
              Voices from Our Community
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-premium">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-warm-clay mb-4" />
                <p className="text-lg text-deep-jungle-green/80 mb-6 italic">
                  "Now I see how even my home can be part of saving the Earth. My kids are learning, and we're all making a difference together."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-leaf-green rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">MH</span>
                  </div>
                  <div>
                    <div className="font-semibold text-deep-jungle-green">Mai Htoo</div>
                    <div className="text-deep-jungle-green/70">ECOVO Youth Participant</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-premium">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-warm-clay mb-4" />
                <p className="text-lg text-deep-jungle-green/80 mb-6 italic">
                  "ECOVO doesn't just protect our home - it's teaching our entire family how to be climate heroes. The kids love earning Green Points!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-warm-clay rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">LN</span>
                  </div>
                  <div>
                    <div className="font-semibold text-deep-jungle-green">Linh Nguyen</div>
                    <div className="text-deep-jungle-green/70">Da Nang Parent</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eco Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-deep-jungle-green mb-6">
            Eco Hero of the Month
          </h2>
          
          <Card className="card-premium">
            <CardContent className="p-8">
              <div className="w-24 h-24 bg-gradient-to-br from-warm-clay to-leaf-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-deep-jungle-green mb-4">
                The Recycling Champions of Thanlyin
              </h3>
              <p className="text-lg text-deep-jungle-green/70 mb-6">
                This community group collected over 5,000 kg of recyclables in just one month, earning enough Green Points to fund solar panels for their entire neighborhood school.
              </p>
              <div className="text-3xl font-bold text-leaf-green mb-2">25,000 Points</div>
              <p className="text-deep-jungle-green/70">Earned in June 2024</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-deep-jungle-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Be Part of the Change
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join thousands of families creating climate-resilient communities
          </p>
          <Link to="/get-involved">
            <Button className="bg-warm-clay hover:bg-warm-clay/90 text-white px-8 py-4 text-lg">
              Join Our Community
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Community;
