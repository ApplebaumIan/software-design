# Diátaxis Patterns for Docusaurus

Templates and patterns for each documentation quadrant.

---

## Tutorial Template

**Purpose:** Take someone from zero to "I built something!"

**Filename:** `getting-started/your-first-[thing].md`

```markdown
---
title: "Build Your First [Thing]"
description: "Create a working [thing] in 10 minutes"
---

# Build Your First [Thing]

By the end of this tutorial, you'll have a working [thing] that [does X].

## What You'll Build

[Screenshot or diagram of the end result]

## Prerequisites

- [Specific version] of [tool] installed
- Basic familiarity with [concept] (see [link] if new)

## Step 1: [Action verb] the [thing]

[One action, one visible result]

You should see:
```
[Expected output]
```

## Step 2: [Next action]

[Continue pattern...]

## What You've Built

You now have a [thing] that [capability].

**Next steps:**
- [Link to how-to guide for customization]
- [Link to explanation of how it works]
```

**Tutorial Anti-patterns:**
- "First, let's understand how X works..." → Link instead
- "You can also do Y..." → One path only
- "This is simple..." → Never

---

## How-To Guide Template

**Purpose:** Help someone accomplish a specific task.

**Filename:** `guides/how-to-[verb]-[thing].md`

```markdown
---
title: "How to [Verb] [Thing]"
description: "[Outcome] in [context]"
---

# How to [Verb] [Thing]

[One sentence: what this accomplishes]

## What You'll Need

- [Prerequisite 1]
- [Prerequisite 2]

## Steps

### 1. [Action]

```bash
command here
```

### 2. [Action]

[Instructions...]

## Verification

[How to confirm it worked]

## Troubleshooting

**[Symptom]:** [Quick fix or link to explanation]
```

**How-to Anti-patterns:**
- Teaching concepts (that's a tutorial)
- Listing all options (that's reference)
- Explaining why (that's explanation)

---

## Reference Template

**Purpose:** Describe what something IS, not how to use it.

**Filename:** `reference/[category]/[item].md`

```markdown
---
title: "[Component/API/Config] Reference"
description: "Complete reference for [thing]"
---

# [Thing] Reference

[One sentence: what this is]

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | `string` | required | Brief description |
| `enabled` | `boolean` | `true` | Brief description |

## Examples

```javascript
// Minimal
{ name: "example" }

// Full
{
  name: "example",
  enabled: true,
  // ...
}
```

## Related

- [Link to how-to guide using this]
- [Link to explanation of design]
```

**Reference Anti-patterns:**
- "To use this, first..." → That's a how-to
- "This is useful when..." → That's explanation
- Incomplete tables (every prop documented)

---

## Explanation Template

**Purpose:** Help someone understand WHY.

**Filename:** `concepts/[topic].md`

```markdown
---
title: "Understanding [Concept]"
description: "Why [thing] works the way it does"
---

# Understanding [Concept]

[Hook: why this matters to the reader]

## The Problem

[What challenge does this solve?]

## How [Product] Approaches This

[Your design decision and reasoning]

## Trade-offs

| Approach | Pros | Cons |
|----------|------|------|
| [Option A] | ... | ... |
| [Option B] | ... | ... |

**We chose [X] because [reasoning].**

## When to Choose Differently

[Acknowledge alternatives have merit in certain contexts]

## Further Reading

- [External resource]
- [Related concept in these docs]
```

**Explanation Anti-patterns:**
- Step-by-step instructions (how-to)
- Property tables (reference)
- "Let's build..." (tutorial)

---

## Deciding Which Type

Ask yourself:

```
Is the reader trying to LEARN?
├── Yes → Tutorial
└── No
    └── Are they trying to DO something specific?
        ├── Yes → How-to Guide
        └── No
            └── Are they trying to LOOK UP information?
                ├── Yes → Reference
                └── No → Explanation
```

**If you're unsure:** Write it as a how-to first. They're the most commonly needed and easiest to split later.

---

## Connecting the Quadrants

Good docs link between types:

- **Tutorial** → "To learn more about why this works, see [Explanation]"
- **Tutorial** → "For the full API, see [Reference]"
- **How-to** → "Prerequisites: complete [Tutorial] first"
- **How-to** → "For all options, see [Reference]"
- **Reference** → "For a walkthrough, see [How-to]"
- **Explanation** → "To try this yourself, see [Tutorial]"

Never dead-end a reader. Always point them forward.
