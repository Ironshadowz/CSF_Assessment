import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Tags } from '../form';
import { Subscription } from 'rxjs';
import { UploadServiceService } from '../upload-service.service';

@Component({
  selector: 'app-all-tags',
  templateUrl: './all-tags.component.html',
  styleUrls: ['./all-tags.component.css']
})
export class AllTagsComponent
{
  private http = inject(HttpClient)
  private router = inject(Router)
  private upload = inject(UploadServiceService)

  sub! : Subscription
  tags : Tags[] = []
  time : string='5'

  ngOnInit()
  {
    this.sub= this.upload.getTags(this.time).subscribe
    (
      result=>
      {
        this.tags=result
      }
    )
    setTimeout
    (
      () =>
      {
        this.sub.unsubscribe(), 60000;
        console.log("No news hashtags found within the last 1 minute")
      }
    );
  }
  update()
  {
    this.ngOnInit();
  }
  post()
  {
    this.router.navigate(['/view2'])
  }
  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }
}
