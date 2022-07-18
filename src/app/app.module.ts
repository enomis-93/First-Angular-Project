import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { QuoteBoxComponent } from './quote-box/quote-box.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    QuoteBoxComponent,
    UserComponent,
    UserDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
