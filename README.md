# Flash Cards

A responsive flashcard app. Organize cards into decks, flip between question and
answer, and practice a deck as a swipeable carousel.

**Live demo:** _add your GitHub Pages link here_
**Project pitch video:** _add your video link here_

## Features

- **My Decks (home view):** browse all decks, each shown with its name, card
  count, and background color. Delete a deck with a confirmation modal.
- **Open deck view:** see every flashcard in a deck. Flip a card to reveal its
  answer (the card turns white), or delete it.
- **Practice (carousel) view:** step through a deck's cards one at a time.
  The title shows the deck name and your position (e.g. "Spanish Basics
  (2/4)"). Flip the current card to see its answer; moving to a new card
  always shows the question first.
- **Responsive layout:** on screens 805px and narrower, the "new card"/"new
  deck" and "Practice" buttons are pinned to the bottom of the screen with a
  fade behind them, per the Figma responsive design.
- **404 page** for unknown routes.

## Project structure

```
index.html
assets/
  css/
    style.css       # imports every other stylesheet below, one file per BEM block
    base.css, page.css, header.css, nav.css, gallery.css, card.css,
    wrapping-row.css, carousel.css, not-found.css, footer.css, modal.css
    mobile-bar.css   # fixed buttons + gradient for small screens
  js/
    index.js         # router, home (decks) view, practice-button wiring
    decks.js          # deck/card data
    colorMap.js        # deck color name -> hex value lookup
    deck-view.js      # open deck view (flashcards, flip, delete)
    carousel.js         # practice/carousel view
    confirmation-modal.js  # shared delete-confirmation modal logic
  images/            # icons (flip, delete, arrows)
  vendor/
    normalize.css    # third-party CSS reset, linked before style.css
favicon.ico
```

## Routing

| Hash | View |
|---|---|
| `#home` (or empty) | My Decks |
| `#deck/<id>` | Open deck view for that deck |
| `#deck/<id>/practice` | Carousel/practice view for that deck |
| anything else | 404 page |

## Changes in Parts 4 and 5

- **Part 4:** rebuilt the deck/flashcard feature on top of the original
  image-gallery scaffold — added the dynamic `#deck/<id>` route, the open
  deck view (flip/delete flashcards), and a shared confirmation modal.
- **Part 5:** implemented the responsive design end-to-end (home, open deck,
  and carousel views, plus the fixed mobile button/footer treatment); merged
  the home view into the decks list per the project's actual data model
  (removing the leftover photo-gallery view from the starting template);
  added `colorMap.js`, `normalize.css`, `.prettierignore`, and `favicon.ico`
  to match the file-structure requirements; added box shadows to cards and
  the carousel; rewrote the carousel to show flippable flashcard text
  (with a dynamic deck-name/position title) instead of static photos.
