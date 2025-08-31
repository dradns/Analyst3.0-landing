import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Sparkles, 
  Settings, 
  Shield, 
  Palette, 
  ArrowRight,
  Lightbulb,
  Code,
  Trophy,
  BookOpen,
  Map,
  Bot,
  Monitor
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ModeCards = () => {
  const { t } = useLanguage();
  
  const modes = [
    {
      id: "ba",
      title: t('modes.ba.title'),
      shortTitle: "BA",
      description: t('modes.ba.description'),
      features: [
        t('modes.ba.features.0'),
        t('modes.ba.features.1'), 
        t('modes.ba.features.2'),
        t('modes.ba.features.3')
      ],
      result: t('modes.ba.result'),
      icon: Lightbulb,
      color: "from-blue-500 to-cyan-500",
      bgGlow: "bg-blue-500/10",
    },
    {
      id: "sa",
      title: t('modes.sa.title'),
      shortTitle: "SA",
      description: t('modes.sa.description'),
      features: [
        t('modes.sa.features.0'),
        t('modes.sa.features.1'),
        t('modes.sa.features.2'),
        t('modes.sa.features.3'),
        t('modes.sa.features.4'),
        t('modes.sa.features.5'),
        t('modes.sa.features.6')
      ],
      result: t('modes.sa.result'),
      icon: Settings,
      color: "from-green-500 to-emerald-500",
      bgGlow: "bg-green-500/10",
    },
    {
      id: "architect",
      title: t('modes.architect.title'),
      shortTitle: "AI",
      description: t('modes.architect.description'),
      features: [
        t('modes.architect.features.0'),
        t('modes.architect.features.1'),
        t('modes.architect.features.2'),
        t('modes.architect.features.3')
      ],
      result: t('modes.architect.result'),
      icon: Bot,
      color: "from-purple-500 to-indigo-500",
      bgGlow: "bg-purple-500/10",
    },
  ];

  return (
    <section id="what-awaits" className="py-12 relative overflow-hidden scroll-mt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Interactive Roadmap Step 3 */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Roadmap Step 3 */}
              <div className="group cursor-pointer">
                <div className="relative">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center gap-4">
                      <h3 className="text-xl text-muted-foreground">
                        Чему вы научитесь за 12 недель online
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

        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 flex items-center justify-center gap-3 px-8 text-foreground">
            {t('modes.title')}
            <BookOpen className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary" />
          </h2>
        </div>

        {/* All modules in one row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {modes.map((mode, index) => {
            const IconComponent = mode.icon;
            return (
              <Card 
                key={mode.id} 
                className="group relative overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 ${mode.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${mode.color} flex items-center justify-center text-white shadow-lg`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Online
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {mode.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {mode.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-medium text-foreground mb-2">Вы получите:</h4>
                    {mode.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                     
                     {mode.result && (
                      <div className="mt-4 p-3 rounded-lg bg-muted/50">
                        <p className="text-sm font-medium text-foreground">{mode.result}</p>
                      </div>
                    )}
                  </div>

                </CardContent>
              </Card>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default ModeCards;