import {
  NgModule,
  NO_ERRORS_SCHEMA,
  Optional,
  SkipSelf
} from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

@NgModule({
  imports: [ NativeScriptModule ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. Import Core modules in the AppModule only. ');
    }
  }
}
