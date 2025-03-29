import { Component, inject } from '@angular/core';
import { ProjectTestComponent } from './project-test/project-test.component';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectTestComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent {
  translatedData = inject(TranslationService);
  projects = [
    {
      name: 'Join',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      technologies_logo: [0, 1, 2, 3],
      img: './assets/img/projects/join.png',
      preview: './assets/img/projects/join_preview.jpg',
      link: 'https://github.com/A1exi0sD4rc/Join',
      test: 'https://vincentgoerner.com/Join/board.html',
      descriptionEN: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      descriptionDE: 'Vom Kanban-System inspirierter Aufgabenmanager. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.'
    },
    {
      name: 'The Leagacy of the Living',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      technologies_logo: [0, 1, 2],
      img: './assets/img/projects/tlotl_2.png',
      preview: './assets/img/projects/tlotl_preview.png',
      link: 'https://github.com/A1exi0sD4rc/The-Legacy-of-the-Living',
      test: 'https://vincentgoerner.com/The%20Legacy%20of%20the%20Living/index.html',
      descriptionEN: 'Jump, run and throw game based on object-oriented approach. Collect coins and fight your way through the hordes of the undead and defeat the evil behind them.',
      descriptionDE: 'Spring-, Lauf- und Wurfspiel basierend auf einem objektorientierten Ansatz. Sammle Münzen und kämpf dich durch die Horden der Untoten und besiege das bösartige Übel hinter ihnen.'
    },
  ];
  technologieImg = [
    './assets/img/projects/html.png',
    './assets/img/projects/css.png',
    './assets/img/projects/javascript.png',
    './assets/img/projects/firebase.png',
    './assets/img/projects/angular.png',
    './assets/img/projects/typescript.png'
  ];
  loadIndex: number = 0;
  showProjectDetails: boolean = false;

  /**
    * Sets the project data by updating the loadIndex and showing the project details.
    *
    * @param {number} i - The index to load the project data.
    * @returns {void}
  */
  setProjectData(i: number) {
    this.loadIndex = i;
    this.showProjectDetails = true;
  }

  /**
    * Returns the translated path for the selected language.
    *
    * @returns {string} The translated path for the selected language.
  */
  setPath() {
    return this.translatedData.translate[this.translatedData.selectedLanguage];
  }

  /**
    * Opens a new browser tab with the specified URL.
    *
    * @param {string} a - The URL to open in the new tab.
    * @returns {void}
  */
  openNewTab(a: string) {
    window.open(a);
  }
}
