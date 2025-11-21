import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Play, FileText, ArrowDown, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Project {
  id: string;
  studentName: string;
  title: string;
  description: string;
  image: string;
  videoUrl: string;
  presentationUrl: string;
}

const StudentProjects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Данные для 13 студентов с локальными фото
  const projects: Project[] = [
    {
      id: "1",
      studentName: t('students.project.1.name'),
      title: t('students.project.1.title'),
      description: t('students.project.1.description'),
      image: "/students/Artem.jpg",
      videoUrl: "https://vkvideo.ru/video-231325948_456239134?list=ln-Q4IzORzaZvlSgBlK5C",
      presentationUrl: "https://github.com/patolog123/Analyst-3.0/blob/main/%D0%90%D1%80%D1%82%D1%91%D0%BC_%D0%A0%D0%B5%D0%BD%D1%81%D0%BA%D0%BE%D0%B2/AI_Agent_for_bloggers.pptx"
    },
    {
      id: "2",
      studentName: t('students.project.2.name'),
      title: t('students.project.2.title'),
      description: t('students.project.2.description'),
      image: "/students/Diana.jpg",
      videoUrl: "https://vkvideo.ru/video-231325948_456239136?list=ln-lrKp1tuPRQ3uikQ3zV",
      presentationUrl: "https://github.com/patolog123/Analyst-3.0/blob/main/%D0%A8%D0%B5%D0%B2%D1%87%D1%83%D0%BA_%D0%94%D0%B8%D0%B0%D0%BD%D0%B0/AI-Neiry.pptx"
    },
    {
      id: "3",
      studentName: t('students.project.3.name'),
      title: t('students.project.3.title'),
      description: t('students.project.3.description'),
      image: "/students/Ivan.jpg",
      videoUrl: "https://vkvideo.ru/video-231325948_456239138?list=ln-u13JoI9Te6YrDuMw6p",
      presentationUrl: "https://cloud.mail.ru/public/A56p/TEVML7jXi?weblink=A56p/TEVML7jXi"
    },
    {
      id: "4",
      studentName: t('students.project.4.name'),
      title: t('students.project.4.title'),
      description: t('students.project.4.description'),
      image: "/students/Ekaterina.jpg",
      videoUrl: "https://vkvideo.ru/video-231325948_456239137?list=ln-0muZca0r8oLs0L3Jbz",
      presentationUrl: "https://github.com/patolog123/Analyst-3.0/blob/main/%D0%9A%D0%B8%D1%80%D0%B0%D0%BA%D0%BE%D1%81%D1%8F%D0%BD_%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%20HedgeAiCare.pptx"
    },
    {
      id: "5",
      studentName: t('students.project.5.name'),
      title: t('students.project.5.title'),
      description: t('students.project.5.description'),
      image: "/students/Ilnur_3.jpg",
      videoUrl: "https://vkvideo.ru/video-231325948_456239139?list=ln-KDfC2QjNrpNX45GFHW",
      presentationUrl: "https://docs.google.com/presentation/d/1ObvVbBij07RUgJytwSJRzsS5wCeGLe69/edit?slide=id.p1#slide=id.p1"
    },
    {
      id: "6",
      studentName: t('students.project.6.name'),
      title: t('students.project.6.title'),
      description: t('students.project.6.description'),
      image: "/students/Ira.jpg",
      videoUrl: "https://vkvideo.ru/video-231325948_456239140?list=ln-vb0VdoEwBTZV9jN7uZ",
      presentationUrl: "https://docs.google.com/presentation/d/1JCl5-p7l_I9Kd7bPMwYsFQQSIdY4a_Vz/edit?slide=id.p1#slide=id.p1"
    },
    {
      id: "7",
      studentName: t('students.project.7.name'),
      title: t('students.project.7.title'),
      description: t('students.project.7.description'),
      image: "/students/Rudolf.jpg",
      videoUrl: "https://vkvideo.ru/video-231325948_456239144?list=ln-sNHJDfDNX7fvNkCD8L",
      presentationUrl: "https://disk.yandex.ru/d/_uuTEVzxFCEgaw"
    },
    {
      id: "8",
      studentName: t('students.project.8.name'),
      title: t('students.project.8.title'),
      description: t('students.project.8.description'),
      image: "/students/Karina.JPG",
      videoUrl: "https://vkvideo.ru/video-231325948_456239141?list=ln-bgvBsFefAZXNs1sh40",
      presentationUrl: "https://docs.google.com/presentation/d/1KESwq55fE1UC2yts-jG7AtMeUmvGZqy9/edit?slide=id.p1#slide=id.p1"
    },
    {
      id: "9",
      studentName: t('students.project.9.name'),
      title: t('students.project.9.title'),
      description: t('students.project.9.description'),
      image: "/students/Ruslan_2.JPG",
      videoUrl: "https://vkvideo.ru/video-231325948_456239145?list=ln-c5OvcYV70E6s7NY4bC",
      presentationUrl: "https://docs.google.com/presentation/d/172FW8tKRHGtcqXeBOc7LlbqqoArdFsGFeNvJl-lN_Vc/edit?slide=id.p#slide=id.p"
    },
    {
      id: "10",
      studentName: t('students.project.10.name'),
      title: t('students.project.10.title'),
      description: t('students.project.10.description'),
      image: "/students/Liliya.jpg",
      videoUrl: "https://vkvideo.ru/video-231325948_456239142?list=ln-45gzBR8d57AHMdQj3D",
      presentationUrl: "https://docs.google.com/presentation/d/1mmzceAlc9r9IE_KvTDQ1jyalfEU1jK8g/edit?slide=id.p1#slide=id.p1"
    },
    {
      id: "11",
      studentName: t('students.project.11.name'),
      title: t('students.project.11.title'),
      description: t('students.project.11.description'),
      image: "/students/Vitaliy.jpg",
      videoUrl: "https://vkvideo.ru/video-231325948_456239135?list=ln-mnRxp2AG25ZtkxkFgq",
      presentationUrl: "https://github.com/zelenkow/AI-Agent/blob/main/docs/Agent.pptx"
    },
    {
      id: "12",
      studentName: t('students.project.12.name'),
      title: t('students.project.12.title'),
      description: t('students.project.12.description'),
      image: "/students/Tamara.jpg",
      videoUrl: "https://vkvideo.ru/video-231325948_456239146?list=ln-bkEN0qe24NcgDL5cqq",
      presentationUrl: "https://docs.google.com/presentation/d/1omacMOkIw9EfJrWmZEp9DWoDUk1u7tc-/edit?slide=id.p1#slide=id.p1"
    },
    {
      id: "13",
      studentName: t('students.project.13.name'),
      title: t('students.project.13.title'),
      description: t('students.project.13.description'),
      image: "/students/Marina.JPG",
      videoUrl: "https://vkvideo.ru/video-231325948_456239143?list=ln-z5yzMR12vjnPYs98io",
      presentationUrl: "https://github.com/barramus/GymAiMentor/blob/main/GymAiMentor.pptx"
    }
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedProject(null);
  };


  return (
    <section id="student-projects" className="py-20 relative overflow-hidden scroll-mt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Interactive Roadmap Step */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Roadmap Step */}
              <div className="group cursor-pointer">
                <div className="relative">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center gap-4">
                      <h3 className="text-xl text-muted-foreground">
                        {t('students.roadmap.title')}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Road path continuing down */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full">
                    <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8 text-primary animate-pulse rotate-90" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Заголовок раздела */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black dark:text-white mb-6 flex items-center justify-center gap-3">
            <span>{t('students.main.title')}</span>
            <ArrowDown className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary animate-bounce" />
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-4xl mx-auto whitespace-pre-line">
            {t('students.subtitle')}<br />
            {t('students.description')}
          </p>
        </div>

        {/* Сетка проектов */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group relative overflow-hidden animate-scale-in hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => handleProjectClick(project)}
            >
              <CardContent className="p-0 relative">
                {/* Фото студента */}
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Play className="w-8 h-8 mx-auto mb-2" />
                      <span className="text-sm font-medium">{t('students.click.to.view')}</span>
                    </div>
                  </div>
                  
                  {/* Фото студента */}
                  <img 
                    src={project.image}
                    alt={project.studentName}
                    className="w-full h-full object-cover rounded-2xl"
                    onError={(e) => {
                      // Fallback на UI Avatars если фото не загрузилось
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(project.studentName)}&size=400&background=6366f1&color=fff&bold=true&font-size=0.5`;
                    }}
                  />
                </div>

                {/* Подпись с информацией о студенте */}
                <div className="p-4 bg-background">
                  <div className="text-center">
                    <h3 className="font-semibold text-foreground mb-1 text-lg">
                      {project.studentName}
                    </h3>
                    <p className="text-sm font-medium text-primary mb-2">
                      {project.title}
                    </p>
                    <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Модальное окно с ссылками */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="text-center">
              <p className="font-semibold text-foreground mb-2">
                {selectedProject?.studentName}
              </p>
              <p className="text-muted-foreground mb-4">
                {selectedProject?.description}
              </p>
            </div>

                   <div className="space-y-3">
                     <Button 
                       className="w-full justify-center gap-2"
                       onClick={() => window.open(selectedProject?.videoUrl, '_blank')}
                     >
                       <Play className="w-4 h-4" />
                       {t('students.watch.video')}
                       <ExternalLink className="w-4 h-4" />
                     </Button>
                     
                     <Button 
                       variant="outline"
                       className="w-full justify-center gap-2"
                       onClick={() => window.open(selectedProject?.presentationUrl, '_blank')}
                     >
                       <FileText className="w-4 h-4" />
                       {t('students.open.presentation')}
                       <ExternalLink className="w-4 h-4" />
                     </Button>
                   </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default StudentProjects;