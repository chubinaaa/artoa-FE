# Project ArtOa.io

The first automated platform that connects customers and wall artists seamlessly.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [**Git**](https://git-scm.com/) (for version control)
- [**Node.js**](https://nodejs.org/en) (runtime environment for JavaScript)
- [**pnpm**](https://pnpm.io/) (Node.js package manager)
- An **IDE** (such as [VSCode](https://code.visualstudio.com/))

### Setting Up the Codebase Locally

Follow these steps to get the project up and running on your local machine:

1. Clone the repository or download the project ZIP file:

   ```bash
   git clone https://github.com/Doer-Community/artoa-front.git
   ```

2. Navigate into the project directory:

   ```bash
   cd artoa-front
   ```

3. Install project dependencies:

   ```bash
   pnpm install
   ```

4. Start the local development server:

   ```bash
   pnpm dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the app.
6. You’re now ready to start working on your task!

---

## Development Conventions and Guidelines

By adhering to these guidelines, we ensure our code remains clean, scalable,
and easy to maintain.
please follow these best practices:

### Styling Guidelines

Please follow these guidelines to maintain consistency:

1. **TailwindCSS for Styling**: All styling should be done using TailwindCSS.
   Avoid writing custom CSS whenever possible.
2. **Avoid Arbitrary Classnames**: Refrain from using arbitrary values for class
   names(e.g., `className="p-[72px] max-w-screen-[1920px]"`).
3. **Extending Tailwind Config**: When necessary, extend the default TailwindCSS
   configuration in the `tailwind.config.ts` file.

   example:

   ```ts
      spacing: {
        "18": "4.5rem", // 72 / 4 = 18 = 4.5rem
      },
      screens: {
        "3xl": "1920px",
      },
   ```

   This helps maintain a unified design system.

4. **File Naming Convention**: Use **kebab-case** for naming files and directories
   (e.g., `use-window-size.ts`(😏), `user-dropdown.tsx`, `artist-profile/`).
   This ensures consistency across the codebase.

### Syncing the Codebase

1. Before starting a new task, always ensure your local `main` branch is up to date:

   ```bash
   git pull origin main
   ```

2. After syncing the latest changes, install any new dependencies:

   ```bash
   pnpm install
   ```

### Working on a New Task

1. Create a new branch following the naming conventions below:

   ```bash
   git checkout -b <branch-name>
   ```

2. Once you’ve completed your task, commit your changes (see the commit guidelines
   below).

### Committing Changes

Commit messages are crucial for tracking changes. Use the following guidelines
for clear and meaningful commits:

- Break down tasks into smaller, manageable parts.
- Each micro-task should have its own commit.
- Commit messages should start with a verb, such as: `add`, `update`, `delete`,
  `fix`, `create`.
- Example commit messages:
  - `add login feature`
  - `fix authentication bug`
  - `update readme`
- Avoid committing large or unnecessary files (e.g., `node_modules`).

### Branch Naming Conventions

Use the following prefixes for branch names to keep things organized:

- **New feature**: `feat/<feature-name>`
- **Refactor/Enhancement**: `ref/<feature-name>`
- **Bug fix**: `fix/<bug-description>`
- **Documentation**: `docs/<documentation-name>`

Examples:

- `feat/user-authentication`
- `ref/update-profile-feature`
- `fix/login-error`
- `docs/setup-instructions`

---

## Publishing Your Changes

When your task is complete and you've ensured everything works correctly, follow
these steps:

1. Ensure there are no errors or unexpected bugs.
2. Push your changes:

   ```bash
   git push origin <branch-name>
   ```

---

## GitHub Workflow Guide

### Creating a Pull Request (PR)

All changes must be merged into the `main` branch through a pull request.

1. Open a new pull request on GitHub.
2. Follow the **PR template** to fill in the `Title` and `Description` fields
   according to the conventions.
3. Assign yourself in the `Assignees` field.
4. Select one of the leads in the `Reviewers` field.
5. Ensure the correct branch is being merged into `main`.
6. Submit the pull request and wait for a review.
7. Add comments on the PR if needed.

### Merging Changes

Once your pull request has been reviewed and approved:

1. Click `Merge Pull Request`.
2. The codebase will automatically update, and the pull request will close.
