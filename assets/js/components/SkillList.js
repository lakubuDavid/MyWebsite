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
        skill: "Lua",
        since: "2023",
        level: "Intermediate",
        content: "How can anyone hate this language; Simple, easy, powerful. So many reasons that made me fall in love with this language.\
        I have used it for personal projects, small tools, and backends with lapis. Even video games with Love2D. \
        Like one with a cat but I can't really call it a game... and tic tac toe."
      },
      {
        skill: "C#",
        since: "2020",
        level: "Intermediate",
        content: " While I don't use it as much as I used to it's the language that made me love programming\
        and helped me understand OOP. I have used it along Godot as well as with WPF for small desktop apps.\
        I would be more than happy to reuse it again in a project anytime soon."
      },
      {
        skill: "Go",
        since: "2024",
        level: "Basic",
        content: "Fell in love with it right away.\
        I use it for the backend of one of my personal project and it's soooo good.\
        Even made a small tool in it : Moddo a small tool that generates classes in different languages from a schema (heavily inspired by prisma)\
        I would like to dive deeper in it for other projects soon."
      },
      {
        skill: "Python",
        since: "2018",
        level: "Intermediate",
        content: "My first language (like most people I guess). I've been using it to test algorithm and to automate small tasks or do some web scrapping."
      },
      {
        skill: "Figma",
        since: "2023",
        level: "Basic",
        content: "I have been using it to design websites Ideas, design projects structure with figjam and even create basic assets and icons for projects (like this website)."
      },
      {
        skill: "Godot",
        since: "2022",
        level: "Intermediate",
        content: "Simple yet powerful game engine that fits a lot of needs. I have made a couple of games with it... all trash but hey, at least I know how to use it.\
        Really reignited this love for game dev when I discovered it. At the time my potato PC could only run GLES2 and the latest version of Godot was 3.1\
        But it didn't stop me from making small games with horrible gameplay but nice graphics , even with the limitations."
      }, {
        skill: "Xojo",
        since: "2024",
        level: "Beginner",
        content: "Do I like it ? No. Did I have to learn it for work ? Yes. Is there more to say ..."
      }, {
        skill: "Netsuite",
        since: "2024",
        level: "Beginner",
        content: "I had to learn it along Xojo and it's not that bad,I guess I prefer when I have to write backend code on it than connecting said code to Xojo.\
        But since it uses javascript it was more about learning the environment and the API than the language itself."
      }
    ]
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
    <h1>skills</h1>
      <div class="skills-list">
        ${skills}
      </div>
    `
  }
}

customElements.define('skill-list', SkillList);
