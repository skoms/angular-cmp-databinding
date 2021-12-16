import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { ServerElement } from "../shared/serverElement";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  // encapsulation: ViewEncapsulation.ShadowDom, //? ( None, Emulated (default), ShadowDom )
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // @Input("srvElement") element!: ServerElement;
  @Input() name: string;
  @ViewChild("heading", { static: true }) header: ElementRef;
  @ContentChild("contentParagraph", { static: true }) paragraph: ElementRef;

  constructor() {
    console.log("Constructor");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
    console.log("Text content of H: " + this.header.nativeElement.textContent);
    console.log(
      "Text content of P: " + this.paragraph.nativeElement.textContent
    );
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called");
    console.log(
      "Text content of P: " + this.paragraph.nativeElement.textContent
    );
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
    console.log("Text content of H: " + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy called");
  }
}
