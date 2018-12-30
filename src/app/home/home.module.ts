import { NgModule } from '@angular/core';

import { HomeContainerComponent } from './home-container/home-container.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [ HomeRoutingModule ],
  declarations: [ HomeContainerComponent ]
})
export class HomeModule { }
