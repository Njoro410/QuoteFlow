export class Quote {
  splice(index: number, arg1: number) {
    throw new Error('Method not implemented.');
  }
  showAuthor: boolean;
  constructor ( 
    public id:number,
    public name:string, 
    public author: string, 
    public q:string,
    public category:string,
    public datePosted:Date,
    public likes: number,
    public dislike: number
    ){
      this.showAuthor = false;
    }


  }
