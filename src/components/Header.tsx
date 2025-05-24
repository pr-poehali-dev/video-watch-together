import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface HeaderProps {
  isInRoom: boolean;
  roomId: string;
}

const Header: React.FC<HeaderProps> = ({ isInRoom, roomId }) => {
  return (
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
  );
};

export default Header;
