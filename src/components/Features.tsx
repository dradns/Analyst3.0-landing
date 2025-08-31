import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  Cpu, 
  Bot,
  ClipboardCheck,
  FileText,
  Settings,
  GitBranch,
  Puzzle,
  Clock,
  GraduationCap,
  Code,
  BriefcaseBusiness,
  BarChart3,
  HelpCircle
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Bot,
      title: t('features.ai.title'),
      description: t('features.ai.description')
    },
    {
      icon: Rocket,
      title: t('features.speed.title'),
      description: t('features.speed.description')
    },
    {
      icon: Cpu,
      title: t('features.integration.title'),
      description: t('features.integration.description')
    },
    {
      icon: ClipboardCheck,
      title: t('features.validation.title'),
      description: t('features.validation.description')
    },
    {
      icon: FileText,
      title: t('features.templates.title'),
      description: t('features.templates.description')
    },
    {
      icon: Settings,
      title: t('features.customization.title'),
      description: t('features.customization.description')
    }
  ];

  const inDevFeatures = [
    {
      icon: Puzzle,
      title: t('features.team.title'),
      description: t('features.team.description')
    },
    {
      icon: GitBranch,
      title: t('features.versioning.title'),
      description: t('features.versioning.description')
    },
    {
      icon: Settings,
      title: t('features.customization.title'),
      description: t('features.customization.description')
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden scroll-mt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Interactive Roadmap Step 5 */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Roadmap Step 5 */}
              <div className="group cursor-pointer">
                <div className="relative">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center gap-4">
                      <h3 className="text-xl text-muted-foreground">
                        Для кого предназначен курс, и кому он будет не актуален
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
            {t('audience.title')}
            <HelpCircle className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* First Column - Джунам */}
          <Card className="group relative overflow-hidden animate-scale-in hover:scale-105 transition-all duration-300">
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white shadow-lg group-hover:shadow-glow transition-shadow duration-300">
                  <GraduationCap className="w-6 h-6" />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {t('audience.students.title')}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t('audience.students.desc')}
              </p>
            </CardContent>
          </Card>

          {/* Second Column */}
          <Card className="group relative overflow-hidden animate-scale-in hover:scale-105 transition-all duration-300" style={{ animationDelay: "100ms" }}>
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white shadow-lg group-hover:shadow-glow transition-shadow duration-300">
                  <Code className="w-6 h-6" />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {t('audience.junior.title')}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t('audience.junior.desc')}
              </p>
            </CardContent>
          </Card>

          {/* Third Column */}
          <Card className="group relative overflow-hidden animate-scale-in hover:scale-105 transition-all duration-300" style={{ animationDelay: "200ms" }}>
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white shadow-lg group-hover:shadow-glow transition-shadow duration-300">
                  <BriefcaseBusiness className="w-6 h-6" />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {t('audience.specialists.title')}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t('audience.specialists.desc')}
              </p>
            </CardContent>
          </Card>

          {/* Fourth Column - Опытным аналитикам */}
          <Card className="group relative overflow-hidden animate-scale-in hover:scale-105 transition-all duration-300" style={{ animationDelay: "300ms" }}>
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white shadow-lg group-hover:shadow-glow transition-shadow duration-300">
                  <BarChart3 className="w-6 h-6" />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {t('audience.experienced.title')}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t('audience.experienced.desc')}
              </p>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default Features;