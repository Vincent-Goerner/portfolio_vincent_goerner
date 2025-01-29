import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent {
  projects = [
    {
      name: 'Join',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'GIT']
    },
    {
      name: 'The Leagacy of the Living',
      technologies: ['HTML', 'CSS', 'JavaScript', 'GIT']
    }
  ];

}
