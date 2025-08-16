import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const CourseCtaSectionPositive = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Формат обучения
          </h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <Check className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-semibold mb-4">
                Вам точно сюда, если
              </h3>
              <div className="text-muted-foreground mb-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Check className="w-5 h-5 text-primary" />
                  Вы любите программировать и готовы изучать новое
                </div>
                <div className="mb-2">(можете написать вложенный цикл на Python)</div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Check className="w-5 h-5 text-primary" />
                  Общение с людьми - ваша сильная сторона
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  У вас есть 80 часов в течении двух месяцев
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CourseCtaSectionPositive;