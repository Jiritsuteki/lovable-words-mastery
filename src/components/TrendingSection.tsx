
import { useState, useEffect } from 'react';
import { Word } from '../types/word';
import { WordCard } from './WordCard';
import { Button } from '@/components/ui/button';
import { TrendingUp, Clock, Calendar, CalendarDays } from 'lucide-react';
import { getTrendingWords } from '../data/mockData';
import { SupabaseStatus } from './SupabaseStatus';

type TimePeriod = '24h' | '7d' | '30d';

export const TrendingSection = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>('7d');
  const [trendingWords, setTrendingWords] = useState<Word[]>([]);

  useEffect(() => {
    setTrendingWords(getTrendingWords(selectedPeriod));
  }, [selectedPeriod]);

  const periodOptions = [
    { value: '24h' as TimePeriod, label: '24 Saat', icon: Clock },
    { value: '7d' as TimePeriod, label: '7 Gün', icon: Calendar },
    { value: '30d' as TimePeriod, label: '30 Gün', icon: CalendarDays }
  ];

  const handleAddToList = (word: Word) => {
    console.log('Adding word to list:', word.text);
    // TODO: Implement add to list functionality with Supabase
  };

  const handlePlayAudio = (word: Word) => {
    console.log('Playing audio for:', word.text);
    if (word.audioUrl) {
      const audio = new Audio(word.audioUrl);
      audio.play().catch(err => console.log('Audio play failed:', err));
    }
  };

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <TrendingUp className="h-8 w-8 text-primary" />
          <h2 className="section-title">Popüler Kelimeler</h2>
        </div>
        <p className="section-subtitle max-w-2xl mx-auto">
          En çok çalışılan ve eklenen kelimelerle kelime dağarcığınızı genişletin
        </p>
        
        {/* Supabase Status */}
        <div className="flex justify-center">
          <SupabaseStatus />
        </div>
      </div>

      {/* Period Selection */}
      <div className="flex justify-center">
        <div className="flex items-center gap-2 p-1 bg-muted rounded-lg">
          {periodOptions.map(({ value, label, icon: Icon }) => (
            <Button
              key={value}
              variant={selectedPeriod === value ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedPeriod(value)}
              className="gap-2"
            >
              <Icon className="h-4 w-4" />
              {label}
            </Button>
          ))}
        </div>
      </div>

      {/* Trending Words Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trendingWords.map((word, index) => (
          <div key={word.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
            <WordCard
              word={word}
              showAddButton={true}
              showTrending={true}
              onAddToList={handleAddToList}
              onPlayAudio={handlePlayAudio}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
