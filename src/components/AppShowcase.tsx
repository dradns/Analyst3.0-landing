import { Smartphone, X } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const AppShowcase = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  
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
        {/* Interactive Roadmap */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Roadmap Step 1 */}
              <div className="group cursor-pointer">
                <div className="relative">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg z-10 relative">
                        1
                      </div>
                      <h3 className="text-xl text-muted-foreground">
                        Результат обучения на нашем курсе
                      </h3>
                    </div>
                  </div>
                  
                  {/* Road path continuing down */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full">
                    <div className="w-1 h-8 bg-gradient-to-b from-primary to-primary/30"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground flex items-center justify-center gap-3">
            {t('hero.main.title')}
            <Smartphone className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary" />
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            {t('hero.agent.subtitle')}
          </p>
        </div>

        {/* App Images Grid */}
        <div className="grid grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {appImages.map((image) => (
            <div
              key={image.id}
              className="group relative bg-card rounded-2xl border border-border/50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedImage({ src: image.src, alt: image.alt })}
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
            {t('hero.agent.features')}
          </p>
        </div>
      </div>
      
      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
          <DialogClose className="absolute right-4 top-4 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
          {selectedImage && (
            <div className="flex items-center justify-center bg-background">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AppShowcase;