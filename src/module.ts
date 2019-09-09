import { NgModule, Injectable, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloComponent } from './components';

@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HelloComponent
  ],
  providers: [],
})

@Injectable()
export class ThemerollerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ThemerollerModule,
      providers: []
    }
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: ThemerollerModule,
      providers: []
    }
  }
}