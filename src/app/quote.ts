export class Quote {
  showQuote: boolean;
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
      this.showQuote = false;
    }


  }
