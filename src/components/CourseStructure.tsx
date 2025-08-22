import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";

const CourseStructure = () => {
  const courseModules = [
    {
      id: "module-1",
      title: "Этап 1: Выбор AI-агента для проекта",
      description: "Основы работы с данными, понимание роли аналитика в современном бизнесе. Изучение основных инструментов и методологий анализа данных."
    },
    {
      id: "module-2", 
      title: "SQL для аналитиков",
      description: "Освоение языка запросов SQL для работы с базами данных. Изучение сложных запросов, оконных функций и оптимизации производительности."
    },
    {
      id: "module-3",
      title: "Python в аналитике",
      description: "Программирование на Python для анализа данных. Работа с библиотеками pandas, numpy, matplotlib для обработки и визуализации данных."
    },
    {
      id: "module-4",
      title: "Статистический анализ",
      description: "Основы статистики для аналитиков. Проверка гипотез, корреляционный анализ, регрессионное моделирование и интерпретация результатов."
    },
    {
      id: "module-5",
      title: "Визуализация данных",
      description: "Создание эффективных графиков и дашбордов. Работа с Tableau, Power BI и другими инструментами визуализации для презентации результатов."
    },
    {
      id: "module-6",
      title: "A/B тестирование",
      description: "Планирование и проведение A/B тестов. Расчет размера выборки, анализ результатов и принятие решений на основе данных."
    },
    {
      id: "module-7",
      title: "Машинное обучение для аналитиков",
      description: "Основы машинного обучения и его применение в аналитике. Построение предсказательных моделей и оценка их качества."
    },
    {
      id: "module-8",
      title: "Работа с большими данными",
      description: "Инструменты и методы для работы с большими объемами данных. Основы Spark, Hadoop и облачных платформ для обработки данных."
    },
    {
      id: "module-9",
      title: "Бизнес-аналитика и метрики",
      description: "Разработка системы метрик и KPI. Построение воронок, когортный анализ и другие методы оценки бизнес-показателей."
    },
    {
      id: "module-10",
      title: "Проектная работа и портфолио",
      description: "Создание финального проекта для портфолио. Презентация результатов, подготовка к собеседованиям и построение карьеры аналитика."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Программа курса
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Структура обучения
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Полная программа курса разделена на 10 модулей, каждый из которых содержит теоретические знания и практические задания для закрепления материала.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {courseModules.map((module, index) => (
              <AccordionItem 
                key={module.id} 
                value={module.id}
                className="border border-border rounded-lg px-6 py-2 bg-card/50 hover:bg-card/80 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline group">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {module.title}
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-2">
                  <div className="ml-12">
                    <p className="text-muted-foreground leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default CourseStructure;