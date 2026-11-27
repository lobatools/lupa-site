---
name: commit
description: How to write commit messages in this repo (Conventional Commits). Use whenever creating, amending or rewording a git commit.
---

# Commit messages

Every commit follows [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):

```
type(scope): summary

Optional body: what changed and why, wrapped at about 72 characters.
```

## Type
| Type | Use for |
|---|---|
| `feat` | A new feature or user-visible change |
| `fix` | A bug fix |
| `docs` | Documentation only (README, CLAUDE.md, comments) |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `perf` | Performance improvement |
| `test` | Adding or fixing tests |
| `build` | Build system, dependencies, packaging |
| `ci` | CI configuration (GitHub Actions) |
| `style` | Formatting only, no code change |
| `chore` | Maintenance that fits nothing above |

## Rules
- Type and scope are lower case. The scope is optional; common ones here: home, docs, releases, privacy, seo, analytics.
- Summary in the imperative ("add", not "added"), lower case, no full stop, under about 70 characters.
- Breaking changes: add `!` after the type or scope (`feat(acp)!: ...`) and explain in a `BREAKING CHANGE:` footer.
- One logical change per commit.

## Examples
- `feat(home): add the under-construction page`
- `fix(seo): use the 1200x630 share image`
- `docs: move CLAUDE.md into .claude`
