export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  lessons: number;
  duration: string;
  progress: number;
  instructors: Instructor[];
}

export interface Instructor {
  id: string;
  name: string;
  avatar: string;
}

export interface Resource {
  id: string;
  type: 'video' | 'article' | 'course';
  title: string;
  description: string;
  url: string;
}
