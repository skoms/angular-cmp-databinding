import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  @Output("srvCreated") serverCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();

  // newServerName = "";
  // newServerContent = "";

  @ViewChild("serverContentInput", { static: true })
  serverContentInput: ElementRef<HTMLInputElement>;

  constructor() {}

  ngOnInit(): void {}

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value,
    });
  }
}
