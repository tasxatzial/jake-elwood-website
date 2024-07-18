# Jake & Elwood website

A simple website for a fictional company that provides SEO services.

This project is part of the [Learn Responsive Web Design](https://scrimba.com/learn/responsive) course on [Scrimba](https://scrimba.com).

[Live version](https://tasxatzial.github.io/jake-elwood-website/src/index.html)

## Implementation

* Responsive.
* Accessible + screen reader friendly.
* Mobile first approach.

While my implementation follows the course content loosely, it isn't an exact match of the design or the implementation shown in the course. I created the project from scratch and made some intentional changes with the aim of improving upon the provided design. Here's a non-exhaustive list:

* The low contrast of the underline in the selected nav link has been fixed.
* The low contrast of the text in the footer section has been fixed.
* The extra space below the 'Jake&Elwood' logo has been removed.
* `aria-*` attributes have been added throughout the page. The original page on Scrimba only had one on the hamburger button.
* The spacing between the nav links has been increased in the desktop view.
* The hamburger button is now properly aligned with the rest of the page. Its size has also been increased to make it easier to click.
* The close nav button, which appeared in the opposite position from the hamburger button and was misaligned, has been fixed. Both buttons now appear at the exact same position.
* When the hamburger button (or close nav button) was in focus, opening or closing the menu with the keyboard resulted in a page with no element in focus. This has been fixed. When the hamburger button is clicked, the close nav button will receive focus, and vice versa.
* When the mobile nav menu is open, it's no longer possible to use the tab key to navigate to focusable elements outside the menu.
* The massive size of the links in the mobile nav menu has been reduced.
* The introductory paragraphs in the 'contact' and 'about us' sections now have a max width to avoid very long lines.
* The css breakpoints have been adjusted to better match the page content and avoid issues with elements being too small.
* The contact form caused horizontal scroll (see [1](screenshots/scrimba-original/scrimba-original-600_contact.jpg)). This has been fixed.
* The icons in the footer links will now be darker when they are in focus, rather than the other way around.
* The padding of the page in mobile view was too large and has been reduced to ensure that the content fits more appropriately within the confines of a smaller display.

## Dependencies

The project is written in HTML, CSS, JavaScript.

The following dependencies require an online connection:

* [:focus-visible](https://github.com/WICG/focus-visible) polyfill.
* [Font awesome](https://fontawesome.com/) icons.

## Run locally

Download the 'src' folder and open 'index.html' in the browser.

## Screenshots

See [screenshots](screenshots/).

For comparison purposes, I've added extra screenshots that show the original Scrimba implementation.
