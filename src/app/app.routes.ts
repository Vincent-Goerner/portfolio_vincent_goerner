import { Routes } from '@angular/router';
import { LegalNoticeComponent } from './legal/legal-notice/legal-notice.component';
import { MainComponent } from './main/main.component';
import { PrivacyPolicyComponent } from './legal/privacy-policy/privacy-policy.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'legal-notice', component: LegalNoticeComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent },
];
