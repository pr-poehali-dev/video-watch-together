import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface UsersListProps {
  users: string[];
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  const getRandomAvatar = (name: string) => {
    const avatars = ["😀", "😎", "🤓", "😊", "🙂", "😄", "🤗", "😁"];
    return avatars[name.length % avatars.length];
  };

  const getStatusColor = (index: number) => {
    return index === 0 ? "bg-green-500" : "bg-blue-500";
  };

  return (
    <Card className="bg-slate-800/50 border-purple-500/30">
      <CardHeader>
        <CardTitle className="text-purple-300 text-lg flex items-center justify-between">
          <span>👥 Участники ({users.length})</span>
          <span className="text-xs bg-green-600 px-2 py-1 rounded-full">
            Онлайн
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {users.map((user, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors"
            >
              <div className="relative">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-sm">
                  {getRandomAvatar(user)}
                </div>
                <div
                  className={`absolute -bottom-1 -right-1 w-3 h-3 ${getStatusColor(index)} rounded-full border-2 border-slate-800`}
                ></div>
              </div>
              <div className="flex-1">
                <div className="text-white text-sm font-medium">{user}</div>
                <div className="text-gray-400 text-xs">
                  {index === 0 ? "Хост комнаты" : "Участник"}
                </div>
              </div>
              {index === 0 && <div className="text-yellow-400 text-lg">👑</div>}
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-slate-700/30 rounded-lg border border-purple-500/20">
          <div className="text-xs text-gray-400 mb-1">Статистика комнаты</div>
          <div className="text-sm text-gray-300">
            ⏱️ Время сессии: 15 мин
            <br />
            🎬 Видео просмотрено: 2<br />
            💬 Сообщений: 12
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UsersList;
