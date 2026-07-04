import { Component } from '@angular/core';
import { SectionTitle } from '../section-title/section-title';
import projects from '../../data/projects.json';

@Component({
  selector: 'app-projects',
  imports: [SectionTitle],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = projects;
}
