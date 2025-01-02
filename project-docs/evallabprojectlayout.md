# EvalLab Project Layout

## 1. Header (Top Navigation Bar)

- **Logo**: Display your project name/logo (e.g., "EvalLab") at the top-left.
- **Navigation Links**:
  - Home
  - Experiments
  - Dashboard
  - Settings
  - Logout
- **Search Bar**: Include a search field for finding experiments or test cases.

---

## 2. Home Page Layout

### Purpose

The landing page provides an overview of the platform and its functionality.

### Layout

#### Section 1: Welcome Banner

- A welcome message introducing EvalLab and its purpose.
- A "Get Started" button leading users to the Experiments page.

#### Section 2: Features Overview

- Highlight key features such as:
  - Running experiments with multiple LLMs.
  - Grading test cases with metrics like accuracy and response time.
  - Viewing detailed analytics.

#### Section 3: Call-to-Action

- Provide options to:
  - Create a new experiment.
  - View past experiments.

---

## 3. Experiments Page Layout

### Purpose

Allows users to create, edit, and manage experiments.

### Layout

#### Section 1: Experiment List

- A table or card grid listing all experiments.
  - Columns: Experiment Name, LLM Model, Created Date, Status.
  - Include actions (e.g., Edit, Run, Delete).

#### Section 2: Create New Experiment

- A form for:
  - Inputting a **System Prompt**.
  - Selecting an LLM model.
  - Adding test cases.

#### Section 3: Experiment Details (Modal or Separate Page)

- Show detailed information about the selected experiment:
  - System Prompt.
  - LLM Model.
  - List of Test Cases.
  - Option to Run or Edit.

---

## 4. Dashboard Page Layout

### Purpose

Display performance metrics and results for experiments.

### Layout

#### Section 1: Experiment Summary

- Dropdown for selecting an experiment.
- Key metrics displayed in cards:
  - Total Test Cases.
  - Average Accuracy.
  - Average Response Time.

#### Section 2: Performance Charts

- Accuracy and response time visualized in bar/line charts.

#### Section 3: Grading Distribution

- Pie chart showing the breakdown of Exact Match, Partial Match, and Mismatch.

#### Section 4: Test Case Details

- A detailed table of test cases with:
  - Test Case ID, User Message, Expected Output, LLM Response, Grade, Accuracy, Response Time.

---

## 5. Settings Page Layout

### Purpose

Allow users to configure platform preferences and manage their account.

### Layout

#### Section 1: Account Settings

- Fields for updating profile details (e.g., Name, Email).
- Change Password functionality.

#### Section 2: Platform Preferences

- Options to:
  - Set default LLM model.
  - Configure grading thresholds (e.g., for Exact Match).

#### Section 3: API Keys

- A section to manage LLM API keys (e.g., add, update, or delete keys).

---

## 6. Footer

- Links to:
  - Documentation.
  - Support.
  - Privacy Policy.
  - Terms of Service.
- Copyright notice.

---

## Visual Design Principles

- **Consistency**: Maintain a consistent layout across pages.
- **Responsive Design**: Ensure usability across desktop, tablet, and mobile devices.
- **Color Coding**: Use intuitive colors (e.g., green for success, red for errors).
