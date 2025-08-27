import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Sparkles, Zap, TrendingUp, Code2, Play, PlayCircle, Rocket, ArrowDown, ArrowUp, Bot, Cpu } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import CourseStructure from "@/components/CourseStructure";

const Hero = () => {
  const [activeDemo, setActiveDemo] = useState("ba");
  const [openCourseModule, setOpenCourseModule] = useState<string>("");
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
      icon: TrendingUp,
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Matrix Analytics Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div
                key={i}
                className="border-r border-b border-primary/10 relative"
                style={{
                  animationDelay: `${Math.random() * 3}s`
                }}
              >
                {Math.random() > 0.85 && (
                  <div className="absolute inset-0 bg-primary/20 animate-pulse" />
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Falling Analytics Data */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={`data-${i}`}
              className="absolute text-primary/30 font-mono text-sm animate-data-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              {['97%', '$2.4M', '↗ 45%', '128K', 'ROI', 'KPI', '∑', 'λ', 'μ', 'σ'][Math.floor(Math.random() * 10)]}
            </div>
          ))}
        </div>
        
        {/* Floating Analytics Symbols */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`symbol-${i}`}
              className="absolute text-primary/20 text-2xl font-bold animate-analytics-float"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              {['📊', '📈', '💡', '⚡', '🎯', '💰', '🔍', '⭐'][i]}
            </div>
          ))}
        </div>
        
        {/* Moving Data Points */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`point-${i}`}
              className="absolute w-2 h-2 bg-primary/40 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Matrix-style Binary Rain */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`rain-${i}`}
              className="absolute top-0 text-primary/15 font-mono text-xs whitespace-nowrap"
              style={{
                left: `${Math.random() * 100}%`,
                animation: `matrix-rain ${5 + Math.random() * 3}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              {Array.from({ length: 50 }).map((_, j) => (
                <div key={j} className="mb-1">
                  {Math.random() > 0.5 ? Math.floor(Math.random() * 10) : ['%', '$', '→', '↑', '≈', '∞'][Math.floor(Math.random() * 6)]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/3 to-primary/8 pointer-events-none" />
      
      {/* Subtle Background Mist - Almost Transparent */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/1 rounded-full blur-3xl animate-glow pointer-events-none" />
      <div className="absolute top-40 right-20 w-72 h-72 bg-secondary/2 rounded-full blur-2xl animate-glow pointer-events-none" style={{animationDelay: '0.5s'}} />
      <div className="absolute bottom-32 left-1/4 w-64 h-64 bg-primary/1 rounded-full blur-xl animate-glow pointer-events-none" style={{animationDelay: '1s'}} />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/1 rounded-full blur-3xl animate-glow pointer-events-none" style={{animationDelay: '1.5s'}} />

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
                    <span className="bg-gradient-hero bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer drop-shadow-2xl flex items-center gap-4">
                      к AI-решениям
                      <Bot className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-primary animate-pulse" />
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
                      Бесплатный онлайн-курс: бизнес- и системный анализ нового поколения 3.0
                    </span>
                  </p>
                </div>
              </div>

              {/* Enhanced Practice Badge */}
              <div className="mb-1 animate-scale-in">
                <div className="inline-block relative">
                  <p className="relative text-lg md:text-xl lg:text-2xl text-left text-muted-foreground px-6 py-3">
                    12 недель для создания <span className="bg-gradient-hero bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer font-bold">AI-агента с нуля</span> — с практикой и поддержкой комьюнити
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
                    onClick={() => {
                      setOpenCourseModule("module-1");
                      // Прокрутка к разделу структуры курса
                      setTimeout(() => {
                        const element = document.getElementById('course-structure');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 100);
                    }}
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
              
              {/* Text under video */}
              <div className="text-center animate-fade-in mt-8">
                <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-semibold flex items-center justify-center gap-3">
                  Как работает AI-агент
                  <ArrowUp className="w-6 h-6 text-primary animate-bounce" />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Course Structure Section */}
        <div className="mt-8">
          <CourseStructure 
            openModuleId={openCourseModule} 
            onOpenModule={setOpenCourseModule}
          />
        </div>

        {/* Demo Section */}
        <div className="max-w-6xl mx-auto animate-slide-up">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4">{t('hero.tryModes')}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {Object.entries(demoModes).map(([key, mode]) => {
                const IconComponent = mode.icon;
                const isActive = activeDemo === key;
                return (
                  <div key={key} className="relative group animate-scale-in">
                    {isActive && (
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setActiveDemo(key)}
                      className={`relative transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-primary/90 to-secondary/90 text-primary-foreground shadow-lg hover:shadow-glow hover:from-primary hover:to-secondary' 
                          : 'bg-white text-black hover:bg-gray-50 shadow-sm'
                      }`}
                    >
                      <IconComponent className="w-4 h-4 mr-2" />
                      {mode.title}
                    </Button>
                  </div>
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