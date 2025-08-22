import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
const QuickStart = () => {
  const {
    t
  } = useLanguage();
  return <section id="quickstart" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-glass">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Нужна подробная консультация по обучению?
              </h3>
              <p className="text-muted-foreground mb-6">
                {t('quickstart.help.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://disk.yandex.ru/i/KUjijWxF-Ck14Q', '_blank')}
                >
                  Скачать шаблон
                  <Download className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  variant="default"
                  onClick={() => window.open('https://t.me/biryukovaoly', '_blank')}
                >
                  {t('quickstart.help.contact')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default QuickStart;