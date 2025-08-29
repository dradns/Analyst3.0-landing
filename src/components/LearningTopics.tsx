import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Bot, 
  Database, 
  Code, 
  Lightbulb, 
  Network, 
  FileText, 
  BarChart3,
  Settings,
  MessageSquare
} from "lucide-react";

const LearningTopics = () => {
  const topics = [
    {
      category: "AI & LLM основы",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      items: [
        "Что такое Large Language Models (LLM)",
        "Промптинг и prompt engineering",
        "Токены и контекстное окно",
        "Fine-tuning и RAG системы"
      ]
    },
    {
      category: "AI-агенты",
      icon: Bot,
      color: "from-green-500 to-emerald-500", 
      items: [
        "Архитектура AI-агентов",
        "Функции и инструменты агентов",
        "Мультиагентные системы",
        "Автономность и управление"
      ]
    },
    {
      category: "Системная аналитика 3.0",
      icon: Settings,
      color: "from-purple-500 to-indigo-500",
      items: [
        "Современные методы анализа",
        "AI в бизнес-процессах",
        "Архитектура LLM-систем",
        "Интеграция с существующими системами"
      ]
    },
    {
      category: "Практические инструменты",
      icon: Code,
      color: "from-orange-500 to-red-500",
      items: [
        "OpenAI API и альтернативы",
        "LangChain и LangGraph",
        "Vector databases",
        "Deployment и мониторинг"
      ]
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground flex items-center justify-center gap-3">
            В процессе обучения вы узнаете, что такое
            <Lightbulb className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary" />
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Глубокое погружение в современные технологии и методы работы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {topics.map((topic, index) => {
            const IconComponent = topic.icon;
            return (
              <Card 
                key={topic.category}
                className="group relative overflow-hidden animate-scale-in hover:scale-[1.02] transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${topic.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-glow transition-shadow duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {topic.category}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {topic.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3 mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Badge variant="outline" className="mt-4">
                    {topic.items.length} тем
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LearningTopics;