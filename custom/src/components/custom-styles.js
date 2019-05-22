import { LitElement, html, css } from 'lit-element/lit-element.js';

class CustomStyles extends LitElement {
  render() {
    return html`
      <style is="custom-style">
        :root {
          line-height: 1.75;
          --haxcms-base-styles-list-padding-bottom: 0;
          --haxcms-base-styles-list-max-width: none;
        }
      </style>
    `
  }
}

customElements.define('custom-styles', CustomStyles);