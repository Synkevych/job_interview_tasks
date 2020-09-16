# Basic theory about HTML and important tag attributes

### Difference between <script>, <script async>, <script defer>

**<script>** - HTML parsing is blocked, the script is fetched and executed immediately, HTML parsing resumes after the script is executed.  
**<script async>** - The script will be fetched in parallel to HTML parsing and executed as soon as it is available (potentially before HTML parsing completes).
  Use async when the script is independent of any other scripts on the page, for example, analytics.  

**<script defer>** - The script will be fetched in parallel to HTML parsing and executed when the page has finished parsing. If there are multiple of them, each deferred script is executed in the order they were encoun­tered in the document. If a script relies on a fully-parsed DOM, the defer attribute will be useful in ensuring that the HTML is fully parsed before executing. There's not much difference in putting a normal <script> at the end of <body>. A deferred script must not contain document.write.  

### What is progressive rendering ?

### What the difference between block and inline elements 

Unlike a block element, an inline element does not wrap on a new line, but is located on the same line as the previous element. Such elements are usually located inside block elements and their width depends only on the content and CSS settings. Another difference between an inline element and a block element is that it can only contain content and other inline elements. You cannot nest block elements in inline elements.  
Inline elemens: <a>, <span>, <strong>, <em>, <img>  
  
CSS display property: change element type: `display: inline;` or `display: block;`;

### Схлопывающиеся отступы

Этот эфект наблюдается в блочных елементов расположеных друг за другом вертикально. Отступы в таком случае не суммируются, а объединяются между собой. Значения отступов сравниваются между собой, и остаётся наибольшее число. 

### Зачем используются <meta> теги

