import { Component, inject } from '@angular/core'; import { SectionTitle } from '../section-title/section-title'; import { LanguageService } from '../../services/language.service';
@Component({ selector: 'app-projects', imports: [SectionTitle], templateUrl: './projects.html', styleUrl: './projects.css' })
export class Projects { readonly content = inject(LanguageService).content; }
