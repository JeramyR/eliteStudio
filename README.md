# Elite Injection Studio – Cosmetic Aesthetics Web Application

## Overview

Elite Injection Studio is a modern, responsive web application designed to support and promote the services of Sabra, a licensed aesthetics nurse providing cosmetic injections and medical aesthetic procedures.

The site highlights a range of treatments including:

- Neurotoxin (Dysport) wrinkle reduction
- SkinPen microneedling for skin rejuvenation
- PRP/PRF injections for collagen stimulation and hair restoration
- BioFillers made from PRP/PRF for volume and elasticity
- IV and injection-based vitamin therapy (B12, NAD, Glutathione, Lipo-MIC, etc.)
- GLP-1-based weight loss management

The design focuses on trust, comfort, and a clean clinical feel to help clients understand available services and confidently book consultations.

## Tech Stack

- React (with Vite)
- Font Awesome for icons
- ESLint and Prettier for code consistency
- Husky v9+ and lint-staged for pre-commit linting/formatting
- Deployed via AWS S3 and CloudFront

## Getting Started

### 1. Clone the Repository

```
git clone https://github.com/JeramyR/eliteStudio.git
cd eliteStudio
```

### 2. Install Dependencies

```
npm install
```

This installs all required dev tools, UI libraries, and sets up Husky.

### 3. Run the Dev Server

```
npm run dev
```

## Font Awesome Setup

Font Awesome is used for social and functional icons (e.g. Instagram, email, location, etc.).

### Installation

```
npm install @fortawesome/fontawesome-svg-core
npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/free-brands-svg-icons
npm install @fortawesome/react-fontawesome
```

### Usage Example

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

<FontAwesomeIcon icon={faInstagram} />;
```

## Code Quality and Formatting

This project enforces clean code using:

- ESLint (Flat config)
- Prettier
- Husky v9+
- lint-staged

### Lint and Format Manually

```
npx eslint . --fix
npx prettier --write .
```

## Pre-commit Setup (Husky v9+)

Git hooks are managed with Husky and lint-staged.

### Hook Behavior on Commit

- Lints and fixes staged JS/JSX files
- Formats applicable files (JS, JSON, MD, CSS)
- Blocks commit if errors remain after autofix

### Hook Setup

No `npx husky install` needed in Husky v9+. Instead, use:

```
git config core.hooksPath .husky
```

### Pre-commit Script

`.husky/pre-commit`:

```sh
#!/bin/sh
npx lint-staged
```

Make sure it is executable:

```
chmod +x .husky/pre-commit
```

To automatically configure this for all developers:

```json
"scripts": {
  "postinstall": "git config core.hooksPath .husky"
}
```

## VS Code Recommended Settings

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

Install the Prettier extension in VS Code.

## Deployment

Deployment is handled via AWS S3 and CloudFront. Instructions are located in `DEPLOY.md` (internal use only).

## License

This project is developed by Jeramy Reid for Elite Injection Studio. All rights reserved.
