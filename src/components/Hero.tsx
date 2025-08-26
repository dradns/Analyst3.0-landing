import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Sparkles, Zap, Brain, Code2, Play, ArrowDown } from "lucide-react";
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
      
      {/* Floating Orbs with Elegant Purple-Blue Gradient */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-hero opacity-12 rounded-full blur-3xl animate-glow pointer-events-none" />
      <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-hero opacity-15 rounded-full blur-2xl animate-glow pointer-events-none" style={{animationDelay: '0.5s'}} />
      <div className="absolute bottom-32 left-1/4 w-64 h-64 bg-gradient-hero opacity-8 rounded-full blur-xl animate-glow pointer-events-none" style={{animationDelay: '1s'}} />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-hero opacity-10 rounded-full blur-3xl animate-glow pointer-events-none" style={{animationDelay: '1.5s'}} />
      
      {/* Animated Particles - Elegant Purple-Blue Theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-gradient-hero rounded-full animate-pulse opacity-40" />
        <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-secondary/40 rounded-full animate-ping" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-gradient-hero rounded-full animate-bounce opacity-35" />
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-secondary/35 rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 animate-fade-in">
          {/* Enhanced Badge */}
          <div className="mb-8 animate-scale-in">
            <Badge variant="secondary" className="mb-6 text-sm px-6 py-3 shadow-glow hover:shadow-glow transition-all duration-300 hover:scale-105 glass-card border border-primary/20">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse text-primary" />
              <span className="text-gradient-hero font-semibold">
                {t('hero.badge')}
              </span>
            </Badge>
          </div>
          
          {/* Enhanced Main Title - Professional Blue Theme */}
          <div className="mb-8 animate-fade-in">
            <div className="relative">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4 relative">
                <span className="bg-gradient-hero bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer drop-shadow-2xl">
                  От бизнес-идей
                </span>
              </h1>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight relative">
                <span className="bg-gradient-hero bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer drop-shadow-2xl">
                  к AI-решениям
                </span>
              </h1>
              {/* Elegant Purple-Blue Glow effect behind text */}
              <div className="absolute inset-0 bg-gradient-hero opacity-15 blur-2xl scale-110 animate-pulse pointer-events-none" />
            </div>
          </div>
          
          {/* Enhanced Description */}
          <div className="mb-8 animate-fade-in">
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 max-w-4xl mx-auto leading-relaxed">
              <span className="font-bold text-gradient-primary">
                Бесплатный онлайн-курс:
              </span>
              {" "}бизнес- и системный анализ с AI
            </p>
          </div>

          {/* Enhanced Practice Badge */}
          <div className="mb-10 animate-scale-in">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-hero opacity-30 blur-lg animate-pulse" />
              <p className="relative text-lg md:text-xl font-bold text-center bg-gradient-hero text-primary-foreground px-6 py-3 rounded-full shadow-glow">
                12 недель практики + портфолио
              </p>
            </div>
          </div>

          {/* Enhanced Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            {/* Primary CTA Button */}
            <div className="relative group animate-scale-in">
              <div className="absolute inset-0 bg-gradient-hero blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300 animate-pulse" />
              <a
                href="https://t.me/+QM76lGLpwlM0ZmNi"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center gap-3 h-16 px-10 py-5 text-xl font-bold rounded-2xl bg-gradient-hero text-primary-foreground shadow-glow hover:shadow-glow hover:scale-110 active:scale-95 transition-all duration-500 group overflow-hidden hover-glow"
              >
                <span className="relative z-10 flex items-center gap-3">
                  {t('hero.startFree')}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                {/* Shimmer effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:animate-shimmer group-hover:opacity-100" />
              </a>
            </div>
            
            {/* Secondary Button */}
            <div className="relative group animate-scale-in">
              <a
                href="https://disk.yandex.ru/i/KUjijWxF-Ck14Q"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 h-16 px-10 py-5 text-xl font-bold rounded-2xl glass-card text-foreground border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/10 hover:scale-105 active:scale-95 transition-all duration-300 shadow-glass hover:shadow-glow group hover-lift"
              >
                <span className="flex items-center gap-3">
                  Скачать шаблон
                  <Download className="w-6 h-6 group-hover:translate-y-[-2px] transition-transform duration-300" />
                </span>
              </a>
            </div>
          </div>

          {/* Video Section */}
          <div className="py-4 relative overflow-hidden">
            {/* Enhanced Background Glow Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl animate-glow pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-secondary/8 rounded-full blur-2xl animate-pulse pointer-events-none" />
            
            <div className="text-center mb-8 animate-fade-in relative z-10">
              <Badge variant="outline" className="mb-4">
                <Play className="w-4 h-4 mr-2" />
                Как работает AI-агент
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient-hero">
                <span className="flex items-center justify-center gap-3">
                  <span className="text-gradient-hero">
                    Узнаете как создавать AI-агента
                  </span>
                  <ArrowDown className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary animate-bounce" />
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Посмотрите детальный обзор примера вашего будущего pet-проекта
              </p>
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

          {/* Course Structure Section */}
          <div className="mt-8">
            <CourseStructure />
          </div>
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