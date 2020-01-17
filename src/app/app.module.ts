import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {RouterModule} from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path: 'users', component: UsersComponent},
        {path: 'user/:userId', component: UserDetailComponent}
        ]),
    BrowserModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
