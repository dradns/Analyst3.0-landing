import { Card, CardContent } from "@/components/ui/card";
import { Check, Calendar, Video } from "lucide-react";

const CourseCtaSectionPositive = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Формат обучения
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">
                  Понедельник - Пятница
                </h3>
                <div className="text-muted-foreground">
                  <div className="text-center mb-2">
                    Самостоятельная работа над проектами и заданиями
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <Video className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">
                  Пятница 17:00
                </h3>
                <div className="text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    Общение с людьми - ваша сильная сторона
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <Check className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">
                  Время
                </h3>
                <div className="text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    У вас есть 80 часов в течении двух месяцев
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCtaSectionPositive;