import { useState, useEffect } from 'react';
import { Course } from '@/lib/types/learning';

export function useCourses() {
  const [courses, setCourses] = useState([
    {
      id: '1',
      title: 'Investment Fundamentals',
      description: 'Learn the basics of investing and portfolio management',
      level: 'Beginner',
      lessons: 12,
      duration: '6 hours',
      progress: 45,
      instructors: [
        {
          id: '1',
          name: 'Sarah Johnson',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
        }
      ]
    },
    {
      id: '2',
      title: 'Advanced Stock Analysis',
      description: 'Master technical and fundamental analysis',
      level: 'Advanced',
      lessons: 15,
      duration: '8 hours',
      progress: 30,
      instructors: [
        {
          id: '2',
          name: 'Michael Chen',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
        }
      ]
    }
  ]);

  return { courses };
}
