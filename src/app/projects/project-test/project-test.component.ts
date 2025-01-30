import { Component, inject, Input } from '@angular/core';
import { ProjectsComponent } from '../projects.component';

@Component({
  selector: 'app-project-test',
  standalone: true,
  imports: [ProjectsComponent],
  templateUrl: './project-test.component.html',
  styleUrl: './project-test.component.scss'
})

export class ProjectTestComponent {
  projectData = inject(ProjectsComponent);
  @Input()projectIndex = 0;

  closeDetails() {
    this.projectData.showProjectDetails = false;
  }

  loadNextProject() {
    if (this.projectIndex < this.projectData.projects.length - 1) {
      this.projectIndex++;
    } else {
      this.projectIndex = 0;
    }
  }
}
