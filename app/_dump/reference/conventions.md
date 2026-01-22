---
id: conventions
aliases: []
tags: []
---
For React Components:
```typescript
export default function ComponentName() {}
```

For Utilities/Data
```typescript
export function doThing() {}
export const CONSTANT = '';
```

For Types
```typescript
export type User = {};
```

| Situation           | Use            |
| ------------------- | -------------- |
| One main export     | `default`      |
| Multiple exports    | named          |
| Shared utilities    | named          |
| React page/layout   | default        |
| Types only          | `import type`  |
| Heavy/optional code | dynamic import |

