import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UploadServiceService } from '../upload-service.service';
import { News } from '../form';
import { Subscription } from 'rxjs';

@Component
({
  selector: 'app-one-tag',
  templateUrl: './one-tag.component.html',
  styleUrls: ['./one-tag.component.css']
})
export class OneTagComponent
{
  private route = inject(ActivatedRoute);
  private upload = inject(UploadServiceService);

  news!:News[];
  sub! : Subscription;
  item:string=''
  ngOnInit()
  {
    this.item = this.route.snapshot.params['tag'];
    this.sub = this.upload.getNews(this.item).subscribe
    (
      result=>this.news=result
    )
  }
  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }
}
