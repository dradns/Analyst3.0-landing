import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Clock, Trophy, MessageCircle, Target, Monitor, Lightbulb, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
const LearningFormat = () => {
  const {
    t
  } = useLanguage();
  const mainFeatures = [{
    icon: BookOpen,
    title: t('format.practical.title'),
    subtitle: t('format.practical.duration'),
    description: t('format.practical.description'),
    details: t('format.practical.details')
  }, {
    icon: Users,
    title: t('format.community.title'),
    subtitle: t('format.community.subtitle'),
    description: t('format.community.description'),
    details: t('format.community.details')
  }];
  const benefits = [{
    icon: Clock,
    title: t('format.flexible'),
    description: t('format.flexible.desc')
  }, {
    icon: Target,
    title: t('format.project'),
    description: t('format.project.desc')
  }, {
    icon: MessageCircle,
    title: t('format.communication'),
    description: t('format.communication.desc')
  }, {
    icon: Trophy,
    title: t('format.career'),
    description: t('format.career.desc')
  }];
  return <section id="learning-format" className="py-20 relative overflow-hidden scroll-mt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Interactive Roadmap Step 4 */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Roadmap Step 4 */}
              <div className="group cursor-pointer">
                <div className="relative">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center gap-4">
                      <h3 className="text-xl text-muted-foreground">
                        Как будут проходить занятия
                      </h3>
                    </div>
                  </div>
                  
                  {/* Road path continuing down */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full">
                    <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8 text-primary animate-pulse rotate-90" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground flex items-center justify-center gap-3">
            {t('modes.reviewer.title')}
            <Monitor className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary" />
          </h2>
          
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return <Card key={index} className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-[1.02] border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-primary-foreground" />
                      </div>
                      
                      <div className="flex-1 space-y-3">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-sm font-medium text-primary">
                            {feature.subtitle}
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                          <p className="text-sm text-muted-foreground/80">
                            {feature.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>;
          })}
          </div>

          {/* Additional Benefits Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return <div key={index} className="text-center p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <IconComponent className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>;
          })}
          </div>
        </div>
      </div>
    </section>;
};
export default LearningFormat;