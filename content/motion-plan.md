# Motion plan

**Status:** approved 2026-11-26. Ken reviewed the Motion Lab
(<https://claude.ai/artifact/9r4VN9be63WuxNs7gH4Yoq>, private to Ken) and said "This looks
incredible, we are ready for S1!" The lab's four questions were left unanswered, so their
defaults apply (below). Modeled on the character sheet's motion plan
(`Shadows-Character-Sheet/docs/plans/motion.md`, I1-I4) so the two read as one brand.

## The rules every beat keeps

1. **Reaching it.** A beat starts when the reader scrolls to it or arrives on it. Nothing moves
   on a timer.
2. **Once.** It plays the first time, then holds still. No loops, no idle shimmer.
3. **Short.** Most beats finish in under a second; a three-row ledger takes about 1.6s.
4. **Finished at rest.** Every word is in the HTML from the first frame. Without the script, or
   under `prefers-reduced-motion`, the reader sees the end state.
5. **The sheet's colors.** Gold for something the city wrote down, magenta for power and
   warning, cyan for a plain value, green for live.

How it's built: `DESIGN.md` → Components → Motion.

## Sessions

| Session | Beats | State |
|---|---|---|
| **S1: the kit, and the motif** | `assets/js/motion.js` + the `beat-*` CSS; **the ledger registers** (every `.ledger`); **the sheet comes online** (the `sheet` next-step bar); **moving between pages** (cross-document View Transition, cross-fade everywhere, slide on the Rules pager) | **Shipped 2026-11-26** |
| **S2: the pages draw their shapes** | **The ladder climbs** (Power Levels, Magic); **the income gap opens** (Equipment's table: bars fill, Çredits count up); **the stat block lights up** (Stats & Skills icons in turn); **arriving on a term** (gold stamp on the anchor target: glossary, jump navs, Territory and Court deep links); **the coast draws south** (Territories); **the closing line** (optional: What's in the Dark, Character Creation) | Not started |
| **S3: the front door** | **The sign catches**: Home's title stutters on like a neon tube catching, then holds; tagline and buttons follow. Closes the wishlist's "Hero atmosphere" item | Not started |

## Questions (defaults taken)

- **Every ledger, or only the first on a page?** Every ledger, the first time it's reached.
- **Page transitions everywhere, or only inside Rules Preview?** Cross-fade on every internal
  link; the slide only on the Rules pager.
- **Hero ignition on every visit to Home?** Once per visit to the site (S3: use
  `sessionStorage`); coming back to Home later in the same visit, the sign is already on.
- **Which beats ship?** All ten. "The closing line" is the easiest to drop.

## Notes for S2 and S3

- Reuse the S1 keyframes (`beat-draw-x`, `beat-print`, `beat-fade`, `beat-stamp`, `beat-ring`)
  before adding new ones. The lab's CSS has working versions of every S2/S3 beat.
- The income count must leave the real number in the HTML and rewind it in JS, like the sheet.
- Arrival stamp is triggered by `:target`/hash arrival, not by scroll, so it needs its own small
  hook in `motion.js` (hashchange + load).
