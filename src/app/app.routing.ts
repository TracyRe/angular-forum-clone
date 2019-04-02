import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumComponent } from './forum/forum.component';
import { TopicsComponent }   from './topics/topics.component';
import { PostComponent }   from './post/post.component';

const appRoutes: Routes = [
  {
     path: '',
     component: ForumComponent
   },
  {
    path: 'topics',
    component: TopicsComponent,
  },
  {
    path: 'post',
    component: PostComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
