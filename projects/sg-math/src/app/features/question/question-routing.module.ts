import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AskComponent } from './ask/ask.component';

import { QuestionComponent } from './question.component';

const routes: Routes = [
  { path: '', component: QuestionComponent },
  { path: 'ask', component: AskComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionRoutingModule {}
