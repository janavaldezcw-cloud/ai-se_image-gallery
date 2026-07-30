# Flash Cards

This is a flashcard app I built for my software engineering course. You can make
decks of cards, flip them to see the answer, and practice a deck one card at a
time like a slideshow.

_
**Project pitch video:**  ## Project Pitch Video https://drive.google.com/file/d/1P7OA6ibXlB2OV7ieT947ua1pSevKI9kY/view?usp=drive_link
 
 

## What it does

- **Home page** – shows all your decks. Each one has a name, how many cards
  are in it, and a color. You can delete a deck (it asks you to confirm first
  so you don't do it by accident).
- **Deck page** – click a deck to see all the cards in it. Click a card to
  flip it and see the answer, or delete it.
- **Practice mode** – goes through the deck one card at a time, kind of like
  a slideshow. Shows you which card you're on (like "Spanish Basics (2/4)").
  Flipping a card shows the answer, and moving to the next card flips it back
  to the question.
- Works on mobile too - the buttons stick to the bottom of the screen on
  smaller screens.
- If you go to a page/URL that doesn't exist it shows a little 404 page.


## Project structure

Everything HTML-wise is in one `index.html` file (all the views live there,
and JS shows/hides them). Styles are split up by component in `assets/css/`,
and each one gets imported into `assets/css/style.css`. JS is split up too:

- `index.js` - handles the routing (which page shows based on the URL) and
  the home page
- `decks.js` - this is just the deck/card data, kept it separate so it's easy
  to find and change
- `deck-view.js` - the page that shows one deck's cards
- `carousel.js` - the practice mode
- `confirmation-modal.js` - the "are you sure you want to delete this" popup,
  used in a couple places so I didn't want to write it twice
- `colorMap.js` - small helper that turns a color name into an actual hex code

## Routing

I used the URL hash to switch between pages instead of a real router:

- `#home` (or nothing) → home page
- `#deck/<id>` → that deck's page
- `#deck/<id>/practice` → practice mode for that deck
- anything else → 404 page

## Notes / what I'd still like to improve

This started from a starter template for a photo gallery project, so some of
the structure (like the BEM class names) comes from that. I ended up
reworking most of it to fit the flashcard idea instead. If I had more time I'd
probably add a way to actually create new decks/cards through the UI instead
of editing `decks.js` by hand, and maybe save decks to localStorage so they
don't reset on refresh.
