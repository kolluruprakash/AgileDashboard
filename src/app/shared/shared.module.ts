import { AuthModule } from './../auth/auth.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from './services/services.module';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [],
  imports: [
    ComponentsModule,
    ServicesModule,
    CommonModule,
    AuthModule
  ],
  exports: [
    ComponentsModule,
    ServicesModule,
    CommonModule,
    AuthModule
  ]
})
export class SharedModule { }
