# NBS Hill Districts Decision Viewer

Web map of High and Medium Priority Areas (tree loss or new settlement in High/Medium landslide susceptibility, within 5 km / 10 km of a previous landslide, classed by distance to stream), plus landslide susceptibility, LULC change 2016 to 2026, slope, roads, population, main streams, previous landslide inventory (with 5 m buffer) and UNDP CVI by union (ADM4) for the Chittagong Hill Tracts, Chittagong and Cox's Bazar.

Open `index.html` in a browser, or view it on GitHub Pages.

- Contents pane: switch layers on/off, drag ⋮⋮ to reorder, click legend colours to change them.
- Add Data: upload your own GeoTIFF (.tif) or GeoJSON. Files stay in your browser; nothing is uploaded to a server.
- Identify, union profile, priority ranking and union CSV export.

Sources: RIMES NBS layers (LSI 2026, LULC change, FABDEM slope), TDX-Hydro streams, BMD landslide inventory app survey 2026, OSM roads, BBS population, UNDP CVI dashboard, geoBoundaries ADM4.

## Marked locations (shared)

**Mark Location** (toolbar) draws a line, circle or rectangle, which you save with a name, colour, line style and note. The union, upazila and district are detected automatically. Saved marks appear as the **Field Marks** layer at the top of the layer list, in exported maps (with their names), in the export legend (only marks inside the selected area) and in the report.

Marks are shared through a Firebase Firestore database configured in `firebase-config.js`. Anyone can view them; adding, editing or deleting needs a Google sign-in. Until `firebase-config.js` holds a project config, marks are saved only in each person's browser (and can be moved with Download / Load GeoJSON).
