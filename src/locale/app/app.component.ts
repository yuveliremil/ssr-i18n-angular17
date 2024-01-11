import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ssr-i18n-angular17';
  links = [
    { title: $localize`Explore the Docs`, link: 'https://angular.dev' },
    {
      title: $localize`Learn with Tutorials`,
      link: 'https://angular.dev/tutorials',
    },
    { title: $localize`CLI Docs`, link: 'https://angular.dev/tools/cli' },
    {
      title: $localize`Angular Language Service`,
      link: 'https://angular.dev/tools/language-service',
    },
    {
      title: $localize`Angular DevTools`,
      link: 'https://angular.dev/tools/devtools',
    },
  ];

  updateUrl(culture?: string) {
    const currentLocale = $localize.locale!;
    const supportedLocales = ['de', 'es', 'fr']; 
    let url; 
    if (culture) { 
      if (supportedLocales.includes(currentLocale)) {
        url = location.href.replace(`/${currentLocale}/`, `/${culture}/`);
      } else {
        url = `${location.href}${culture}/`;
      } 
    } else {
      url = location.href.replace(`/${currentLocale}/`,`/`)
    } 
    location.href = url; 
  }
}
