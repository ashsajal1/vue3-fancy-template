# Contributing Guide 🌟

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/ashsajal1/vue3-fancy-template/pulls)
[![Open Issues](https://img.shields.io/github/issues/ashsajal1/vue3-fancy-template)](https://github.com/ashsajal1/vue3-fancy-template/issues)

We welcome contributions to the Vue 3 Fancy Template! Please take a moment to review this guide before submitting changes.

## 🧭 Table of Contents
- [Code of Conduct](#-code-of-conduct)
- [Getting Started](#-getting-started)
- [Development Workflow](#-development-workflow)
- [Pull Request Guidelines](#-pull-request-guidelines)
- [Coding Standards](#-coding-standards)
- [Reporting Issues](#-reporting-issues)
- [Feature Requests](#-feature-requests)

## 📜 Code of Conduct
Help us maintain a welcoming environment by reviewing our [Code of Conduct](CODE_OF_CONDUCT.md). We enforce it through all interactions.

## 🚦 Getting Started

### Prerequisites
- Node.js ≥16.x
- npm/yarn/pnpm
- Git

### Setup Guide
1. **Fork** the repository
2. **Clone** your fork:
   ```bash
   git clone https://github.com/your-username/vue3-fancy-template.git
   ```
3. **Install** dependencies:
   ```bash
   cd vue3-fancy-template
   npm install
   ```
4. Create a **feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🔄 Development Workflow

### Branch Naming Convention
- `feature/`: New functionality
- `fix/`: Bug fixes
- `docs/`: Documentation changes
- `refactor/`: Code refactoring

### Making Changes
1. Ensure tests pass:
   ```bash
   npm run test
   ```
2. Format code:
   ```bash
   npm run format
   ```
3. Commit changes with descriptive messages:
   ```bash
   git commit -m "feat: add new primevue component"
   ```

### Push Changes
```bash
git push origin your-branch-name
```

## 🎯 Pull Request Guidelines

### Creating a PR
1. Open a PR against the `main` branch
2. Use the PR template provided
3. Include:
   - Description of changes
   - Related issues (if applicable)
   - Screenshots/GIFs for UI changes

### PR Requirements
- ✅ Passing CI checks
- ✅ Updated documentation (if relevant)
- ✅ No console.log statements
- ✅ Proper TypeScript typings
- ✅ Lint-free code (`npm run lint`)

## 📐 Coding Standards

### General
- Follow Vue 3 Composition API patterns
- Use TypeScript interfaces/types
- Prefer PrimeVue components over custom implementations
- Mobile-first responsive design

### Style Guide
- 2-space indentation
- PascalCase for components
- camelCase for TS/JS
- Tailwind classes ordered using [Headwind](https://github.com/heybourn/headwind) pattern

### Component Structure
```vue
<script setup lang="ts">
// TypeScript logic first
</script>

<template>
  <!-- PrimeVue components preferred -->
  <Button label="Submit" />
</template>

<style scoped>
/* Tailwind classes preferred over custom CSS */
</style>
```

## 🐞 Reporting Issues
Found a bug? Please:
1. Search existing issues
2. Create new issue using bug template
3. Include:
   - Environment details
   - Reproduction steps
   - Expected vs actual behavior
   - Error logs (if applicable)

## 🚀 Feature Requests
Suggest new features by:
1. Opening a feature request issue
2. Describing the use case
3. Explaining potential implementation
4. Tag with `enhancement` label

## 📄 License
By contributing, you agree your contributions will be licensed under the [MIT License](LICENSE).

---

🙌 Thank you for helping make Vue 3 Fancy Template better! [Learn more about our stack](https://github.com/ashsajal1/vue3-fancy-template#readme)

Key features of this guide:
- Clear visual hierarchy with emojis
- Specific technical requirements for the Vue 3 stack
- PR quality checklist
- Component structure examples
- Tailwind-specific guidelines
- TypeScript focus
- Links to actual repository resources
- Encouraging tone with maintainability focus

Consider creating separate `CODE_OF_CONDUCT.md` and `CONTRIBUTING.md` files, then link them from your README. This structure helps maintain contribution quality while being welcoming to new developers.
