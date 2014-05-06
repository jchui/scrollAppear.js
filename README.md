# scrollAppear.js

A simple and easy to use plugin to allow elements to appear and disappear on scroll.

- [Live demo](http://hacks.jchui.me/scrollAppear/)

## Introduction
First release, still new to writing jQuery plugins. So suggestions for feature requests and coding style improvements will be more than welcome!

## Usage
All you will need to do is to include the JavaScript file `scrollAppear.js` (or the minified version `scrollAppear.min.js`), as well as [jQuery](http://jquery.com/).

###Including files:
```html
<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>

<script type="text/javascript" src="scrollAppear.js"></script>
```

## Options

- `fadeIn`: (default `1`) If you want the element to fade in on scroll. Can be 1, 0, or animation duration.

- `fadeOut`: (default `1`) If you want the element to fade out on scroll. Can be 1, 0, or animation duration.

- `appearSpot`: (default `400`) Position down the page that is scrolled before element appears. Can be the id of an element.

- `disappearSpot`:(default `none`) Position down the page that is scrolled before element disappears.

Example: 
```javascript
$('.header').sappear({
    fadeIn : 'slow',
    fadeOut : 600,
    appearSpot : 'example-header',
    disappearSpot : 'none'
});
```

## Changelog