# EvalLab App Flow Document

## 1. Overview

EvalLab is a full-stack application designed to evaluate Large Language Models (LLMs) through experiments, test cases, and performance metrics. This document outlines the flow of the application from user interactions to backend processes.

---

## 2. User Roles

- **Standard User**: Can create, edit, and view experiments.
- **Admin**: Has all user privileges plus access to platform settings and system logs.

---

## 3. App Flow

### 3.1 Authentication Flow

1. **Login/Register**:

   - **Frontend**:
     - User enters email and password on the login/register page.
     - Optional: Social login (Google, GitHub).
   - **Backend**:
     - Validate credentials or create a new user.
     - Generate and return a JWT token.
   - **Next Step**: Redirect user to the **Home Page**.

2. **Logout**:
   - Clear JWT token from local storage.
   - Redirect to login page.

---

### 3.2 Experiment Flow

1. **Create Experiment**:

   - **Frontend**:
     - User navigates to the "New Experiment" page.
     - User enters:
       - Experiment Name
       - System Prompt
       - Selects LLM model
       - Adds test cases (user messages and expected outputs).
     - User clicks "Create Experiment."
   - **Backend**:
     - Save experiment details to the database.
   - **Next Step**: Redirect user to the **Experiments Page** or show a success notification.

2. **Run Experiment**:

   - **Frontend**:
     - User selects an experiment and clicks "Run."
     - Display a progress indicator while the experiment runs.
   - **Backend**:
     - Fetch test cases for the experiment.
     - Send each test case to the selected LLM via its API (e.g., Groq LLM).
     - Grade responses based on predefined grading mechanisms (Exact Match, Partial Match, etc.).
     - Save results to the database.
   - **Next Step**: Redirect user to the **Dashboard Page** for results visualization.

3. **View Experiment Results**:
   - **Frontend**:
     - User navigates to the Dashboard.
     - Results are displayed using charts, tables, and summary cards.
   - **Backend**:
     - Fetch experiment results from the database and return them to the frontend.

---

### 3.3 Dashboard Flow

1. **View Performance Metrics**:

   - User selects an experiment from the dropdown.
   - Metrics are displayed:
     - Total Test Cases
     - Accuracy Chart
     - Response Time Chart
     - Grading Distribution Pie Chart
   - Test case details are shown in a table below.

2. **Filter and Sort**:
   - User applies filters (e.g., accuracy > 80%, response time < 500ms).
   - Backend fetches filtered data and returns it to the frontend.

---

### 3.4 Settings Flow

1. **Account Settings**:

   - User updates profile (e.g., name, email) or changes their password.
   - Backend updates the database and returns success/failure status.

2. **API Key Management**:
   - User adds or updates API keys for LLM integrations.
   - Backend stores encrypted API keys in the database.

---

### 3.5 Error Handling Flow

1. **Frontend**:
   - Display user-friendly error messages for issues like:
     - Invalid inputs.
     - API call failures.
     - Experiment creation errors.
2. **Backend**:
   - Log errors for debugging.
   - Return appropriate HTTP status codes (e.g., 400 for bad requests, 500 for server errors).

---

## 4. Backend Workflow

### 4.1 Database Operations

- Store and retrieve:
  - User accounts.
  - Experiments and test cases.
  - Experiment results and metrics.

### 4.2 API Integrations

- Groq LLM API:
  - Send prompts and test cases.
  - Receive and process responses.
- Use caching (e.g., Redis) for frequent or large API calls.

---

## 5. Frontend Workflow

### 5.1 State Management

- Use React Context or Redux for managing:
  - User authentication state.
  - Experiment data.
  - Dashboard filters.

### 5.2 Data Flow

- Fetch data from the backend using `axios`.
- Display results dynamically in tables, charts, and cards.

---

## 6. Navigation Flow

1. **Unauthenticated User**:
   - Login → Home Page → Redirect to Login/Register if unauthenticated.
2. **Authenticated User**:
   - Home → Experiments Page → Create Experiment → Run Experiment → Dashboard.

---

## 7. Future Extensions

- **User Collaboration**:
  - Allow multiple users to collaborate on experiments.
- **Advanced Metrics**:
  - Add custom grading metrics.
- **Prebuilt Experiment Templates**:
  - Provide predefined test cases for common use cases.

---

This document outlines the app flow from user actions to backend processes.
