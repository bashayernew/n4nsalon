---
name: luxury-3d-ui
description: Build premium marketing sites with editorial depth, layering, and elevation—without tacky fake 3D. Use for high-end brands, salons, hospitality, fashion, and luxury services.
---

# Luxury depth & “3D” UI (premium, not gimmicky)

## When to use

- Marketing sites that must feel **immersive and expensive** (beauty, wellness, hospitality, fashion, real estate previews).
- When flat layouts look **lifeless** but you must **not** add cartoon 3D or neon gimmicks.

## What “premium depth” means

Depth here is **layering + light + motion**, not mesh gradients and fake skeuomorphism.

1. **Surface stack**: page → section bands (alternate warm/cool/light/dark) → cards above → modals/lightboxes on top. Each layer has a reason.
2. **Elevation**: one or two shadow tokens — soft, wide blur, dark at low opacity. Avoid harsh drop shadows.
3. **Borders**: hairline `1px` often beats heavy shadow; combine sparingly.
4. **Imagery as depth**: full-bleed photos with gradient scrims for text — the photo *is* the dimensional layer.

## Layered layouts (how to build)

- **Hero**: background image or video still + gradient overlay + content in a clear column; **one** primary CTA.
- **Bands**: change `background` between sections (cream → sand → dark → cream) for rhythm — fights flatness without clutter.
- **Cards**: float slightly (`translateY` on hover) or deepen shadow — never rotate 3D cards for a salon site.
- **Grids**: vary aspect ratios (portrait/landscape/square) in a **controlled** editorial grid, not random masonry chaos.

## Perspective & faux-3D

- **Avoid**: CSS 3D rotate on whole sections, “floating” PNGs with drop shadows everywhere, perspective() on UI chrome.
- **Allowed**: very subtle **parallax** on hero (optional, performance-checked); **image depth** from photography itself.

## Immersive hero (checklist)

- [ ] Image quality and crop feel campaign-grade (or placeholder framed as if).
- [ ] Text contrast via scrim/gradient, not heavy text-shadow.
- [ ] Headline hierarchy: eyebrow → H1 → one supporting line → CTA row.
- [ ] Mobile: crop and line breaks still elegant; CTA thumb-reachable.

## Expensive-feeling interactions

- Hover: **small** scale on images, **modest** shadow step on cards.
- Scroll: fade-up once; don’t animate every paragraph.

## Final polish checklist

- [ ] Squint: one focal point per section  
- [ ] No more than **two** elevation levels visible at once in a stack  
- [ ] `prefers-reduced-motion` considered  
- [ ] Lighthouse: no huge CLS from lazy images without dimensions  

## Failure modes

- **Tacky**: glossy buttons, inner glow on everything, rotating service cards  
- **Flat**: one background color forever, no banding, tiny images  
- **Busy**: gradients + noise + glass + particles — pick **one** atmosphere max  
