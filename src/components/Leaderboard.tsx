
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Star } from "lucide-react";

interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  trashCaptured: number;
  badge: string;
  city: string;
}

const Leaderboard: React.FC = () => {
  const leaderboardData: LeaderboardEntry[] = [
    { rank: 1, name: "Aung Min", points: 850, trashCaptured: 170, badge: "Climate Hero", city: "Yangon" },
    { rank: 2, name: "Siti Rahman", points: 720, trashCaptured: 144, badge: "Eco Champion", city: "Kuala Lumpur" },
    { rank: 3, name: "Nguyen Linh", points: 695, trashCaptured: 139, badge: "Green Guardian", city: "Ho Chi Minh" },
    { rank: 4, name: "Maria Santos", points: 580, trashCaptured: 116, badge: "Eco Warrior", city: "Manila" },
    { rank: 5, name: "Wayan Putra", points: 520, trashCaptured: 104, badge: "Nature Protector", city: "Jakarta" },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />;
      default:
        return <Star className="h-5 w-5 text-gray-500" />;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-400 to-yellow-600";
      case 2:
        return "bg-gradient-to-r from-gray-300 to-gray-500";
      case 3:
        return "bg-gradient-to-r from-amber-400 to-amber-600";
      default:
        return "bg-gradient-to-r from-green-400 to-green-600";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-amber-700">
          <Trophy className="h-5 w-5 mr-2" />
          ASEAN Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {leaderboardData.map((entry) => (
            <div
              key={entry.rank}
              className={`p-4 rounded-lg ${
                entry.rank <= 3 ? 'bg-gradient-to-r text-white' : 'bg-gray-50'
              } ${getRankColor(entry.rank)}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getRankIcon(entry.rank)}
                  <div>
                    <div className={`font-semibold ${entry.rank <= 3 ? 'text-white' : 'text-gray-900'}`}>
                      {entry.name}
                    </div>
                    <div className={`text-sm ${entry.rank <= 3 ? 'text-white/80' : 'text-gray-600'}`}>
                      {entry.city}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-lg font-bold ${entry.rank <= 3 ? 'text-white' : 'text-green-600'}`}>
                    {entry.points} pts
                  </div>
                  <div className={`text-sm ${entry.rank <= 3 ? 'text-white/80' : 'text-gray-600'}`}>
                    {entry.trashCaptured} items
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <Badge 
                  className={`${
                    entry.rank <= 3 
                      ? 'bg-white/20 text-white border-white/30' 
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {entry.badge}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Leaderboard;
