import { Routes } from '@angular/router';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

export const routes: Routes = [
    {path: 'legal-notice', component: LegalNoticeComponent},
    // {path: 'priacy-policy', component: AboveTheFoldComponent},
];
