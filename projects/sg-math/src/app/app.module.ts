import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

//VENDOR
import { ModalModule } from '../_modal';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    CoreModule,
    ModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
