import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostNewsComponent } from './post-news/post-news.component';
import { AllTagsComponent } from './all-tags/all-tags.component';
import { OneTagComponent } from './one-tag/one-tag.component';

const routes: Routes =
[
  {path:'view2', component:PostNewsComponent},
  {path:'view0', component:AllTagsComponent},
  {path:'view1/:tag', component:OneTagComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
