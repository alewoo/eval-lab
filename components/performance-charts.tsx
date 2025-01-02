'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Bar, Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend)

export function PerformanceCharts() {
  // TODO: Fetch actual data from the backend
  const accuracyData = {
    labels: ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5'],
    datasets: [
      {
        label: 'Accuracy',
        data: [75, 90, 85, 95, 80],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  }

  const responseTimeData = {
    labels: ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5'],
    datasets: [
      {
        label: 'Response Time (ms)',
        data: [1200, 1000, 1500, 900, 1300],
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
    ],
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Accuracy</CardTitle>
        </CardHeader>
        <CardContent>
          <Bar data={accuracyData} options={{ responsive: true }} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Response Time</CardTitle>
        </CardHeader>
        <CardContent>
          <Line data={responseTimeData} options={{ responsive: true }} />
        </CardContent>
      </Card>
    </>
  )
}

