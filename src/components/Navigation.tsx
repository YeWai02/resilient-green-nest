
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
import LanguageSelector from './LanguageSelector';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navigationItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.how.it.works'), path: '/how-it-works' },
    { name: t('nav.hyflo'), path: '/hyflo' },
    { name: t('nav.green.points'), path: '/green-points' },
    { name: t('nav.insurance'), path: '/insurance' },
    { name: t('nav.community'), path: '/community' },
    { name: t('nav.donate'), path: '/donate' },
    { name: t('nav.partners'), path: '/partners' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white premium-shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-leaf-green" />
            <span className="text-2xl font-bold text-deep-jungle-green">ECOVO</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-warm-clay ${
                  isActive(item.path) 
                    ? 'text-warm-clay border-b-2 border-warm-clay' 
                    : 'text-deep-jungle-green'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <LanguageSelector />
            
            <Link to="/get-involved">
              <Button className="btn-premium">
                {t('nav.get.involved')}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSelector />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-deep-jungle-green hover:text-warm-clay"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:text-warm-clay ${
                    isActive(item.path) ? 'text-warm-clay' : 'text-deep-jungle-green'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/get-involved" onClick={() => setIsOpen(false)}>
                <Button className="btn-premium w-full mt-4">
                  {t('nav.get.involved')}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
