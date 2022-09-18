import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-guess-number',
  templateUrl: './guess-number.component.html'
})
export class GuessNumberComponent implements OnInit {

  
  constructor() { }
  @Output() guessUpdate: EventEmitter<any> = new EventEmitter();
  @Output() guessOnInput: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  updateGuess(val: string): void {
    val !== "" && this.guessUpdate.emit(val);
  }

  onInput(guesses: any[]): void {
    this.guessOnInput.emit(guesses);
  }
}
