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
  time:string=''
  ngOnInit()
  {
    this.item = this.route.snapshot.params['tag'];
    this.time=this.route.snapshot.params['time'];
    this.sub = this.upload.getNews(this.item, this.time).subscribe
    (
      result=>this.news=result
    )
  }
  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }
}
