# Profile Card Application

This project is a React-based profile card application, composed of several distinct components that handle different aspects of the user interface.

## Components

### `Header.jsx`

The `Header` component is responsible for displaying the profile image and a green tick overlay, forming the top section of the profile card.

**Props:**

- `image`: This prop accepts the URL of the profile image to be displayed.

**Styling:**
The `Header.css` file provides the styling for the `Header` component, including:

- General image styling (e.g., `max-width`, `border-radius`).
- Styles for the main header container, such as `background` image, `background-size`, and `padding`.
- Positioning and transformation for the `.Box` element to center it within the header.
- Specific styles for the profile image container (`.photo-img`), defining its `width`, `border`, and `object-fit`.
- Styling for the green tick overlay (`.green-tick`), including its `position`, `background-color`, `width`, `height`, and `border-radius`.

### `Main.jsx`

The `Main` component constitutes the central content area of the profile card. It displays a name, a horizontal rule, a descriptive paragraph, and a "Follow" button.

**Props:**

- `para`: This prop is used to pass the text content for the descriptive paragraph.

**Styling:**
The `Main.css` file dictates the appearance of the `Main` component:

- Styles for the main container (`main`), covering `text-align`, `padding`, `background-color`, and `color`.
- Styles for a nested `div` within `main`, applying `width`, `height`, `filter` (blur), and `z-index`.
- Font and spacing styles for the `h2` heading.
- Font and line-height styles for the paragraph (`p`).
- General button styling, including `display`, `color`, `background-color`, and `padding`.
- Removal of the outline on button focus.
