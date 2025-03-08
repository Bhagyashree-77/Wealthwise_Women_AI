import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Camera } from 'lucide-react';

const profileSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  occupation: z.string().min(2, 'Occupation is required'),
  monthlyIncome: z.string().min(1, 'Monthly income is required'),
  age: z.string().min(1, 'Age is required'),
  riskTolerance: z.enum(['low', 'medium', 'high']),
});

type ProfileForm = z.infer<typeof profileSchema>;

export function ProfileSetup() {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileForm>({
    resolver: zodResolver(profileSchema),
  });

  const onSubmit = async (data: ProfileForm) => {
    // TODO: Save profile data
    navigate('/onboarding/banking');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card className="p-6">
      <h1 className="text-2xl font-bold mb-6">Create Your Profile</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <Camera className="h-12 w-12 text-gray-400" />
              )}
            </div>
            <label className="absolute bottom-0 right-0 bg-purple-600 rounded-full p-2 cursor-pointer">
              <Camera className="h-4 w-4 text-white" />
              <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
            </label>
          </div>
        </div>

        <Input
          label="Full Name"
          {...register('fullName')}
          error={errors.fullName?.message}
        />

        <Input
          label="Occupation"
          {...register('occupation')}
          error={errors.occupation?.message}
        />

        <Input
          label="Monthly Income"
          type="number"
          {...register('monthlyIncome')}
          error={errors.monthlyIncome?.message}
        />

        <Input
          label="Age"
          type="number"
          {...register('age')}
          error={errors.age?.message}
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Risk Tolerance
          </label>
          <select
            {...register('riskTolerance')}
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
          >
            <option value="low">Conservative</option>
            <option value="medium">Moderate</option>
            <option value="high">Aggressive</option>
          </select>
        </div>

        <Button type="submit" className="w-full">Continue</Button>
      </form>
    </Card>
  );
}
