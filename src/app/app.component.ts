import { Component } from "@angular/core";
import { ServerElement } from "./shared/serverElement";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  serverElements: ServerElement[] = [];
  numberArr: number[] = [];

  onServerAdded(serverData: { name: string; content: string }) {
    this.serverElements.push({
      type: "server",
      name: serverData.name,
      content: serverData.content,
    });
  }

  onBlueprintAdded(blueprintData: { name: string; content: string }) {
    this.serverElements.push({
      type: "blueprint",
      name: blueprintData.name,
      content: blueprintData.content,
    });
  }

  onChangeFirst() {
    if (this.serverElements.length <= 0) return;
    this.serverElements[0].name = "Changed!";
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

  addToNumArray(number: number) {
    this.numberArr.push(number);
  }
}
