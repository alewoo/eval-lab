'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export function ExperimentList() {
  // TODO: Fetch actual experiments from the backend
  const [experiments, setExperiments] = useState([
    { id: 1, name: 'Sentiment Analysis', llmModel: 'Groq LLM', createdDate: '2025-01-01', status: 'Completed' },
    { id: 2, name: 'Question Answering', llmModel: 'Groq LLM', createdDate: '2025-01-02', status: 'In Progress' },
    { id: 3, name: 'Text Summarization', llmModel: 'Groq LLM', createdDate: '2025-01-03', status: 'Pending' },
  ])

  const handleDelete = (id: number) => {
    // TODO: Implement delete functionality
    setExperiments(experiments.filter(exp => exp.id !== id))
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Experiment Name</TableHead>
          <TableHead>LLM Model</TableHead>
          <TableHead>Created Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {experiments.map((experiment) => (
          <TableRow key={experiment.id}>
            <TableCell>{experiment.name}</TableCell>
            <TableCell>{experiment.llmModel}</TableCell>
            <TableCell>{experiment.createdDate}</TableCell>
            <TableCell>{experiment.status}</TableCell>
            <TableCell>
              <div className="space-x-2">
                <Link href={`/experiments/${experiment.id}`}>
                  <Button variant="outline" size="sm">View</Button>
                </Link>
                <Link href={`/experiments/${experiment.id}/edit`}>
                  <Button variant="outline" size="sm">Edit</Button>
                </Link>
                <Button variant="outline" size="sm" onClick={() => handleDelete(experiment.id)}>Delete</Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

