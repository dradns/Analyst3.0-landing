import { Smartphone } from "lucide-react";

const AppShowcase = () => {
  const appImages = [
    {
      id: 1,
      src: "/lovable-uploads/ed4cd48d-d170-46f5-a4c0-6188c3e721d4.png",
      alt: "GigaMentor - главный экран с возможностями AI-агента"
    },
    {
      id: 2,
      src: "/lovable-uploads/a2c9ddcd-1a9b-4c93-afe7-f4b78740c88a.png",
      alt: "GigaMentor - настройка профиля и специализации"
    },
    {
      id: 3,
      src: "/lovable-uploads/47c754e9-93e9-46e5-9980-aec79c3bdf67.png",
      alt: "GigaMentor - возможности мини-приложения: вопросы, библиотека, история"
    },
    {
      id: 4,
      src: "/lovable-uploads/44fd608a-030b-4bed-8927-443cf8ecd8a6.png",
      alt: "GigaMentor - профиль, обратная связь и регулярные сообщения"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-background to-background/50">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground flex items-center justify-center gap-3">
            <Smartphone className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary" />
            Готовый работающий AI-агент
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            Реальный кейс: агент, разработанный нашим студентом, в рамках обучения на бесплатном курсе "Системный Аналитик 3.0"
          </p>
        </div>

        {/* App Images Grid */}
        <div className="grid grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {appImages.map((image) => (
            <div
              key={image.id}
              className="group relative bg-card rounded-2xl border border-border/50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-muted/50 to-muted/20 p-4">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain rounded-lg"
                  loading="lazy"
                />
              </div>
              
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Все функции приложения полностью настроены и готовы к работе: персонализированные ответы, база знаний, история диалогов и автоматические уведомления.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;