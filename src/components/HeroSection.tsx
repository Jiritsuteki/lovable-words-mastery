
import { Button } from '@/components/ui/button';
import { BookOpen, Brain, Target, Zap } from 'lucide-react';

export const HeroSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'Yapay Zeka Destekli',
      description: 'Kişiselleştirilmiş öğrenme deneyimi'
    },
    {
      icon: Target,
      title: 'Spaced Repetition',
      description: 'Bilimsel tekrarla kalıcı öğrenme'
    },
    {
      icon: Zap,
      title: 'Hızlı & Etkili',
      description: 'Günde sadece 15 dakika ile ilerleme'
    },
    {
      icon: BookOpen,
      title: 'Zengin İçerik',
      description: 'Binlerce kelime ve örnek cümle'
    }
  ];

  return (
    <section className="pt-20 pb-16 text-center space-y-16">
      {/* Hero Content */}
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Kelime dağarcığınızı{' '}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              güçlendirin
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Yapay zeka destekli spaced repetition algoritması ile kelimeleri kalıcı olarak öğrenin. 
            Flash-card'lardan quiz'lere kadar çeşitli modlarla çalışın.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-lg px-8 py-3 h-auto">
            Ücretsiz Başla
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3 h-auto">
            Demo İzle
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div 
            key={feature.title}
            className="space-y-4 p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
