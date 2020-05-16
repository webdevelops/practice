import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ChildComponent } from './child.component';

// @Component({
//   selector: 'my-app',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   name: string = 'Oleg';
//   age: number = 45;
//   colspan: number = 2;
//   count: number = 0;
//   increase($event: any): void {
//     this.count++;
//     console.log($event);
//   }
//   isRed: boolean = false;
//   blue: string = "isbluebox";
//   green: string = "isgreenbox"
// }

@Component({
  selector: 'my-app',
  template: `<h2>Number of clicks: {{clicks}}</h2>
            <child-comp 
              [(userName)]="name" [userAge]="age" 
              (onChanged)="onChanged($event)"
            >
              <h3 #headerContent> Welcom ContentChild !!!</h3>
            </child-comp>
            <p>Hello {{name}}</p>
            <input type="text" [(ngModel)]="name">
            <br/><br/>
            <input type="number" [(ngModel)]="age">
            <br/><br/>
            <h5>Template variables</h5>
            <button (click)="increment()">+</button>,
            <button (click)="decrement()">-</button>
            <h5>ViewChild to Template variables</h5>
            <h6 #nameText>{{nameVC}}</h6>
            <p>{{nameText.textContent}}</p>
            <button (click)="change()">Change</button>`,
  styles: [`h2, p {color: #333}`]
})
export class AppComponent implements OnInit, OnDestroy {
  name: string = 'Pete';
  age: number = 45;
  clicks: number = 0;

  constructor() { this.log(`constructor`); }
  ngOnInit() { this.log(`onInit`); }
  ngOnDestroy() { this.log(`onDestroy`); }

  private log(msg: string) {
    console.log(msg);
  }

  onChanged(increased: any) {
    increased == true ? this.clicks++ : this.clicks--;
  }

  @ViewChild(ChildComponent, { static: false })
  private counterComponent: ChildComponent;

  increment() { this.counterComponent.increment(); }
  decrement() { this.counterComponent.decrement(); }

  @ViewChild("nameText", {static: false})
  nameParagraph: ElementRef;

  nameVC: string = "Tom";

  change() {
    console.log(this.nameParagraph.nativeElement.textContent);
    this.nameParagraph.nativeElement.textContent = "Hello";
  }
}