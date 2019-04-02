export class Post {
  constructor (
    public id: number,
    public title: string,
    public author: string,
    public profileimg: string,
    public dateposted: string,
    public dateedited: string,
    public content: string,
    public replyCount: number
  ) { }

}
