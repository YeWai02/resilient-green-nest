
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Calendar, Truck, Recycle, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";

const Donate: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-earth-beige">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-warm-clay to-deep-jungle-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Donate & Swap Clothes
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Swap old clothes for dignity, discounts, and disaster recovery
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-jungle-green mb-6">
              How Clothing Donation Works
            </h2>
            <p className="text-xl text-deep-jungle-green/70">
              Your donations directly support disaster recovery and earn you Green Points
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-warm-clay rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-deep-jungle-green mb-4">1. Collect</h3>
              <p className="text-deep-jungle-green/70">
                Gather clean, gently used clothing from your family
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-leaf-green rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-deep-jungle-green mb-4">2. Drop Off</h3>
              <p className="text-deep-jungle-green/70">
                Visit one of our smart donation bins across the city
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-warm-clay rounded-full flex items-center justify-center mx-auto mb-6">
                <Recycle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-deep-jungle-green mb-4">3. Earn Points</h3>
              <p className="text-deep-jungle-green/70">
                Receive 100 Green Points for every donation
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-leaf-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-deep-jungle-green mb-4">4. Help Families</h3>
              <p className="text-deep-jungle-green/70">
                Clothes go to disaster-affected families in need
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Drop-off Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-jungle-green mb-6">
              Find Drop-Off Points
            </h2>
            <p className="text-xl text-deep-jungle-green/70">
              Convenient locations across ASEAN cities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-premium">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-warm-clay mr-2" />
                  <h3 className="text-lg font-bold text-deep-jungle-green">Thanlyin Market</h3>
                </div>
                <p className="text-deep-jungle-green/70 mb-4">
                  Main Market Square, Near Bus Terminal
                </p>
                <div className="flex items-center text-sm text-deep-jungle-green/60">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Open 24/7</span>
                </div>
              </CardContent>
            </Card>

            <Card className="card-premium">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-warm-clay mr-2" />
                  <h3 className="text-lg font-bold text-deep-jungle-green">Da Nang Central</h3>
                </div>
                <p className="text-deep-jungle-green/70 mb-4">
                  Bach Dang Street, Near City Hall
                </p>
                <div className="flex items-center text-sm text-deep-jungle-green/60">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Open 24/7</span>
                </div>
              </CardContent>
            </Card>

            <Card className="card-premium">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-warm-clay mr-2" />
                  <h3 className="text-lg font-bold text-deep-jungle-green">Manila Bay</h3>
                </div>
                <p className="text-deep-jungle-green/70 mb-4">
                  Roxas Boulevard, Near Mall of Asia
                </p>
                <div className="flex items-center text-sm text-deep-jungle-green/60">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Open 24/7</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button className="btn-premium">
              View All Locations
            </Button>
          </div>
        </div>
      </section>

      {/* Pickup Service */}
      <section className="py-16 bg-gradient-to-r from-soft-sky-blue to-earth-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-deep-jungle-green mb-6">
                Schedule Free Pickup
              </h2>
              <p className="text-xl text-deep-jungle-green/70 mb-8">
                Can't make it to a drop-off point? We'll come to you for large donations!
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Truck className="h-6 w-6 text-warm-clay" />
                  <span className="text-deep-jungle-green">Free pickup for 20+ items</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-6 w-6 text-warm-clay" />
                  <span className="text-deep-jungle-green">Schedule within 48 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-warm-clay" />
                  <span className="text-deep-jungle-green">Bonus points for large donations</span>
                </div>
              </div>
              
              <Button className="btn-premium">
                Schedule Pickup
              </Button>
            </div>

            <Card className="card-premium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-deep-jungle-green mb-6">Request Pickup</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-deep-jungle-green font-semibold mb-2">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leaf-green focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-deep-jungle-green font-semibold mb-2">
                      Address
                    </label>
                    <input 
                      type="text" 
                      placeholder="Enter pickup address" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leaf-green focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-deep-jungle-green font-semibold mb-2">
                      Estimated Items
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leaf-green focus:border-transparent">
                      <option>20-50 items</option>
                      <option>50-100 items</option>
                      <option>100+ items</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-deep-jungle-green font-semibold mb-2">
                      Preferred Date
                    </label>
                    <input 
                      type="date" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leaf-green focus:border-transparent"
                    />
                  </div>
                  
                  <Button className="btn-premium w-full">
                    Request Pickup
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-jungle-green mb-6">
              Your Donations Make a Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-premium text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-warm-clay mb-4">125,000+</div>
                <p className="text-xl text-deep-jungle-green mb-2">Items Donated</p>
                <p className="text-deep-jungle-green/70">Clothes redistributed to families in need</p>
              </CardContent>
            </Card>

            <Card className="card-premium text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-leaf-green mb-4">8,500</div>
                <p className="text-xl text-deep-jungle-green mb-2">Families Helped</p>
                <p className="text-deep-jungle-green/70">Disaster-affected families supported</p>
              </CardContent>
            </Card>

            <Card className="card-premium text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-warm-clay mb-4">45 Tons</div>
                <p className="text-xl text-deep-jungle-green mb-2">Waste Diverted</p>
                <p className="text-deep-jungle-green/70">From landfills through reuse</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-deep-jungle-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Making a Difference Today
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Every donation helps build stronger, more resilient communities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-warm-clay hover:bg-warm-clay/90 text-white px-8 py-4 text-lg">
              Find Drop-Off Point
            </Button>
            <Link to="/green-points">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-deep-jungle-green px-8 py-4 text-lg">
                View Green Points
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
