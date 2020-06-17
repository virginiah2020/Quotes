import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {


  quotes:Quote[] = [
    new Quote(1,'There is a Light of the Tunnel','wiseman','virginiah:-',new Date(2018,3,18)),
    new Quote(2,'They know not what they know not','wiseman2','vancy:-',new Date(2019,3,18)),
    new Quote(3,'Don’t be intimidated by what you don’t know. That can be your greatest strength and ensure that you do things differently from everyone else.','Bazenga ','simon:-',new Date(2007,1,12)),
    new Quote(4,'Fearlessness is like a muscle. I know from my own life that the more I exercise it, the more natural it becomes to not let my fears run me.','Wise Foolness','cecilia:-',new Date(2019,0,18)),
  ]

  addNewQuote(quote){
    console.log(quote)
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.postDate = new Date(quote.postDate);
    this.quotes.push(quote)
  }
  toggleDetails(index){
    this.quotes[index].showDescription=!this.quotes[index].showDescription
  }

  constructor() { }

  ngOnInit(): void {
  }

}
