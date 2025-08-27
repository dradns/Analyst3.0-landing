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

interface CourseStructureProps {
  openModuleId?: string;
  onOpenModule?: (moduleId: string) => void;
}

const CourseStructure = ({ openModuleId, onOpenModule }: CourseStructureProps = {}) => {
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
      title: "Этап 1: Выбор AI-агента для проекта",
      description: "Вам предстоит выбрать тему для вашего AI-агента и создать базовые документы: User Story и Use Case. Это фундамент всего проекта.",
      tasks: [
        "Выбрать AI-агента из предложенных вариантов",
        "Написать User Story по формуле: \"Я, как [роль], хочу [действие], чтобы [результат]\"",
        "Создать Use Case с описанием взаимодействия пользователя с системой"
      ],
      examples: [
        "HR AI ассистент для отбора кандидатов",
        "Маркетинг AI агент для создания постов", 
        "CustDev AI агент для опросов пользователей",
        "Аналитик-консультант для создания артефактов",
        "Pitch-Deck AI Reviewer для проверки презентаций"
      ],
      resources: [
        {
          title: "Видеолекция: \"Создание и работа с User Stories\"",
          url: "https://youtu.be/WVAeuRFio5s",
          icon: Video
        },
        {
          title: "Видеолекция: \"Описание сценариев использования\"",
          url: "https://youtu.be/ZxuEFm9SIJs", 
          icon: Video
        }
      ],
      icon: Target
    },
    {
      id: "module-2", 
      title: "Этап 2: Создание макетов интерфейса",
      description: "Создайте визуальные макеты для вашего AI-агента. Это поможет понять, как будет выглядеть интерфейс и как пользователь будет взаимодействовать с системой.",
      tasks: [
        "Создать макеты для выбранного AI-агента",
        "Показать основные экраны приложения",
        "Отобразить пользовательские сценарии"
      ],
      tools: [
        "🎨 Draw.io - для создания схем и макетов"
      ],
      resources: [
        {
          title: "Видеолекция: \"Создание макетов интерфейсов\"",
          url: "https://youtu.be/-L1n8o6yNVQ",
          icon: Video
        }
      ],
      icon: FileText
    },
    {
      id: "module-3",
      title: "Этап 3: Моделирование бизнес-процессов",
      description: "Создайте BPMN диаграмму или Activity diagram для вашего AI-агента. Это поможет понять логику работы системы и последовательность действий.",
      tasks: [
        "Создать BPMN диаграмму или Activity diagram",
        "Отобразить основные процессы работы AI-агента"
      ],
      tools: [
        "🔄 StormBPMN - для создания BPMN диаграмм",
        "📊 PlantUML - для Activity diagram", 
        "🎨 Draw.io - универсальный инструмент"
      ],
      resources: [
        {
          title: "Видеолекция: BPMN",
          url: "https://youtu.be/kcj_bVfiSL0",
          icon: Video
        }
      ],
      icon: BarChart3
    },
    {
      id: "module-4",
      title: "Этап 4: Проектирование архитектуры",
      description: "Спроектируйте архитектуру вашего AI-агента. Определите, как будут взаимодействовать фронтенд, бэкенд и база данных.",
      tasks: [
        "Создать схему архитектуры системы",
        "Описать компоненты (фронтенд, бэкенд, БД)",
        "Показать связи между компонентами"
      ],
      examples: [
        "Фронтенд: веб-интерфейс или Telegram бот",
        "Бэкенд: Python сервер",
        "База данных: PostgreSQL",
        "AI компонент: интеграция с LLM",
        "RAG система: для работы с базой знаний"
      ],
      tools: [
        "🏗️ Draw.io - для создания схем"
      ],
      resources: [
        {
          title: "Видеолекция: \"Архитектура систем\"",
          url: "https://youtu.be/zNic2ow-8GE",
          icon: Video
        }
      ],
      icon: Layers
    },
    {
      id: "module-5",
      title: "Этап 5: Проектирование базы данных",
      description: "Создайте ERD-диаграмму для вашего AI-агента. Определите, какие данные будут храниться и как они связаны между собой.",
      tasks: [
        "Создать ERD-диаграмму с основными сущностями",
        "Определить атрибуты каждой сущности",
        "Показать связи между сущностями"
      ],
      tools: [
        "🗄️ DBeaver - для работы с базами данных",
        "🎨 Draw.io - для создания ERD",
        "📊 dbdiagram.io - специализированный инструмент"
      ],
      resources: [
        {
          title: "Видеолекция: \"Data modeling\"",
          url: "https://youtu.be/E0VjxevUrjA",
          icon: Video
        },
        {
          title: "Видеолекция: \"ERD диаграммы\"",
          url: "https://youtu.be/oj-LG7-NrTM",
          icon: Video
        },
        {
          title: "Видеолекция: \"ДЗ по ERD\"",
          url: "https://youtu.be/9SZBpNoj8Cw",
          icon: Video
        }
      ],
      icon: Database
    },
    {
      id: "module-6",
      title: "Этап 6: Диаграмма последовательности",
      description: "Создайте UML диаграмму последовательности для вашего AI-агента. Покажите, как различные компоненты системы взаимодействуют во времени.",
      tasks: [
        "Создать диаграмму последовательности для основных сценариев",
        "Показать временную последовательность действий",
        "Отобразить взаимодействие между компонентами"
      ],
      examples: [
        "Обработка запроса пользователя",
        "Взаимодействие с LLM",
        "Работа с базой данных",
        "Формирование ответа"
      ],
      tools: [
        "📊 PlantUML - для UML диаграмм"
      ],
      resources: [
        {
          title: "Видеолекция: \"Диаграмма последовательности\"",
          url: "https://youtu.be/VuF8DOEp13M",
          icon: Video
        },
        {
          title: "Видеолекция: \"Разбор ДЗ\"",
          url: "https://youtu.be/6MJUIznc3WI",
          icon: Video
        }
      ],
      icon: Activity
    },
    {
      id: "module-7",
      title: "Этап 7: Описание API интерфейса",
      description: "Опишите REST API для вашего AI-агента в табличном виде. Определите эндпоинты, методы и параметры.",
      tasks: [
        "Создать таблицу с описанием API",
        "Определить HTTP-методы для каждого эндпоинта",
        "Описать параметры и ответы"
      ],
      resources: [
        {
          title: "Видеолекция: \"API в табличном виде\"",
          url: "https://youtu.be/nNLCVTrdRJ0",
          icon: Video
        },
        {
          title: "Видеолекция: \"REST API\"",
          url: "https://youtu.be/wY8hBQvlzCE",
          icon: Video
        },
        {
          title: "Видеолекция: \"Разбор ДЗ\"",
          url: "https://youtu.be/XJ5CgkQ953Q",
          icon: Video
        }
      ],
      icon: Globe
    },
    {
      id: "module-8",
      title: "Этап 8: Создание API документации",
      description: "Создайте Swagger документацию для вашего API. Это поможет другим разработчикам понять, как использовать вашу систему.",
      tasks: [
        "Создать Swagger спецификацию в формате YAML/JSON",
        "Описать все эндпоинты с примерами"
      ],
      tools: [
        "📝 Swagger Editor - онлайн редактор"
      ],
      resources: [
        {
          title: "Видеолекция: \"Swagger документация\"",
          url: "https://youtu.be/J0rkBB-ncRM",
          icon: Video
        }
      ],
      icon: Code
    },
    {
      id: "module-9",
      title: "Этап 9: Определение критериев качества",
      description: "Сформулируйте критерии приемки и нефункциональные требования для вашего AI-агента. Это поможет понять, когда проект можно считать завершенным.",
      tasks: [
        "Создать критерии приемки в формате \"Дано-Когда-Тогда\"",
        "Определить нефункциональные требования"
      ],
      examples: [
        "Дано: пользователь отправляет запрос",
        "Когда: система обрабатывает запрос", 
        "Тогда: пользователь получает ответ в течение 5 секунд",
        "Производительность: время ответа < 5 сек",
        "Надежность: доступность 99.9%",
        "Безопасность: шифрование данных",
        "Масштабируемость: поддержка 1000+ пользователей"
      ],
      resources: [
        {
          title: "Видеолекция: \"Критерии приемки и требования\"",
          url: "https://youtu.be/KmZi30R3h0g",
          icon: Video
        }
      ],
      icon: CheckCircle
    },
    {
      id: "module-10",
      title: "Этап 10: Финальная реализация",
      description: "Создайте работающий AI-агент и разверните его. Это финальный этап, где вы применяете все полученные знания.",
      tasks: [
        "Разработать AI-агента согласно техническому заданию",
        "Протестировать все функции",
        "Развернуть систему в облаке"
      ],
      examples: [
        "✅ Фронтенд (web или Telegram mini app)",
        "✅ Бэкенд на Python",
        "✅ Интеграция с LLM",
        "✅ PostgreSQL база данных",
        "✅ RAG система для работы с базой знаний (при необходимости)"
      ],
      resources: [
        {
          title: "Видеолекция: \"Создание AI-агента\"",
          url: "https://youtu.be/KgjwA3F6tb8",
          icon: Video
        },
        {
          title: "Пример",
          url: "https://youtu.be/oulukZ5PO18",
          icon: Video
        }
      ],
      icon: Trophy
    }
  ];

  return (
    <section id="course-structure" className="py-8 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground flex items-center justify-center gap-3">
            Структура обучения
            <Map className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-black" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Интерактивный курс, где вы можете последовательно изучать материал, переходя от этапа к этапу. Каждый этап содержит описание задания, инструкции, ссылки на ресурсы.
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
            Попробуй первое задание ↓
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
                        <span className="text-xs">открыть</span>
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
                          <h4 className="font-semibold mb-3 text-foreground">Чек-лист выполнения:</h4>
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
                        </div>
                      )}

                      {module.examples && (
                        <div>
                          <h4 className="font-semibold mb-3 text-foreground">Примеры AI-агентов:</h4>
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
                          <h4 className="font-semibold mb-3 text-foreground">Инструменты:</h4>
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
                          <h4 className="font-semibold mb-3 text-foreground">Полезные ресурсы:</h4>
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