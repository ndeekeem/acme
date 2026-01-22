---
id: import
aliases: []
tags: []
---
## Namespace Imports (* as)
```typescript
import * as math from './math';

math.add(2, 3);
math.PI;
```

When to use:
- Rarely
- Large utility libraries
- Avoid name collisions

## Side-effect Imports
Importing a file ony for what it runs, not what it exports.
```typescript
import './global.css';
import 'dotenv/config';
```

When to use:
- CSS
- Polyfills
- Global setup

*Use sparingly-harder to reason about.*

## Type-only Imports (TypeScript)
Avoid shipping types to runtime.
```typescript
import type { Invoice } from '@/types';
```

When to use:
- Props
- Interfaces
- Server/client boundaries

*Helps tree-shaking and avoids circular deps.*

## Dynamic Imports
Load code only when needed.
```typescript
const Chart = dynamic(() => import('./Chart'), {
    ssr: false,
});

// vanilla
const module = await import('./math');
```

When to use:
- Heavy components
- Client-only libraries
- Performance optimization

*Very common in Next.js.*

