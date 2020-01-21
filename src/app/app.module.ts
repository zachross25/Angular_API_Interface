import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import {RouterModule} from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { PostsDetailComponent } from './posts-detail/posts-detail.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotoComponent } from './photo/photo.component';
import { AlbumsDetailComponent } from './albums-detail/albums-detail.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    PostsComponent,
    CommentsComponent,
    PostsDetailComponent,
    AlbumsComponent,
    PhotoComponent,
    AlbumsDetailComponent,
    IndexComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: '', component: IndexComponent},
        {path: 'users', component: UsersComponent},
        {path: 'user/:userId', component: UserDetailComponent},
        {path: 'posts', component: PostsComponent},
        {path: 'posts/:postId', component: PostsDetailComponent},
        { path: 'albums', component: AlbumsComponent},
       // { path: 'albums/:userId', component: AlbumsComponent},
        { path: 'albums/:albumId', component: AlbumsDetailComponent},
        ]),
    BrowserModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
