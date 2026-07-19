# HomeNest

A responsive React frontend prototype for a real-estate agency. It includes property discovery, filters, testimonials, FAQs, a validated site-visit enquiry form, and an agency/team page.

## Run locally

```bash
npm install
npm start
```

Open the local URL shown by Vite (normally `http://localhost:5173`).

## Routes

- `/` — Home
- `/properties` — Listings, Buy/Rent/Lease filter, testimonials, and FAQ accordion
- `/contact` — Controlled enquiry form with JavaScript validation
- `/about` — Mission, team, and company timeline

## Structure

- `src/components` — Shared navigation, footer, and cards
- `src/pages` — Route-level page components
- `src/data` — Listing, testimonial, feature, and team data
