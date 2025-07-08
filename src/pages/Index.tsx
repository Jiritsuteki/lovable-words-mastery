
import { HeroSection } from '../components/HeroSection';
import { WordListsSection } from '../components/WordListsSection';
import { TrendingSection } from '../components/TrendingSection';
import { ThemeToggle } from '../components/ThemeToggle';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-primary-foreground font-bold text-lg">V</span>
              </div>
              <span className="text-2xl font-bold text-foreground bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                VocaBoost
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#lists" className="text-muted-foreground hover:text-foreground transition-colors">
                Listeler
              </a>
              <a href="#trending" className="text-muted-foreground hover:text-foreground transition-colors">
                Popüler
              </a>
              <a href="#study" className="text-muted-foreground hover:text-foreground transition-colors">
                Çalış
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                Giriş Yap
              </button>
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Kayıt Ol
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 space-y-24">
        <HeroSection />
        
        <div id="lists">
          <WordListsSection />
        </div>
        
        <div id="trending">
          <TrendingSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-24 py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 bg-gradient-to-br from-primary to-primary/80 rounded flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">V</span>
                </div>
                <span className="font-bold text-foreground">VocaBoost</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Yapay zeka destekli kelime öğrenmeyi eğlenceli ve etkili hale getiren platform
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Özellikler</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Kelime Listeleri</li>
                <li>Flash Cards</li>
                <li>Quiz Modları</li>
                <li>İlerleme Takibi</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Destek</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Yardım Merkezi</li>
                <li>İletişim</li>
                <li>Geri Bildirim</li>
                <li>Topluluk</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Yasal</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>Gizlilik Politikası</li>
                <li>Kullanım Şartları</li>
                <li>Çerez Politikası</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; 2024 VocaBoost. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
