import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostNewsComponent } from './post-news/post-news.component';
import { AllTagsComponent } from './all-tags/all-tags.component';
import { OneTagComponent } from './one-tag/one-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    PostNewsComponent,
    AllTagsComponent,
    OneTagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
