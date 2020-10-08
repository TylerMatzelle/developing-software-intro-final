**Table of Contents**

1. [Overview](./readme.md)
2. [Assessment Criteria](./criteria.md)
3. [Scenario](./scenario.md)
4. [Project Instructions (100 Points)](./project-instructions.md)
5. [Setup Instructions (300 Points)](./setup-instructions.md)
6. [Software Instructions (600 Points)](./software-instructions.md)
7. [Submission](./submission.md)

---

<br/>
<br/>

# Setup Instructions

## 1. Fork, Clone & Initialize (50 Points)

- Fork this repository into your github account
- Clone your remote repository onto your local machine
- From your `master` branch, create a new branch called `feature/npm` and checkout this branch
- This repository does not start as an NPM package. Initialize it as an NPM Package.
  - Name it `acsd-final-[yourname]`
  - Make sure the version starts as `1.0.0`
- Commit your changes
- Merge your feature branch into master on your local machine

## 2. Make Your Package a TypeScript Project (50 Points)

- From your `master` branch, create a new branch called `feature/typescript` and checkout this branch
- Setup your package for TypeScript
- Add NPM scripts so that you can, in one cli command each:
  - compile
  - start
  - compile & start
- Update the readme.md
- Version your package
- Commit your changes
- Merge your feature branch into master on your local machine

## 3. Automate Linting (50 Points)

- From your `master` branch, create a new branch called `feature/lint` and checkout this branch
- Add ESLint to your project
- Modify your NPM scripts so that you can, in one cli command each:
  - compile
  - start
  - lint
  - compile & run
  - lint, compile & run
- Update the readme.md
- Version your package
- Commit your changes
- Merge your feature branch into master on your local machine

## 4. Automate Code Formatting (50 Points)

- From your `master` branch, create a new branch called `feature/format` and checkout this branch
- Add Prettier to your project
- Modify your NPM scripts so that you can, in one cli command each:
  - compile
  - start
  - lint
  - format
  - compile & run
  - lint, format, compile & run
- Update the readme.md
- Version your package
- Commit your changes
- Merge your feature branch into master on your local machine

## 5. Automate Testing (50 Points)

- From your `master` branch, create a new branch called `feature/testing` and checkout this branch
- Add Mocha & Chai to your project
- Modify your NPM scripts so that you can, in one cli command each:
  - compile
  - start
  - lint
  - format
  - test
  - compile & run
  - lint, format, test, compile & run
- Update the readme.md
- Version your package
- Commit your changes
- Merge your feature branch into master on your local machine

## 6. Istanbul (50 Points)

- From your `master` branch, create a new branch called `feature/istanbul` and checkout this branch
- Add `nyc` to your project
- Modify your NPM scripts so that you can, in one cli command each:
  - compile
  - start
  - lint
  - format
  - test
  - test with coverage
  - compile & run
  - lint, format, test, compile & run
- Update the readme.md
- Version your package
- Commit your changes
- Merge your feature branch into master on your local machine

---

[Previous: Project Instructions](./project-instructions.md) | [Next: Software Instructions](./software-instructions.md)
