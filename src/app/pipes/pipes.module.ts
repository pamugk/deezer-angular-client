import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePipe } from './time.pipe';
import { TimestampPipe } from './timestamp.pipe';



@NgModule({
  declarations: [
    TimePipe,
    TimestampPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimePipe,
    TimestampPipe
  ]
})
export class PipesModule { }
