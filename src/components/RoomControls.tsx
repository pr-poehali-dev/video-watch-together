import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RoomControlsProps {
  onJoinRoom: (roomId: string) => void;
}

const RoomControls: React.FC<RoomControlsProps> = ({ onJoinRoom }) => {
  const [roomCode, setRoomCode] = useState("");

  const generateRoomId = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  const handleCreateRoom = () => {
    const newRoomId = generateRoomId();
    onJoinRoom(newRoomId);
  };

  const handleJoinRoom = () => {
    if (roomCode.trim()) {
      onJoinRoom(roomCode.trim().toUpperCase());
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-purple-300 text-xl">
            Создать комнату
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-300">
            Создайте новую комнату и пригласите друзей для совместного просмотра
          </p>
          <Button
            onClick={handleCreateRoom}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3"
          >
            🎬 Создать комнату
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/50 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-purple-300 text-xl">
            Присоединиться к комнате
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-300">
            Введите код комнаты, полученный от друга
          </p>
          <div className="space-y-3">
            <Input
              placeholder="Введите код комнаты (например: ABC123)"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
              className="bg-slate-700 border-purple-500/30 text-white placeholder:text-gray-400 text-center font-mono text-lg"
              maxLength={6}
            />
            <Button
              onClick={handleJoinRoom}
              disabled={!roomCode.trim()}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              🚀 Присоединиться
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoomControls;
