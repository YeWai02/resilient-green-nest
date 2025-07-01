
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, TrendingUp, Calendar, Bell, Settings, LogOut } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

const Dashboard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-earth-beige">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-deep-jungle-green to-leaf-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Welcome back, Mai!
              </h1>
              <p className="text-xl text-white/80">
                Your climate action dashboard
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-deep-jungle-green">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-deep-jungle-green">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="card-premium">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-deep-jungle-green/70 text-sm">Green Points</p>
                    <p className="text-2xl font-bold text-leaf-green">2,847</p>
                  </div>
                  <Award className="h-8 w-8 text-warm-clay" />
                </div>
              </CardContent>
            </Card>

            <Card className="card-premium">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-deep-jungle-green/70 text-sm">Insurance Status</p>
                    <p className="text-lg font-bold text-deep-jungle-green">Active</p>
                  </div>
                  <Shield className="h-8 w-8 text-leaf-green" />
                </div>
              </CardContent>
            </Card>

            <Card className="card-premium">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-deep-jungle-green/70 text-sm">Community Rank</p>
                    <p className="text-2xl font-bold text-warm-clay">#12</p>
                  </div>
                  <Users className="h-8 w-8 text-deep-jungle-green" />
                </div>
              </CardContent>
            </Card>

            <Card className="card-premium">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-deep-jungle-green/70 text-sm">This Month</p>
                    <p className="text-lg font-bold text-deep-jungle-green">+450 pts</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-leaf-green" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Dashboard Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Recent Activity */}
              <Card className="card-premium">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-deep-jungle-green mb-6">Recent Activity</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-leaf-green/10 rounded-lg">
                      <Award className="h-8 w-8 text-leaf-green" />
                      <div className="flex-1">
                        <p className="font-semibold text-deep-jungle-green">Earned 100 Green Points</p>
                        <p className="text-sm text-deep-jungle-green/70">Clothing donation at Thanlyin Market</p>
                      </div>
                      <span className="text-sm text-deep-jungle-green/70">2 hours ago</span>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-warm-clay/10 rounded-lg">
                      <Users className="h-8 w-8 text-warm-clay" />
                      <div className="flex-1">
                        <p className="font-semibold text-deep-jungle-green">Attended Workshop</p>
                        <p className="text-sm text-deep-jungle-green/70">Climate Preparedness Training</p>
                      </div>
                      <span className="text-sm text-deep-jungle-green/70">1 day ago</span>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-leaf-green/10 rounded-lg">
                      <TrendingUp className="h-8 w-8 text-leaf-green" />
                      <div className="flex-1">
                        <p className="font-semibold text-deep-jungle-green">TrashStep Scan</p>
                        <p className="text-sm text-deep-jungle-green/70">Recycled 5kg of plastic waste</p>
                      </div>
                      <span className="text-sm text-deep-jungle-green/70">3 days ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Insurance Status */}
              <Card className="card-premium">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-deep-jungle-green mb-6">Insurance Coverage</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-leaf-green/10 p-6 rounded-lg">
                      <Shield className="h-12 w-12 text-leaf-green mb-4" />
                      <h3 className="text-lg font-bold text-deep-jungle-green mb-2">Standard Plan</h3>
                      <p className="text-deep-jungle-green/70 mb-4">Active since March 2024</p>
                      <p className="text-sm text-deep-jungle-green/70">Next payment: July 15, 2024</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-deep-jungle-green font-semibold">Coverage Details</p>
                        <p className="text-sm text-deep-jungle-green/70">80-90% rebuild cost coverage</p>
                        <p className="text-sm text-deep-jungle-green/70">20% ALE coverage</p>
                        <p className="text-sm text-deep-jungle-green/70">$1,500 deductible</p>
                      </div>
                      <Button className="btn-premium w-full">
                        View Full Policy
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Green Points Progress */}
              <Card className="card-premium">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-deep-jungle-green mb-4">Points Progress</h3>
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-leaf-green">2,847</div>
                    <p className="text-deep-jungle-green/70">Current Points</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                    <div className="bg-leaf-green h-4 rounded-full" style={{width: '68%'}}></div>
                  </div>
                  <p className="text-center text-sm text-deep-jungle-green/70">32% to Gold Level</p>
                  <Button className="btn-premium w-full mt-4">
                    Redeem Points
                  </Button>
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card className="card-premium">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-deep-jungle-green mb-4">Upcoming Events</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-warm-clay mt-1" />
                      <div>
                        <p className="font-semibold text-deep-jungle-green text-sm">Climate Workshop</p>
                        <p className="text-xs text-deep-jungle-green/70">July 15, 2:00 PM</p>
                        <p className="text-xs text-deep-jungle-green/70">Thanlyin Community Center</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-warm-clay mt-1" />
                      <div>
                        <p className="font-semibold text-deep-jungle-green text-sm">Clothing Drive</p>
                        <p className="text-xs text-deep-jungle-green/70">July 20, 10:00 AM</p>
                        <p className="text-xs text-deep-jungle-green/70">Central Market</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Events
                  </Button>
                </CardContent>
              </Card>

              {/* Notifications */}
              <Card className="card-premium">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-deep-jungle-green">Notifications</h3>
                    <Bell className="h-5 w-5 text-warm-clay" />
                  </div>
                  <div className="space-y-3">
                    <div className="bg-warm-clay/10 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-deep-jungle-green">Flood Alert</p>
                      <p className="text-xs text-deep-jungle-green/70">High water levels expected in your area</p>
                    </div>
                    
                    <div className="bg-leaf-green/10 p-3 rounded-lg">
                      <p className="text-sm font-semibold text-deep-jungle-green">Points Milestone</p>
                      <p className="text-xs text-deep-jungle-green/70">You're 200 points away from Gold level!</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Notifications
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
