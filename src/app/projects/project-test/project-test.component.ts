import { Component, inject, Input } from '@angular/core';
import { ProjectsComponent } from '../projects.component';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-project-test',
  standalone: true,
  imports: [],
  templateUrl: './project-test.component.html',
  styleUrl: './project-test.component.scss'
})

export class ProjectTestComponent {
  translatedData = inject(TranslationService);
  projectData = inject(ProjectsComponent);
  @Input()projectIndex = 0;

  closeDetails() {
    this.projectData.showProjectDetails = false;
  }

  loadNextProject() {
    if (this.projectData.loadIndex < this.projectData.projects.length - 1) {
      this.projectData.loadIndex++;
    } else {
      this.projectData.loadIndex = 0;
    }
  }

  setPath() {
    return this.translatedData.translate[this.translatedData.selectedLanguage];
  }
}
