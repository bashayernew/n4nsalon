---
name: premium-brand-system
description: Build a logo-derived design system—semantic tokens, luxury neutrals, balanced contrast. Use when starting or refactoring visual identity for premium service brands.
---

# Premium brand system (logo-first)

## When to use

- New site or **refactor** when colors/fonts feel random or “Tailwind default.”
- Beauty, salon, spa, clinic, hospitality — anywhere **calm luxury** matters.

## Extract direction from the brand

1. **Logo**: sample 3–5 pixels from mark/letterforms — usually you’ll find a **warm neutral**, a **deep neutral**, and occasionally a **muted metal/champagne**.
2. **Social feed**: identify recurring **background** (cream walls, marble, skin tones) — mirror that in surfaces, not in literal skin hex spam.
3. **Competitors (optional)**: note what to **avoid** (magenta gradients, cluttered promos).

## Define semantic tokens (before components)

Map **roles**, not “color names”:

| Role | Examples |
|------|----------|
| Page | warm cream / soft sand |
| Secondary band | slightly darker sand or taupe wash |
| Card / elevated | near-white cream |
| Inverse / editorial | charcoal / soft black |
| Text primary | ink / graphite |
| Text muted | taupe |
| Text on inverse | warm white / muted cream |
| Border | low-alpha ink or warm gray |
| Accent | **one** champagne/bronze — micro-use |

Implement as **CSS variables + theme** (e.g. `bg-surface-page`, `text-taupe`) so components never use raw `#...` except in the token file.

## Premium palette rules

- **Neutrals do the work**; accent is **seasoning**.
- **Avoid flat beige monotony**: alternate surfaces (page vs sand vs inverse) — still within family.
- **Never** add random blues/purples for links — tie links to ink or accent consciously.
- **Contrast**: WCAG for text; for “luxury dark sections,” pair **warm** dark with **warm** light text.

## Typography

- Pair **display serif + clean sans** *or* **refined sans-only** — not three families.
- Fix **type scale** (e.g. 12/14/16/18/24/32/48+) and **label style** (uppercase + letterspacing) once.

## Consistency checklist

- [ ] All new UI uses semantic tokens  
- [ ] Card, input, and button share border/radius language  
- [ ] Dark sections use dedicated `on-inverse` text tokens  
- [ ] Focus ring uses accent or ink — visible and on-brand  

## Failure modes

- **50 shades of beige** with no surface change between sections  
- **Accent creep**: gold on every button, border, and icon  
- **Hex scattered** across JSX — unmaintainable and breaks brand  
