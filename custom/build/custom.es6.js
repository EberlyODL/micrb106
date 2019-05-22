import{LitElement as t,css as e,html as s}from"../../build/es6/node_modules/lit-element/lit-element.js";import"../../build/es6/node_modules/@lrnwebcomponents/chartist-render/chartist-render.js";customElements.define("custom-gif",class extends t{constructor(){super()}static get styles(){return e`
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
    `}});let i=document.documentElement,o=document.body;i.style.setProperty("--haxcms-base-styles-list-padding-bottom","none"),i.style.setProperty("--haxcms-base-styles-list-max-width","900px"),o.style.setProperty("line-height","1.75");
