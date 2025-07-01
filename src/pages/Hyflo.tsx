
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, MapPin, Play, Clock, Users } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

const Hyflo: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    { icon: Clock, title: t('hyflo.feature.8sec'), desc: t('hyflo.feature.8sec.desc') },
    { icon: Shield, title: t('hyflo.feature.underground'), desc: t('hyflo.feature.underground.desc') },
    { icon: CheckCircle, title: t('hyflo.feature.tested'), desc: t('hyflo.feature.tested.desc') },
    { icon: Users, title: t('hyflo.feature.urban'), desc: t('hyflo.feature.urban.desc') }
  ];

  const pilotCities = [
    { name: 'Da Nang', country: 'Vietnam', stat: '40%', metric: t('hyflo.pilot.fewer.claims') },
    { name: 'Thanlyin', country: 'Myanmar', stat: '60%', metric: t('hyflo.pilot.faster.response') },
    { name: 'Pasig', country: 'Philippines', stat: '75%', metric: t('hyflo.pilot.community.satisfaction') },
    { name: 'Bangkok', country: 'Thailand', stat: '50%', metric: t('hyflo.pilot.reduced.damage') }
  ];

  return (
    <div className="min-h-screen bg-earth-beige">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-deep-jungle-green via-leaf-green to-warm-clay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                {t('hyflo.title')}
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-white/90">
                {t('hyflo.subtitle')}
              </p>
              <Button className="bg-white text-deep-jungle-green hover:bg-white/90 px-8 py-4 text-lg font-semibold">
                <Play className="mr-2 h-5 w-5" />
                {t('hyflo.watch.demo')}
              </Button>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center premium-shadow-lg">
                <div className="text-center">
                  <Play className="h-20 w-20 text-white mx-auto mb-4 animate-pulse" />
                  <p className="text-white font-semibold">{t('hyflo.demo.video')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-jungle-green mb-6">
              {t('hyflo.zero.notice')}
            </h2>
            <p className="text-xl text-deep-jungle-green/70 max-w-3xl mx-auto">
              {t('hyflo.zero.notice.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-premium text-center group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-warm-clay mx-auto mb-4 group-hover:animate-bounce" />
                  <h3 className="text-lg font-bold text-deep-jungle-green mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-deep-jungle-green/70 text-sm">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 bg-soft-sky-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-jungle-green mb-6">
              {t('hyflo.pilot.cities')}
            </h2>
            <p className="text-xl text-deep-jungle-green/70">
              {t('hyflo.pilot.cities.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {pilotCities.map((city, index) => (
              <Card key={index} className="card-premium">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-6 w-6 text-warm-clay" />
                      <div>
                        <h3 className="text-lg font-bold text-deep-jungle-green">{city.name}</h3>
                        <p className="text-deep-jungle-green/70 text-sm">{city.country}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-leaf-green">{city.stat}</div>
                      <div className="text-sm text-deep-jungle-green/70">{city.metric}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button className="btn-premium">
              <MapPin className="mr-2 h-5 w-5" />
              {t('hyflo.request.area')}
            </Button>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-deep-jungle-green mb-6">
                {t('hyflo.technical.specs')}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-leaf-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-deep-jungle-green">{t('hyflo.spec.deployment')}</h3>
                    <p className="text-deep-jungle-green/70">{t('hyflo.spec.deployment.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-leaf-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-deep-jungle-green">{t('hyflo.spec.height')}</h3>
                    <p className="text-deep-jungle-green/70">{t('hyflo.spec.height.desc')}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-leaf-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-deep-jungle-green">{t('hyflo.spec.maintenance')}</h3>
                    <p className="text-deep-jungle-green/70">{t('hyflo.spec.maintenance.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-leaf-green/20 to-warm-clay/20 rounded-3xl premium-shadow-lg flex items-center justify-center">
                <Shield className="h-32 w-32 text-leaf-green animate-pulse-slow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-deep-jungle-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('hyflo.protect.community')}
          </h2>
          <p className="text-xl text-white/80 mb-8">
            {t('hyflo.protect.community.desc')}
          </p>
          <Button className="bg-warm-clay hover:bg-warm-clay/90 text-white px-8 py-4 text-lg">
            {t('hyflo.request.hyflo')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Hyflo;
