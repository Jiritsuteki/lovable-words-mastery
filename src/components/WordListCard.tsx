
import { WordList } from '../types/word';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Calendar, ChevronRight } from 'lucide-react';

interface WordListCardProps {
  wordList: WordList;
  onStudyStart?: (listId: string) => void;
  onViewDetails?: (listId: string) => void;
  className?: string;
}

export const WordListCard = ({ 
  wordList, 
  onStudyStart,
  onViewDetails,
  className = ""
}: WordListCardProps) => {
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
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors flex-1">
              {wordList.title}
            </h3>
            <Badge 
              variant="outline" 
              className={`text-xs shrink-0 ml-2 ${getDifficultyColor(wordList.difficulty)}`}
            >
              {wordList.difficulty}
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm">
            {wordList.description}
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            <span>{wordList.totalWords} kelime</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{wordList.studyCount} çalışma</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{wordList.createdAt.toLocaleDateString('tr-TR')}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {wordList.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {wordList.tags.length > 4 && (
            <Badge variant="secondary" className="text-xs">
              +{wordList.tags.length - 4} daha
            </Badge>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          <Button 
            onClick={() => onStudyStart?.(wordList.id)}
            className="flex-1"
          >
            Çalışmaya Başla
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onViewDetails?.(wordList.id)}
            className="px-3"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};
