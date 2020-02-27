---
title: A note on naming colors
pubdate: 2020-02-27
summary: What to do, when we want to have meaningful color names?
featuredImage: header.webp
---

Remember that text saying "in IT, naming thing is hard"? This is every harder when it comes to colors.

Most of the time, a color is already named. Red. Blue. [Rebecca Purple][1]. But those names bare no context. Anything can be _blue_. So, what to do, when we want to have meaningful color names?

## Even more abstraction

One thing that I've used is to generate color names at random. Using [Name That Color][2], I was able to tell the difference between one [shade of teal][3] from [the other][4]. Even though they are visually different, in the code they are just different strings. Take a look at this:

```css
:root {
  --color-spray: #74E5EF;
  --color-java: #24C7C0;
}
```

Seems pretty obvious and easy. Or does it?

Try to wait a bit. [Forget some stuff][5]. And suddenly, _what is that "java" color?_ pops in your head.

## Use contextual names

When you are getting your colors, they are for _something_. This is for the header text. That's for links. And this one's for the background. Why not name them as such?

```css
:root {
  --color-bg: #fafafa;
  --color-text: #222;
  --color-links: #ffffaa;
}
```

This is the most readable thing you can do when naming colors. That way you won't have to care whether this color is "red" or "blue". It will be "background".

### Bonus: theming

During the design phase, colors are carefully picked. But sometimes a need arises. _Let's have a dark mode!_ Or _let's have a colorblind mode!_ Using contextual names allowed to define themes with ease:

```css
:root {
  --color-bg: #fafafa;
  --color-text: #222;
  --color-links: #ffffaa;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #000;
    --color-text: #666;
    --color-links: #fcfcfc;
  }
}
```

There you have it. Simply overwriting values basing on some external factors is very simple using such notation.

—

Naming things is hard. But using meaningful names will always be the way to go.

[1]:	http://www.colors.commutercreative.com/rebeccapurple/
[2]:	http://chir.ag/projects/name-that-color/#6195ED
[3]:	https://www.colourlovers.com/color/74E5EF/Flowering_Flow
[4]:	https://www.colourlovers.com/color/24C7C0/buy_tramadol_online
[5]:	/writings/2020-02-10-dont-forget-to-forget-your-code