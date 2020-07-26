# MyFirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

Revision:

    2.7 Template Syntax
    String Interpolation:
    {{ productName }} String Interpolation => OutPut Dynamically

    Event Binding:
    <button  (click)="productName ='A Tree'">Change Name</button>
    (click) Event in button. Event Binding

    Property Binding.(Javascript Object)
    [disabled]='isDisabled'
    Button has property. Eg. disabled,   

    Two Way Binding: Listening to events and storing a current value. 
    Combine with [] & () => [()] bind to ngModel => [(ngModel)]
    This is special directive provide by angular.
    Must update AppModule with FormsModule. to work correctly for two way binding.

    <input type="text" [(ngModel)]="productName" />
    <div> {{productName}} </div>


    2.8
    * is .
    *ngFor for for loop
    *ngFor is For Condition.
    <input type="text" *ngIf="!isDisabled" [(ngModel)]="productName">
    <button *ngIf="!isDisabled" (click)="onAddProduct()">Change Name</button>
    <div *ngFor="let product of products">{{ product }}</div>




    2.9
    CROSS COMPONENT EVENT COMMUNICATION
    @Input: to take data from parent.
    bind variable to parent

    Parent:
    <app-product *ngFor="let product of products" [productName]="product"></app-product>

    Child:
     ts. =>  @Input() productName: string;


    @Output: from child to parent give response.
    Child
    HTML <article class="product" (click)="onClicked()" >

    TS  @Output() productClicked = new EventEmitter;
        onClicked() {
            this.productClicked.emit();
        }

    parent
    HTML<app-product (productClicked)="onRemoveProduct(product)" *ngFor="let product of products" [productName]="product"></app-product>
    
    TS  onRemoveProduct(productName: string) {
            this.products = this.products.filter(item => item !== productName);
        }
