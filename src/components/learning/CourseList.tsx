import React from 'react';
import { Card } from '@/components/ui/Card';
import { Progress } from '@/components/ui/Progress';
import { Button } from '@/components/ui/Button';
import { Play, BookOpen } from 'lucide-react';
import { useCourses } from '@/lib/hooks/useCourses';

export function CourseList() {
  const { courses } = useCourses();

  return (
    <div className="space-y-4">
      {courses?.map((course) => (
        <Card key={course.id}>
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <p className="text-sm text-gray-500">{course.description}</p>
              </div>
              <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full">
                {course.level}
              </span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  {course.lessons} lessons
                </span>
                <span>{course.duration}</span>
              </div>
              <span>{course.progress}% Complete</span>
            </div>

            <Progress value={course.progress} />

            <div className="flex justify-between items-center">
              <div className="flex -space-x-2">
                {course.instructors.map((instructor) => (
                  <img
                    key={instructor.id}
                    src={instructor.avatar}
                    alt={instructor.name}
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <Button className="flex items-center space-x-2">
                <Play className="h-4 w-4" />
                <span>Continue Learning</span>
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
