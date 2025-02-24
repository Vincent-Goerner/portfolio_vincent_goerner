import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  translatedData = inject(TranslationService);
  technologieSource = [
    {
      name: 'HTML',
      img: '../../assets/img/skills/html.png'
    },
    {
      name: 'CSS',
      img: '../../assets/img/skills/css.png'
    },
    {
      name: 'JavaScript',
      img: '../../assets/img/skills/javascript.png'
    },
    {
      name: 'Material Design',
      img: '../../assets/img/skills/material_design.png'
    },
    {
      name: 'TypeScript',
      img: '../../assets/img/skills/typescript.png'
    },
    {
      name: 'Angular',
      img: '../../assets/img/skills/angular.png'
    },
    {
      name: 'Firebase',
      img: '../../assets/img/skills/firebase.png'
    },
    {
      name: 'GIT',
      img: '../../assets/img/skills/git.png'
    },
    {
      name: 'Rest-Api',
      img: '../../assets/img/skills/rest-api.png'
    },
    {
      name: 'Scrum',
      img: '../../assets/img/skills/scrum.png'
    },
  ];

  setPath() {
    return this.translatedData.translate[this.translatedData.selectedLanguage];
  }
}
