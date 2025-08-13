import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, ArrowRight } from "lucide-react";

const CourseCtaSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <BarChart3 className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-semibold mb-4">
                Курс подойдет даже опытным аналитикам
              </h3>
              <p className="text-muted-foreground mb-6">
                Если вы работате и развиваетесь в аналитике → получите актуальные навыки работы с LLM и AI-агентами
              </p>
              <Button variant="hero" size="lg">
                Попасть на курс
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CourseCtaSection;