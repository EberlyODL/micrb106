import{LitElement as t,css as e,html as s}from"../../build/es6/node_modules/lit-element";customElements.define("custom-gif",class extends t{static get properties(){return{name:{type:String}}}constructor(){super(),this.name="World"}static get styles(){return e`
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
