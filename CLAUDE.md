# Qiankun Monorepo

## Project Overview
Qiankun micro-frontend monorepo with React main app and mixed React/Vue sub-apps.

## Tech Stack
- **Package Manager**: pnpm workspaces
- **Build Tool**: Vite
- **Main App**: React 18 + qiankun + React Router 6 (port 8000)
- **Sub React**: React 18 + vite-plugin-qiankun (port 8001)
- **Sub Vue**: Vue 3 + vite-plugin-qiankun (port 8002)

## Common Commands
- `pnpm install` — install all dependencies
- `pnpm dev` — start all apps in parallel
- `pnpm dev:main` — start main app only
- `pnpm dev:sub-react` — start React sub-app only
- `pnpm dev:sub-vue` — start Vue sub-app only
- `pnpm build` — build all packages

## Project Structure
- `packages/main-app/` — qiankun main application
- `packages/sub-react/` — React micro-frontend
- `packages/sub-vue/` — Vue micro-frontend

## Notes
- Sub-apps use `vite-plugin-qiankun` for lifecycle hooks
- Each sub-app supports both standalone and qiankun-hosted modes
- Main app registers sub-apps via `registerMicroApps` in `src/App.tsx`
