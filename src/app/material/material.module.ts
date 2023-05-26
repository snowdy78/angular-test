import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRippleModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {NgFor} from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    MatButtonModule,
    MatCheckboxModule,
    MatRippleModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDividerModule,
    NgFor,
    MatGridListModule,
    MatListModule,

  ]
})
export class MaterialModule { }
