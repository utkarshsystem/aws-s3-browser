# Copilot Workspace Instructions for AWS S3 Browser

## Purpose
This workspace provides a multi-package monorepo for building, testing, and deploying a modern AWS S3 browser UI using Next.js, React, and TypeScript, with Amplify integration for authentication and S3 access.

## Build & Development
- **Install dependencies:**
  - Monorepo: `pnpm i`
  - Individual package: `pnpm i` in the package folder
- **Run dev server:**
  - Next.js UI: `pnpm dev` in `vcp-s3-browser-ui` or `s3-browser-app`
- **Build:**
  - `pnpm build` in the relevant package
- **Amplify backend:**
  - `npx ampx sandbox` (see README)

## Project Structure
- `vcp-s3-browser-ui/`: Main Next.js S3 browser UI (TypeScript, React)
- `s3-browser-app/`: Alternative Next.js app (legacy or alternate UI)
- `typescript/`: Shared backend logic, types, and API routes
- `vcp-npm-ui-components/`: Shared React UI components (can be imported in UIs)

## Key Conventions
- **API routes** for S3 operations are in `typescript/src/api/`
- **UI logic** is in `vcp-s3-browser-ui/src/pages/` and `vcp-s3-browser-ui/src/S3BrowserComponent.tsx`
- **Component communication**: Use props and hooks, avoid context for cross-app state
- **Amplify Auth**: Use Cognito for authentication; see README for setup
- **S3 Access**: Use provided API routes, do not access S3 directly from the browser

## Testing
- No formal test suite by default. Add tests in each package as needed.
- Use `pnpm test` if/when test scripts are added.

## Common Pitfalls
- **Environment variables**: Set `NEXT_PUBLIC_AWS_REGION` and Amplify config in `.env`
- **Monorepo linking**: Use `pnpm` workspaces for local development
- **API errors**: Check server logs in `typescript/server.ts` if S3/API calls fail

## Example Prompts
- "List all S3 buckets and show their contents."
- "Open a file from S3 in the editor and save changes."
- "Upload a new file to a specific S3 bucket."
- "Rename a folder in S3."

## Agent Customization Ideas
- **applyTo**: Use `applyTo` for instructions specific to `vcp-s3-browser-ui` (frontend) vs `typescript` (backend)
- **Hooks**: Add hooks for code formatting, linting, or deployment
- **Skills**: Add skills for S3 API, Amplify Auth, or Next.js best practices

---
For more details, see the workspace README and each package's README if present.
