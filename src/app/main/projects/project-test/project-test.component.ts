import { Component, inject, Input } from '@angular/core';
import { ProjectsComponent } from '../projects.component';
import { TranslationService } from '../../../services/translation.service';

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

  /**
    * Loads the next project by incrementing the loadIndex.
    * If the last project is reached, it loops back to the first project.
    *
    * @returns {void}
  */
  closeDetails() {
    this.projectData.showProjectDetails = false;
  }

  /**
    * Loads the next project by incrementing the loadIndex.
    * If the last project is reached, it loops back to the first project.
    *
    * @returns {void}
  */
  loadNextProject() {
    if (this.projectData.loadIndex < this.projectData.projects.length - 1) {
      this.projectData.loadIndex++;
    } else {
      this.projectData.loadIndex = 0;
    }
  }

  /**
    * Returns the translated path for the selected language.
    *
    * @returns {string} The translated path for the selected language.
  */
  setPath() {
    return this.translatedData.translate[this.translatedData.selectedLanguage];
  }
}
