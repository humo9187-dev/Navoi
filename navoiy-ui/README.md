# Navoiy Theater UI

Nx monorepo containing navoiy-ui and navoiy-ui-admin Next.js applications, along with shared libraries for UI components, store, types, and utilities.
Project Structure

<pre>
navoiy-workspace/
│
├── navoiy-ui/           # Next.js application (main UI)
├── navoiy-ui-admin/     # Next.js application (admin panel)
│
├── ui-components/       # React UI components library
├── store/               # Zustand store library
├── types/               # TypeScript types library
├── utils/               # Utilities library
│
├── nx.json              # Nx configuration
├── tsconfig.base.json   # Shared TypeScript configuration
└── package.json         # Dependencies and scripts
</pre>

## Getting Started

## Requirements

- Node.js (see `.nvmrc` for the required version)

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
NEXT_PUBLIC_API_BASE_URL=""
NEXT_PUBLIC_API_PUBLIC_PREFIX=""
NEXT_ADMIN_API_ADMIN_PREFIX=""
```

- `NEXT_PUBLIC_API_BASE_URL` - Base URL for the API server
- `NEXT_PUBLIC_API_PUBLIC_PREFIX` - API prefix for public endpoints
- `NEXT_ADMIN_API_ADMIN_PREFIX` - API prefix for admin endpoints

### Install dependencies

```shell
    npm install
```

### Build applications

```shell
    npx nx run @navoiy-workspace/navoiy-ui:build
    npx nx run @navoiy-workspace/navoiy-ui-admin:build
```

> Static build output directories
>
> - `navoiy-ui/out`
> - `navoiy-ui-admin/out`

### Local preview of static build

```shell
    npx serve navoiy-ui/out
    npx serve navoiy-ui-admin/out
```

### Run tests

```shell
    nx test ui-components
    nx test store
    nx test types
    nx test utils
```

## Using Shared Libraries

You can import components, stores, types, and utilities in your applications using TypeScript path aliases:

```tsx
import { Button } from '@navoiy-workspace/ui-components';
import { useStore } from '@navoiy-workspace/store';
import type { User } from '@navoiy-workspace/types';
import { formatDate } from '@navoiy-workspace/utils';
```

## Technologies

1. [Nx](https://nx.dev/) — Monorepo management
1. [Next.js](https://nextjs.org/docs) — SSR/SPA React applications
1. [React](https://react.dev/) — UI components
1. [Zustand](https://docs.pmnd.rs/zustand) — State management
1. [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) — Type safety

## Useful Nx Commands

1. nx graph — Visualize project dependencies
1. nx lint <project> — Run linter
1. nx affected:build — Build only affected projects
