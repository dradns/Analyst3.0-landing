import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  TrendingUp, 
  Users, 
  Trophy,
  AlertCircle,
  BarChart3,
  MessageCircle,
  Rocket
} from "lucide-react";

const WhyImportant = () => {
  const reasons = [
    {
      icon: Zap,
      title: "AI-революция уже началась",
      subtitle: "Внедрение AI в бизнес",
      description: "Искусственный интеллект меняет бизнес-процессы",
      details: "Компании интегрируют AI-решения в свои процессы"
    },
    {
      icon: TrendingUp,
      title: "Рост спроса на специалистов",
      subtitle: "Преимущество при трудоустройстве", 
      description: "Потребность в аналитиках со знанием AI-технологий растет",
      details: "Навыки работы с AI становятся важным фактором при отборе"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground flex items-center justify-center gap-3">
            Почему это важно
            <BarChart3 className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-black" />
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            И почему сейчас самое время изучать AI?
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-[1.02] border-border/50 bg-card/50 backdrop-blur-sm"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-primary-foreground" />
                      </div>
                      
                      <div className="flex-1 space-y-3">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {reason.title}
                          </h3>
                          <p className="text-sm font-medium text-primary">
                            {reason.subtitle}
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-muted-foreground leading-relaxed">
                            {reason.description}
                          </p>
                          <p className="text-sm text-muted-foreground/80">
                            {reason.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Benefits Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Высокие зарплаты</h4>
              <p className="text-sm text-muted-foreground">AI-специалисты получают на 30-50% больше</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <Trophy className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Карьерный рост</h4>
              <p className="text-sm text-muted-foreground">Быстрое продвижение в tech-компаниях</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Автоматизация</h4>
              <p className="text-sm text-muted-foreground">Освободите время для творческих задач</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Будущее</h4>
              <p className="text-sm text-muted-foreground">Навыки, которые будут востребованы всегда</p>
            </div>
          </div>

          {/* Community CTA Section */}
          <div className="mt-16 text-center animate-fade-in">
            <div className="mb-8">
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-semibold">
                Освойте навыки бизнес и системного анализа
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="relative group animate-scale-in">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <Button
                  className="relative inline-flex items-center justify-center gap-3 h-16 px-10 py-5 text-xl font-bold rounded-2xl bg-gradient-to-r from-primary/90 to-secondary/90 text-primary-foreground hover:from-primary hover:to-secondary hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl hover:shadow-glow group hover-lift"
                  onClick={() => {
                    window.open('https://discord.gg/your-community', '_blank');
                  }}
                >
                  <span className="flex items-center gap-3">
                    Присоединиться к комьюнити
                    <MessageCircle className="w-6 h-6 group-hover:translate-y-[-2px] group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyImportant;