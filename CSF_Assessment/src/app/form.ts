export interface Form
{
  title:string;
  description:string;
  tags:string[];
}
export interface Tags
{
  tag:string;
  count:number;
}
export interface News
{
  id:string;
  postDate:number;
  title:string;
  description:string;
  image:string;
  tags:string[];
}
