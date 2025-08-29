import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Calendar, Video, ClipboardCheck, ArrowRight, BookOpen, Play } from "lucide-react";

const CourseCtaSectionPositive = () => {
  return (
    <section id="start-learning" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Готовы начать свой путь в AI?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Структура обучения построена так, чтобы вы постепенно освоили все необходимые навыки
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">12 недель</h3>
                  <p className="text-muted-foreground">Пошаговое обучение с практикой</p>
                </div>
                <div className="text-center">
                  <Video className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">Живые вебинары</h3>
                  <p className="text-muted-foreground">Разбор кейсов и ответы на вопросы</p>
                </div>
                <div className="text-center">
                  <ClipboardCheck className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">Практические задания</h3>
                  <p className="text-muted-foreground">Реальные проекты для портфолио</p>
                </div>
              </div>

              <div className="space-y-3 mb-8 text-left max-w-2xl mx-auto">
                {[
                  "Создадите своего первого AI-агента",
                  "Научитесь интегрировать AI в бизнес-процессы", 
                  "Получите сертификат о прохождении курса",
                  "Войдете в комьюнити практиков AI"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="gap-2 text-lg px-8 py-4">
                <Play className="w-5 h-5" />
                Начать первый урок
                <ArrowRight className="w-5 h-5" />
              </Button>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground">
            Присоединяйтесь к 1000+ студентам, которые уже изучают AI с нами
          </p>
        </div>
      </div>
    </section>
  );
};

export default CourseCtaSectionPositive;