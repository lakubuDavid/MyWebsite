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
        content: "I have used javascript for a while know for web project on the frontend and on the backend.\
                  I have some experience with different technologies know like Node.js, Bun, Hono, Vue3 and Nuxt3\
                  As well as with Vercel and Cloudflare workers and pages for hosting."
      },
      {
        skill: "Python",
        since: "2018",
        level: "Intermediate",
        content: "My first language (like most people I guess). I've been using it to test algorithm and to automate small tasks or do some web scrapping."
      },
      {
        skill: "Lua",
        since: "2023",
        level: "Intermediate",
        content: "How can anyone hate this language; Simple, easy, powerful. So many reasons that made me fall in love with this language.\
                  I have used it for personal projects, small tools, and backends with lapis. Even video games with Love2D. \
                  Like one with a cat but I can't really call it a game... and tic tac toe."
      },
      {
        skill: "Figma",
        since: "2023",
        level: "Intermediate",
        content: "I have been using it to design websites Ideas, design projects structure with figjam and even create basic assets and icons for projects (like this website)."
      },
      {
        skill: "Godot",
        since: "2022",
        level: "Intermediate",
        content: "Simple yet powerful game engine that fits a lot of needs. I have made a couple of games with it... all trash but hey, at least I know how to use it."
      }]
  }

  render() {
    let skills = ""
    skills = this.getSkills().map((skill) => {
      return html`
      <!-- @ts-ignore -->
      <p>
        <skill-card skill="${skill.skill}" since="${skill.since ?? ""}" level="${skill.level ?? ""}" content="${skill.content}">
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
