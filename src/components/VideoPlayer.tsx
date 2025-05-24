import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  const getYouTubeId = (url: string) => {
    const match = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
    );
    return match ? match[1] : null;
  };

  const youtubeId = getYouTubeId(videoUrl);

  return (
    <Card className="bg-slate-800/50 border-purple-500/30 overflow-hidden">
      <div className="aspect-video bg-black relative">
        {youtubeId ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?enablejsapi=1&origin=${window.location.origin}`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <div className="text-center space-y-4">
              <div className="text-6xl">🎬</div>
              <div>
                <p className="text-xl font-semibold">Видео не выбрано</p>
                <p className="text-sm">
                  Добавьте ссылку на YouTube видео для начала просмотра
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Player Controls */}
      <div className="p-4 bg-slate-900/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              className="border-purple-500/30 text-purple-300"
            >
              ⏸️ Пауза
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-purple-500/30 text-purple-300"
            >
              🔄 Синхронизировать
            </Button>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-300">
            <span>👥 3 зрителя</span>
            <span>🔊 100%</span>
            <span>⏱️ 12:34 / 45:67</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default VideoPlayer;
