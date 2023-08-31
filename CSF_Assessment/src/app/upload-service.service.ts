import { HttpClient } from '@angular/common/http';
import { ElementRef, Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { News, Tags } from './form';

const url = 'http://localhost:8080'
@Injectable
({
  providedIn: 'root'
})
export class UploadServiceService
{
  constructor() { }
  private http = inject(HttpClient);

  uploadForm(form:string,elemRef:ElementRef)
  {
    const data = new FormData();
    data.set("form", form);
    data.set("myfile", elemRef.nativeElement.files[0])
    return firstValueFrom(this.http.post<string>(url, data))
  }
  getTags(time:string)
  {
    return this.http.get<Tags[]>(url+'/getTags/'+time);
  }
  getNews(news:string, time:string)
  {
    return this.http.get<News[]>(url+'/getNews/'+news+'/'+time);
  }
}
