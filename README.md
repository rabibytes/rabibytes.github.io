# RabiBytes - Byte-sized Tech Knowledge

A modern, dark-themed static website designed for a tech YouTube channel. This project features a responsive design, internationalization (English/Arabic), and a dynamic video gallery.

## Features

- **Dark Mode Aesthetic**: Sleek dark theme with neon accents (`#0ea5e9`, `#84cc16`).
- **Responsive Design**: Fully responsive layout using CSS Grid and Flexbox.
- **Internationalization (i18n)**: Built-in support for English (LTR) and Arabic (RTL) toggling.
- **Dynamic Content**: Video gallery and blog posts are rendered dynamically via JavaScript.
- **Animations**: Custom HTML5 Canvas network background animation.
- **Performance**: Vanilla JavaScript implementation for maximum speed and zero dependencies.

## Project Structure

- `index.html`: Main landing page structure.
- `index.css`: Stylesheet with CSS variables for theming.
- `index.js`: Application logic, content data (videos/blog posts), and translations.
- `how-to-build-website.html`: A static template/reference for the tutorial blog post.

## Setup & Usage

1. **Run locally**:
   Simply open `index.html` in any modern web browser. No build step or server is required.

   > Tip: For a better development experience, use a live server extension (e.g., Live Server in VS Code).

2. **Customization**:
   - **Content**: Update the `videos` array and `blogPosts` object in `index.js`.
   - **Translations**: Edit the `translations` object in `index.js` to modify text.
   - **Styles**: Adjust colors in the `:root` section of `index.css`.

## Hosting

This site is optimized for **GitHub Pages**:
1. Upload the files to a GitHub repository.
2. Go to **Settings > Pages**.
3. Select the `main` branch as the source.

## License

&copy; 2026 RabiBytes. Crafted for the Tech Community.