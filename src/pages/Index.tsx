import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ModeCards from "@/components/ModeCards";
import Features from "@/components/Features";
import CourseCtaSectionWide from "@/components/CourseCtaSectionWide";
import CourseCtaSectionPositive from "@/components/CourseCtaSectionPositive";
import WhyImportant from "@/components/WhyImportant";
import LearningFormat from "@/components/LearningFormat";
import Footer from "@/components/Footer";
import SectionTransition from "@/components/SectionTransition";
import SectionWrapper from "@/components/SectionWrapper";

const Index = () => {
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
