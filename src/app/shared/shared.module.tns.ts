import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

@NgModule({
  imports: [ NativeScriptCommonModule ],
  exports: [ NativeScriptCommonModule ]
})
export class SharedModule { }
