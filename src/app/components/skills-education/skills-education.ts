import { Component } from '@angular/core';
import { SectionTitle } from '../section-title/section-title';
import data from '../../data/skills-education.json';

@Component({
  selector: 'app-skills-education',
  imports: [SectionTitle],
  templateUrl: './skills-education.html',
  styleUrl: './skills-education.css',
})
export class SkillsEducation {
  skills = data.skills;
  education = data.education;
}
