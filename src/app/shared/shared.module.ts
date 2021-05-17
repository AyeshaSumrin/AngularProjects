import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ContactListComponent } from '../contact-list/contact-list.component';



@NgModule({
  declarations: [ContactListComponent],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTabsModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatRadioModule,
    MatDividerModule,
    MatExpansionModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    OverlayModule,
    MatDialogModule,
    MatButtonToggleModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTabsModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatRadioModule,
    MatDividerModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    OverlayModule,
    MatDialogModule,
    MatButtonToggleModule,
  ]
})
export class SharedModule { }
