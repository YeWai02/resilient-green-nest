
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Award, BookOpen, Users, Leaf, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-earth-beige via-soft-sky-blue to-earth-beige">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-deep-jungle-green mb-6">
                {t('hero.turning.tide')}
              </h1>
              <p className="text-xl lg:text-2xl text-deep-jungle-green/80 mb-8 leading-relaxed">
                {t('hero.people.first')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/insurance">
                  <Button className="btn-premium">
                    <Shield className="mr-2 h-5 w-5" />
                    {t('hero.get.insured')}
                  </Button>
                </Link>
                <Link to="/green-points">
                  <Button className="btn-secondary">
                    <Leaf className="mr-2 h-5 w-5" />
                    {t('hero.earn.points')}
                  </Button>
                </Link>
                <Link to="/hyflo">
                  <Button variant="outline" className="border-warm-clay text-warm-clay hover:bg-warm-clay hover:text-white">
                    {t('hero.watch.hyflo')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-float">
              <div className="w-full h-96 bg-gradient-to-br from-leaf-green/20 to-warm-clay/20 rounded-3xl flex items-center justify-center premium-shadow-lg">
                <div className="text-center">
                  <Users className="h-24 w-24 text-leaf-green mx-auto mb-4" />
                  <p className="text-deep-jungle-green font-semibold">
                    {t('hero.family.protection')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid Section - Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-deep-jungle-green mb-4">
            {t('home.closing.belief.gap')}
          </h2>
          <p className="text-xl text-deep-jungle-green/70 mb-12 max-w-3xl mx-auto">
            {t('home.tools.reward.action')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-premium group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <Shield className="h-16 w-16 text-warm-clay mx-auto mb-4 group-hover:animate-pulse" />
                <h3 className="text-2xl font-bold text-deep-jungle-green mb-4">
                  {t('home.insurance')}
                </h3>
                <p className="text-deep-jungle-green/70">
                  {t('home.insurance.desc')}
                </p>
              </CardContent>
            </Card>

            <Card className="card-premium group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <Award className="h-16 w-16 text-leaf-green mx-auto mb-4 group-hover:animate-pulse" />
                <h3 className="text-2xl font-bold text-deep-jungle-green mb-4">
                  {t('home.incentives')}
                </h3>
                <p className="text-deep-jungle-green/70">
                  {t('home.incentives.desc')}
                </p>
              </CardContent>
            </Card>

            <Card className="card-premium group hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <BookOpen className="h-16 w-16 text-warm-clay mx-auto mb-4 group-hover:animate-pulse" />
                <h3 className="text-2xl font-bold text-deep-jungle-green mb-4">
                  {t('home.education')}
                </h3>
                <p className="text-deep-jungle-green/70">
                  {t('home.education.desc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Impact Preview */}
      <section className="py-16 bg-gradient-to-r from-leaf-green to-warm-clay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                {t('home.real.impact')}
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">200M+</div>
                  <div className="text-white/80">{t('home.people.protected')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">8 sec</div>
                  <div className="text-white/80">{t('home.flood.protection')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">70%</div>
                  <div className="text-white/80">{t('home.feel.control')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">90%</div>
                  <div className="text-white/80">{t('home.eco.aware')}</div>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <Heart className="h-32 w-32 text-white/20 mx-auto lg:ml-auto animate-pulse-slow" />
              <blockquote className="text-xl text-white/90 italic mt-6">
                "{t('home.quote')}"
              </blockquote>
              <cite className="text-white/70 mt-2 block">
                — {t('home.quote.author')}
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-deep-jungle-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('home.ready.to.start')}
          </h2>
          <p className="text-xl text-white/80 mb-8">
            {t('home.join.movement')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved">
              <Button className="bg-warm-clay hover:bg-warm-clay/90 text-white px-8 py-4 text-lg">
                {t('home.get.started')}
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-deep-jungle-green px-8 py-4 text-lg">
                {t('home.learn.more')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
