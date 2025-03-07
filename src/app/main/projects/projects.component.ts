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
      img: '../../assets/img/projects/join.png',
      preview: '../../assets/img/projects/join_preview.png',
      link: 'https://github.com/A1exi0sD4rc/Join',
      descriptionEN: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      descriptionDE: 'Vom Kanban-System inspirierter Aufgabenmanager. Erstellen und organisieren Sie Aufgaben mithilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.'
    },
    {
      name: 'The Leagacy of the Living',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      technologies_logo: [0, 1, 2],
      img: '../../assets/img/projects/el_polo_loco.png',
      preview: '../../assets/img/projects/tlotl_preview.png',
      link: 'https://github.com/A1exi0sD4rc/The-Legacy-of-the-Living',
      descriptionEN: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      descriptionDE: 'Spring-, Lauf- und Wurfspiel basierend auf einem objektorientierten Ansatz. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.'
    },
    {
      name: 'DaBubble',
      technologies: ['HTML', 'CSS', 'Angular', 'Typescript', 'Firebase'],
      technologies_logo: [1, 2, 4, 5, 3],
      img: '../../assets/img/projects/coming_soon.jpg',
      preview: '../../assets/img/projects/coming_soon.jpg',
      link: '#',
      descriptionEN: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      descriptionDE: 'Diese App ist eine Slack-Clone-App. Es revolutioniert die Teamkommunikation und Zusammenarbeit mit seiner intuitiven Benutzeroberfläche, Echtzeit-Messaging und einer robusten Kanalorganisation.'
    },
  ];
  technologieImg = [
    '../../assets/img/projects/html.png',
    '../../assets/img/projects/css.png',
    '../../assets/img/projects/javascript.png',
    '../../assets/img/projects/firebase.png',
    '../../assets/img/projects/angular.png',
    '../../assets/img/projects/typescript.png'
  ];
  loadIndex: number = 0;
  showProjectDetails: boolean = false;


  setProjectData(i: number) {
    this.loadIndex = i;
    this.showProjectDetails = true;
  }

  setPath() {
    return this.translatedData.translate[this.translatedData.selectedLanguage];
  }
}
