import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-box',
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.css'],
})
export class QuoteBoxComponent implements OnInit {
  boxHide: boolean = true;

  quote: string = '';
  constructor() {}

  ngOnInit(): void {}

  showBox(): void {
    this.getRandomQuote();
    this.boxHide = !this.boxHide;
  }

  getRandomQuote() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4afb393722msh353a6a3b430746cp124c6ajsndd913bbabc3e',
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
      },
    };

    fetch(
      'https://quotes15.p.rapidapi.com/quotes/random/?language_code=it',
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.quote = `
          "${response.content}" 
          (${response.originator.name})
        `;
      })
      .catch((err) => console.error(err));
  }
}
