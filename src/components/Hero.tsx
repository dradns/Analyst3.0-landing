import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Sparkles, Zap, Brain, Code2, Play, PlayCircle, Rocket, ArrowDown, Bot, Cpu } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import CourseStructure from "@/components/CourseStructure";

const Hero = () => {
  const [activeDemo, setActiveDemo] = useState("ba");
  const { t } = useLanguage();

  const demoModes = {
    ba: {
      title: t('hero.mode.ba.title'),
      description: t('hero.mode.ba.description'),
      code: `User Stories – ожидания пользователя 
в формате «Как [роль], хочу [цель], 
чтобы [ценность]».

Use Cases – пошаговые сценарии 
взаимодействия с системой.

Прототипирование – визуализация 
интерфейсов для ранней проверки идей.

BPMN – стандартизированная схема 
бизнес-процессов.

Activity Diagram – последовательность 
действий и логика процессов.`,
      icon: Sparkles,
    },
    sa: {
      title: t('hero.mode.sa.title'),
      description: t('hero.mode.sa.description'),
      code: `Архитектура – структура модулей 
и их взаимодействие.

Модель данных – логическая схема 
хранения информации.

ERD – диаграмма сущностей 
и связей между ними.

Диаграмма последовательности – порядок 
обмена сообщениями между компонентами.

Документирование API / Swagger – описание 
интерфейсов и их параметров.

Критерии приемки – условия, при которых 
работа считается завершённой.

Нефункциональные требования – скорость, 
безопасность, масштабируемость системы.`,
      icon: Brain,
    },
    reviewer: {
      title: t('hero.mode.reviewer.title'),
      description: t('hero.mode.reviewer.description'),
      code: `Концепция – цель, задачи 
и сценарии использования агента.

Выбор модели – подбор ИИ по качеству, 
скорости и стоимости.

Интеграция – соединение модели 
с приложением или сервисом.

Логика агента – обработка запросов, 
принятие решений, ответы.

Обучение и настройка – улучшение качества 
через данные и тесты.

Тестирование – проверка стабильности 
и корректности работы.

Деплой – запуск агента в реальной среде.

Работающий продукт – готовое решение 
как демонстрация ваших навыков.`,
      icon: Zap,
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/3 to-primary/8 pointer-events-none" />
      
      {/* Subtle Background Mist - Almost Transparent */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-glow pointer-events-none" />
      <div className="absolute top-40 right-20 w-72 h-72 bg-secondary/4 rounded-full blur-2xl animate-glow pointer-events-none" style={{animationDelay: '0.5s'}} />
      <div className="absolute bottom-32 left-1/4 w-64 h-64 bg-primary/2 rounded-full blur-xl animate-glow pointer-events-none" style={{animationDelay: '1s'}} />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/3 rounded-full blur-3xl animate-glow pointer-events-none" style={{animationDelay: '1.5s'}} />
      
      {/* Subtle Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-primary/20 rounded-full animate-pulse" />
        <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-secondary/15 rounded-full animate-ping" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary/18 rounded-full animate-bounce" />
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-secondary/20 rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Grid Layout */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center mb-8">
          {/* Left Column - Text Content (3/5 width) */}
          <div className="lg:col-span-3">
            <div className="text-left animate-fade-in pt-12">
              
              {/* Enhanced Main Title - Professional Blue Theme */}
              <div className="mb-8 animate-fade-in">
                <div className="relative">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 relative">
                    <span className="bg-gradient-hero bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer drop-shadow-2xl">
                      От бизнес-идей
                    </span>
                  </h1>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight relative">
                    <span className="bg-gradient-hero bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer drop-shadow-2xl">
                      к AI-решениям
                    </span>
                  </h1>
                  {/* Subtle text glow */}
                  <div className="absolute inset-0 bg-primary/5 blur-2xl scale-110 animate-pulse pointer-events-none" />
                </div>
              </div>
              
              {/* Enhanced Course Description */}
              <div className="mb-8 animate-fade-in">
                <div className="inline-block relative">
                  <div className="absolute inset-0 bg-gradient-hero opacity-30 blur-lg animate-pulse" />
                  <p className="relative text-lg md:text-xl lg:text-2xl font-bold text-left bg-gradient-hero text-primary-foreground px-6 py-3 rounded-lg shadow-glow leading-relaxed mt-4">
                    <span className="font-bold">
                      Бесплатный онлайн-курс:
                    </span>
                    {" "}<span className="font-bold">бизнес- и системный анализ с AI</span>
                  </p>
                </div>
              </div>

              {/* Enhanced Practice Badge */}
              <div className="mb-1 animate-scale-in">
                <div className="inline-block relative">
                  <p className="relative text-lg md:text-xl lg:text-2xl text-left text-muted-foreground px-6 py-3">
                    12 недель для создания AI-проекта с нуля — с практикой и поддержкой комьюнити
                  </p>
                </div>
              </div>

              {/* Homework Call-to-Action */}
              <div className="mb-8 animate-scale-in">
                <div className="inline-block relative">
                  <p className="relative text-lg md:text-xl lg:text-2xl text-left text-muted-foreground px-6 py-3 font-semibold">
                    Попробуйте выполнить первое домашнее задание прямо сейчас
                  </p>
                </div>
              </div>

              {/* Enhanced Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
                {/* Secondary Button */}
                <div className="relative group animate-scale-in">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                  <button
                    className="relative inline-flex items-center justify-center gap-3 h-16 px-10 py-5 text-xl font-bold rounded-2xl bg-gradient-to-r from-primary/90 to-secondary/90 text-primary-foreground hover:from-primary hover:to-secondary hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl hover:shadow-glow group hover-lift"
                  >
                    <span className="flex items-center gap-3">
                      Начать первый урок
                      <Rocket className="w-6 h-6 group-hover:translate-y-[-2px] group-hover:rotate-12 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Video Content (2/5 width) */}
          <div className="lg:col-span-2">
            <div className="py-4 relative overflow-hidden">
              {/* Enhanced Background Glow Effects */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-primary/5 rounded-full blur-3xl animate-glow pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] bg-secondary/8 rounded-full blur-2xl animate-pulse pointer-events-none" />
              
              <div className="text-center mb-8 animate-fade-in relative z-10">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-gradient-hero">
                  <span className="flex items-center justify-center gap-3">
                    <Bot className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-primary animate-bounce" />
                  </span>
                </h2>
              </div>

              <div className="max-w-xs mx-auto mb-4">
                <Card className="overflow-hidden shadow-2xl">
                  <CardContent className="p-0">
                    <div className="relative aspect-[9/16] bg-gradient-to-br from-primary/20 to-secondary/20">
                      <video 
                        className="w-full h-full object-contain rounded-lg"
                        controls
                        preload="metadata"
                        playsInline
                        webkit-playsinline="true"
                        style={{ objectFit: 'contain' }}
                        onError={(e) => console.log('Video error:', e)}
                        onLoadStart={() => console.log('Video loading started')}
                      >
                        <source src="/course-video.mp4" type="video/mp4" />
                        Ваш браузер не поддерживает воспроизведение видео.
                      </video>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Course Structure Section */}
        <div className="mt-8">
          <CourseStructure />
        </div>

        {/* Demo Section */}
        <div className="max-w-6xl mx-auto animate-slide-up">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4">{t('hero.tryModes')}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {Object.entries(demoModes).map(([key, mode]) => {
                const IconComponent = mode.icon;
                return (
                  <Button
                    key={key}
                    variant={activeDemo === key ? "default" : "glass"}
                    size="sm"
                    onClick={() => setActiveDemo(key)}
                    className="transition-all duration-300"
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {mode.title}
                  </Button>
                );
              })}
            </div>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-5 gap-6 items-center">
                <div className="md:col-span-2">
                  <div className="flex items-center mb-4">
                    {React.createElement(demoModes[activeDemo].icon, {
                      className: "w-6 h-6 mr-3 text-primary"
                    })}
                    <h4 className="text-xl font-semibold">
                      {demoModes[activeDemo].title}
                    </h4>
                  </div>
                  <p className="text-muted-foreground">
                    {demoModes[activeDemo].description}
                  </p>
                </div>
                <div className="md:col-span-3 bg-muted/50 rounded-lg p-4 border border-glass-border">
                  <pre className="text-sm font-mono text-muted-foreground overflow-x-auto">
                    <code>{demoModes[activeDemo].code}</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;