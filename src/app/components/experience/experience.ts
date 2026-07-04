import { Component } from '@angular/core';
import { SectionTitle } from '../section-title/section-title';
import experience from '../../data/experience.json';

@Component({
  selector: 'app-experience',
  imports: [SectionTitle],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experience = experience;
}
