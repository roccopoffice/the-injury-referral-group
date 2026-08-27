# The Injury Referral Group

Marketing site for The Injury Referral Group (IRG), a personal injury referral concierge serving Boston and Massachusetts.

Live: https://irg.injuryreferralgroup.workers.dev

## Structure

```
public/           Everything served to the browser
  index.html        Home
  how-it-works.html The four-step process and accident types
  contact.html      Contact details and callback form
  css/styles.css    All styles
  js/main.js        Header scroll state, mobile menu, form validation
  images/           Logo, favicons, icon sprite, photography
wrangler.jsonc    Cloudflare Workers config (static assets)
```

Plain HTML, CSS, and JavaScript. No build step and no dependencies.

## Brand

- Navy `#0b1a2e`, gold `#c4a265`, cream `#f3eee4`
- Titles: Cormorant SC. Body: Inter. Both from Google Fonts.
- Logo: `public/images/irg-logo.png` (transparent, gold on any dark background)

## Local preview

```sh
python -m http.server 8080 --directory public
```

Then open http://127.0.0.1:8080/.

## Deploy

Deploys to Cloudflare Workers with static assets.

```sh
npx wrangler deploy
```

## Contact form

The form in `contact.html` validates in the browser and shows a confirmation, but does
not yet send anything anywhere. To deliver submissions, add a form handler (an email
service or a Worker route) and post to it from `public/js/main.js`.
