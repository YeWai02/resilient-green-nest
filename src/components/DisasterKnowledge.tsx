
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Heart, BookOpen, Zap, Droplets, Wind, Flame } from "lucide-react";

const DisasterKnowledge: React.FC = () => {
  const [activeDisaster, setActiveDisaster] = useState('flood');

  const disasters = {
    flood: {
      icon: Droplets,
      title: "Flood Management",
      prevention: [
        "Install proper drainage systems",
        "Keep storm drains clear of debris",
        "Plant trees and maintain green spaces",
        "Build elevated foundations"
      ],
      protection: [
        "Create emergency kits with food and water",
        "Know evacuation routes",
        "Waterproof important documents",
        "Install flood barriers if possible"
      ],
      survival: [
        "Move to higher ground immediately",
        "Avoid walking in moving water",
        "Stay away from electrical equipment",
        "Listen to emergency broadcasts"
      ]
    },
    typhoon: {
      icon: Wind,
      title: "Typhoon Preparedness",
      prevention: [
        "Strengthen building structures",
        "Trim trees near buildings",
        "Secure outdoor furniture",
        "Install storm shutters"
      ],
      protection: [
        "Stock up on emergency supplies",
        "Charge all electronic devices",
        "Fill bathtubs with water",
        "Identify safe rooms in your home"
      ],
      survival: [
        "Stay indoors and away from windows",
        "Use flashlights, not candles",
        "Avoid using generators indoors",
        "Wait for official all-clear signals"
      ]
    },
    wildfire: {
      icon: Flame,
      title: "Wildfire Safety",
      prevention: [
        "Create defensible space around homes",
        "Use fire-resistant building materials",
        "Maintain proper vegetation management",
        "Follow local fire restrictions"
      ],
      protection: [
        "Prepare evacuation bags",
        "Know multiple evacuation routes",
        "Install fire-resistant roofing",
        "Keep vehicles fueled"
      ],
      survival: [
        "Evacuate early when advised",
        "Close all windows and doors",
        "Wear protective clothing",
        "Stay low to avoid smoke inhalation"
      ]
    }
  };

  const currentDisaster = disasters[activeDisaster as keyof typeof disasters];
  const IconComponent = currentDisaster.icon;

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Disaster Knowledge Center</h2>
        <p className="text-lg text-gray-600">Learn how to prevent, protect, and survive natural disasters</p>
      </div>

      {/* Disaster Type Selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.entries(disasters).map(([key, disaster]) => {
          const DisasterIcon = disaster.icon;
          return (
            <Button
              key={key}
              variant={activeDisaster === key ? "default" : "outline"}
              className={`flex items-center space-x-2 ${
                activeDisaster === key 
                  ? "bg-blue-500 hover:bg-blue-600 text-white" 
                  : "border-blue-200 text-blue-700 hover:bg-blue-50"
              }`}
              onClick={() => setActiveDisaster(key)}
            >
              <DisasterIcon className="h-4 w-4" />
              <span>{disaster.title}</span>
            </Button>
          );
        })}
      </div>

      {/* Knowledge Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Prevention */}
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center text-green-700">
              <Shield className="h-5 w-5 mr-2" />
              Prevention
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-4">
              <IconComponent className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="font-semibold">{currentDisaster.title}</h3>
            </div>
            <ul className="space-y-2">
              {currentDisaster.prevention.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Protection */}
        <Card className="border-amber-200">
          <CardHeader>
            <CardTitle className="flex items-center text-amber-700">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Protection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-4">
              <IconComponent className="h-8 w-8 text-amber-600 mr-3" />
              <h3 className="font-semibold">{currentDisaster.title}</h3>
            </div>
            <ul className="space-y-2">
              {currentDisaster.protection.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Survival */}
        <Card className="border-red-200">
          <CardHeader>
            <CardTitle className="flex items-center text-red-700">
              <Heart className="h-5 w-5 mr-2" />
              Survival
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center mb-4">
              <IconComponent className="h-8 w-8 text-red-600 mr-3" />
              <h3 className="font-semibold">{currentDisaster.title}</h3>
            </div>
            <ul className="space-y-2">
              {currentDisaster.survival.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Emergency Contacts */}
      <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Zap className="h-5 w-5 mr-2" />
            Emergency Contacts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">199</div>
              <div className="text-sm">Fire Department</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">202</div>
              <div className="text-sm">Police</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">192</div>
              <div className="text-sm">Emergency Medical</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DisasterKnowledge;
