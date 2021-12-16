import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  count: number = 0;
  interval;
  @Output() countIncrement = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onStartGame() {
    this.interval = setInterval(() => {
      this.countIncrement.emit(this.count + 1);
      this.count++;
    }, 1000);
  }

  onEndGame() {
    if (this.interval !== undefined) {
      clearInterval(this.interval);
    }
  }
}
