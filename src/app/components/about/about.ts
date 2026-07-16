import { Component, inject } from '@angular/core'; import { SectionTitle } from '../section-title/section-title'; import { LanguageService } from '../../services/language.service';
@Component({ selector: 'app-about', imports: [SectionTitle], templateUrl: './about.html', styleUrl: './about.css' })
export class About { readonly content = inject(LanguageService).content; }
