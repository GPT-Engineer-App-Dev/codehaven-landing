import React from 'react';
import { Code, Terminal, Zap, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Unlock the Power of Code</h1>
          <p className="text-xl mb-8">Learn, create, and innovate with our cutting-edge coding platform</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Get Started
          </Button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Code className="h-10 w-10 text-blue-500" />}
              title="Learn Multiple Languages"
              description="From Python to JavaScript, we've got you covered with a wide range of programming languages."
            />
            <FeatureCard
              icon={<Terminal className="h-10 w-10 text-green-500" />}
              title="Interactive Coding Environment"
              description="Practice your skills in our state-of-the-art online IDE with real-time feedback."
            />
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-yellow-500" />}
              title="Accelerated Learning"
              description="Our adaptive learning system helps you progress faster and retain knowledge better."
            />
            <FeatureCard
              icon={<BookOpen className="h-10 w-10 text-purple-500" />}
              title="Comprehensive Curriculum"
              description="From basics to advanced topics, our structured courses cater to all skill levels."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Coding Journey?</h2>
          <p className="text-xl mb-8">Join thousands of developers who have transformed their careers with our platform.</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Sign Up Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Code Learning Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default Index;