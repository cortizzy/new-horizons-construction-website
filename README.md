# New Horizons Construction & Industrial Website

A responsive static website for New Horizons, focused on commercial construction, industrial services, and project delivery. Built with HTML, CSS, and vanilla JavaScript; it can run on ordinary shared hosting.

## Site contents

- Hero section with the message “Built for a challenge. Ready to deliver.”
- Industry-specific experience and turnkey construction/maintenance positioning
- Specialty services: civil and site utilities, structural steel, concrete, heavy rigging, machinery installation, and industrial maintenance
- Project delivery approach and inquiry form
- Responsive mobile navigation and accessible motion-aware reveal effects

## Run locally

Open `index.html` in a browser, or start a local static server from the repository folder:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish on shared hosting

Upload `index.html` and the `css/` and `js/` folders to the hosting account's website root (commonly `public_html`). Keep the directory structure intact.

## Before publishing

- Verify business contact details and every service description.
- The supplied CCI reference says “Since 1997,” but that date is not used as a New Horizons claim. Add it only if it is accurate and authorized for New Horizons.
- Replace stock Unsplash photography with approved company project photos and confirm the image licenses/terms.
- The contact form opens the visitor's default email program; it does not send data to a server. Connect a form service or server-side endpoint if you need direct web submissions.
- Add only verified project case studies, client names, certifications, safety records, and performance statistics.
