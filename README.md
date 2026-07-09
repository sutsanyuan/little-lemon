# Little Lemon Booking App

A comprehensive restaurant reservation system built with React, focusing on high-fidelity UI implementation, robust form validation, and automated testing.

## Features & Implementation

-   **UX/UI Implementation**: Closely followed design specifications for a seamless user experience.
-   **Accessibility**: Applied semantic HTML tags and proper `htmlFor`/`id` associations to ensure compliance with accessibility standards.
-   **Form Validation**: Implemented both HTML5 native validation and custom JavaScript validation logic to ensure data integrity.
-   **Robust Error Handling**: Managed edge cases with meaningful, user-friendly error messages throughout the booking flow.
-   **Responsive Design**: Fully responsive layout optimized for various screen sizes (mobile, tablet, and desktop).
-   **Automated Testing**: Comprehensive test suite including unit tests for validation logic, integration tests for the booking flow, and component tests for UI interactions.
-   **Maintainable Architecture**: Modular code structure separating business logic (`/utils`) from UI components (`/components`).

## Tech Stack

-   **Library**: React
-   **Testing**: Jest & React Testing Library
-   **Styling**: SASS
-   **Utilities**: date-fns

## Getting Started

### 1. Installation

Install the project dependencies using npm:

```bash
npm install
2. Running the App
Start the development server:

Bash
npm start
3. Running Tests
To verify the application's stability and logic, run the test suite:

Bash
npm test
The test suite covers validation logic (utils), component UI rendering, and the booking submission flow.

Project Structure
src/components/: Reusable UI components (e.g., AppInput, AppDropdown, CustomDateInput).

src/utils/: Core business logic, including API simulation and validation rules.

src/pages/: Page-level components and routing logic.

*.test.js: Corresponding test files for each feature.

Developed by Su Tsan-Yuan
```
