---
name: docusaurus
description: "Opinionated Docusaurus documentation skill built on Diátaxis framework. Use when creating, restructuring, or improving documentation sites. Triggers on: docs/, blog/, docusaurus.config, sidebars, or any documentation task. Will ask clarifying questions to build the right structure."
license: MIT
---

# Docusaurus Documentation Skill

*Opinionated guidance for building documentation people actually read.*

## My Philosophy

Documentation isn't about documenting—it's about **enabling**. Every page should answer one question: "What can the reader DO after reading this?"

I follow the **Diátaxis framework**. Before writing anything, identify which quadrant you're in:

| Type | Purpose | User State | Question Answered |
|------|---------|------------|-------------------|
| **Tutorial** | Learning | "I'm new, teach me" | "Can you teach me to...?" |
| **How-to** | Doing | "I need to accomplish X" | "How do I...?" |
| **Reference** | Information | "I need to look up Y" | "What is the API for...?" |
| **Explanation** | Understanding | "I want to understand why" | "Why does...?" |

**Don't mix them.** A tutorial that becomes reference midway loses both audiences.

## Before You Write: Questions I'll Ask

When you ask me to create documentation, I need to understand:

1. **Who is reading this?** (New user? Developer? API consumer? Decision maker?)
2. **What should they be able to DO after?** (Not "know"—DO)
3. **Which Diátaxis quadrant?** (Tutorial/How-to/Reference/Explanation)
4. **What do they already know?** (Prerequisites matter)

If you haven't thought through these, I'll ask. Good docs require clear thinking first.

## Structure: My Strong Opinions

### Sidebar Organization

```
docs/
├── getting-started/          # Tutorials: learning journeys
│   ├── _category_.json       # collapsed: false
│   └── ...
├── guides/                   # How-tos: task completion
├── concepts/                 # Explanation: understanding
├── reference/                # Reference: lookup
│   ├── api/
│   └── configuration/
└── resources/                # Links, community, changelog
```

**Why this order?** It matches the reader's journey: Learn → Do → Understand → Look up.

### Frontmatter: Non-Negotiables

Every doc needs these. No exceptions:
```yaml
---
title: "Action-Oriented Title"        # What they'll DO, not what it IS
description: "One sentence outcome"   # Appears in search, make it count
---
```

Skip `sidebar_position` unless order matters semantically. Let alphabetical work.

### Writing Rules I Enforce

**Tutorials:**
- Start with what they'll BUILD, not what they'll LEARN
- One path only—no "alternatively" or "you could also"
- Every step produces visible output
- Link to explanation, don't embed it

**How-to Guides:**
- Title format: "How to [verb] [thing]"
- Assume competence—skip basics
- Start with the goal, not the tool
- Include "What you'll need" upfront

**Reference:**
- Mirror the code structure exactly
- Tables over prose for specs
- Examples for every endpoint/function
- No tutorials hiding in reference

**Explanation:**
- Answer "why" not "how"
- Connect to bigger picture
- Acknowledge trade-offs and alternatives
- Can be opinionated—this is where you explain decisions

## Inclusive Language: Required

Use these replacements. This isn't optional:

| Avoid | Use Instead |
|-------|-------------|
| whitelist/blacklist | allowlist/blocklist |
| master/slave | primary/replica, main/secondary |
| sanity check | confidence check, validation |
| dummy value | placeholder, sample |
| guys | folks, everyone, team |
| simple/easy | (just remove it) |

**Why "simple" is banned:** What's simple to you isn't simple to the reader. Saying "simply run X" makes struggling readers feel dumb.

**Pronouns:** Use "you" for the reader. Use "they" for hypothetical users. Avoid "we" unless it's genuinely collaborative.

## Dynamic Documentation Patterns

### Interactive Elements (Use Sparingly)

Tabs for platform differences:
```mdx
<Tabs groupId="os">
  <TabItem value="mac" label="macOS" default>
```

Details for optional deep-dives:
```mdx
<details>
<summary>Why does this matter?</summary>
...explanation that most readers can skip...
</details>
```

**Don't use tabs for:** Code language alternatives (pick one and show it well), or "beginner vs advanced" (separate pages instead).

### Admonitions: The Hierarchy

```
:::tip        → "This will make your life easier"
:::note       → "Relevant context you might miss"
:::warning   → "This could cause problems"
:::danger    → "This WILL break things if ignored"
```

**One admonition per section max.** If everything is highlighted, nothing is.

## What I Won't Do

- Create docs without understanding the audience
- Mix documentation types in one page
- Add "simple" or "easy" to instructions
- Generate walls of code without context
- Skip frontmatter description fields
- Create sidebars deeper than 3 levels

## Reference Files

For implementation details, see:
- [references/diataxis-patterns.md](references/diataxis-patterns.md) — Quadrant-specific templates
- [references/writing-guide.md](references/writing-guide.md) — Voice, tone, and inclusive language
- [references/config-reference.md](references/config-reference.md) — docusaurus.config.ts options
- [references/deployment.md](references/deployment.md) — Platform-specific deployment

## Getting Started

Tell me:
1. What documentation you're building
2. Who it's for
3. What they should be able to do after

I'll ask follow-up questions, then we'll build something people actually want to read.
