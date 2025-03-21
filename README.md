# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

🧹 Linting, Formatting, and Pre-commit Setup
This project uses a modern linting and formatting setup to ensure consistent, clean, and readable code across the team.

🔧 Tools Used
Tool Purpose
ESLint Linting JavaScript/JSX and enforcing best practices
Prettier Code formatting (quotes, spacing, etc.)
Husky Git hooks for enforcing rules on commit
lint-staged Runs ESLint and Prettier on staged files only
📦 Installing Dependencies
All dependencies are already listed in package.json, so after cloning the repo:

bash
Copy
Edit
npm install
This will:

Install all dev dependencies
Set up Husky pre-commit hooks automatically (via postinstall)
✅ What Happens on Commit?
When you commit code, the following process runs:

Only staged files are checked (not your whole project)
eslint --fix is run on .js/.jsx files
prettier --write is run on .js/.jsx/.json/.md/.css files
If errors can be fixed — they are.
If linting errors can’t be auto-fixed — the commit is blocked with an error message.
🧪 Linting & Formatting Manually
You can manually lint or format everything at any time:

bash
Copy
Edit
npx eslint . --fix
npx prettier --write .
💥 Strict Function Style Rules
We enforce writing components using function declarations instead of arrow functions:

js
Copy
Edit
// ✅ Allowed
function MyComponent() {
return <div>Hello</div>;
}

// ❌ Not Allowed
const MyComponent = () => {
return <div>Hello</div>;
};
⚠️ Arrow functions in things like .map() are still allowed!

📁 Ignored Paths
ESLint and Prettier will ignore:

Copy
Edit
node_modules/
dist/
.husky/
To customize, check .eslintignore and .prettierignore.

💻 VS Code Recommended Settings
Ensure these are set in .vscode/settings.json (you can create it if needed):

json
Copy
Edit
{
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode"
}
Also, make sure the Prettier extension is installed.

✅ Summary
Action Result
git commit Triggers auto-format + lint fix on staged files
npx eslint . --fix Lints and fixes all project files
npx prettier --write . Formats all supported files
VSCode Save Auto-formats with Prettier if enabled
