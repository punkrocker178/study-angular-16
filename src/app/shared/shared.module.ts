import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    MatTableModule,
    MatSelectModule,
  ],
  exports: [
    MatTableModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class SharedModule { }
