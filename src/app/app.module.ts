import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatTabsModule } from '@angular/material/tabs';
import { InsuranceComponentComponent } from './insurance-component/insurance-component.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ReminderComponent } from './reminder/reminder.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatepickerComponent } from './datepicker/datepicker.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { OptionsComponent } from './options/options.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InsuranceComponentComponent,
    ReminderComponent,
    DatepickerComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatDatepickerModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
