import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, Siren, Cloud, Thermometer, Droplets, Wind } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

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

interface DisasterAlert {
  id: string;
  type: 'flood' | 'storm' | 'warning';
  severity: 'critical' | 'high' | 'medium';
  location: string;
  message: string;
  timestamp: Date;
  active: boolean;
}

const FloodHazardMap = () => {
  const [selectedArea, setSelectedArea] = useState<FloodArea | null>(null);
  const [disasterAlerts, setDisasterAlerts] = useState<DisasterAlert[]>([]);

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

  // Simulate weather data
  const getWeatherData = (area: FloodArea): WeatherData => {
    const weatherConditions = [
      { temperature: 28, humidity: 85, precipitation: 15, windSpeed: 12, description: 'Heavy rain expected' },
      { temperature: 32, humidity: 78, precipitation: 5, windSpeed: 8, description: 'Partly cloudy' },
      { temperature: 26, humidity: 92, precipitation: 25, windSpeed: 18, description: 'Thunderstorms likely' },
      { temperature: 30, humidity: 70, precipitation: 0, windSpeed: 6, description: 'Clear skies' }
    ];
    return weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
  };

  // Generate sample disaster alerts
  useEffect(() => {
    const generateAlerts = () => {
      const alerts: DisasterAlert[] = [
        {
          id: '1',
          type: 'flood',
          severity: 'critical',
          location: 'Jakarta, Indonesia',
          message: 'Flash flood warning issued. Water levels rising rapidly in central districts.',
          timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
          active: true
        },
        {
          id: '2',
          type: 'storm',
          severity: 'high',
          location: 'Da Nang, Vietnam',
          message: 'Typhoon approaching. Expected landfall in 6 hours. Evacuate coastal areas.',
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
          active: true
        },
        {
          id: '3',
          type: 'warning',
          severity: 'medium',
          location: 'Bangkok, Thailand',
          message: 'Monsoon rains expected. Monitor water levels in low-lying areas.',
          timestamp: new Date(Date.now() - 45 * 60 * 1000), // 45 minutes ago
          active: true
        }
      ];
      setDisasterAlerts(alerts);
    };

    generateAlerts();
    
    // Simulate new alerts every 2 minutes
    const interval = setInterval(() => {
      if (Math.random() < 0.3) { // 30% chance of new alert
        const newAlert: DisasterAlert = {
          id: Date.now().toString(),
          type: Math.random() < 0.5 ? 'flood' : 'warning',
          severity: Math.random() < 0.3 ? 'critical' : 'high',
          location: floodHazardAreas[Math.floor(Math.random() * floodHazardAreas.length)].name,
          message: 'Water level monitoring alert. Residents advised to stay alert.',
          timestamp: new Date(),
          active: true
        };
        setDisasterAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
      }
    }, 120000); // Every 2 minutes

    return () => clearInterval(interval);
  }, []);

  const createCustomIcon = (risk: string) => {
    const colors = {
      'Critical': '#dc2626',
      'High': '#ea580c', 
      'Medium': '#ca8a04',
      'Low': '#16a34a'
    };

    return L.divIcon({
      html: `<div style="background-color: ${colors[risk as keyof typeof colors]}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; display: flex; align-items: center; justify-content: center;">
        <span style="color: white; font-size: 12px; font-weight: bold;">!</span>
      </div>`,
      className: 'custom-marker',
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'flood': return <Droplets className="h-4 w-4" />;
      case 'storm': return <Wind className="h-4 w-4" />;
      default: return <AlertTriangle className="h-4 w-4" />;
    }
  };

  const getAlertColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'border-red-500 bg-red-50';
      case 'high': return 'border-orange-500 bg-orange-50';
      default: return 'border-yellow-500 bg-yellow-50';
    }
  };

  const dismissAlert = (alertId: string) => {
    setDisasterAlerts(prev => prev.filter(alert => alert.id !== alertId));
  };

  return (
    <div className="w-full">
      {/* Disaster Alerts System */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Siren className="h-5 w-5 text-red-500" />
          <h3 className="text-lg font-semibold text-gray-900">Active Disaster Alerts</h3>
        </div>
        
        {disasterAlerts.length > 0 ? (
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {disasterAlerts.map((alert) => (
              <Alert key={alert.id} className={`${getAlertColor(alert.severity)} border-l-4`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    {getAlertIcon(alert.type)}
                    <div className="flex-1">
                      <AlertTitle className="text-sm font-medium">
                        {alert.location} - {alert.severity.toUpperCase()} {alert.type.toUpperCase()}
                      </AlertTitle>
                      <AlertDescription className="text-sm text-gray-600 mt-1">
                        {alert.message}
                      </AlertDescription>
                      <div className="text-xs text-gray-500 mt-2">
                        {alert.timestamp.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => dismissAlert(alert.id)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </Button>
                </div>
              </Alert>
            ))}
          </div>
        ) : (
          <div className="text-center py-6 text-gray-500">
            <AlertTriangle className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p>No active alerts at this time</p>
          </div>
        )}
      </div>

      {/* Map Section */}
      <div className="relative">
        <MapContainer
          center={[10.8231, 106.6297]}
          zoom={5}
          className="w-full h-96 rounded-lg shadow-lg"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {floodHazardAreas.map((area, index) => {
            const weather = getWeatherData(area);
            area.weather = weather;
            
            return (
              <Marker
                key={index}
                position={[area.lat, area.lng]}
                icon={createCustomIcon(area.risk)}
                eventHandlers={{
                  click: () => setSelectedArea(area)
                }}
              >
                <Popup>
                  <div className="p-2 max-w-xs">
                    <h3 className="font-bold text-gray-900 mb-1">{area.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{area.description}</p>
                    <Badge className={`mb-2 ${
                      area.risk === 'Critical' ? 'bg-red-100 text-red-700' :
                      area.risk === 'High' ? 'bg-orange-100 text-orange-700' :
                      area.risk === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {area.risk} Risk
                    </Badge>
                    <div className="border-t pt-2 mt-2">
                      <div className="text-xs font-medium mb-1">Current Weather</div>
                      <div className="text-xs text-gray-600 mb-1">{weather.description}</div>
                      <div className="grid grid-cols-2 gap-1 text-xs">
                        <div className="flex items-center gap-1">
                          <Thermometer className="h-3 w-3" />
                          {weather.temperature}°C
                        </div>
                        <div className="flex items-center gap-1">
                          <Droplets className="h-3 w-3" />
                          {weather.humidity}%
                        </div>
                        <div className="flex items-center gap-1">
                          <Cloud className="h-3 w-3" />
                          {weather.precipitation}mm
                        </div>
                        <div className="flex items-center gap-1">
                          <Wind className="h-3 w-3" />
                          {weather.windSpeed}km/h
                        </div>
                      </div>
                    </div>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>

        {/* Risk Legend */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg z-[1000]">
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
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs z-[1000]">
            <h4 className="font-semibold text-sm mb-2">{selectedArea.name}</h4>
            <Badge className={`mb-2 ${
              selectedArea.risk === 'Critical' ? 'bg-red-100 text-red-700' :
              selectedArea.risk === 'High' ? 'bg-orange-100 text-orange-700' :
              selectedArea.risk === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
              'bg-green-100 text-green-700'
            }`}>
              {selectedArea.risk} Risk
            </Badge>
            <div className="text-xs space-y-2">
              <div className="font-medium">{selectedArea.weather.description}</div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-1 text-gray-600">
                  <Thermometer className="h-3 w-3" />
                  <span>{selectedArea.weather.temperature}°C</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <Droplets className="h-3 w-3" />
                  <span>{selectedArea.weather.humidity}%</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <Cloud className="h-3 w-3" />
                  <span>{selectedArea.weather.precipitation}mm</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <Wind className="h-3 w-3" />
                  <span>{selectedArea.weather.windSpeed}km/h</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloodHazardMap;
