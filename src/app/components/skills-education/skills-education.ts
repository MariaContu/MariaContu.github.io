import { Component, inject } from '@angular/core'; import { SectionTitle } from '../section-title/section-title'; import { LanguageService } from '../../services/language.service';
@Component({ selector: 'app-skills-education', imports: [SectionTitle], templateUrl: './skills-education.html', styleUrl: './skills-education.css' })
export class SkillsEducation { readonly content = inject(LanguageService).content; }
