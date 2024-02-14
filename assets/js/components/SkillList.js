import {  html, css } from '../lit/lit-core.min.js';
import { BaseComponent } from './BaseComponent.js';

export class SkillList extends BaseComponent {
  constructor() {
    super()
  }

  getSkills() {
    return [{
      skill: "C++",
      since:null,
      level:null,
      content: "Something about C++"
    },
    {
      skill: "C#",
      since:null,
      level:null,
      content: "Something about C#"
    },]
  }

  render() {
    let skills = ""
    skills = this.getSkills().map((skill)=>{
      return html`
      <p>
        <skill-card skill="${skill.skill}" since="${skill.since}" value="${skill.level}"><p>${skill.content}</p></skill-card>
      </p>
      `
    })

    return html`
      <div class="skills-list">
        <p>
        ${
        skills
        }
        </p>
      </div>
    `
  }
}

customElements.define('skill-list', SkillList);
