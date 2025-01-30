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
      technologies_logo: [1, 2, 3, 4],
      img: '../../assets/img/projects/join.png',
      preview: '../../assets/img/projects/join_preview.png'
    },
    {
      name: 'The Leagacy of the Living',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      technologies_logo: [1, 2, 3],
      img: '../../assets/img/projects/el_polo_loco.png',
      preview: '../../assets/img/projects/el_polo_loco_preview.png'
    }
  ];
  technologieImg = [
    '../../assets/img/projects/html.png',
    '../../assets/img/projects/css.png',
    '../../assets/img/projects/javascript.png',
    '../../assets/img/projects/firebase.png',
    '../../assets/img/projects/angular.png',
    '../../assets/img/projects/typescript.png'
  ];
  loadIndex:number = 0;
  showProjectDetails:boolean = false;

  setProjectData(i:number) {
    this.loadIndex = i;
    this.showProjectDetails = true;
  }
}
