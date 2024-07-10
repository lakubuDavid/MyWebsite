import { html } from '../lit/lit-core.min.js';
import { BaseComponent } from './BaseComponent.js';

export class MenuToggle extends BaseComponent {
    render() {
        return html`
        <button id="menu-toggle" class="cursor-hover-effect">
            <!-- MENU TOGGLE-->
            <img src="./assets/img/menu-icon-2.svg"/>
        </button>
        `;
    }
}
customElements.define('menu-toggle', MenuToggle);
