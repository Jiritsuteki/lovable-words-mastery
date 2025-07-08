
import { Word } from '../types/word';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Volume2, Plus, TrendingUp } from 'lucide-react';

interface WordCardProps {
  word: Word;
  showAddButton?: boolean;
  showTrending?: boolean;
  onAddToList?: (word: Word) => void;
  onPlayAudio?: (word: Word) => void;
  className?: string;
}

export const WordCard = ({ 
  word, 
  showAddButton = false, 
  showTrending = false,
  onAddToList,
  onPlayAudio,
  className = ""
}: WordCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Card className={`word-card ${className} group`}>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                {word.text}
              </h3>
              {word.phonetic && (
                <button
                  onClick={() => onPlayAudio?.(word)}
                  className="p-1.5 rounded-full hover:bg-accent transition-colors"
                  title="Telaffuzu dinle"
                >
                  <Volume2 className="h-4 w-4 text-muted-foreground hover:text-primary" />
                </button>
              )}
              {showTrending && (
                <div className="flex items-center gap-1 text-orange-600">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-medium">{word.popularityCount}</span>
                </div>
              )}
            </div>
            {word.phonetic && (
              <p className="text-muted-foreground text-sm mb-3 font-mono">
                {word.phonetic}
              </p>
            )}
          </div>
          {showAddButton && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => onAddToList?.(word)}
              className="shrink-0"
            >
              <Plus className="h-4 w-4 mr-1" />
              Ekle
            </Button>
          )}
        </div>

        {/* Definition */}
        <div className="space-y-3">
          <p className="text-foreground leading-relaxed">
            {word.definition}
          </p>
          
          {/* Examples */}
          {word.examples.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Örnek Cümleler
              </h4>
              <div className="space-y-2">
                {word.examples.slice(0, 2).map((example, index) => (
                  <p key={index} className="text-sm text-muted-foreground italic pl-4 border-l-2 border-accent">
                    "{example}"
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Tags and Difficulty */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-wrap gap-2">
            {word.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <Badge 
            variant="outline" 
            className={`text-xs ${getDifficultyColor(word.difficulty)}`}
          >
            {word.difficulty}
          </Badge>
        </div>
      </div>
    </Card>
  );
};
