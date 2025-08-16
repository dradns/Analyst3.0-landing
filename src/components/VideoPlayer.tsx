import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Volume2, ArrowDown } from "lucide-react";

const VideoPlayer = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            <Play className="w-4 h-4 mr-2" />
            Видео о курсе
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Вы сможете сделать
            <br />
            <span className="flex items-center justify-center gap-3">
              такого же AI-агента
              <ArrowDown className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary" />
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Посмотрите детальный обзор курса и узнайте, как создать AI-агента за 12 недель
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  poster="/placeholder.svg"
                >
                  <source src="/course-video.mp4" type="video/mp4" />
                  Ваш браузер не поддерживает воспроизведение видео.
                </video>
                
                {/* Fallback if no video is provided */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <Play className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Видео скоро появится</h3>
                    <p className="text-muted-foreground">
                      Подготавливаем детальный обзор программы курса
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;