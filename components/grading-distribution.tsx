'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export function GradingDistribution() {
  // TODO: Fetch actual data from the backend
  const data = {
    labels: ['Exact Match', 'Partial Match', 'Mismatch'],
    datasets: [
      {
        data: [65, 25, 10],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
      },
    ],
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Grading Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <Pie data={data} options={{ responsive: true }} />
      </CardContent>
    </Card>
  )
}

