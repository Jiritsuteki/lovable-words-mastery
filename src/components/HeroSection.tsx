
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BookOpen, Brain, TrendingUp, Users } from 'lucide-react';

export const HeroSection = () => {
  const stats = [
    { icon: BookOpen, label: 'Kelime Listesi', value: '50+' },
    { icon: Users, label: 'Aktif Kullanıcı', value: '10K+' },
    { icon: Brain, label: 'Çalışılan Kelime', value: '1M+' },
    { icon: TrendingUp, label: 'Başarı Oranı', value: '%95' }
  ];

  return (
    <section className="text-center space-y-12 py-12">
      {/* Main Hero Content */}
      <div className="space-y-6 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Kelime Dağarcığınızı
            <span className="text-primary block mt-2">Güçlendirin</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Bilimsel olarak kanıtlanmış spaced repetition tekniği ile kelimelerinizi 
            kalıcı hafızaya yerleştirin. Flash-card, quiz ve interaktif çalışma modları ile etkili öğrenin.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="text-lg px-8 py-3 h-auto">
            <BookOpen className="mr-2 h-5 w-5" />
            Çalışmaya Başla
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3 h-auto">
            <TrendingUp className="mr-2 h-5 w-5" />
            Popüler Kelimeleri Keşfet
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-up" style={{ animationDelay: '300ms' }}>
        {stats.map(({ icon: Icon, label, value }, index) => (
          <Card key={label} className="p-6 text-center hover:shadow-lg transition-all duration-200">
            <div className="space-y-3">
              <Icon className="h-8 w-8 text-primary mx-auto" />
              <div>
                <p className="text-2xl font-bold text-foreground">{value}</p>
                <p className="text-sm text-muted-foreground">{label}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Features Preview */}
      <div className="grid md:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: '600ms' }}>
        <Card className="p-6 text-center space-y-4">
          <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
            <Brain className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Akıllı Tekrar</h3>
            <p className="text-muted-foreground text-sm">
              Spaced repetition algoritması ile unutma eğrinizi yenin
            </p>
          </div>
        </Card>

        <Card className="p-6 text-center space-y-4">
          <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Çoklu Çalışma Modu</h3>
            <p className="text-muted-foreground text-sm">
              Flash-card, quiz, yazım testi ve dinleme egzersizleri
            </p>
          </div>
        </Card>

        <Card className="p-6 text-center space-y-4">
          <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
            <TrendingUp className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">İlerleme Takibi</h3>
            <p className="text-muted-foreground text-sm">
              Detaylı analitikler ile öğrenme sürecinizi izleyin
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
