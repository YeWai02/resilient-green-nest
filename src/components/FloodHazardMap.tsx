
import React, { useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

interface WeatherData {
  temperature: number;
  humidity: number;
  precipitation: number;
  windSpeed: number;
  description: string;
}

interface FloodArea {
  name: string;
  lat: number;
  lng: number;
  risk: 'Critical' | 'High' | 'Medium' | 'Low';
  description: string;
  weather?: WeatherData;
}

const FloodHazardMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [apiKey, setApiKey] = useState('');
  const [mapInitialized, setMapInitialized] = useState(false);
  const [map, setMap] = useState<any>(null);
  const [selectedArea, setSelectedArea] = useState<FloodArea | null>(null);

  // Coastal flood hazard areas in Southeast Asia
  const floodHazardAreas: FloodArea[] = [
    { name: 'Thanlyin, Myanmar', lat: 16.7675, lng: 96.2634, risk: 'High', description: 'Frequent monsoon flooding in coastal delta' },
    { name: 'Da Nang, Vietnam', lat: 16.0471, lng: 108.2022, risk: 'High', description: 'Coastal and river flooding from typhoons' },
    { name: 'Mandalay, Myanmar', lat: 21.9588, lng: 96.0836, risk: 'Medium', description: 'Seasonal river flooding from Irrawaddy' },
    { name: 'Can Tho, Vietnam', lat: 10.0452, lng: 105.7851, risk: 'High', description: 'Mekong Delta flooding and sea level rise' },
    { name: 'Jakarta, Indonesia', lat: -6.2088, lng: 106.8456, risk: 'Critical', description: 'Urban flooding and rapid land subsidence' },
    { name: 'Bangkok, Thailand', lat: 13.7563, lng: 100.5018, risk: 'High', description: 'River and urban flooding, monsoon rains' },
    { name: 'Metro Manila, Philippines', lat: 14.5995, lng: 121.0244, risk: 'High', description: 'Typhoon and urban flooding' },
    { name: 'Semarang, Indonesia', lat: -6.9667, lng: 110.4167, risk: 'High', description: 'Coastal flooding and land subsidence' },
    { name: 'Ho Chi Minh City, Vietnam', lat: 10.8231, lng: 106.6297, risk: 'High', description: 'Tidal flooding and heavy rainfall' },
    { name: 'Penang, Malaysia', lat: 5.4164, lng: 100.3327, risk: 'Medium', description: 'Coastal flooding during monsoons' }
  ];

  // Simulate weather data (in a real app, you'd fetch from a weather API)
  const getWeatherData = (area: FloodArea): WeatherData => {
    const weatherConditions = [
      { temperature: 28, humidity: 85, precipitation: 15, windSpeed: 12, description: 'Heavy rain expected' },
      { temperature: 32, humidity: 78, precipitation: 5, windSpeed: 8, description: 'Partly cloudy' },
      { temperature: 26, humidity: 92, precipitation: 25, windSpeed: 18, description: 'Thunderstorms likely' },
      { temperature: 30, humidity: 70, precipitation: 0, windSpeed: 6, description: 'Clear skies' }
    ];
    return weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
  };

  const loadGoogleMapsScript = () => {
    if (window.google) {
      initializeMap();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    window.initMap = initializeMap;
  };

  const initializeMap = () => {
    if (!mapRef.current || !window.google) return;

    const mapInstance = new window.google.maps.Map(mapRef.current, {
      zoom: 5,
      center: { lat: 10.8231, lng: 106.6297 }, // Centered on Southeast Asia
      mapTypeId: 'hybrid',
      styles: [
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{ color: '#193341' }]
        }
      ]
    });

    setMap(mapInstance);

    // Add markers for flood hazard areas
    floodHazardAreas.forEach((area) => {
      const weather = getWeatherData(area);
      area.weather = weather;

      const marker = new window.google.maps.Marker({
        position: { lat: area.lat, lng: area.lng },
        map: mapInstance,
        title: area.name,
        icon: {
          url: getMarkerIcon(area.risk),
          scaledSize: new window.google.maps.Size(40, 40)
        }
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; max-width: 300px;">
            <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px; font-weight: bold;">${area.name}</h3>
            <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">${area.description}</p>
            <div style="margin: 8px 0;">
              <span style="font-weight: bold; color: ${getRiskColor(area.risk)};">Risk Level: ${area.risk}</span>
            </div>
            <div style="border-top: 1px solid #e5e7eb; padding-top: 8px; margin-top: 8px;">
              <h4 style="margin: 0 0 4px 0; color: #1f2937; font-size: 14px;">Current Weather</h4>
              <p style="margin: 2px 0; font-size: 12px; color: #6b7280;">${weather.description}</p>
              <div style="display: flex; justify-content: space-between; font-size: 12px; color: #6b7280;">
                <span>🌡️ ${weather.temperature}°C</span>
                <span>💧 ${weather.humidity}%</span>
                <span>🌧️ ${weather.precipitation}mm</span>
                <span>💨 ${weather.windSpeed}km/h</span>
              </div>
            </div>
          </div>
        `
      });

      marker.addListener('click', () => {
        infoWindow.open(mapInstance, marker);
        setSelectedArea(area);
      });
    });

    setMapInitialized(true);
  };

  const getMarkerIcon = (risk: string) => {
    const colors = {
      'Critical': 'red',
      'High': 'orange', 
      'Medium': 'yellow',
      'Low': 'green'
    };
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
      <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" fill="${colors[risk as keyof typeof colors]}" stroke="white" stroke-width="2"/>
        <text x="20" y="25" text-anchor="middle" fill="white" font-family="Arial" font-size="12" font-weight="bold">!</text>
      </svg>
    `)}`;
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Critical': return '#dc2626';
      case 'High': return '#ea580c';
      case 'Medium': return '#ca8a04';
      case 'Low': return '#16a34a';
      default: return '#6b7280';
    }
  };

  const initializeMapWithKey = () => {
    if (!apiKey) return;
    loadGoogleMapsScript();
  };

  return (
    <div className="w-full">
      {!mapInitialized ? (
        <Card className="max-w-md mx-auto">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="google-maps-key">Google Maps API Key</Label>
                <Input
                  id="google-maps-key"
                  type="text"
                  placeholder="Enter your Google Maps API key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
                <p className="text-xs text-gray-600 mt-1">
                  Get your API key from <a href="https://console.cloud.google.com/apis/credentials" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Cloud Console</a>
                </p>
              </div>
              <Button onClick={initializeMapWithKey} disabled={!apiKey} className="w-full">
                Load Flood Risk Map
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="relative">
          <div ref={mapRef} className="w-full h-96 rounded-lg shadow-lg" />
          
          {/* Risk Legend */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
            <h4 className="font-semibold text-sm mb-2">Flood Risk Legend</h4>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                <span>Critical Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                <span>High Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
                <span>Medium Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                <span>Low Risk</span>
              </div>
            </div>
          </div>

          {/* Weather Info Panel */}
          {selectedArea && selectedArea.weather && (
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
              <h4 className="font-semibold text-sm mb-2">{selectedArea.name}</h4>
              <Badge className={`mb-2 ${
                selectedArea.risk === 'Critical' ? 'bg-red-100 text-red-700' :
                selectedArea.risk === 'High' ? 'bg-orange-100 text-orange-700' :
                selectedArea.risk === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                'bg-green-100 text-green-700'
              }`}>
                {selectedArea.risk} Risk
              </Badge>
              <div className="text-xs space-y-1">
                <div className="font-medium">{selectedArea.weather.description}</div>
                <div className="grid grid-cols-2 gap-1 text-gray-600">
                  <span>🌡️ {selectedArea.weather.temperature}°C</span>
                  <span>💧 {selectedArea.weather.humidity}%</span>
                  <span>🌧️ {selectedArea.weather.precipitation}mm</span>
                  <span>💨 {selectedArea.weather.windSpeed}km/h</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FloodHazardMap;
