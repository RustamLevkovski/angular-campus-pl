# AngularCampus

## Overview

AngularCampus is an educational web application that provides learning resources on three main topics: Angular, JavaScript (JS), and Common Front-End (FE) Development. The application uses an authorization system to restrict access, ensuring only authenticated users can view the educational content.

## Business Logic

### Authorization Page

*   Users must log in with valid (hardcoded) credentials.

*   On successful login, users are redirected to the main content area.

*   If authentication fails, an error message is displayed.

*   Access to educational content is protected using a fake JWT token.

### Educational Content Pages

*   **Angular Page:** Tutorials, code samples, and explanations about Angular.

*   **JS Page:** Educational material on JavaScript fundamentals and advanced topics.

*   **Common FE Development Page:** General front-end development practices, tools, and tips.

*   Navigation between these pages is available via a menu or navigation bar.

*   Only authenticated users can access these pages.

This project was generated using [Angular CLI]([https://github.com/angular/angular-cli](https://github.com/angular/angular-cli)) version 21.1.2.

## Development server

To start a local development server, run:

```bash

ng serve

```

## Building

To build the project run:

```bash

ng build

```

This will compile your project and store the build artifacts in the dist/ directory. By default, the production build optimizes your application for performance and speed

## Running unit tests

To execute unit tests with the Vitest test runner and report generation, use the following command:

```bash

npm run test:coverage

```

To open report in the browser, use the following command:

```bash

npx serve test-report