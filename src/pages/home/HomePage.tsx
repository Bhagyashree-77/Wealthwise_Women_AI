import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp, Target, Brain, BarChart, Shield, 
  Users, ArrowRight, Check, Menu, X
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-900">WealthWise Women</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/auth/login" className="text-gray-600 hover:text-purple-600">Sign In</Link>
            <Link to="/auth/register">
              <Button>Get Started</Button>
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <Link to="/auth/login" className="block py-2 text-gray-600">Sign In</Link>
            <Link to="/auth/register" className="block py-2">
              <Button className="w-full">Get Started</Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export function HomePage() {
  const features = [
    {
      icon: <Brain className="h-6 w-6 text-purple-600" />,
      title: 'AI-Powered Advisor',
      description: 'Get personalized financial guidance using advanced machine learning',
      link: '/dashboard/advisor',
      image: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-green-600" />,
      title: 'Portfolio Management',
      description: 'Track and optimize your investments in real-time',
      link: '/dashboard',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Target className="h-6 w-6 text-blue-600" />,
      title: 'Goal Planning',
      description: 'Set and track your financial goals with smart recommendations',
      link: '/dashboard/goals',
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />

      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Financial Freedom Starts Here
              </h1>
              <p className="text-xl text-gray-600">
                Join thousands of women taking control of their financial future with AI-powered insights and personalized guidance.
              </p>
              <div className="flex gap-4">
                <Link to="/auth/register">
                  <Button size="lg" className="gap-2">
                    Start Free Trial <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/auth/login">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
                alt="Woman investing"
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Everything You Need to Succeed
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Powerful tools designed for your financial journey
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link}>
                <Card className="h-full group hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-purple-600 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Financial Future?</h2>
          <Link to="/auth/register">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Get Started Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
