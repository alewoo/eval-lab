'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function NewExperimentPage() {
  const [experimentName, setExperimentName] = useState('')
  const [systemPrompt, setSystemPrompt] = useState('')
  const [llmModel, setLlmModel] = useState('')
  const [testCases, setTestCases] = useState([{ userMessage: '', expectedOutput: '' }])

  const handleAddTestCase = () => {
    setTestCases([...testCases, { userMessage: '', expectedOutput: '' }])
  }

  const handleTestCaseChange = (index: number, field: 'userMessage' | 'expectedOutput', value: string) => {
    const updatedTestCases = testCases.map((testCase, i) => 
      i === index ? { ...testCase, [field]: value } : testCase
    )
    setTestCases(updatedTestCases)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log({ experimentName, systemPrompt, llmModel, testCases })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Create New Experiment</h1>
      <form onSubmit={handleSubmit}>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Experiment Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="experimentName">Experiment Name</Label>
              <Input
                id="experimentName"
                value={experimentName}
                onChange={(e) => setExperimentName(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="systemPrompt">System Prompt</Label>
              <Textarea
                id="systemPrompt"
                value={systemPrompt}
                onChange={(e) => setSystemPrompt(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="llmModel">LLM Model</Label>
              <Select value={llmModel} onValueChange={setLlmModel}>
                <SelectTrigger>
                  <SelectValue placeholder="Select LLM Model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="groq">Groq LLM</SelectItem>
                  {/* Add more LLM options as needed */}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Test Cases</CardTitle>
            <CardDescription>Add test cases for your experiment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {testCases.map((testCase, index) => (
              <div key={index} className="space-y-2">
                <Label htmlFor={`userMessage-${index}`}>User Message</Label>
                <Input
                  id={`userMessage-${index}`}
                  value={testCase.userMessage}
                  onChange={(e) => handleTestCaseChange(index, 'userMessage', e.target.value)}
                  required
                />
                <Label htmlFor={`expectedOutput-${index}`}>Expected Output</Label>
                <Input
                  id={`expectedOutput-${index}`}
                  value={testCase.expectedOutput}
                  onChange={(e) => handleTestCaseChange(index, 'expectedOutput', e.target.value)}
                  required
                />
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button type="button" variant="outline" onClick={handleAddTestCase}>Add Test Case</Button>
          </CardFooter>
        </Card>

        <Button type="submit">Create Experiment</Button>
      </form>
    </div>
  )
}

