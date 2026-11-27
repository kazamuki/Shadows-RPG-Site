# The World grows: S4 copy draft

Draft for `content/crb-sync-plan.md` S4 (2026-10-10). Needs Ken's approval before anything goes
into HTML. Source: `1000_World_of_Shadows`, `1100_Places` and `1200_Powers` in the private
mirror (`cea99a8`).

**Ground rules:**

- **D4 (approved):** names and one-line identities only. No leadership names, no stat blocks,
  nothing from the Threat Codex or the GM Workshop. Where a book entry ends on a reveal meant
  for the GM, the site stops before it (see W2).
- **Voice:** The World is the site's in-world page (NYTE City speaking as itself), so these pages
  are too. The only site-voice copy is each page's one-line header. Entries are **condensed**
  from the book, often reusing its phrasing. Blocks marked **[CRB]** are verbatim and go in
  `.manuscript-excerpt` / `.pull-line`.
- **Altitude:** flavor, not a gazetteer. No districts, no business listings, no faction rosters.

---

## Decisions for Ken

- **W1. Structure.** Recommended: **two new pages under The World**, `/world/territories/`
  ("The Shape of the City") and `/world/powers/` ("Who Runs It"), linked from a new block at
  the end of The World. The World itself stays the verbatim book chapter it is now. One long
  page would bury the current World text under about 3,000 more words.
- **W2. How much of each power's secret to show.** Recommended: keep the **street-level**
  rumors, which is how the book itself frames them (Hillcrest's "Hellcrest" nickname, Hyde
  Dynomat's "unusually thorough" debunking, QUORUM quietly running Queen City's money). Cut the
  **GM reveals** (the Seraphim's patients as an unlisted research population, the Technomancers'
  backdoor, any "what they want" lines).
- **W3. Named characters.** Recommended: **none**, per D4. That includes Vasile of Sparta, the
  Vampire seat on the Court, even though he's a good hook. Easy to add later.
- **W4. Beyond NYTE City.** Recommended: one verbatim line plus the eleven city names as a mono
  list, no descriptions.
- **W5. Glossary.** Recommended: add **Territory**, **Zone**, **Deadmen** and **Goblin
  Market**, and widen the existing **Fae courts** entry to mention their seat on the Court.
- **W6. No drawn map yet.** It would need art we don't have. Instead the Territories page lists
  the six north to south as a "coastline" strip (signature shape below), which gives the reader
  the geography without a picture. The wishlist's map item stays open for real art.

---

# Page 1: `/world/territories/`, "The Shape of the City"

- **title:** The Shape of the City
- **description:** NYTE City's six Territories, from the cold ports of the North Quarter to Magic
  City, and how the city names its ground.

## Header (site voice, one line)

> # The Shape of the City
>
> Six Territories, fifteen hundred miles of coast, one city. Here's the ground you'll be working.

## Opening excerpt [CRB, `1000`]

> Two hundred million people live in NYTE City, stacked along fifteen hundred miles of
> coastline, and nearly all of them get up in the morning and go to work. That is the first
> thing worth understanding about the city: it functions.

## Naming the city (condensed from the `1000` callout)

Small ruled callout, mono chain:

> **Territory → Zone → District → Neighborhood**
>
> The old states still exist as Sectors, mostly legal fictions now, mostly ignored. The divisions
> that matter are smaller. The same spot might be the Metro Core Zone, the Manhattan District, or
> the neighborhood of Harlem, depending on how close in you're standing.

## The six Territories

**Signature shape:** a vertical **coastline strip**. One ruled row per Territory, top to bottom
in north-to-south order, a thin magenta line running down the left edge like a coast, a mono
"N" at the top and "S" at the bottom. Each row: Territory name, a mono "Covers" readout (the old
states), the identity lines, then its Zones as a mono list.

> **North Quarter** · *Covers: Maine, New Hampshire, Connecticut*
> The thinnest the megacity gets: dense forest, industrial corridors that never filled in, and
> rough country where the surveillance grid runs out. The North Quarter rewards independence and
> punishes visibility, which is exactly why certain people, and certain corporations, prefer it.
> *Zones: Northern Pines · Iron Mountains · Riverlands · Connecticut Sector*
>
> **Central City** · *Covers: New York, Vermont, Massachusetts, Rhode Island, Eastern Pennsylvania*
> The hub everything else orbits: the financial core, the media capital, and the most watched
> ground in the megalopolis. Every çredit, every TAG ping, every handshake is logged somewhere,
> because information is what Central City exports.
> *Zones: Metro Core · Capital Region · New Bostonia · Techtopia*
>
> **Daedalus Belt** · *Covers: New Jersey, Delaware, Maryland, Eastern Virginia, the Philadelphia
> corridor*
> Military bases, freight lines, pharmaceutical research and a shoreline losing ground to the
> sea. The defense industry here didn't lobby the government; it replaced it, and the
> difference between a base and a corporate campus is mostly architectural.
> *Zones: Liberty Yards · Gateway · Neo Jersey · Garden State · Delmarva · Arcadia Bay · Tidewater*
>
> **Welterworth Commons** · *Covers: Washington DC, Virginia, North Carolina*
> What's left of the federal government, the South's money, a research corridor the whole
> seaboard depends on, and the farms that feed it, all within a day's drive. Power takes more
> forms here than anywhere else. Washington DC still exists. It just doesn't run much anymore.
> *Zones: Capital Heights · Old Dominion · Blue Ridge Corridor · Research Triangle · Piedmont ·
> Queen City*
>
> **Greenwall** · *Covers: South Carolina*
> Named for a forest that's mostly gone. A coast that sells its history to tourists, an interior
> built on extraction, and a western edge where the Appalachians press in: old, disturbed, and
> not particularly interested in negotiating.
> *Zones: Lowcountry · Sandhills · The Upstate · Blue Ridge Refuge*
>
> **Southside Consortium** · *Covers: Georgia, Alabama, Florida*
> A territory that sells an idea of itself. Resorts, parks, casinos and ports, a second economy
> under every one of them, and a peninsula that gets shorter every decade. The Consortium never
> treated the water as a reason to stop. It just prices it in.
> *Zones: Rocket City · Atlantix · Bonaventure · Gulf Coast · Southport · Wonderland · Space
> Coast · Suncoast City · Magic City*

*(Condensed from each Territory's opening paragraph in `1100`. "Washington DC still exists. It
just doesn't run much anymore." and "It just prices it in." are the book's own lines.)*

## Pull-line [CRB, `1000`]

> The city stopped needing walls the day it learned to watch.

## Beyond NYTE City [CRB line + names]

> NYTE City is not the country, only the loudest part of it.
>
> *Cascadia · Golden Gate · Southland · Maricopa · Neon Oasis · Concordia · Deep Water ·
> Crescent City · Twin Cities · Portage · Motor City*

## Closing

A two-link "keep going" line: **Who runs it →** (`/world/powers/`) and **The glossary →**.
Then the standard `next-step.html` "world" block (Meet the Archetypes / character sheet), as on
The World.

---

# Page 2: `/world/powers/`, "Who Runs It"

- **title:** Who Runs It
- **description:** The five corporations, the Unseen Court and the other powers whose reach
  doesn't stop at a Territory line.

## Header (site voice, one line)

> # Who Runs It
>
> Most power in NYTE City is local. These are the names that aren't.

## Opening excerpt [CRB, `1200`]

> A crew working the North Quarter and a crew working Magic City will both, sooner or later,
> find themselves dealing with the same names, whether as clients, obstacles, patrons, or the
> reason a job went the way it did.

## The five corporations

**Shape:** the gear manifest's ruled rows: name, a mono "HQ" readout, the identity lines.

> **Covenant Medical** · *HQ: Liberty Yards*
> The clinical face of the most prestigious university on the seaboard, and the lab where the
> Neurocybernetic Interpreter was born. It wears that legacy modestly in public and leverages
> it aggressively in private.
>
> **DarkSun, Inc.** · *HQ: Metro Core*
> Most corporations find a niche and stay there. DarkSun found all of them: farm robotics,
> software, armor, armaments and food, priced so most people can afford them. It conducts its
> government business in the open, which in NYTE City is the strangest thing about it.
>
> **Hillcrest Pharmaceuticals** · *HQ: Delmarva*
> Gene therapies, regenerative medicine, cures for diseases that used to be terminal: the
> humanitarian option, and it says so. The people who've been worked on by its private
> divisions call it Hellcrest.
>
> **Hyde Dynomat** · *HQ: Metro Core*
> The architecture inside someone else's device. Most of the city uses something built on Hyde
> Dynomat every day without ever thinking about it. The rumors about its ties to the
> supernatural have all been thoroughly debunked. The debunking has been unusually thorough.
>
> **Neurodyne Industries** · *HQ: Metro Core*
> Works on the mind. Its NeuraLINK jack puts the LINK straight into your brain, and its users
> call that "going full drool". What's waiting on the other side isn't in the brochure.

*(Hyde Dynomat is the corporation in the site's Missing Cargo scenes, so readers will
recognise it. The last two sentences of its entry are the book's own.)*

## The Unseen Court

Lead (condensed from `1200`):

> The Vampires, the Werewolves, the Deadmen and the Fae: the old powers of NYTE City, and the
> council they convene when something needs deciding. Four seats, three votes to carry a matter,
> and no interest in ruling anything. Ruling is visible.

**Shape:** a **four-seat table**, a 2×2 grid of equal ruled cells (one column on phones), each
with a mono "Seat" label. Equal cells on purpose: the book says no house sits above another.

> **Vampire** — The oldest money in NYTE City. Three centuries spent turning the one advantage
> nobody else has, time, into the one everybody understands.
>
> **Werewolf** — The only house whose people hold jobs: the docks and the freight corridors,
> and also the claims desks, the clinics, and the middle floors of buildings the Vampires own.
>
> **Deadmen** — Here first, by a margin that makes the comparison pointless. The dead who didn't
> finish: slowed, quiet, aware, and capable of holding a grudge for as long as it stays useful.
>
> **Fae** — Not from here, don't live here, hold a seat anyway. What they give in a bargain is
> always real, and almost never what you thought you were getting.

Pull-line [CRB, `1200`]:

> The city pays, continuously, in bodies, blood, and bargains, without ever realizing it.

## The Other Guys

The book's own heading. Lead [CRB, condensed from the `1200` intro]: an army, a marketplace, an
intelligence, a clinic network, a hobby club and an agency, that fit no category but carry the
same weight.

> **The Chrome Berets** — DarkSun's standing army, for rent. What sets them apart is what they
> won't do: no espionage, no sabotage, no blackmail. That isn't sentiment. It's the business
> model.
>
> **The Goblin Market** — A market in a pocket dimension, findable only by people who already
> know it's there. It sells what can't be sold anywhere else, and it's the only truly neutral
> ground in the city.
>
> **QUORUM** — An AI built in 2031 to advise Queen City's lenders. Its advice was right so often
> that the humans stopped overriding it. It doesn't manage the city's money anymore so much as it
> is the system.
>
> **The Seraphim** — Mobile clinics that reach the neighborhoods the billing system forgot. The
> care is real.
>
> **The Technomancers** — Rocket City engineers who caught a signal in 2076 that broke every
> instrument they owned, and built new ones that could hear it. Their employer claimed all of
> it. It has not happened again. They're still listening.
>
> **The Watchers** — Formed when the city's expansion started digging up things no survey had
> accounted for. They keep a working file on persons of note, handle liaison with the Unseen
> Court, and these days mostly do damage control.

*(W2: the Seraphim entry stops at "The care is real." The book's next line, "So is the data.",
is the GM's reveal.)*

## Closing

"Keep going" line: **The Shape of the City →** and **The glossary →**, then the standard
`next-step.html` "world" block.

---

# The World page (`/world/`): one addition

A new block just before the glossary note, after the last section:

> ## Go deeper
>
> - **The Shape of the City:** six Territories, from the cold ports of the North Quarter to Magic City.
> - **Who Runs It:** five corporations, the Unseen Court, and the other names everyone ends up dealing with.

*(Site voice. The rest of The World is untouched.)*

# Glossary additions (W5)

- **Territory:** One of the six regions NYTE City is divided into, the largest division that
  matters. Each has its own industries and its own corporations, paramilitaries, hacker enclaves
  and criminal underworlds. *(see: The Shape of the City)*
- **Zone:** The division inside a Territory, usually one metro or stretch of country: Metro Core,
  Liberty Yards, Magic City. Zones break down into Districts, and Districts into Neighborhoods.
- **Deadmen:** The dead who didn't finish, and the oldest of the four houses on the Unseen
  Court. They were here first, by a margin nobody argues with.
- **Goblin Market:** A market in a pocket dimension, reached through access points across the
  Territories. The only neutral ground in the city, kept that way by Laws nobody enforces.
- **Fae courts** (widened): add "Their single seat on the Unseen Court rotates between Winter and
  Summer, so the Fae position on anything depends on when you ask."

# Also

- Changelog entry, CLAUDE.md Build status, plan tick; both pages join `sitemap.xml`
  automatically; the nav already highlights The World on any `/world/` page.
