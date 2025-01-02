'use client'

import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function ExperimentSelector() {
  const [selectedExperiment, setSelectedExperiment] = useState('')

  // TODO: Fetch actual experiments from the backend
  const experiments = ['Experiment 1', 'Experiment 2', 'Experiment 3']

  return (
    <div className="w-full max-w-xs">
      <Select value={selectedExperiment} onValueChange={setSelectedExperiment}>
        <SelectTrigger>
          <SelectValue placeholder="Select an experiment" />
        </SelectTrigger>
        <SelectContent>
          {experiments.map((experiment) => (
            <SelectItem key={experiment} value={experiment}>
              {experiment}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

