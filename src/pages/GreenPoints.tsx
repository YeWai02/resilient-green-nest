
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Leaf, Recycle, Users, Trophy, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";

const GreenPoints: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-earth-beige">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-leaf-green to-deep-jungle-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Green Points & Rewards
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Turn Trash into Trees. Points into Protection.
          </p>
        </div>
      </section>

      {/* Points Dashboard Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-deep-jungle-green mb-6">
                Your Impact Dashboard
              </h2>
              <Card className="card-premium">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-deep-jungle-green">Current Points</h3>
                    <Trophy className="h-8 w-8 text-warm-clay" />
                  </div>
                  <div className="text-4xl font-bold text-leaf-green mb-4">2,847</div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                    <div className="bg-leaf-green h-3 rounded-full" style={{width: '68%'}}></div>
                  </div>
                  <p className="text-deep-jungle-green/70">68% to next level</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-deep-jungle-green">Earn Points By:</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg premium-shadow">
                  <Recycle className="h-8 w-8 text-leaf-green" />
                  <div>
                    <h4 className="font-semibold text-deep-jungle-green">Using TrashStep</h4>
                    <p className="text-deep-jungle-green/70">50 points per scan</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg premium-shadow">
                  <Leaf className="h-8 w-8 text-leaf-green" />
                  <div>
                    <h4 className="font-semibold text-deep-jungle-green">Donating Clothes</h4>
                    <p className="text-deep-jungle-green/70">100 points per donation</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg premium-shadow">
                  <Users className="h-8 w-8 text-leaf-green" />
                  <div>
                    <h4 className="font-semibold text-deep-jungle-green">Attending Workshops</h4>
                    <p className="text-deep-jungle-green/70">200 points per session</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Catalog */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-jungle-green mb-6">
              Redeem Your Points
            </h2>
            <p className="text-xl text-deep-jungle-green/70">
              Choose from eco-friendly rewards that make a difference
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-premium group">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-warm-clay rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-deep-jungle-green mb-2">Solar Kit</h3>
                <p className="text-deep-jungle-green/70 mb-4">Portable solar charging station</p>
                <div className="text-2xl font-bold text-leaf-green mb-4">2,500 pts</div>
                <Button className="btn-premium w-full">Redeem</Button>
              </CardContent>
            </Card>

            <Card className="card-premium group">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-leaf-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Leaf className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-deep-jungle-green mb-2">Indoor Plants</h3>
                <p className="text-deep-jungle-green/70 mb-4">Air-purifying plant collection</p>
                <div className="text-2xl font-bold text-leaf-green mb-4">1,800 pts</div>
                <Button className="btn-premium w-full">Redeem</Button>
              </CardContent>
            </Card>

            <Card className="card-premium group">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-warm-clay rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-deep-jungle-green mb-2">Cooling Fan</h3>
                <p className="text-deep-jungle-green/70 mb-4">Energy-efficient cooling solution</p>
                <div className="text-2xl font-bold text-leaf-green mb-4">3,200 pts</div>
                <Button className="btn-premium w-full">Redeem</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="py-16 bg-gradient-to-r from-soft-sky-blue to-earth-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-deep-jungle-green mb-12">
            Community Leaderboard
          </h2>
          
          <Card className="card-premium">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-warm-clay/10 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-warm-clay rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <span className="font-semibold text-deep-jungle-green">Thanlyin Warriors</span>
                  </div>
                  <span className="text-leaf-green font-bold">12,847 pts</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-leaf-green/10 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-leaf-green rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <span className="font-semibold text-deep-jungle-green">Da Nang Heroes</span>
                  </div>
                  <span className="text-leaf-green font-bold">11,204 pts</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-deep-jungle-green/10 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-deep-jungle-green rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <span className="font-semibold text-deep-jungle-green">Manila Guardians</span>
                  </div>
                  <span className="text-leaf-green font-bold">9,876 pts</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-deep-jungle-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Earning Points Today
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join thousands making a difference while earning rewards
          </p>
          <Link to="/get-involved">
            <Button className="bg-warm-clay hover:bg-warm-clay/90 text-white px-8 py-4 text-lg">
              Join Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GreenPoints;
