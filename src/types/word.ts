
export interface Word {
  id: string;
  text: string;
  phonetic?: string;
  definition: string;
  examples: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  popularityCount: number;
  createdAt: Date;
  audioUrl?: string;
  imageUrl?: string;
}

export interface WordList {
  id: string;
  title: string;
  description: string;
  words: Word[];
  totalWords: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  isPublic: boolean;
  createdAt: Date;
  studyCount: number;
}

export interface StudySession {
  id: string;
  wordId: string;
  userId: string;
  lastStudied: Date;
  nextReview: Date;
  repetitionCount: number;
  easinessFactor: number;
  interval: number;
  quality: number; // 0-5 scale for SM-2 algorithm
}
