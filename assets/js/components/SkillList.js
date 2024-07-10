import { html, css } from '../lit/lit-core.min.js';
import { BaseComponent } from './BaseComponent.js';

export class SkillList extends BaseComponent {
  constructor() {
    super()
  }

  getSkills() {
    return [
      {
        skill: "Javascript",
        since: "2021",
        level: "Intermediate",
        content: "I have used javascript for a while know for web project on the frontend and on the backend.\n"
          + "I have some experience with different technologies know like node.js,bun,Hono,Vue3 and Nuxt3"
          + "As well as with Vercel and Cloudflare workers and pages for hosting."
      },
      {
        skill: "C++",
        since: null,
        level: null,
        content: "Something about C++"
      },
      {
        skill: "C#",
        since: null,
        level: null,
        content: "Something about C#"
      },]
  }

  render() {
    let skills = ""
    skills = this.getSkills().map((skill) => {
      return html`
      <!-- @ts-ignore -->
      <p>
        <skill-card skill="${skill.skill}" since="${skill.since ?? ""}" level="${skill.level ?? ""}">
          <p>${skill.content}</p>
        </skill-card>
      </p>
      `
    })

    return html`
      <div class="skills-list">
        ${skills}
      </div>
    `
  }
}

customElements.define('skill-list', SkillList);
