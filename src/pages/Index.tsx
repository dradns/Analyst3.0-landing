import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ModeCards from "@/components/ModeCards";
import Features from "@/components/Features";
import CourseCtaSectionWide from "@/components/CourseCtaSectionWide";
import CourseCtaSectionPositive from "@/components/CourseCtaSectionPositive";
import WhyImportant from "@/components/WhyImportant";
import LearningFormat from "@/components/LearningFormat";
import StudentProjects from "@/components/StudentProjects";
import Footer from "@/components/Footer";
import SectionTransition from "@/components/SectionTransition";
import SectionWrapper from "@/components/SectionWrapper";

const Index = () => {
  // Обработка якоря при загрузке страницы
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    // Принудительно триггерим рендеринг всей страницы
    // Это заставит браузер отрендерить весь контент
    const forceRender = () => {
      // Добавляем и сразу убираем класс для триггера reflow
      document.body.style.display = 'none';
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      document.body.offsetHeight; // Trigger reflow
      document.body.style.display = '';
    };

    const scrollToElement = () => {
      const element = document.querySelector(hash);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.height > 0) {
          const elementPosition = rect.top + window.pageYOffset;
          const offsetPosition = elementPosition - 80;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'instant'
          });
          
          // Принудительный reflow после скролла
          setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
          }, 50);
          
          return true;
        }
      }
      return false;
    };

    // Стратегия для мобильных
    const handleMobileScroll = () => {
      // 1. Принудительный рендеринг
      forceRender();
      
      // 2. Множественные попытки скролла
      const intervals = [100, 300, 600, 1000, 1500, 2000];
      intervals.forEach(delay => {
        setTimeout(() => {
          if (!scrollToElement()) {
            forceRender();
          }
        }, delay);
      });
    };

    // Запускаем сразу
    setTimeout(handleMobileScroll, 0);

    // И после полной загрузки
    if (document.readyState === 'complete') {
      handleMobileScroll();
    } else {
      window.addEventListener('load', handleMobileScroll, { once: true });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative overflow-hidden">
        {/* Hero секция с плавным фоном */}
        <SectionWrapper background="default">
          <Hero />
        </SectionWrapper>
        
        {/* Переход к карточкам режимов */}
        <SectionTransition variant="hero-to-cards" />
        
        {/* Карточки режимов с мягким фоном */}
        <SectionWrapper background="glass">
          <ModeCards />
        </SectionWrapper>
        
        {/* Переход к формату обучения */}
        <SectionTransition variant="cards-to-learning" />
        
        {/* Формат обучения */}
        <SectionWrapper background="muted">
          <LearningFormat />
        </SectionWrapper>
        
        {/* Переход к функциям */}
        <SectionTransition variant="learning-to-features" />
        
        {/* Функции курса */}
        <SectionWrapper background="default">
          <Features />
        </SectionWrapper>
        
        {/* Переход к проектам студентов */}
        <SectionTransition variant="features-to-cta" />
        
        {/* Проекты студентов */}
        <SectionWrapper background="muted">
          <StudentProjects />
        </SectionWrapper>
        
        {/* Переход к CTA */}
        <SectionTransition variant="features-to-cta" />
        
        {/* Широкий CTA блок */}
        <SectionWrapper background="gradient-primary">
          <CourseCtaSectionWide />
        </SectionWrapper>
        
        {/* Переход к важности */}
        <SectionTransition variant="cta-to-why" />
        
        {/* Почему важно */}
        <SectionWrapper background="default">
          <WhyImportant />
        </SectionWrapper>
        
        {/* Финальный переход */}
        <SectionTransition variant="why-to-final" />
        
        {/* Финальный CTA */}
        <SectionWrapper background="gradient-secondary">
          <CourseCtaSectionPositive />
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
