import { LitElement, html, css } from 'lit-element/lit-element.js';

class CustomGif extends LitElement {
  static get properties() {
  }

  constructor() {
    super();
  }

  static get styles() {
    return css`
      :host {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        align-items: center;
        justify-items: center;
        column-gap: 10px;
        margin-bottom: 10px;
      }

      #asset {
        max-width: 200px;
      }

      #asset ::slotted(img) {
        width: 100%;
      }

      #info {
        justify-self: stretch;
      }
    `
  }
  
  render() {
    return html`
      <div id="asset">
        <slot name="asset"></slot>
      </div>
      <div id="info">
        <slot name="info"></slot>
      </div>
    `;
  }
}

customElements.define('custom-gif', CustomGif);