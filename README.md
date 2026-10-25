# Emily & Henry wedding website

Complete editable static website, exported October 23, 2026.

## Files
- index.html — all page copy, event cards, navigation and FAQs
- style.css — full styling, responsive layout and repeating banner animation
- script.js — red heart cursor trail
- emily-and-henry.jpg — website photo

These HTML, CSS and JavaScript files are the source code and the deployable website. No build, package installation, database, server application or ChatGPT account is needed.

## Deploy to your hosting provider
1. Extract this ZIP.
2. Upload the contents of this folder to your host's public website directory (often public_html, www or htdocs). index.html must be directly inside that directory.
3. For a static hosting service, use this folder as the publish directory and leave the build command blank.
4. In the host's domain settings, add emilyandhenry.party (and www if desired). Use the DNS records supplied by that host at your domain registrar. Preserve existing email/MX records.
5. Enable HTTPS using the host's certificate settings and select the preferred domain, redirecting www or the bare domain as desired.
6. Check the page, photo, navigation, FAQs and outgoing links on desktop and mobile.

The files use relative asset paths and work on your domain without changing the source. You may also open index.html locally, or run `python3 -m http.server 8000` in this folder and visit http://localhost:8000.

## Editing and future updates
Edit index.html in any text editor. Edit style.css for colors/layout and script.js for the cursor hearts. Upload changed files again and clear the browser cache if an old version appears.

RSVP is intentionally disabled. When ready, replace the disabled RSVP button in index.html with a link to your actual RSVP form. This export does not include the separate RSVP application's backend, guest list or response data.

The latest included pool party time is 1pm, and the Saturday ceremony time is 5:30pm. Event addresses remain withheld. The hotel booking note and indented airport list are included.

The CSS currently imports Google Fonts (DM Sans and Fraunces). Those fonts require an internet connection; system font fallbacks are provided. The star background is embedded in the CSS, so it needs no separate image. Hotel, donation, honeymoon and recommendation links remain external.

## Transfer notes
No credentials, hosting account configuration or build scripts are required. The original document-generation script is intentionally omitted because it predates later edits; use index.html as the authoritative source. This export does not change the currently published website or your domain configuration.
