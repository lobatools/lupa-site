# lupa-site

Website for LUPA ("Lupa by Lobatools") at lupa.lobatools.com. Repo: `lobatools/lupa-site`.
The app itself lives in a separate repo, `lobatools/lupa` (local folder `../lupa`); its `.claude/CLAUDE.md` describes the product and brand.

## Status
- Until the v0.1.0 release (January 2027) the site shows only the "under construction" page, which goes live after lobatools.com.
- Analytics: Vercel Web Analytics only. No other tracking, cookies or third-party scripts.

## Design
- Source of truth: the "lobatools & LUPA brand" canvas, https://claude.ai/artifact/1fnn44XqDwY5HWGwYcnpsk
  - Under construction: `SoonE` / `SoonEMobile`
  - Full site: `LandingV3`, `Docs`, `About`, `Releases`, `License`, `Privacy`, `BrandPage` (each with a Mobile version)
  - Share image: `OGImage` (1200×630); SVG assets under `brand/`
- Fonts: Hanken Grotesk (headings and body), JetBrains Mono (terminal touches), Caveat (sparingly).
- Clean and simple, no animations, must not look like a generic "AI" or Claude-branded product.

## Conventions
- Commits follow Conventional Commits; details in the `commit` skill (`.claude/skills/commit/SKILL.md`).
