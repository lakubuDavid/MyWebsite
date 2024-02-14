
import { LitElement, html, css } from '../lit/lit-core.min.js';


export class HomeMenu extends LitElement {
    constructor() {
        super()
    }

    render() {
      // <div id="home-button">
      //    <a href="/">
      //     <img src="./assets/img/Home icon.svg" />
      //    </a>
        return html`
          <!-- <div id="home-button">
           <a href="/">
            <img src="./assets/img/Home icon.svg" />
           </a>
           </div>
           -->
            <div id="menu">
                <div class="menu-item" id="portfolio">
                    <a class="menu-link" href="/">
                      <img width="64px" height="64px" src="./assets/img/Home icon.svg" />
                      Home
                    </a>
                </div>
                <div class="menu-item" id="me">
                    <a class="menu-link" href="/about-me">
                      <img width="64px" height="64px" src="./assets/img/about-icon.svg" />
                      About Me
                    </a>
                </div>
                <div class="menu-item" id="projects">
                    <a class="menu-link" href="#">
                      <img width="64px" height="64px" src="./assets/img/projects-icon.svg" />
                      Projects
                    </a>
                </div>
                <div class="menu-item" id="contact">
                    <a class="menu-link" href="#">
                      <img width="64px" height="64px" src="./assets/img/contacts-icon.svg" />
                      Contacts
                    </a>
                </div>
            </div>
        `;
    }

    createRenderRoot() {
        return this;
    }
}
customElements.define('home-menu', HomeMenu);
