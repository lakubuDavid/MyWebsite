import { html, css } from '../lit/lit-core.min.js';
import { BaseComponent } from './BaseComponent.js';

export class SkillCard extends BaseComponent {
  static properties = {
    level: { type: String },
    since: { type: String },
    skill: { type: String },
    content: { type: String }
  }
  constructor() {
    super()
    this.since = ""
    this.skill = ""
  }
  render() {
    return html`
    <div>
      <div class="skill-card">
        <h2>${this.skill || ""}</h2>
        <span>
          ${this.since ? ("Since " + this.since + " |") : ""}
          ${this.level ?? ""}
        </span>
        <p class="skill-card-content">
          ${this.content ?? ""}
        </p>
        <slot></slot>
      </div>
    </div>
      `
  }

}
customElements.define('skill-card', SkillCard);
