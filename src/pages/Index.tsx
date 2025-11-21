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

    // Для #student-projects делаем грубую оценку позиции
    // чтобы сразу показать контент, даже если он еще не полностью загружен
    if (hash === '#student-projects') {
      // Примерная позиция раздела студентов (после hero, modes, learning, features)
      // Скроллим сразу, чтобы пользователь видел хоть что-то
      const estimatedPosition = window.innerHeight * 4; // Примерно 4 экрана вниз
      window.scrollTo({
        top: estimatedPosition,
        behavior: 'instant' // Мгновенный скролл без анимации
      });
    }

    let attempts = 0;
    const maxAttempts = 15;

    const scrollToElement = () => {
      const element = document.querySelector(hash);
      if (element) {
        // Проверяем, что элемент действительно отрендерился
        const rect = element.getBoundingClientRect();
        if (rect.height > 0) {
          const elementPosition = rect.top + window.pageYOffset;
          const offsetPosition = elementPosition - 80;
          
          // Используем instant для первого скролла, чтобы не было задержки
          window.scrollTo({
            top: offsetPosition,
            behavior: attempts === 0 ? 'instant' : 'smooth'
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
        // Пробуем снова через короткий интервал
        setTimeout(tryScroll, 150);
      }
    };

    // Начинаем попытки сразу
    setTimeout(tryScroll, 50);
    setTimeout(tryScroll, 200);
    setTimeout(tryScroll, 500);
    setTimeout(tryScroll, 1000);
    setTimeout(tryScroll, 1500);

    // Ждем события load для финальной попытки
    window.addEventListener('load', () => {
      setTimeout(tryScroll, 100);
    }, { once: true });
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
