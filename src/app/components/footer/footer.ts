import { Component, inject } from '@angular/core'; import { LanguageService } from '../../services/language.service';
@Component({ selector: 'app-footer', imports: [], templateUrl: './footer.html', styleUrl: './footer.css' })
export class Footer { readonly content = inject(LanguageService).content; readonly currentYear = new Date().getFullYear(); }
