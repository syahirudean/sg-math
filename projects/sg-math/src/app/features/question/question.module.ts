import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionComponent } from './question.component';
import { AskComponent } from './ask/ask.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuestionComponent, AskComponent],
  imports: [CommonModule, QuestionRoutingModule, FormsModule],
})
export class QuestionModule {}
