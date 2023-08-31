import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadServiceService } from '../upload-service.service';
import { Router } from '@angular/router';

@Component
({
  selector: 'app-post-news',
  templateUrl: './post-news.component.html',
  styleUrls: ['./post-news.component.css']
})
export class PostNewsComponent
{
  private fb = inject(FormBuilder);
  private upload = inject(UploadServiceService);
  private router = inject(Router);

  form!:FormGroup;
  newTag:string=''
  tagArray:string[]=[]

  @ViewChild('photoupload')
  toUpload!: ElementRef
  @ViewChild('add')
  add!:ElementRef

  ngOnInit()
  {
    this.form=this.fb.group
        ({
          title: this.fb.control<string>('', [Validators.required, Validators.minLength(5)]),
          description: this.fb.control<string>('', [Validators.required, Validators.minLength(5)]),
          tagArray : this.fb.control<string[]>([])
        })
  }
  submit()
  {
    const news = this.form.value;
    console.log(news);
    this.upload.uploadForm(news,this.toUpload)
      .then
      (
        result=>
        {
          if(result!="Error")
          {
            alert("NewsId= "+result);
            this.router.navigate(['/view0']);
          }
          alert("Error with upload");
          this.ngOnInit();
        }
      );
  }
  addTag()
  {
    this.tagArray.push(this.add.nativeElement.innerHTML);
  }
  back()
  {
    this.router.navigate(['/view0']);
  }
  delete(index:number)
  {
    this.tagArray.splice(index, 1);
  }
}
