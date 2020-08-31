# Questions about CSS 
Q1 Explain the CSS "box model" and the layout components that it consists of 
- Content
- Padding 
- Border
- Margin

1. Q2 What is Sass? 
Syntactically Awesome StyleSheets is a CSS preprocessor that adds power and elegance to the basic language.

2. Q3 What is Mixin and how to use on ?
A Mixin is a block of code that lets us group CSS declaration we may reuse throughout our site.
```css
@mixin grid($flex: true /*default argument*/) {
    @if $flex {
        @include flex;
    } @else {
        display: block;
    }
}
```

3. Q4 Difference betwen "resetting" and "normalizing" CSS? 
*Resetting* –  is meant to strip all default browser styling on elements. For e.g. margins, paddings, font-sizes of all elements are reset to be the same. You will have to redeclare styling for common typographic elements.

*Normalizing * —  preserves useful default styles rather than “unstyling” everything. It also corrects bugs for common browser dependencies.

4. What is difference between **span** and **div** ?
span is an inline elemen
div is an block elemen

5. What is Meta Tegs? 
Meta tags are snippets of text that describe a page's content: the meta tags dont appear on the page itself, but in the page's source code.
Meta tags are essentially tell search engines what a web page is about. 

6. How could you apply CSS rules specific to a media? 
**@media** rule is used in media queries to apply different styles for different media types/devices.

7. What's the difference between a relative, fixed, absolute and statically positioned element?
**Relative** the element is positioned relative to its normal position.
**Fixed** the element is positioned related to the browser window.
**Absolute** absolutely to its first positioned parent
**Static** default value, all element are in order as they appear in the documen.
