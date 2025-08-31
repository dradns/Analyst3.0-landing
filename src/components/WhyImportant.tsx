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
  Send,
  Rocket,
  ChevronDown
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyImportant = () => {
  const { t } = useLanguage();
  
  const reasons = [
    {
      icon: Zap,
      title: t('why.revolution.title'),
      subtitle: t('why.revolution.subtitle'),
      description: t('why.revolution.desc1'),
      details: t('why.revolution.desc2')
    },
    {
      icon: TrendingUp,
      title: t('why.demand.title'),
      subtitle: t('why.demand.subtitle'), 
      description: t('why.demand.desc1'),
      details: t('why.demand.desc2')
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Interactive Roadmap Step 6 */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Roadmap Step 6 */}
              <div className="group cursor-pointer">
                <div className="relative">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg z-10 relative">
                        6
                      </div>
                      <h3 className="text-xl text-muted-foreground">
                        Сейчас самое время изучать AI
                      </h3>
                    </div>
                  </div>
                  
                  {/* Road path continuing down */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full">
                    <div className="w-1 h-8 bg-gradient-to-b from-primary to-primary/30"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground flex items-center justify-center gap-3">
            {t('why.title')}
            <BarChart3 className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary" />
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('why.subtitle')}
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
              <h4 className="font-semibold text-foreground mb-2">{t('why.salary.title')}</h4>
              <p className="text-sm text-muted-foreground">{t('why.salary.desc')}</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <Trophy className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">{t('why.growth.title')}</h4>
              <p className="text-sm text-muted-foreground">{t('why.growth.desc')}</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">{t('why.automation.title')}</h4>
              <p className="text-sm text-muted-foreground">{t('why.automation.desc')}</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">{t('why.future.title')}</h4>
              <p className="text-sm text-muted-foreground">{t('why.future.desc')}</p>
            </div>
          </div>

          {/* Community CTA Section */}
          <div className="mt-20 text-center animate-fade-in">
            <div className="mb-8">
              <p className="text-2xl font-semibold mb-4 max-w-3xl mx-auto text-center">
                {t('cta.community.title')}
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="relative group animate-scale-in">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <Button
                  className="relative inline-flex items-center justify-center gap-3 h-16 px-10 py-5 text-xl font-bold rounded-2xl bg-gradient-to-r from-primary/90 to-secondary/90 text-primary-foreground hover:from-primary hover:to-secondary hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl hover:shadow-glow group hover-lift"
                  onClick={() => {
                    window.open('https://t.me/+QM76lGLpwlM0ZmNi', '_blank');
                  }}
                >
                  <span className="flex items-center gap-3">
                    {t('cta.community.button')}
                    <Send className="w-6 h-6 group-hover:translate-y-[-2px] group-hover:rotate-12 transition-transform duration-300" />
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