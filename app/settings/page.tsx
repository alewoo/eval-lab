'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function SettingsPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [defaultLlmModel, setDefaultLlmModel] = useState('')
  const [exactMatchThreshold, setExactMatchThreshold] = useState('90')
  const [apiKey, setApiKey] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement settings update logic
    console.log({ name, email, defaultLlmModel, exactMatchThreshold, apiKey })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <form onSubmit={handleSubmit}>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button type="button" variant="outline">Change Password</Button>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Platform Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="defaultLlmModel">Default LLM Model</Label>
              <Select value={defaultLlmModel} onValueChange={setDefaultLlmModel}>
                <SelectTrigger>
                  <SelectValue placeholder="Select default LLM Model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="groq">Groq LLM</SelectItem>
                  {/* Add more LLM options as needed */}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="exactMatchThreshold">Exact Match Threshold (%)</Label>
              <Input
                id="exactMatchThreshold"
                type="number"
                min="0"
                max="100"
                value={exactMatchThreshold}
                onChange={(e) => setExactMatchThreshold(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>API Keys</CardTitle>
            <CardDescription>Manage your LLM API keys</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="apiKey">Groq LLM API Key</Label>
              <Input
                id="apiKey"
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <Button type="submit">Save Settings</Button>
      </form>
    </div>
  )
}

