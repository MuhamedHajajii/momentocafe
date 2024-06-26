import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankLayoutComponent } from './components/pages/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './components/pages/auth-layout/auth-layout.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, BlankLayoutComponent, AuthLayoutComponent],
  exports: [BlankLayoutComponent, AuthLayoutComponent],
})
export class CoreModule {}
