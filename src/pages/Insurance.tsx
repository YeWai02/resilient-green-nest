
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Check, Calculator, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";

const Insurance: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-earth-beige">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-deep-jungle-green to-warm-clay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Insurance Plans
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            People-first protection that adapts to climate risk
          </p>
        </div>
      </section>

      {/* Plans Comparison */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-jungle-green mb-6">
              Choose Your Protection Plan
            </h2>
            <p className="text-xl text-deep-jungle-green/70">
              Comprehensive coverage with climate-smart benefits
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Agricultural Plan */}
            <Card className="card-premium">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-deep-jungle-green mb-2">Agricultural</h3>
                  <div className="text-3xl font-bold text-leaf-green mb-2">0.2%</div>
                  <p className="text-deep-jungle-green/70">of property's insured value</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-leaf-green mt-0.5" />
                    <span className="text-deep-jungle-green">Basic + optional add-ons</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-leaf-green mt-0.5" />
                    <span className="text-deep-jungle-green">10-15% ALE coverage</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-leaf-green mt-0.5" />
                    <span className="text-deep-jungle-green">$2,500 - $5,000+ deductible</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-leaf-green mt-0.5" />
                    <span className="text-deep-jungle-green">Flood & pest protection</span>
                  </div>
                </div>
                
                <Button className="btn-premium w-full">Select Plan</Button>
              </CardContent>
            </Card>

            {/* Standard Plan */}
            <Card className="card-premium border-2 border-warm-clay relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-warm-clay text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-deep-jungle-green mb-2">Standard</h3>
                  <div className="text-3xl font-bold text-leaf-green mb-2">0.35%</div>
                  <p className="text-deep-jungle-green/70">of property's insured value</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-leaf-green mt-0.5" />
                    <span className="text-deep-jungle-green">80-90% rebuild cost coverage</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-leaf-green mt-0.5" />
                    <span className="text-deep-jungle-green">20% ALE coverage</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-leaf-green mt-0.5" />
                    <span className="text-deep-jungle-green">$1,000 - $2,500 deductible</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-leaf-green mt-0.5" />
                    <span className="text-deep-jungle-green">Standard perils protection</span>
                  </div>
                </div>
                
                <Button className="bg-warm-clay hover:bg-warm-clay/90 text-white w-full">Select Plan</Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="card-premium">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-deep-jungle-green mb-2">Premium</h3>
                  <div className="text-3xl font-bold text-leaf-green mb-2">0.5%</div>
                  <p className="text-deep-jungle-green/70">of property's insured value</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-leaf-green mt-0.5" />
                    <span className="text-deep-jungle-green">Full replacement cost</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-leaf-green mt-0.5" />
                    <span className="text-deep-jungle-green">30% ALE coverage</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-leaf-green mt-0.5" />
                    <span className="text-deep-jungle-green">$500 - $1,000 deductible</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-leaf-green mt-0.5" />
                    <span className="text-deep-jungle-green">Extended perils coverage</span>
                  </div>
                </div>
                
                <Button className="btn-premium w-full">Select Plan</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-jungle-green mb-6">
              Calculate Your Premium
            </h2>
            <p className="text-xl text-deep-jungle-green/70">
              Get an instant estimate based on your property value
            </p>
          </div>

          <Card className="card-premium">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-8">
                <Calculator className="h-16 w-16 text-warm-clay" />
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-deep-jungle-green font-semibold mb-2">
                    Property Value (USD)
                  </label>
                  <input 
                    type="number" 
                    placeholder="Enter property value" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leaf-green focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-deep-jungle-green font-semibold mb-2">
                    Select Plan
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-leaf-green focus:border-transparent">
                    <option>Agricultural (0.2%)</option>
                    <option>Standard (0.35%)</option>
                    <option>Premium (0.5%)</option>
                  </select>
                </div>
                
                <Button className="btn-premium w-full">Calculate Premium</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-soft-sky-blue to-earth-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-jungle-green mb-6">
              Why Choose ECOVO Insurance?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-deep-jungle-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-deep-jungle-green mb-4">Climate-Smart Coverage</h3>
              <p className="text-deep-jungle-green/70">
                Protection designed for climate risks with HYFLO integration
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-leaf-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-deep-jungle-green mb-4">Community Support</h3>
              <p className="text-deep-jungle-green/70">
                Join a network of protected families across ASEAN cities
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-warm-clay rounded-full flex items-center justify-center mx-auto mb-6">
                <Calculator className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-deep-jungle-green mb-4">Transparent Pricing</h3>
              <p className="text-deep-jungle-green/70">
                Clear, percentage-based premiums with no hidden fees
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-deep-jungle-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Protected?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join thousands of families who trust ECOVO for climate protection
          </p>
          <Link to="/get-involved">
            <Button className="bg-warm-clay hover:bg-warm-clay/90 text-white px-8 py-4 text-lg">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Insurance;
