# GUIDE — Global Understanding of Infectious Disease Exchange

A full-stack disease outbreak tracker that pulls real-time outbreak data from the World Health Organization (WHO), plots it on an interactive world map, and tells you how far you are from it, down to the nearest flight route.

Built during my summer internship at the Discovery Partners Institute (DPI). Started as an internal project called PandemicPulse, then OutbreakLens, before landing on GUIDE.

**Live app:** _https://viruslocationproject-1.onrender.com/_

---

## What it does

- Pulls active outbreak data from the WHO API on a rolling 6-month window, refreshed daily via a cron job
- Runs each outbreak through Gemini for AI-generated risk analysis
- Geocodes outbreak locations (OpenCage) and drops them on a dark-themed CartoDB map as color-coded markers by disease type
- Calculates travel risk: pick a starting airport, and it finds flight paths, including connecting routes, to the outbreak zone, with distance and layover info
- Light/dark mode, persisted across sessions

Covers 20 tracked diseases, and I've since layered in ProMED/ECDC as secondary sources so entries update more than once a day.

## Why this exists

WHO's disease outbreak news is public, but it's not built for someone trying to answer "how close is this to me, and how would I actually get there." GUIDE is my attempt at closing that gap — combining outbreak surveillance data with actual travel logistics in one map.

## Stack

**Frontend:** React + Vite, CSS Grid, react-leaflet with CartoDB dark tiles
**Backend:** Node.js / Express, MongoDB Atlas
**External APIs:** WHO Disease Outbreak News, Gemini (risk analysis), OpenCage (geocoding), AviationStack (flight data)
**Uptime:** UptimeRobot pinging the cron endpoint
**Deployed on:** Render

## The harder problems I ran into

**Connecting flights.** AviationStack's free tier only returns direct routes, which is basically useless for anything outside major hubs. I built a fallback that searches through a set of hub airports and stitches together layovers manually, so a route like CCU → ORD resolves through a hub like DXB even though no direct flight exists.

**Airport resolution.** Outbreak location strings from the dataset are messy, things like "Vanuatu (Pacific region)" or comma-separated regional names that don't map cleanly to an IATA code. I ended up with a layered fallback: parse the string, strip parenthetical/regional noise, and if that still fails, fall back to a nearest-major-airport lookup using the outbreak's raw coordinates against a hardcoded set of ~85 major world airports.

**Small-town geocoding.** Some outbreak locations (e.g. small towns like Mongbwalu) will never reliably resolve to a real local airport. In those cases the UI is explicit that it's showing a "nearest major airport" approximation rather than pretending it's exact.

## Known limitations

AviationStack's free tier only reflects current/real-time flight activity, not full published schedules, so smaller regional routes can show zero flights even with expanded hub coverage. The UI explains this rather than implying the route doesn't exist. Fixing it properly would mean switching to a paid tier or a different flight data provider.

## Running it locally

```bash
git clone https://github.com/KJSodipe14/GUIDE-Global-Understanding-of-Infectious-Disease-Exchange.git
cd GUIDE-Global-Understanding-of-Infectious-Disease-Exchange

# backend
cd server
npm install
# add your .env, MongoDB URI, Gemini key, OpenCage key, AviationStack key
npm start

# frontend, in a separate terminal
cd client
npm install
npm run dev
```

## Roadmap

- Higher-frequency data sources beyond WHO/ProMED/ECDC
- Popup behavior refinement after map zoom
- Country/city selection with built-in travel time estimates
- A real flight schedule API to fix the connecting-route gaps

---

Built by [KJ Sodipe](https://github.com/KJSodipe14) - CS student at UIC.
