import { Component } from '@angular/core';
import { SectionTitle } from '../section-title/section-title';
import about from '../../data/about.json';

@Component({
  selector: 'app-about',
  imports: [SectionTitle],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  about = about;
}
