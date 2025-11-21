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

    let attempts = 0;
    const maxAttempts = 10;

    const scrollToElement = () => {
      const element = document.querySelector(hash);
      if (element) {
        // Проверяем, что элемент действительно отрендерился
        const rect = element.getBoundingClientRect();
        if (rect.height > 0) {
          const elementPosition = rect.top + window.pageYOffset;
          const offsetPosition = elementPosition - 80;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          return true;
        }
      }
      return false;
    };

    const tryScroll = () => {
      if (scrollToElement()) {
        return; // Успешно прокрутили
      }
      
      attempts++;
      if (attempts < maxAttempts) {
        // Пробуем снова через увеличивающийся интервал
        setTimeout(tryScroll, 200 * attempts);
      }
    };

    // Ждем полной загрузки всего контента
    if (document.readyState === 'complete') {
      // Страница уже загружена
      setTimeout(tryScroll, 100);
    } else {
      // Ждем события load
      window.addEventListener('load', () => {
        setTimeout(tryScroll, 100);
      }, { once: true });
    }

    // Дополнительная попытка через requestAnimationFrame
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTimeout(tryScroll, 50);
      });
    });
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
