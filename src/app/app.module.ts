import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//Componenents
import { RouterModule } from '@angular/router';
import { BullsAndCowsComponent } from './bulls-and-cows/bulls-and-cows.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { GuessNumberComponent } from './guess-number/guess-number.component';


@NgModule({
  declarations: [
    AppComponent,
    BullsAndCowsComponent,
    ResultTableComponent,
    GuessNumberComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: BullsAndCowsComponent
      },
      {
        path: 'angular-game',
        component: BullsAndCowsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
