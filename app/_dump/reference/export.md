---
id: import
aliases: []
tags: []
---
## Named Exports
Export multiple things by name from a file.
```typescript
export function add(a: number, b: number) {
    return a + b;
}

export const PI = 3.14;
```

Importing:
```typescript
import { add, PI } from './math';
```

When to use:
- Utility files
- Multiple exports
- Libraries
- Server helpers

## Renaming (aliases)
```ts
import { add as sum } from './math';
```

## Default Exports
Export one main thing from a file.
```ts
export default function Button() {
    return <button>Click</button>;
}

import Button from './Button';
```

When to use:
- One primary component
- Pages & layouts
- React components

*One default export per file.*

## Mixing Defaults + Named Exports
```typescript
// api.ts
export default function fetcher() {}
export function getUser() {}
export function getPosts() {}

// index.tsx
import fetcher, { getUser, getPosts } from './api';
```

When to use:
- Default = "main thing"
- Named = "helpers"

## Exporting at Definition vs Bottom
Inline exports (preferred)
```typescript
export function getInvoices() {}
export const MAX_LIMIT = 100;
```

Bottom exports
```typescript
function getInvoices() {}
const MAX_LIMIT = 100;

export { getInvoices, MAX_LIMIT };
```

Rule of thumb:
- Inline -> clarity
- Bottom -> when exporting conditionally or refactoring

## Re-exports (Barrel Files)
```typescript
// lib/index.ts
export { getInvoices } from './invoices';
export { getCustomers } from './customers';

// index.ts
import { getInvoices } from '@/lib';
```

When to use:
- Clean imports paths
- Libraries / shared code

*Avoide overuse in Next.js server/client boundaries.*

