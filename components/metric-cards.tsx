import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MetricCards() {
  // TODO: Fetch actual metrics from the backend
  const metrics = [
    { title: 'Total Test Cases', value: '120' },
    { title: 'Average Accuracy', value: '85%' },
    { title: 'Average Response Time', value: '1.2s' },
    { title: 'LLM Model Used', value: 'Groq LLM' },
  ]

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

