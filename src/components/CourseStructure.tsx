import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Play, ExternalLink, Video, FileText, Users, BarChart3, Target, Settings, Brain, Trophy, Presentation, Layers, Database, Activity, Globe, Code, CheckCircle, Map, ChevronDown, ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface CourseStructureProps {
  openModuleId?: string;
  onOpenModule?: (moduleId: string) => void;
}

const CourseStructure = ({ openModuleId, onOpenModule }: CourseStructureProps = {}) => {
  const { t } = useLanguage();
  // Состояние для отслеживания прогресса чек-листов
  const [moduleProgress, setModuleProgress] = useState<Record<string, boolean[]>>({});
  // Состояние для управления открытым аккордеоном
  const [accordionValue, setAccordionValue] = useState<string>(openModuleId || "");

  // Загрузка прогресса из localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('course-progress');
    if (savedProgress) {
      setModuleProgress(JSON.parse(savedProgress));
    }
  }, []);

  // Обновление открытого аккордеона при изменении openModuleId
  useEffect(() => {
    if (openModuleId) {
      setAccordionValue(openModuleId);
      // Прокрутка к конкретному модулю
      setTimeout(() => {
        const moduleElement = document.querySelector(`[data-state="open"]`);
        if (moduleElement) {
          moduleElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, [openModuleId]);

  // Сохранение прогресса в localStorage
  useEffect(() => {
    localStorage.setItem('course-progress', JSON.stringify(moduleProgress));
  }, [moduleProgress]);

  // Функция для обновления чек-листа
  const updateChecklistItem = (moduleId: string, taskIndex: number, checked: boolean) => {
    setModuleProgress(prev => {
      const currentProgress = prev[moduleId] || [];
      const newProgress = [...currentProgress];
      newProgress[taskIndex] = checked;
      return {
        ...prev,
        [moduleId]: newProgress
      };
    });
  };

  // Функция для подсчета прогресса модуля
  const getModuleProgress = (moduleId: string, totalTasks: number) => {
    const progress = moduleProgress[moduleId] || [];
    const completedTasks = progress.filter(Boolean).length;
    return totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  };
  const courseModules = [
    {
      id: "module-1",
      title: t('steps.1.title'),
      description: t('module.1.description'),
      tasks: [
        t('module.1.task.1'),
        t('module.1.task.2'),
        t('module.1.task.3')
      ],
      examples: [
        t('module.1.example.1'),
        t('module.1.example.2'),
        t('module.1.example.3'),
        t('module.1.example.4'),
        t('module.1.example.5')
      ],
      resources: [
        {
          title: t('module.1.video.1'),
          url: "https://youtu.be/WVAeuRFio5s",
          icon: Video
        },
        {
          title: t('module.1.video.2'),
          url: "https://youtu.be/ZxuEFm9SIJs", 
          icon: Video
        }
      ],
      icon: Target
    },
    {
      id: "module-2", 
      title: t('steps.2.title'),
      description: t('module.2.description'),
      tasks: [
        t('module.2.task.1'),
        t('module.2.task.2'),
        t('module.2.task.3')
      ],
      tools: [
        t('module.2.tool.1')
      ],
      resources: [
        {
          title: t('module.2.video.1'),
          url: "https://youtu.be/-L1n8o6yNVQ",
          icon: Video
        }
      ],
      icon: FileText
    },
    {
      id: "module-3",
      title: t('steps.3.title'),
      description: t('module.3.description'),
      tasks: [
        t('module.3.task.1'),
        t('module.3.task.2')
      ],
      tools: [
        t('module.3.tool.1'),
        t('module.3.tool.2'),
        t('module.3.tool.3')
      ],
      resources: [
        {
          title: t('module.3.video.1'),
          url: "https://youtu.be/kcj_bVfiSL0",
          icon: Video
        }
      ],
      icon: BarChart3
    },
    {
      id: "module-4",
      title: t('steps.4.title'),
      description: t('module.4.description'),
      tasks: [
        t('module.4.task.1'),
        t('module.4.task.2'),
        t('module.4.task.3')
      ],
      examples: [
        t('module.4.example.1'),
        t('module.4.example.2'),
        t('module.4.example.3'),
        t('module.4.example.4'),
        t('module.4.example.5')
      ],
      tools: [
        t('module.4.tool.1')
      ],
      resources: [
        {
          title: t('module.4.video.1'),
          url: "https://youtu.be/zNic2ow-8GE",
          icon: Video
        }
      ],
      icon: Layers
    },
    {
      id: "module-5",
      title: t('steps.5.title'),
      description: t('module.5.description'),
      tasks: [
        t('module.5.task.1'),
        t('module.5.task.2'),
        t('module.5.task.3')
      ],
      tools: [
        t('module.5.tool.1'),
        t('module.5.tool.2'),
        t('module.5.tool.3')
      ],
      resources: [
        {
          title: t('module.5.video.1'),
          url: "https://youtu.be/E0VjxevUrjA",
          icon: Video
        },
        {
          title: t('module.5.video.2'),
          url: "https://youtu.be/oj-LG7-NrTM",
          icon: Video
        },
        {
          title: t('module.5.video.3'),
          url: "https://youtu.be/9SZBpNoj8Cw",
          icon: Video
        }
      ],
      icon: Database
    },
    {
      id: "module-6",
      title: t('steps.6.title'),
      description: t('module.6.description'),
      tasks: [
        t('module.6.task.1'),
        t('module.6.task.2'),
        t('module.6.task.3')
      ],
      examples: [
        t('module.6.example.1'),
        t('module.6.example.2'),
        t('module.6.example.3'),
        t('module.6.example.4')
      ],
      tools: [
        t('module.6.tool.1')
      ],
      resources: [
        {
          title: t('module.6.video.1'),
          url: "https://youtu.be/VuF8DOEp13M",
          icon: Video
        },
        {
          title: t('module.6.video.2'),
          url: "https://youtu.be/6MJUIznc3WI",
          icon: Video
        }
      ],
      icon: Activity
    },
    {
      id: "module-7",
      title: t('steps.7.title'),
      description: t('module.7.description'),
      tasks: [
        t('module.7.task.1'),
        t('module.7.task.2'),
        t('module.7.task.3')
      ],
      resources: [
        {
          title: t('module.7.video.1'),
          url: "https://youtu.be/nNLCVTrdRJ0",
          icon: Video
        },
        {
          title: t('module.7.video.2'),
          url: "https://youtu.be/wY8hBQvlzCE",
          icon: Video
        },
        {
          title: t('module.7.video.3'),
          url: "https://youtu.be/XJ5CgkQ953Q",
          icon: Video
        }
      ],
      icon: Globe
    },
    {
      id: "module-8",
      title: t('steps.8.title'),
      description: t('module.8.description'),
      tasks: [
        t('module.8.task.1'),
        t('module.8.task.2')
      ],
      tools: [
        t('module.8.tool.1')
      ],
      resources: [
        {
          title: t('module.8.video.1'),
          url: "https://youtu.be/J0rkBB-ncRM",
          icon: Video
        }
      ],
      icon: Code
    },
    {
      id: "module-9",
      title: t('steps.9.title'),
      description: t('module.9.description'),
      tasks: [
        t('module.9.task.1'),
        t('module.9.task.2')
      ],
      examples: [
        t('module.9.example.1'),
        t('module.9.example.2'),
        t('module.9.example.3'),
        t('module.9.example.4'),
        t('module.9.example.5'),
        t('module.9.example.6'),
        t('module.9.example.7')
      ],
      resources: [
        {
          title: t('module.9.video.1'),
          url: "https://youtu.be/KmZi30R3h0g",
          icon: Video
        }
      ],
      icon: CheckCircle
    },
    {
      id: "module-10",
      title: t('steps.10.title'),
      description: t('module.10.description'),
      tasks: [
        t('module.10.task.1'),
        t('module.10.task.2'),
        t('module.10.task.3')
      ],
      examples: [
        t('module.10.example.1'),
        t('module.10.example.2'),
        t('module.10.example.3'),
        t('module.10.example.4'),
        t('module.10.example.5')
      ],
      resources: [
        {
          title: t('module.10.video.1'),
          url: "https://youtu.be/KgjwA3F6tb8",
          icon: Video
        },
        {
          title: t('module.10.video.2'),
          url: "https://youtu.be/oulukZ5PO18",
          icon: Video
        }
      ],
      icon: Trophy
    }
  ];

  return (
    <section id="course-structure" className="py-8 relative overflow-hidden scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Interactive Roadmap Step 2 */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Roadmap Step 2 */}
              <div className="group cursor-pointer">
                <div className="relative">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center gap-4">
                      <h3 className="text-xl text-muted-foreground">
                        10 этапов для создания ИИ-агента
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

        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground flex items-center justify-center gap-3">
            {t('learning.title')}
            <Map className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('learning.description')}
          </p>
          <Button 
            size="lg" 
            className="mb-8"
            onClick={() => {
              setAccordionValue("module-1");
              onOpenModule?.("module-1");
              // Прокрутка к первому модулю
              setTimeout(() => {
                const element = document.querySelector('[data-state="open"]');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }, 100);
            }}
          >
            {t('learning.try.button')} ↓
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion 
            type="single" 
            collapsible 
            className="w-full space-y-4" 
            value={accordionValue}
            onValueChange={(value) => {
              setAccordionValue(value || "");
              onOpenModule?.(value || "");
            }}
          >
            {courseModules.map((module, index) => {
              const IconComponent = module.icon;
              return (
                <AccordionItem 
                  key={module.id} 
                  value={module.id}
                  className="border border-border rounded-lg px-6 py-2 bg-card/50 hover:bg-card/80 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline group [&>svg]:hidden">
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary/90 to-secondary/90 text-primary-foreground flex items-center justify-center flex-shrink-0 animate-pulse shadow-lg">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs bg-muted px-2 py-1 rounded font-medium">
                            {index + 1}/10
                          </span>
                          <div className="flex-1">
                            <Progress 
                              value={getModuleProgress(module.id, module.tasks?.length || 0)} 
                              className="h-2 ml-2"
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {Math.round(getModuleProgress(module.id, module.tasks?.length || 0))}%
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors text-left">
                          {module.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <span className="text-xs">{t('course.open')}</span>
                        <ChevronDown className="w-4 h-4 group-data-[state=open]:rotate-180 transition-transform duration-200" />
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-2">
                    <div className="ml-14 space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {module.description}
                      </p>
                      
                      {module.tasks && (
                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">{t('course.checklist')}</h4>
                          <div className="space-y-3">
                            {module.tasks.map((task, idx) => {
                              const isChecked = moduleProgress[module.id]?.[idx] || false;
                              return (
                                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card/30">
                                  <Checkbox
                                    id={`${module.id}-task-${idx}`}
                                    checked={isChecked}
                                    onCheckedChange={(checked) => 
                                      updateChecklistItem(module.id, idx, checked as boolean)
                                    }
                                    className="mt-0.5"
                                  />
                                  <label 
                                    htmlFor={`${module.id}-task-${idx}`}
                                    className={`text-sm cursor-pointer flex-1 leading-relaxed transition-colors ${
                                      isChecked 
                                        ? 'text-muted-foreground line-through' 
                                        : 'text-foreground'
                                    }`}
                                  >
                                    {task}
                                  </label>
                                  {isChecked && (
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                                  )}
                                </div>
                              );
                            })}
                          </div>
                          
                          {/* Кнопка шаблона требований */}
                          <div className="mt-4">
                            <Button
                              variant="default"
                              size="sm"
                              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                              onClick={() => window.open('https://github.com/dradns/Analyst3.0-landing/blob/develop/%D0%A8%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD%20%D1%82%D1%80%D0%B5%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B8%CC%86.pdf', '_blank')}
                            >
                              <FileText className="w-4 h-4 mr-2" />
                              {t('course.template.button')}
                              <ExternalLink className="w-3 h-3 ml-2" />
                            </Button>
                            <p className="text-xs text-muted-foreground mt-2 px-2 leading-relaxed">
                              {t('course.template.description')}
                            </p>
                          </div>
                        </div>
                      )}

                      {module.examples && (
                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">{t('course.examples')}</h4>
                          <ul className="space-y-2">
                            {module.examples.map((example, idx) => (
                              <li key={idx} className="flex items-start text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-3 mt-2 flex-shrink-0" />
                                <span className="text-muted-foreground">{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {module.tools && (
                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">{t('course.tools')}</h4>
                          <ul className="space-y-2">
                            {module.tools.map((tool, idx) => (
                              <li key={idx} className="flex items-start text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3 mt-2 flex-shrink-0" />
                                <span className="text-muted-foreground">{tool}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {module.resources && (
                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">{t('course.resources')}</h4>
                          <div className="space-y-3">
                            {module.resources.map((resource, idx) => {
                              const ResourceIcon = resource.icon;
                              return (
                                <Button
                                  key={idx}
                                  variant="outline"
                                  size="sm"
                                  className="w-full justify-start h-auto p-3"
                                  onClick={() => window.open(resource.url, '_blank')}
                                >
                                  <ResourceIcon className="w-4 h-4 mr-2 flex-shrink-0" />
                                  <span className="text-left text-sm">{resource.title}</span>
                                  <ExternalLink className="w-3 h-3 ml-auto flex-shrink-0" />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default CourseStructure;