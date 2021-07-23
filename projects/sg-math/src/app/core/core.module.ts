import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './layout/main/main.component';
import { SharedModule } from '../shared/shared.module';

const modules: any = [SharedModule, BrowserModule, BrowserAnimationsModule];
const components: any = [MainComponent];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components],
})
export class CoreModule {}
