import { Component } from '@angular/core';
import profile from '../../data/profile.json';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  profile = profile;
}
