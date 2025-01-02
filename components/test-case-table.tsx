import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function TestCaseTable() {
  // TODO: Fetch actual test case data from the backend
  const testCases = [
    { id: 1, userMessage: 'Hello', expectedOutput: 'Hi there!', llmResponse: 'Hello!', grade: 'Partial Match', accuracy: '80%', responseTime: '1.1s' },
    { id: 2, userMessage: 'What\'s the weather?', expectedOutput: 'I\'m sorry, I don\'t have access to real-time weather information.', llmResponse: 'I apologize, but I don\'t have access to current weather data.', grade: 'Exact Match', accuracy: '100%', responseTime: '1.3s' },
    // Add more test cases as needed
  ]

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Test Case ID</TableHead>
            <TableHead>User Message</TableHead>
            <TableHead>Expected Output</TableHead>
            <TableHead>LLM Response</TableHead>
            <TableHead>Grade</TableHead>
            <TableHead>Accuracy</TableHead>
            <TableHead>Response Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {testCases.map((testCase) => (
            <TableRow key={testCase.id}>
              <TableCell>{testCase.id}</TableCell>
              <TableCell>{testCase.userMessage}</TableCell>
              <TableCell>{testCase.expectedOutput}</TableCell>
              <TableCell>{testCase.llmResponse}</TableCell>
              <TableCell>{testCase.grade}</TableCell>
              <TableCell>{testCase.accuracy}</TableCell>
              <TableCell>{testCase.responseTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

