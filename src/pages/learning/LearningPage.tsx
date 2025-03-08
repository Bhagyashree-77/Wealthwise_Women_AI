import React from 'react';
import { Card } from '@/components/ui/Card';
import { GraduationCap } from 'lucide-react';
import { CourseList } from '@/components/learning/CourseList';
import { ResourceLibrary } from '@/components/learning/ResourceLibrary';

export function LearningPage() {
  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-white/10 rounded-lg">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Financial Education</h1>
            <p className="text-blue-100">Learn from expert resources and courses</p>
          </div>
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CourseList />
        </div>
        <div>
          <ResourceLibrary />
        </div>
      </div>
    </div>
  );
}
