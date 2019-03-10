import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypographyComponent } from './typography/typography.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { LabelsComponent } from './labels/labels.component';
import { ModalsComponent } from './modals/modals.component';


const routes: Routes = [
  { path: '', component: TypographyComponent},
  { path: 'typography', component: TypographyComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'labels', component: LabelsComponent },
  { path: 'modals', component: ModalsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
