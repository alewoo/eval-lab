# Dashboard Page Layout

## Header (Top Navigation Bar)

- **Logo**: Top-left corner with your project name (e.g., "eval lab").
- **Navigation Links**:
  - Home
  - Experiments
  - Dashboard (highlighted as the current page)
  - Settings
  - Logout
- **Search Bar**: Search for experiments or test cases by name.

---

## Main Content Area

### Experiment Summary Section (Top Row)

- **Experiment Selector Dropdown**: Dropdown to choose which experiment's data to display.
- **Summary Cards**: Display key metrics in a grid (2-3 cards per row):
  - **Total Test Cases**: Number of test cases evaluated.
  - **Average Accuracy**: Aggregate score for all test cases.
  - **Average Response Time**: Mean response time for the selected experiment.
  - **LLM Model Used**: Name of the model (e.g., Groq LLM).

### Performance Charts (Middle Row)

- **Accuracy Chart**:
  - A bar chart or line chart showing accuracy scores for each test case.
  - X-axis: Test Case Names or IDs.
  - Y-axis: Accuracy (%) or scores.
- **Response Time Chart**:
  - A line chart displaying response times.
  - X-axis: Test Case Names or IDs.
  - Y-axis: Response Time (ms).

### Grading Distribution (Middle Row)

- **Pie Chart**:
  - Shows the proportion of grading outcomes:
    - Exact Match
    - Partial Match
    - Mismatch

---

## Test Case Details Section (Bottom Row)

- **Table View**:
  - Displays a list of all test cases with detailed results.
  - Columns:
    - Test Case ID
    - User Message
    - Expected Output
    - LLM Response
    - Grade (Exact Match, Partial Match, etc.)
    - Accuracy Score
    - Response Time
- **Pagination**: For navigating through multiple test cases.

---

## Sidebar (Left)

- **Filters**:
  - Filter by:
    - Experiment Name
    - LLM Model
    - Accuracy Range (e.g., 80-100%)
    - Response Time (e.g., < 500ms)
- **Sort Options**: Sort test cases by accuracy, response time, or grading outcome.

---

## Footer

- Links to:
  - Documentation
  - Contact Support
  - Terms of Service
  - Privacy Policy
- Copyright notice (e.g., © 2025 eval lab).

---

## Visual Style

- Use a **clean, minimalistic design** with clear typography and spacing.
- Use color-coded charts for better data differentiation:
  - Green for high accuracy or short response times.
  - Red for mismatches or long response times.
- Ensure the layout is **responsive** for both desktop and mobile devices.
