import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import VideoPlayer from "@/components/VideoPlayer";
import RoomControls from "@/components/RoomControls";
import UsersList from "@/components/UsersList";

const Index = () => {
  const [currentVideo, setCurrentVideo] = useState<string>("");
  const [roomId, setRoomId] = useState<string>("");
  const [isInRoom, setIsInRoom] = useState(false);
  const [users] = useState(["Вы", "Анна", "Максим"]);

  const handleJoinRoom = (id: string) => {
    setRoomId(id);
    setIsInRoom(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-purple-800/30 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            WatchTogether
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-300">
              {isInRoom ? `Комната: ${roomId}` : "Не в комнате"}
            </span>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-300 hover:bg-purple-500/20"
                >
                  Настройки
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-slate-800 border-purple-500/30">
                <DialogHeader>
                  <DialogTitle className="text-purple-300">
                    Настройки комнаты
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-300">
                      Качество видео
                    </label>
                    <select className="w-full mt-1 p-2 bg-slate-700 border border-purple-500/30 rounded">
                      <option>Auto</option>
                      <option>1080p</option>
                      <option>720p</option>
                    </select>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {!isInRoom ? (
          /* Welcome Screen */
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Смотрите видео вместе с друзьями
              </h2>
              <p className="text-xl text-gray-300">
                Создайте комнату или присоединитесь к существующей для
                синхронного просмотра
              </p>
            </div>

            <RoomControls onJoinRoom={handleJoinRoom} />

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="bg-slate-800/50 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-purple-300 text-lg">
                    🎬 Синхронный просмотр
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    Все участники видят одно и то же в реальном времени
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-purple-300 text-lg">
                    💬 Общение
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    Обсуждайте происходящее в реальном времени
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-purple-300 text-lg">
                    🔗 Любые видео
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">
                    Поддержка YouTube, Vimeo и других платформ
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          /* Main App Interface */
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Video Area */}
            <div className="lg:col-span-3 space-y-4">
              <VideoPlayer videoUrl={currentVideo} />

              {/* Video Input */}
              <Card className="bg-slate-800/50 border-purple-500/30">
                <CardHeader>
                  <CardTitle className="text-purple-300">
                    Добавить видео
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Вставьте ссылку на YouTube видео..."
                      value={currentVideo}
                      onChange={(e) => setCurrentVideo(e.target.value)}
                      className="bg-slate-700 border-purple-500/30 text-white placeholder:text-gray-400"
                    />
                    <Button
                      onClick={() => {
                        /* Handle video load */
                      }}
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      Загрузить
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
