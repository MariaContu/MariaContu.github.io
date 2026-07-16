import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({ selector: 'app-header', imports: [], templateUrl: './header.html', styleUrl: './header.css' })
export class Header {
  readonly languageService = inject(LanguageService);
  readonly content = this.languageService.content;
}
