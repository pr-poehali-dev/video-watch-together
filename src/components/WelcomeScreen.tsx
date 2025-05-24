import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RoomControls from "@/components/RoomControls";

interface WelcomeScreenProps {
  onJoinRoom: (roomId: string) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onJoinRoom }) => {
  const features = [
    {
      icon: "🎬",
      title: "Синхронный просмотр",
      description: "Все участники видят одно и то же в реальном времени",
    },
    {
      icon: "💬",
      title: "Общение",
      description: "Обсуждайте происходящее в реальном времени",
    },
    {
      icon: "🔗",
      title: "Любые видео",
      description: "Поддержка YouTube, Vimeo и других платформ",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto text-center space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Смотрите видео вместе с друзьями
        </h2>
        <p className="text-xl text-gray-300">
          Создайте комнату или присоединитесь к существующей для синхронного
          просмотра
        </p>
      </div>

      <RoomControls onJoinRoom={onJoinRoom} />

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {features.map((feature, index) => (
          <Card key={index} className="bg-slate-800/50 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-purple-300 text-lg">
                {feature.icon} {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WelcomeScreen;
