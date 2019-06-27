import{LitElement as e,css as t,html as s}from"../../build/es6/node_modules/lit-element/lit-element.js";import"../../build/es6/node_modules/@lrnwebcomponents/r-coder/r-coder.js";import"../../build/es6/node_modules/@lrnwebcomponents/glossary-term/glossary-term.js";customElements.define("custom-gif",class extends e{constructor(){super()}static get styles(){return t`
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
    `}render(){return s`
      <div id="asset">
        <slot name="asset"></slot>
      </div>
      <div id="info">
        <slot name="info"></slot>
      </div>
    `}});
