import { Component, signal } from '@angular/core';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { SkillsEducation } from './components/skills-education/skills-education';

@Component({
  selector: 'app-root',
  imports: [Footer, Header, Hero, About, Experience, Projects, SkillsEducation],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio');
}
