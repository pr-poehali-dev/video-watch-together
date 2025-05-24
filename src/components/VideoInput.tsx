import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface VideoInputProps {
  currentVideo: string;
  onVideoChange: (url: string) => void;
  onVideoLoad: () => void;
}

const VideoInput: React.FC<VideoInputProps> = ({
  currentVideo,
  onVideoChange,
  onVideoLoad,
}) => {
  return (
    <Card className="bg-slate-800/50 border-purple-500/30">
      <CardHeader>
        <CardTitle className="text-purple-300">Добавить видео</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Input
            placeholder="Вставьте ссылку на YouTube видео..."
            value={currentVideo}
            onChange={(e) => onVideoChange(e.target.value)}
            className="bg-slate-700 border-purple-500/30 text-white placeholder:text-gray-400"
          />
          <Button
            onClick={onVideoLoad}
            className="bg-purple-600 hover:bg-purple-700"
          >
            Загрузить
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoInput;
