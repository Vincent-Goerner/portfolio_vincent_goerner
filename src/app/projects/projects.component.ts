import { Component, inject } from '@angular/core';
import { ProjectTestComponent } from './project-test/project-test.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectTestComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent {
  projects = [
    {
      name: 'Join',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      technologies_logo: [0, 1, 2, 3],
      img: '../../assets/img/projects/join.png',
      preview: '../../assets/img/projects/join_preview.png',
      link: 'https://github.com/A1exi0sD4rc/Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.'
    },
    {
      name: 'The Leagacy of the Living',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      technologies_logo: [0, 1, 2],
      img: '../../assets/img/projects/el_polo_loco.png',
      preview: '../../assets/img/projects/el_polo_loco_preview.png',
      link: 'https://github.com/A1exi0sD4rc/The-Legacy-of-the-Living',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.'
    },
    {
      name: 'DaBubble',
      technologies: ['HTML', 'CSS', 'Angular', 'Typescript', 'Firebase'],
      technologies_logo: [1, 2, 4, 5, 3],
      img: '../../assets/img/projects/coming_soon.jpg',
      preview: '../../assets/img/projects/coming_soon.jpg',
      link: 'https://github.com/A1exi0sD4rc/The-Legacy-of-the-Living',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.'
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
}
