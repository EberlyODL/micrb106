// Write whatever additional code you want to be included
// This could be webcomponents added directly here or using import statements
// to pull in and reference other web components / ES module compliant libraries.
// utilize bare imports like import "@things/stuff/stuff.js"; and ensure you reference the js file directly

// custom styles
let root = document.documentElement;
let body = document.body
root.style.setProperty('--haxcms-base-styles-list-padding-bottom', 'none');
root.style.setProperty('--haxcms-base-styles-list-max-width', '900px');
body.style.setProperty('line-height', '1.75');

import './components/custom-gif.js'
import '@lrnwebcomponents/chartist-render/chartist-render.js'