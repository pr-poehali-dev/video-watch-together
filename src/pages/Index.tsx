import React, { useState } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import UsersList from "@/components/UsersList";
import Header from "@/components/Header";
import WelcomeScreen from "@/components/WelcomeScreen";
import VideoInput from "@/components/VideoInput";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [currentVideo, setCurrentVideo] = useState<string>("");
  const [roomId, setRoomId] = useState<string>("");
  const [isInRoom, setIsInRoom] = useState(false);
  const [users] = useState(["Вы", "Анна", "Максим"]);

  const handleJoinRoom = (id: string) => {
    setRoomId(id);
    setIsInRoom(true);
  };

  const handleVideoLoad = () => {
    // Handle video load logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Header isInRoom={isInRoom} roomId={roomId} />

      <div className="container mx-auto px-4 py-6">
        {!isInRoom ? (
          <WelcomeScreen onJoinRoom={handleJoinRoom} />
        ) : (
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Video Area */}
            <div className="lg:col-span-3 space-y-4">
              <VideoPlayer videoUrl={currentVideo} />
              <VideoInput
                currentVideo={currentVideo}
                onVideoChange={setCurrentVideo}
                onVideoLoad={handleVideoLoad}
              />
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <UsersList users={users} />

              {/* Quick Actions */}
              <Card className="bg-slate-800/50 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-purple-300 text-lg">
                    Быстрые действия
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-purple-500/30 text-purple-300 hover:bg-purple-500/20"
                  >
                    📋 Скопировать ссылку
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-purple-500/30 text-purple-300 hover:bg-purple-500/20"
                  >
                    👥 Пригласить друзей
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-purple-500/30 text-purple-300 hover:bg-purple-500/20"
                  >
                    📱 Поделиться
                  </Button>
                </CardContent>
              </Card>

              {/* Chat Preview */}
              <Card className="bg-slate-800/50 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-purple-300 text-lg">Чат</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4 max-h-40 overflow-y-auto">
                    <div className="text-sm">
                      <span className="text-purple-400">Анна:</span>
                      <span className="text-gray-300 ml-2">
                        Отличное видео! 👍
                      </span>
                    </div>
                    <div className="text-sm">
                      <span className="text-blue-400">Максим:</span>
                      <span className="text-gray-300 ml-2">
                        Согласен, очень интересно
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Написать сообщение..."
                      className="bg-slate-700 border-purple-500/30 text-white placeholder:text-gray-400 text-sm"
                    />
                    <Button
                      size="sm"
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      📤
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
