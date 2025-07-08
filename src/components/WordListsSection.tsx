
import { useState } from 'react';
import { WordList } from '../types/word';
import { WordListCard } from './WordListCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Library, Search, Filter } from 'lucide-react';
import { mockWordLists } from '../data/mockData';

export const WordListsSection = () => {
  const [wordLists] = useState<WordList[]>(mockWordLists);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get unique tags from all word lists
  const allTags = Array.from(new Set(wordLists.flatMap(list => list.tags)));

  const filteredLists = wordLists.filter(list => {
    const matchesSearch = list.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         list.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(tag => list.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  const handleStudyStart = (listId: string) => {
    console.log('Starting study for list:', listId);
    // TODO: Navigate to study mode
  };

  const handleViewDetails = (listId: string) => {
    console.log('Viewing details for list:', listId);
    // TODO: Navigate to list details
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Library className="h-8 w-8 text-primary" />
          <h2 className="section-title">Kelime Listeleri</h2>
        </div>
        <p className="section-subtitle max-w-2xl mx-auto">
          Hazır listelerden seçim yapın veya kendi listenizi oluşturun
        </p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Liste ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Tag Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="h-4 w-4" />
            <span>Kategoriler:</span>
          </div>
          {allTags.map(tag => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </Badge>
          ))}
          {selectedTags.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedTags([])}
              className="text-xs"
            >
              Temizle
            </Button>
          )}
        </div>
      </div>

      {/* Word Lists Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLists.map((wordList, index) => (
          <div key={wordList.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
            <WordListCard
              wordList={wordList}
              onStudyStart={handleStudyStart}
              onViewDetails={handleViewDetails}
            />
          </div>
        ))}
      </div>

      {filteredLists.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            Aradığınız kriterlere uygun liste bulunamadı
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchQuery('');
              setSelectedTags([]);
            }}
            className="mt-4"
          >
            Filtreleri Temizle
          </Button>
        </div>
      )}
    </section>
  );
};
