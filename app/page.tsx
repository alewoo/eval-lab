import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Welcome to EvalLab
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Evaluate and analyze the performance of large language models across
            various tasks. Build better AI applications with data-driven
            insights.
          </p>
          <div className="space-x-4">
            <Link href="/auth/register">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button size="lg" variant="outline">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-500 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-blue-600">🔬</span> Run Experiments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Create and run experiments with multiple LLMs to test their
                  performance. Compare results across different models and
                  parameters.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-blue-600">📊</span> Grade Test Cases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Automatically grade test cases with metrics like accuracy and
                  response time. Get detailed insights into model performance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-500 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-blue-600">📈</span> Detailed Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  View comprehensive analytics and visualizations of your
                  experiment results. Make data-driven decisions about your AI
                  models.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to dive in?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join EvalLab today and start improving your AI models with
            comprehensive testing and analytics.
          </p>
          <Link href="/auth/register">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Create Free Account
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
