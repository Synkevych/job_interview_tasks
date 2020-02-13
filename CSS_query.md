# Q1 Explain the CSS "box model" and the layout components that it consists of 
- Content
- Padding 
- Border
- Margin

# Q2 What is Sass? 
Syntactically Awesome StyleSheets is a CSS preprocessor that adds power and elegance to the basic language.

# Q3 What is Mixin and how to use on ?
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

# Q4 Difference betwen "resetting" and "normalizing" CSS? 
*Resetting* –  is meant to strip all default browser styling on elements. For e.g. margins, paddings, font-sizes of all elements are reset to be the same. You will have to redeclare styling for common typographic elements.

*Normalizing * —  preserves useful default styles rather than “unstyling” everything. It also corrects bugs for common browser dependencies.