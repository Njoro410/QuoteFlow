export class Quote {
  showQuote: boolean;
  constructor ( 
    public name:string, 
    public author: string, 
    public q:string
    ){
      this.showQuote = false;
    }


  }
