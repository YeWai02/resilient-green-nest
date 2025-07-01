
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Award, BookOpen, ArrowRight, Users, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";

const HowItWorks: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-earth-beige">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-deep-jungle-green to-leaf-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            {t('how.it.works.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('how.it.works.subtitle')}
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-deep-jungle-green mb-6">
                {t('how.problem.title')}
              </h2>
              <p className="text-xl text-deep-jungle-green/80 mb-8 leading-relaxed">
                {t('how.problem.description')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-6 w-6 text-warm-clay" />
                  <span className="text-deep-jungle-green">{t('how.problem.point1')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-6 w-6 text-warm-clay" />
                  <span className="text-deep-jungle-green">{t('how.problem.point2')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-6 w-6 text-warm-clay" />
                  <span className="text-deep-jungle-green">{t('how.problem.point3')}</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-warm-clay/20 to-deep-jungle-green/20 rounded-3xl flex items-center justify-center premium-shadow-lg">
                <Users className="h-32 w-32 text-warm-clay animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The ECOVO Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-deep-jungle-green mb-6">
            {t('how.solution.title')}
          </h2>
          <p className="text-xl text-deep-jungle-green/70 mb-12 max-w-3xl mx-auto">
            {t('how.solution.description')}
          </p>

          {/* Three Pillars Flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="card-premium group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-warm-clay rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-deep-jungle-green mb-4">
                  {t('how.pillar.insurance')}
                </h3>
                <p className="text-deep-jungle-green/70">
                  {t('how.pillar.insurance.desc')}
                </p>
              </CardContent>
            </Card>

            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="h-8 w-8 text-leaf-green" />
            </div>

            <Card className="card-premium group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-leaf-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-deep-jungle-green mb-4">
                  {t('how.pillar.incentives')}
                </h3>
                <p className="text-deep-jungle-green/70">
                  {t('how.pillar.incentives.desc')}
                </p>
              </CardContent>
            </Card>

            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="h-8 w-8 text-leaf-green" />
            </div>

            <Card className="card-premium group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-warm-clay rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-deep-jungle-green mb-4">
                  {t('how.pillar.education')}
                </h3>
                <p className="text-deep-jungle-green/70">
                  {t('how.pillar.education.desc')}
                </p>
              </CardContent>
            </div>
          </div>
        </div>
      </section>

      {/* How It All Works Together */}
      <section className="py-16 bg-gradient-to-r from-soft-sky-blue to-earth-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-deep-jungle-green mb-6">
              {t('how.works.together')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-jungle-green rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
              <h3 className="font-semibold text-deep-jungle-green mb-2">{t('how.step1.title')}</h3>
              <p className="text-sm text-deep-jungle-green/70">{t('how.step1.desc')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-leaf-green rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
              <h3 className="font-semibold text-deep-jungle-green mb-2">{t('how.step2.title')}</h3>
              <p className="text-sm text-deep-jungle-green/70">{t('how.step2.desc')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-warm-clay rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
              <h3 className="font-semibold text-deep-jungle-green mb-2">{t('how.step3.title')}</h3>
              <p className="text-sm text-deep-jungle-green/70">{t('how.step3.desc')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-jungle-green rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">4</div>
              <h3 className="font-semibold text-deep-jungle-green mb-2">{t('how.step4.title')}</h3>
              <p className="text-sm text-deep-jungle-green/70">{t('how.step4.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-deep-jungle-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('how.ready.to.join')}
          </h2>
          <p className="text-xl text-white/80 mb-8">
            {t('how.start.journey')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved">
              <Button className="bg-warm-clay hover:bg-warm-clay/90 text-white px-8 py-4 text-lg">
                {t('how.get.started')}
              </Button>
            </Link>
            <Link to="/insurance">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-deep-jungle-green px-8 py-4 text-lg">
                {t('how.explore.insurance')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
