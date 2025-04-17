import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  private currentTheme: 'light' | 'dark' = 'light';

  constructor() {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      this.setTheme('light'); // En cso de que no haya un tema guardado, se establece el tema claro por defecto
    }
  }

  get currentThemeValue(): 'light' | 'dark' {
    return this.currentTheme;
  }

  toggleTheme(): void {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  setTheme(theme: 'light' | 'dark'): void {
    document.body.classList.remove(this.currentTheme);
    document.body.classList.add(theme);
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
  }
}
