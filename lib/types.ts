export type FrameType = 'historical' | 'legal' | 'contemporary' | 'personal' | 'contest';

export interface Segment {
  text: string;
  id?: string;
}

export interface Section {
  label: string;
  content: Segment[];
}

export interface DocumentData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  dateDescription: string;
  description: string;
  sections: Section[];
}

export interface Annotator {
  id: string;
  name: string;
  slug: string;
  title: string | null;
  bio: string | null;
  isFeatured: boolean;
}

export interface Annotation {
  id: string;
  passageId: string;
  documentId: string;
  annotatorName: string;
  annotatorSlug: string | null;
  isFeatured: boolean;
  frame: FrameType;
  body: string;
  voteCount: number;
  hasVoted: boolean;
  createdAt: string;
}

export type AnnotationCounts = Record<string, number>;
