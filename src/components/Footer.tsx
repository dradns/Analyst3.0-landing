import { Button } from "@/components/ui/button";
import { 
  Send
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  const navigation = {
    product: [
      { name: "Программа", href: "#what-awaits" },
      { name: "Для кого", href: "#features" },
      { name: "Структура", href: "#course-structure" },
    ],
    support: [
      { name: "Как работает AI-агент", href: "#video" },
      { name: "Скачать шаблон требований", href: "https://disk.yandex.ru/i/KUjijWxF-Ck14Q" },
    ]
  };

  const socialLinks = [
    { name: "Telegram", icon: Send, href: "https://t.me/+QM76lGLpwlM0ZmNi" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-glass-border relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/cfc79ad7-a059-4cab-a04c-293a54663f7c.png" 
                  alt="Analyst 3.0 Logo" 
                  className="w-11 h-10 rounded-full"
                />
                <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  Системный Аналитик 3.0
                </span>
              </div>
              
              <p className="text-muted-foreground max-w-md leading-relaxed">
                {t('footer.description')}
              </p>

              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={social.name}
                      variant="ghost"
                      size="sm"
                      className="hover:scale-110 transition-transform duration-300"
                      asChild
                    >
                     <a 
                       href={social.href} 
                       aria-label={social.name}
                       target={social.name === "Telegram" ? "_blank" : undefined}
                       rel={social.name === "Telegram" ? "noopener noreferrer" : undefined}
                       className="flex items-center gap-2"
                     >
                        <span className="text-sm">Комьюнити курса в Telegram</span>
                        <IconComponent className="w-4 h-4" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:col-span-2">
              <div>
                <h3 className="font-semibold mb-4">О курсе</h3>
                <ul className="space-y-3">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                       <a
                         href={item.href}
                         className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                         onClick={(e) => {
                           if (item.href.startsWith('#')) {
                             e.preventDefault();
                             const element = document.querySelector(item.href);
                             if (element) {
                               element.scrollIntoView({ behavior: 'smooth' });
                             }
                           }
                         }}
                       >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Полезные материалы</h3>
                <ul className="space-y-3">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                       <a
                         href={item.href}
                         target={item.href.startsWith('http') ? '_blank' : undefined}
                         rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                         className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                         onClick={(e) => {
                           if (item.href.startsWith('#')) {
                             e.preventDefault();
                             const element = document.querySelector(item.href);
                             if (element) {
                               element.scrollIntoView({ behavior: 'smooth' });
                             }
                           }
                         }}
                       >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-glass-border">
          <div className="flex items-center justify-center">
            <span className="text-sm text-muted-foreground">{t('footer.copyright')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;