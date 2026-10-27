# Deploying VeRaFIED Vets (landing page)

This is a Next.js 16 site. It runs on Node 20 or newer (tested on Node 22). **It does not need a database.**
You only need: a host, 4 settings, and your domain.

## The fastest way tonight: Vercel (free plan works)

1. Create a GitHub repo and push this project. `.gitignore` already keeps `.env` and `node_modules` out.
2. Go to vercel.com, sign in with GitHub, click **Add New → Project**, pick the repo. Leave all build settings as detected.
3. Before clicking Deploy, open **Environment Variables** and add:

   | Name | Value | Needed? |
   |---|---|---|
   | `NEXT_PUBLIC_SITE_URL` | `https://your-domain.com` (no trailing slash) | Yes |
   | `NEXT_PUBLIC_CONTACT_EMAIL` | an inbox you really check | Yes |
   | `NEXT_PUBLIC_APP_STORE_URL` | your App Store link | When live |
   | `NEXT_PUBLIC_PLAY_STORE_URL` | your Google Play link | When live |

4. Click **Deploy**. When it finishes, add your domain under **Settings → Domains** and set the DNS records Vercel shows you. HTTPS is automatic.
5. Set `NEXT_PUBLIC_SITE_URL` to the final domain. If you change any `NEXT_PUBLIC_*` value later, click **Redeploy**, because these are baked in at build time.

If you do not have a domain yet, use the free `*.vercel.app` address Vercel gives you and set `NEXT_PUBLIC_SITE_URL` to that.

## Other hosts

**Any Node host (VPS, Render, Railway, Fly.io, etc.)**

```
npm ci
npm run build
npm run start
```

- `npm run start` listens on all network interfaces (`0.0.0.0`). Set the port with the `PORT` variable, for example `PORT=8080 npm run start`.
- Put a reverse proxy or the host's HTTPS in front of it. Do not serve the site over plain HTTP.
- Set the 4 variables in the environment **before** `npm run build`.

**Docker** (a `Dockerfile` is included)

```
docker build \
  --build-arg NEXT_PUBLIC_SITE_URL=https://your-domain.com \
  --build-arg NEXT_PUBLIC_CONTACT_EMAIL=hello@your-domain.com \
  -t verafied-vets .
docker run -p 3000:3000 verafied-vets
```

The Docker setup is written but was not run in the build environment (no Docker there). Run it once on your side before relying on it. The plain Node route above was tested.

## What was tested (fresh machine, no `.env` file)

- Production build passes with no database setting.
- Server starts on a custom `PORT` and answers on both loopback and the network interface.
- `/`, `/privacy`, `/support`, `/robots.txt`, `/sitemap.xml`, `/api/health` all return 200.
- Your four settings reach the page, link-preview tags, and sitemap.
- Security headers are sent: HSTS, no framing, no MIME sniffing, strict referrer, locked-down browser permissions.
- Store assets load: `/assets/store/*`, `/assets/play/*`, `/assets/social-card.png`.

## After it is live: checklist

- [ ] Open the live `/` on a phone. Tap through the hero, the FAQ and the footer links.
- [ ] Open `/api/health`. You should see `{"ok":true,...}`.
- [ ] Paste the live URL into https://www.opengraph.xyz to check the social card.
- [ ] Tap the three hotline buttons on a phone: 988 (then press 1), 1-877-424-3838, 1-800-827-1000. Confirm the numbers with the VA before launch. Numbers change.
- [ ] Set up an uptime monitor (UptimeRobot is free) on `/api/health`.
- [ ] Send the email in `NEXT_PUBLIC_CONTACT_EMAIL` a test message so you know it arrives.

## Store submission

- Privacy Policy URL: `https://your-domain.com/privacy`. Support URL: `https://your-domain.com/support`.
- Upload from `public/assets/store/` (Apple) and `public/assets/play/` (Google).
- All copy is in `promo/PROMO_PACKAGE.md`.
- `/privacy` was written from what you told us (notes on device, no ads, no data sales). It has to match what the real app does, including Vera. Have someone you trust read it.
- Screenshots show example data (like "Knee pain"). The real app has to look like them, or the stores can reject it.
- Apple may look closely at a name with "VA" in it. Keep "not affiliated with the VA" prominent.
- The Vera chat on the website is a **preview with sample answers only**, and it says so.

## If something goes wrong

- **Build fails on Vercel:** open the build log. Most often a variable name is misspelled. They must start with `NEXT_PUBLIC_`.
- **Link preview shows localhost:** `NEXT_PUBLIC_SITE_URL` is missing. Add it and redeploy.
- **No contact email on the page:** `NEXT_PUBLIC_CONTACT_EMAIL` is missing. Add it and redeploy.
- **Download button says "Coming soon":** the store URL variable is empty. That is intended until the app is live.
