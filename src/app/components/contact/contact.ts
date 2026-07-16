import { Component, inject } from '@angular/core'; import { SectionTitle } from '../section-title/section-title'; import { LanguageService } from '../../services/language.service';
@Component({ selector: 'app-contact', imports: [SectionTitle], templateUrl: './contact.html', styleUrl: './contact.css' })
export class Contact { readonly content = inject(LanguageService).content; }
