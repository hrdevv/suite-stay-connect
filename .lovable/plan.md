
# Lifters' Apartments — Agency-Grade Refinement Plan

Scope: three tasks, executed together so the site ships as a deployable, non-templated build. No edits to pages outside those listed.

---

## 1. Listings — expand to 6 (2 real types × 3 variants)

The business only operates two service types (Standard Room, Executive Suite). We surface 6 listing cards as *named unit variants* under those two types — realistic for a boutique operator and honest to the user's constraint that only the type is fixed.

New `apartments` array in `src/data/apartments.ts`:

| id | Name | Type | Price (₦/night) | Bd/Ba |
|---|---|---|---|---|
| room-coastal | Coastal Room | Standard Room | 99,999 | 1/1 |
| room-harbor | Harbor Room | Standard Room | 99,999 | 1/1 |
| room-dune | Dune Room | Standard Room | 99,999 | 1/1 |
| suite-marina | Marina Suite | Executive Suite | 119,999 | 2/2 |
| suite-lagoon | Lagoon Suite | Executive Suite | 119,999 | 2/2 |
| suite-azure | Azure Suite | Executive Suite | 119,999 | 2/2 |

- Same `LOCATION`, same amenities per type, differentiated by image order + one-line descriptor ("north-facing", "top floor", "garden view").
- Featured on home: 1 room + 1 suite (`room-coastal`, `suite-marina`).
- Images: rotate the existing 7 suite JPGs + 4 apt/hero fallbacks so each card leads with a distinct hero image. No new images generated.
- `ApartmentsListings.tsx` grid stays as-is; naturally fills the `lg:grid-cols-3 xl:grid-cols-4` layout.

---

## 2. Coastal-Luxury Theme

Direction: high-end coastal — deep ocean teal + warm sand + midnight black + crisp grey. Retains the existing Forest/Amber warmth as an accent bridge so the home page hero and gradient tokens don't fight the new palette. Not generic AI purple/white.

Token changes in `src/index.css` (all HSL, semantic — no hardcoded colors in components):

```
--background:        210 25% 97%     /* crisp grey-white */
--foreground:        220 25% 10%     /* midnight */
--card:                0  0% 100%
--primary:           195 55% 22%     /* deep ocean teal */
--primary-dark:      200 60% 14%     /* abyss */
--secondary:          35 55% 65%     /* warm sand */
--secondary-dark:     32 45% 52%
--muted:             210 20% 94%
--accent:            195 40% 92%
--border:            215 15% 88%
--ring:              195 55% 22%
--hero-gradient:     linear-gradient(135deg, hsl(220 25% 10% / .78), hsl(195 55% 22% / .55))
--text-gradient:     linear-gradient(135deg, hsl(195 55% 22%), hsl(35 55% 55%))
--card-shadow:       0 8px 30px -12px hsl(220 25% 10% / .18)
```

Dark mode: midnight base (`220 30% 6%`), teal primary lifted to `195 65% 55%`, sand secondary `35 60% 68%`.

Tailwind `brand.*` tokens in `tailwind.config.ts` renamed to `ocean`, `sand`, `midnight`, `mist` (crisp grey). No component-level color rewrites needed — semantic tokens propagate.

Craft touches (no layout churn on unrelated pages):
- Add subtle noise/grain utility class in `index.css` for hero overlays (agency polish, not templated).
- Refine `.card-elevated` shadow to layered coastal shadow.
- Update `HeroSlider` overlay text weight/tracking only if needed to read against new gradient — no structural changes.

---

## 3. Decouple business data → `src/config/business.ts`

Single source of truth for anything a future deploy would swap:

```ts
export const business = {
  name: "Lifters' Apartments",
  tagline: "...",
  location: { address: "7, Amikanle Road, ...", city: "Lagos", country: "Nigeria",
              mapsQuery: "...", mapsEmbedUrl: "..." },
  contact: { phone: "+234 812 111 3281", phoneTel: "+2348121113281",
             email: "info@suites.lifterscenter.org",
             whatsapp: "2348121113281", hours: "24/7 Front Desk Support" },
  social: { instagram: "...", facebook: "...", x: "..." },
  pricing: { standardRoom: 99999, executiveSuite: 119999, currency: "NGN" },
  seo: { title: "...", description: "...", ogImage: "..." },
  inquiryTypes: ["Short-Stay Apartment", "Banquet Hall", "Corporate Housing", "Other Inquiry"],
};
```

Refactor consumers to import from `@/config/business`:
- `ApartmentsContact.tsx`, `ApartmentsFooter.tsx`, `ApartmentDetail.tsx` (WhatsApp), `ContactForm.tsx` (phone placeholder + inquiryTypes), `data/apartments.ts` (LOCATION + prices).

`index.html` static tags left as-is (build-time, not runtime) but the same strings are mirrored in `business.seo` for consistency.

---

## Files touched

- `src/config/business.ts` (new)
- `src/data/apartments.ts` (expand to 6, import from config)
- `src/index.css` (theme tokens, grain utility, shadow)
- `tailwind.config.ts` (rename `brand.*` → coastal tokens)
- `src/components/apartments/ApartmentsFooter.tsx`
- `src/components/apartments/ContactForm.tsx`
- `src/pages/apartments/ApartmentsContact.tsx`
- `src/pages/apartments/ApartmentDetail.tsx`

Not touched: `About`, `Services`, `Home` structure, `Navigation`, `HeroSlider` structure, all `ui/*` primitives.

## Verification

- Build passes (auto).
- Playwright screenshot `/apartments/listings` at 490px + 1280px: 6 cards, coastal palette, no overflow.
- Screenshot `/apartments/contact`: map, tap buttons intact.
- `rg` sweep: no hardcoded phone/email/address outside `config/business.ts`.
