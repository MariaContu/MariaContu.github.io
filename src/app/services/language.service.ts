import { Injectable, computed, signal } from '@angular/core';
import { Language, portfolioContent } from '../data/portfolio-content';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly currentLanguage = signal<Language>(this.getInitialLanguage());

  readonly language = this.currentLanguage.asReadonly();
  readonly content = computed(() => portfolioContent[this.currentLanguage()]);

  toggleLanguage(): void {
    this.setLanguage(this.currentLanguage() === 'pt' ? 'en' : 'pt');
  }

  setLanguage(language: Language): void {
    this.currentLanguage.set(language);
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
    localStorage.setItem('portfolio-language', language);
  }

  private getInitialLanguage(): Language {
    const savedLanguage = localStorage.getItem('portfolio-language');
    return savedLanguage === 'en' ? 'en' : 'pt';
  }
}
