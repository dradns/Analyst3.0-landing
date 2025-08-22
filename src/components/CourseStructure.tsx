import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Play, ExternalLink, Video, FileText, Users, BarChart3, Target, Settings, Brain, Trophy, Presentation, Layers, Database, Activity } from "lucide-react";

const CourseStructure = () => {
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
      title: "Этап 7: Аналитика и мониторинг",
      description: "Внедрение системы мониторинга и аналитики для отслеживания работы AI-агента.",
      tasks: [
        "Настроить систему логирования",
        "Создать дашборд с метриками",
        "Настроить алерты и уведомления"
      ],
      icon: BarChart3
    },
    {
      id: "module-8",
      title: "Этап 8: Безопасность и соответствие",
      description: "Обеспечение безопасности AI-системы и соответствие требованиям защиты данных.",
      tasks: [
        "Провести аудит безопасности",
        "Настроить шифрование данных",
        "Обеспечить GDPR compliance"
      ],
      icon: Settings
    },
    {
      id: "module-9",
      title: "Этап 9: Деплой и масштабирование",
      description: "Развертывание AI-агента в продакшн среде и настройка масштабирования.",
      tasks: [
        "Развернуть в облачной инфраструктуре",
        "Настроить автомасштабирование",
        "Провести нагрузочное тестирование"
      ],
      icon: Trophy
    },
    {
      id: "module-10",
      title: "Этап 10: Презентация и защита проекта",
      description: "Подготовка финальной презентации проекта и защита перед экспертной комиссией.",
      tasks: [
        "Создать презентацию проекта",
        "Подготовить техническую документацию",
        "Провести демонстрацию AI-агента"
      ],
      icon: Presentation
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Интерактивный курс
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Структура обучения
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Интерактивный курс, где вы можете последовательно изучать материал, переходя от этапа к этапу. Каждый этап содержит описание задания, инструкции, ссылки на ресурсы.
          </p>
          <Button 
            size="lg" 
            className="mb-8"
            onClick={() => window.open('https://t.me/+QM76lGLpwlM0ZmNi', '_blank')}
          >
            <Play className="w-5 h-5 mr-2" />
            Начать обучение
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {courseModules.map((module, index) => {
              const IconComponent = module.icon;
              return (
                <AccordionItem 
                  key={module.id} 
                  value={module.id}
                  className="border border-border rounded-lg px-6 py-2 bg-card/50 hover:bg-card/80 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs bg-muted px-2 py-1 rounded font-medium">
                            {index + 1}/10
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors text-left">
                          {module.title}
                        </h3>
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
                          <h4 className="font-semibold mb-3 text-foreground">Что нужно сделать:</h4>
                          <ul className="space-y-2">
                            {module.tasks.map((task, idx) => (
                              <li key={idx} className="flex items-start text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                                <span className="text-muted-foreground">{task}</span>
                              </li>
                            ))}
                          </ul>
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