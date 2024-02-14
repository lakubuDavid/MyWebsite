import { LitElement, html, css } from '../lit/lit-core.min.js';


export class BaseComponent extends LitElement {
    constructor() {
        super()
    }

    createRenderRoot() {
        return this;
    }
}