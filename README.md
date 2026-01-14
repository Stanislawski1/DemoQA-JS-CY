#  DemoQA UI Automation Framework

A professional-grade End-to-End (E2E) UI testing framework designed to automate complex user interactions and web elements on the [DemoQA](https://demoqa.com/) platform.

##  Tech Stack & Tools

* **Cypress** — Core engine for fast and reliable UI testing.
* **JavaScript (ES6+)** — Scripting language.
* **Page Object Model (POM)** — Architectural pattern used to separate page logic from test scripts.
* **Allure Report** — Advanced reporting with custom business-readable steps.
* **Custom Commands** — Abstracted complex actions like multi-step form filling.

##  Framework Highlights

This project demonstrates proficiency in handling advanced UI automation challenges:

1.  **Iframe Handling**: Specialized implementation for interacting with nested frames (Main and Little Iframes).
2.  **Widget Interaction**: Automated complex components including **Date & Time Pickers**, **Accordions**, and **AutoComplete** inputs.
3.  **Advanced User Actions**: Implementation of **Drag-and-Drop** (Sortable), Resizable elements, and Grid-based selections.
4.  **Modal Management**: Dynamic verification of Small and Large modal content, states, and transitions.
5.  **Clean Architecture**:
    * `BasePage.js`: Centralized logic for step-by-step Allure logging.
    * `DataStorage.js`: Externalized test data to ensure clean and maintainable test suites.
    * `ROUTES`: Centralized URL management for easy environment switching.

##  Allure Step Integration

The framework utilizes a custom `step()` method within the `BasePage` class. This ensures that every high-level action is recorded as a distinct step in the Allure report, providing clear visibility for both technical and non-technical stakeholders.

##  Project Structure

* `cypress/pages/`: Page classes containing element selectors and action methods.
* `cypress/e2e/`: Organized test suites (Interactions, Widgets, Forms, Modals).
* `cypress/fixtures/`: Centralized storage for validation text and data objects.
* `cypress/support/`: Custom commands for repetitive and complex UI tasks.

##  Getting Started
