import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Sparkles, Zap, TrendingUp, Code2, Play, PlayCircle, Rocket, ArrowDown, ArrowUp, Bot, Cpu, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import CourseStructure from "@/components/CourseStructure";
import AppShowcase from "@/components/AppShowcase";
const Hero = () => {
  const [activeDemo, setActiveDemo] = useState("ba");
  const [openCourseModule, setOpenCourseModule] = useState<string>("");
  const { t, language } = useLanguage();
  const demoModes = {
    ba: {
      title: t('hero.mode.ba.title'),
      description: t('hero.mode.ba.description'),
      code: t('hero.mode.ba.code'),
      icon: Sparkles
    },
    sa: {
      title: t('hero.mode.sa.title'),
      description: t('hero.mode.sa.description'),
      code: t('hero.mode.sa.code'),
      icon: TrendingUp
    },
    reviewer: {
      title: t('hero.mode.reviewer.title'),
      description: t('hero.mode.reviewer.description'),
      code: t('hero.mode.reviewer.code'),
      icon: Zap
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/3 to-primary/8 pointer-events-none" />

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
                      {t('hero.title').split('\n')[0]}
                    </span>
                  </h1>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight relative">
                    <span className="bg-gradient-hero bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer drop-shadow-2xl flex items-center gap-4">
                      {t('hero.title').split('\n')[1] || t('hero.subtitle')}
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
                    <span className="font-bold">{t('hero.course.description')}</span>
                  </p>
                </div>
              </div>

              {/* Enhanced Practice Badge */}
              <div className="mb-1 animate-scale-in">
                <div className="inline-block relative">
                  <p className="relative text-lg md:text-xl lg:text-2xl text-left text-muted-foreground px-6 py-3">
                    {language === 'ru' ? (
                      <>
                        <span className="bg-gradient-hero bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer font-bold">
                          12 недель бесплатного обучения
                        </span>
                        , где вы научитесь создавать{' '}
                        <span className="bg-gradient-hero bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer font-bold">
                          AI агента с нуля
                        </span>
                        {' '}— с практикой и поддержкой комьюнити
                      </>
                    ) : (
                      <>
                        <span className="bg-gradient-hero bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer font-bold">
                          12 weeks of free training
                        </span>
                        {' '}where you will learn to create an{' '}
                        <span className="bg-gradient-hero bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer font-bold">
                          AI agent from scratch
                        </span>
                        {' '}— with practice and community support
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* Homework Call-to-Action */}
              <div className="mb-8 animate-scale-in">
                <div className="inline-block relative">
                  <p className="relative text-lg md:text-xl lg:text-2xl text-left text-muted-foreground px-6 py-3 font-semibold">
                    {t('hero.homework.text')}
                  </p>
                </div>
              </div>

              {/* Enhanced Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
                {/* Compact Roadmap */}
                <div className="animate-scale-in">
                  <div className="max-w-2xl mx-auto">
                    <div className="relative">
                      {/* Horizontal Roadmap */}
                      <div className="flex items-center justify-center overflow-x-auto pb-2">
                        <div className="flex items-center gap-2 sm:gap-3 min-w-max px-2">
                          {/* Step 1 */}
                          <div 
                            className="group cursor-pointer flex flex-col items-center"
                            onClick={() => document.getElementById('app-showcase')?.scrollIntoView({ behavior: 'smooth' })}
                          >
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs sm:text-sm shadow-md hover:scale-110 transition-transform duration-300 mb-1">
                              1
                            </div>
                            <p className="text-xs text-center text-muted-foreground group-hover:text-primary transition-colors max-w-12 leading-tight">
                              Результат
                            </p>
                          </div>

                          {/* Connection arrow */}
                          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-pulse" />

                          {/* Step 2 */}
                          <div 
                            className="group cursor-pointer flex flex-col items-center"
                            onClick={() => document.getElementById('modes')?.scrollIntoView({ behavior: 'smooth' })}
                          >
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs sm:text-sm shadow-md hover:scale-110 transition-transform duration-300 mb-1">
                              2
                            </div>
                            <p className="text-xs text-center text-muted-foreground group-hover:text-primary transition-colors max-w-12 leading-tight">
                              Уроки
                            </p>
                          </div>

                          {/* Connection arrow */}
                          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-pulse" />

                          {/* Step 3 */}
                          <div 
                            className="group cursor-pointer flex flex-col items-center"
                            onClick={() => document.getElementById('structure')?.scrollIntoView({ behavior: 'smooth' })}
                          >
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs sm:text-sm shadow-md hover:scale-110 transition-transform duration-300 mb-1">
                              3
                            </div>
                            <p className="text-xs text-center text-muted-foreground group-hover:text-primary transition-colors max-w-12 leading-tight">
                              Программа
                            </p>
                          </div>

                          {/* Connection arrow */}
                          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-pulse" />

                          {/* Step 4 */}
                          <div 
                            className="group cursor-pointer flex flex-col items-center"
                            onClick={() => document.getElementById('format')?.scrollIntoView({ behavior: 'smooth' })}
                          >
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs sm:text-sm shadow-md hover:scale-110 transition-transform duration-300 mb-1">
                              4
                            </div>
                            <p className="text-xs text-center text-muted-foreground group-hover:text-primary transition-colors max-w-12 leading-tight">
                              Формат
                            </p>
                          </div>

                          {/* Connection arrow */}
                          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-pulse" />

                          {/* Step 5 */}
                          <div 
                            className="group cursor-pointer flex flex-col items-center"
                            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                          >
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs sm:text-sm shadow-md hover:scale-110 transition-transform duration-300 mb-1">
                              5
                            </div>
                            <p className="text-xs text-center text-muted-foreground group-hover:text-primary transition-colors max-w-12 leading-tight">
                              Для кого
                            </p>
                          </div>

                          {/* Connection arrow */}
                          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-pulse" />

                          {/* Step 6 */}
                          <div 
                            className="group cursor-pointer flex flex-col items-center"
                            onClick={() => document.getElementById('why-important')?.scrollIntoView({ behavior: 'smooth' })}
                          >
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs sm:text-sm shadow-md hover:scale-110 transition-transform duration-300 mb-1">
                              6
                            </div>
                            <p className="text-xs text-center text-muted-foreground group-hover:text-primary transition-colors max-w-12 leading-tight">
                              Важность
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Video Content (2/5 width) */}
          <div className="lg:col-span-2">
            <div className="py-4 relative overflow-hidden">
              

              <div className="max-w-xs mx-auto mb-4">
                <Card className="overflow-hidden shadow-2xl">
                  <CardContent className="p-0">
                    <div className="relative aspect-[9/16] bg-gradient-to-br from-primary/20 to-secondary/20">
                      <video className="w-full h-full object-contain rounded-lg" controls preload="metadata" playsInline webkit-playsinline="true" style={{
                      objectFit: 'contain'
                    }} onError={e => console.log('Video error:', e)} onLoadStart={() => console.log('Video loading started')}>
                        <source src="/course-video.mp4" type="video/mp4" />
                        {t('hero.video.error')}
                      </video>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Text under video */}
              <div className="text-center animate-fade-in mt-8">
                <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-semibold flex items-center justify-center gap-3">
                  {t('hero.video.description')}
                  <ArrowUp className="w-6 h-6 text-primary animate-bounce" />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* App Showcase Section */}
        <AppShowcase />

        {/* Course Structure Section */}
        <div className="mt-8">
          <CourseStructure openModuleId={openCourseModule} onOpenModule={setOpenCourseModule} />
        </div>

        {/* Demo Section */}
        <div className="max-w-6xl mx-auto animate-slide-up">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4">{t('hero.tryModes')}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {Object.entries(demoModes).map(([key, mode]) => {
              const IconComponent = mode.icon;
              const isActive = activeDemo === key;
              return <div key={key} className="relative group animate-scale-in">
                    {isActive && <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>}
                    <Button variant="ghost" size="sm" onClick={() => setActiveDemo(key)} className={`relative transition-all duration-300 ${isActive ? 'bg-gradient-to-r from-primary/90 to-secondary/90 text-primary-foreground shadow-lg hover:shadow-glow hover:from-primary hover:to-secondary' : 'bg-white text-black hover:bg-gray-50 shadow-sm'}`}>
                      <IconComponent className="w-4 h-4 mr-2" />
                      {mode.title}
                    </Button>
                  </div>;
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
    </section>;
};
export default Hero;