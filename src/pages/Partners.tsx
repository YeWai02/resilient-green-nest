
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Handshake, Building, Globe, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";

const Partners: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-earth-beige">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-deep-jungle-green to-warm-clay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Partners
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We build with the best—from insurers to local councils
          </p>
        </div>
      </section>

      {/* Partnership Philosophy */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-deep-jungle-green mb-6">
                Stronger Together
              </h2>
              <p className="text-xl text-deep-jungle-green/80 mb-8 leading-relaxed">
                ECOVO's impact is amplified through strategic partnerships with insurers, technology providers, NGOs, and government agencies across ASEAN. Together, we're building climate-resilient communities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Building className="h-6 w-6 text-warm-clay" />
                  <span className="text-deep-jungle-green">Insurance & Financial Services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-6 w-6 text-warm-clay" />
                  <span className="text-deep-jungle-green">Technology & Innovation Partners</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-warm-clay" />
                  <span className="text-deep-jungle-green">NGOs & Community Organizations</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-soft-sky-blue/50 to-leaf-green/20 rounded-3xl flex items-center justify-center premium-shadow-lg">
                <Handshake className="h-32 w-32 text-deep-jungle-green/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-jungle-green mb-6">
              Our Partner Network
            </h2>
            <p className="text-xl text-deep-jungle-green/70">
              Collaborating across sectors for maximum impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="card-premium group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-warm-clay rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Building className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-deep-jungle-green mb-4">
                  Insurance Partners
                </h3>
                <p className="text-deep-jungle-green/70 mb-6">
                  Leading insurers providing climate-smart coverage solutions
                </p>
                <ul className="text-left space-y-2 text-deep-jungle-green/70">
                  <li>• FNI Insurance Group</li>
                  <li>• ASEAN Risk Solutions</li>
                  <li>• Regional Mutual Insurance</li>
                  <li>• Climate Protection Alliance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-premium group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-leaf-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-deep-jungle-green mb-4">
                  Technology Partners
                </h3>
                <p className="text-deep-jungle-green/70 mb-6">
                  Innovation leaders powering our smart solutions
                </p>
                <ul className="text-left space-y-2 text-deep-jungle-green/70">
                  <li>• HYFLO Technologies</li>
                  <li>• Smart City Solutions</li>
                  <li>• Green IoT Networks</li>
                  <li>• Climate Data Analytics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-premium group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-warm-clay rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-deep-jungle-green mb-4">
                  Community Partners
                </h3>
                <p className="text-deep-jungle-green/70 mb-6">
                  NGOs and local organizations driving grassroots change
                </p>
                <ul className="text-left space-y-2 text-deep-jungle-green/70">
                  <li>• Local Climate Action Groups</li>
                  <li>• Community Development NGOs</li>
                  <li>• Environmental Education Orgs</li>
                  <li>• Disaster Response Networks</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Partner Logos Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="bg-gray-100 h-16 rounded-lg flex items-center justify-center premium-shadow">
                <span className="text-gray-400 text-sm">Partner Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Impact */}
      <section className="py-16 bg-gradient-to-r from-soft-sky-blue to-earth-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-jungle-green mb-6">
              Partnership Impact
            </h2>
            <p className="text-xl text-deep-jungle-green/70">
              Measuring our collective achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-premium text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-warm-clay mb-2">25+</div>
                <p className="text-deep-jungle-green">Active Partners</p>
              </CardContent>
            </Card>

            <Card className="card-premium text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-leaf-green mb-2">12</div>
                <p className="text-deep-jungle-green">Cities Covered</p>
              </CardContent>
            </Card>

            <Card className="card-premium text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-warm-clay mb-2">$2.5M</div>
                <p className="text-deep-jungle-green">Joint Investment</p>
              </CardContent>
            </Card>

            <Card className="card-premium text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-leaf-green mb-2">15,000+</div>
                <p className="text-deep-jungle-green">Families Served</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-jungle-green mb-6">
              Partnership Success Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="card-premium">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-warm-clay mr-3" />
                  <h3 className="text-2xl font-bold text-deep-jungle-green">FNI Insurance Partnership</h3>
                </div>
                <p className="text-deep-jungle-green/70 mb-6">
                  Our collaboration with FNI has revolutionized flood insurance in Myanmar, providing coverage to over 5,000 families in Thanlyin while reducing claim processing time by 60%.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-leaf-green/10 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-leaf-green">5,000+</div>
                    <p className="text-sm text-deep-jungle-green/70">Families Covered</p>
                  </div>
                  <div className="bg-warm-clay/10 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-warm-clay">60%</div>
                    <p className="text-sm text-deep-jungle-green/70">Faster Claims</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-premium">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-leaf-green mr-3" />
                  <h3 className="text-2xl font-bold text-deep-jungle-green">HYFLO Technology Integration</h3>
                </div>
                <p className="text-deep-jungle-green/70 mb-6">
                  Partnering with HYFLO has enabled us to provide instant flood protection across 12 districts in Da Nang, resulting in a 40% reduction in flood-related insurance claims.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-leaf-green/10 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-leaf-green">12</div>
                    <p className="text-sm text-deep-jungle-green/70">Districts Protected</p>
                  </div>
                  <div className="bg-warm-clay/10 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-warm-clay">40%</div>
                    <p className="text-sm text-deep-jungle-green/70">Fewer Claims</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-16 bg-deep-jungle-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Become Our Partner
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join our mission to build climate-resilient communities across ASEAN
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <Handshake className="h-8 w-8 text-warm-clay mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Strategic Partnerships</h3>
              <p className="text-white/70 text-sm">Long-term collaboration opportunities</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <Building className="h-8 w-8 text-warm-clay mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Corporate Sponsorship</h3>
              <p className="text-white/70 text-sm">Support community programs and events</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <Globe className="h-8 w-8 text-warm-clay mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Technology Integration</h3>
              <p className="text-white/70 text-sm">Integrate your solutions with our platform</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-warm-clay hover:bg-warm-clay/90 text-white px-8 py-4 text-lg">
              Partner Inquiry
            </Button>
            <Link to="/get-involved">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-deep-jungle-green px-8 py-4 text-lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
