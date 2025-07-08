
import { Word, WordList } from '../types/word';

export const mockWords: Word[] = [
  {
    id: '1',
    text: 'serendipity',
    phonetic: '/ˌsɛrənˈdɪpɪti/',
    definition: 'The occurrence and development of events by chance in a happy or beneficial way',
    examples: [
      'Meeting my future business partner at that coffee shop was pure serendipity.',
      'The serendipity of finding this old book led to my research breakthrough.'
    ],
    difficulty: 'advanced',
    tags: ['abstract', 'positive', 'academic'],
    popularityCount: 1250,
    createdAt: new Date('2024-01-15'),
    audioUrl: '/audio/serendipity.mp3'
  },
  {
    id: '2',
    text: 'ephemeral',
    phonetic: '/ɪˈfɛmərəl/',
    definition: 'Lasting for a very short time',
    examples: [
      'The beauty of cherry blossoms is ephemeral, lasting only a few weeks.',
      'Social media trends are typically ephemeral in nature.'
    ],
    difficulty: 'advanced',
    tags: ['time', 'abstract', 'poetic'],
    popularityCount: 980,
    createdAt: new Date('2024-01-14'),
    audioUrl: '/audio/ephemeral.mp3'
  },
  {
    id: '3',
    text: 'ubiquitous',
    phonetic: '/juːˈbɪkwɪtəs/',
    definition: 'Present, appearing, or found everywhere',
    examples: [
      'Smartphones have become ubiquitous in modern society.',
      'The ubiquitous nature of plastic pollution is alarming.'
    ],
    difficulty: 'intermediate',
    tags: ['descriptive', 'academic', 'modern'],
    popularityCount: 720,
    createdAt: new Date('2024-01-13'),
    audioUrl: '/audio/ubiquitous.mp3'
  },
  {
    id: '4',
    text: 'paradigm',
    phonetic: '/ˈpærəˌdaɪm/',
    definition: 'A typical example or pattern of something; a model',
    examples: [
      'The new teaching method represents a paradigm shift in education.',
      'This research challenges the existing paradigm in climate science.'
    ],
    difficulty: 'intermediate',
    tags: ['academic', 'business', 'science'],
    popularityCount: 890,
    createdAt: new Date('2024-01-12'),
    audioUrl: '/audio/paradigm.mp3'
  },
  {
    id: '5',
    text: 'resilience',
    phonetic: '/rɪˈzɪliəns/',
    definition: 'The ability to recover quickly from difficulties; toughness',
    examples: [
      'Her resilience helped her overcome all the challenges she faced.',
      'The city showed remarkable resilience after the natural disaster.'
    ],
    difficulty: 'intermediate',
    tags: ['psychology', 'positive', 'strength'],
    popularityCount: 1450,
    createdAt: new Date('2024-01-11'),
    audioUrl: '/audio/resilience.mp3'
  },
  {
    id: '6',
    text: 'ambiguous',
    phonetic: '/æmˈbɪɡjuəs/',
    definition: 'Open to more than one interpretation; having a double meaning',
    examples: [
      'The politician gave an ambiguous answer to avoid controversy.',
      'The contract language was deliberately ambiguous.'
    ],
    difficulty: 'intermediate',
    tags: ['descriptive', 'communication', 'academic'],
    popularityCount: 654,
    createdAt: new Date('2024-01-10'),
    audioUrl: '/audio/ambiguous.mp3'
  }
];

export const mockWordLists: WordList[] = [
  {
    id: '1',
    title: 'TOEFL Academic Vocabulary',
    description: 'Essential academic words for TOEFL preparation',
    words: mockWords.slice(0, 4),
    totalWords: 150,
    difficulty: 'advanced',
    tags: ['TOEFL', 'academic', 'test-prep'],
    isPublic: true,
    createdAt: new Date('2024-01-01'),
    studyCount: 3420
  },
  {
    id: '2', 
    title: 'Daily Conversation Starters',
    description: 'Words to enrich your everyday conversations',
    words: mockWords.slice(2, 6),
    totalWords: 80,
    difficulty: 'intermediate',
    tags: ['conversation', 'daily', 'practical'],
    isPublic: true,
    createdAt: new Date('2024-01-05'),
    studyCount: 1890
  },
  {
    id: '3',
    title: 'Business English Essentials',
    description: 'Professional vocabulary for the workplace',
    words: [mockWords[3], mockWords[4]],
    totalWords: 120,
    difficulty: 'intermediate',
    tags: ['business', 'professional', 'workplace'],
    isPublic: true,
    createdAt: new Date('2024-01-08'),
    studyCount: 2340
  }
];

export const getTrendingWords = (period: '24h' | '7d' | '30d' = '7d'): Word[] => {
  return mockWords
    .sort((a, b) => b.popularityCount - a.popularityCount)
    .slice(0, 6);
};
