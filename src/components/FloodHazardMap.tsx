
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const FloodHazardMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [mapInitialized, setMapInitialized] = useState(false);

  // Flood hazard locations in Southeast Asia
  const floodHazardAreas = [
    { name: 'Thanlyin, Myanmar', lng: 96.2634, lat: 16.7675, risk: 'High', description: 'Frequent monsoon flooding' },
    { name: 'Da Nang, Vietnam', lng: 108.2022, lat: 16.0471, risk: 'High', description: 'Coastal and river flooding' },
    { name: 'Mandalay, Myanmar', lng: 96.0836, lat: 21.9588, risk: 'Medium', description: 'Seasonal river flooding' },
    { name: 'Can Tho, Vietnam', lng: 105.7851, lat: 10.0452, risk: 'High', description: 'Mekong Delta flooding' },
    { name: 'Jakarta, Indonesia', lng: 106.8456, lat: -6.2088, risk: 'Critical', description: 'Urban flooding and sinking' },
    { name: 'Bangkok, Thailand', lng: 100.5018, lat: 13.7563, risk: 'High', description: 'River and urban flooding' },
    { name: 'Metro Manila, Philippines', lng: 121.0244, lat: 14.5995, risk: 'High', description: 'Typhoon and urban flooding' }
  ];

  const initializeMap = () => {
    if (!mapContainer.current || !apiKey) return;

    mapboxgl.accessToken = apiKey;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      zoom: 4,
      center: [105, 15],
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      // Add flood hazard markers
      floodHazardAreas.forEach((area) => {
        const color = 
          area.risk === 'Critical' ? '#dc2626' :
          area.risk === 'High' ? '#ea580c' :
          area.risk === 'Medium' ? '#ca8a04' : '#16a34a';

        // Create popup
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <div class="p-2">
            <h3 class="font-bold text-sm">${area.name}</h3>
            <p class="text-xs text-gray-600">${area.description}</p>
            <p class="text-xs font-semibold mt-1">Risk Level: <span style="color: ${color}">${area.risk}</span></p>
          </div>
        `);

        // Create marker
        const marker = new mapboxgl.Marker({ color })
          .setLngLat([area.lng, area.lat])
          .setPopup(popup)
          .addTo(map.current!);
      });
    });

    setMapInitialized(true);
  };

  return (
    <div className="w-full">
      {!mapInitialized ? (
        <Card className="max-w-md mx-auto">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="mapbox-key">Mapbox Public Token</Label>
                <Input
                  id="mapbox-key"
                  type="text"
                  placeholder="Enter your Mapbox public token"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
                <p className="text-xs text-gray-600 mt-1">
                  Get your token from <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">mapbox.com</a>
                </p>
              </div>
              <Button onClick={initializeMap} disabled={!apiKey} className="w-full">
                Load Flood Hazard Map
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="relative">
          <div ref={mapContainer} className="w-full h-96 rounded-lg shadow-lg" />
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloodHazardMap;
