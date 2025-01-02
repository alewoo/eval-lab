import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to EvalLab</h1>
        <p className="text-xl mb-6">Evaluate and analyze the performance of large language models across various tasks.</p>
        <Link href="/experiments">
          <Button size="lg">Get Started</Button>
        </Link>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Run Experiments</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Create and run experiments with multiple LLMs to test their performance.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Grade Test Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Automatically grade test cases with metrics like accuracy and response time.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Detailed Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>View comprehensive analytics and visualizations of your experiment results.</CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to dive in?</h2>
        <div className="space-x-4">
          <Link href="/experiments/new">
            <Button variant="outline">Create New Experiment</Button>
          </Link>
          <Link href="/experiments">
            <Button variant="outline">View Past Experiments</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

