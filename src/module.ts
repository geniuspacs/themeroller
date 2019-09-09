import { NgModule, Injectable, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
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