import { Component, inject } from '@angular/core'; import { SectionTitle } from '../section-title/section-title'; import { LanguageService } from '../../services/language.service';
@Component({ selector: 'app-experience', imports: [SectionTitle], templateUrl: './experience.html', styleUrl: './experience.css' })
export class Experience { readonly content = inject(LanguageService).content; }
