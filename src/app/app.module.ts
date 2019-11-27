import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoadingScreenComponent } from './shared/components/loading-screen/loading-screen.component';
import { ListTicketsComponent } from './shared/components/list-tickets/list-tickets.component';
import { TicketComponent } from './shared/components/list-tickets/ticket/ticket.component';
import { LoginComponent } from './shared/components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListTicketsComponent,
    TicketComponent,
    LoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    /** add reactive forms */
    FormsModule,
    ReactiveFormsModule,
    /** add http client */
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
