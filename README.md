# India State Explorer

Static interactive page for browsing all Indian states and union territories.

## Files

- `index.html` - page structure
- `style.css` - layout and visual styling
- `app.js` - map rendering, search, and detail panel logic
- `india-location-map.svg` - real political map SVG used by the page

## Run With The `map` Conda Environment

Because the `map` environment already exists at `C:\Users\braindeckofficial\anaconda3\envs\map`, you can serve the page directly with its Python executable:

```powershell
& "C:\Users\braindeckofficial\anaconda3\envs\map\python.exe" -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## What The Page Does

- Shows a real India political SVG map with current clickable regions
- Lets the user click the map itself to load region details
- Supports search by state name, capital, code, or type
- Includes a directory for quick access on mobile and desktop

## Source

The live map asset is based on Wikimedia Commons:

- `India location map.svg`
