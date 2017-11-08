# interviewQuestions

## Angular Interview Questions

1.	What is angular?

2.	Is there breaking changes between angular 2 and angular 4?

3.	What are the differences between angular 2 and angular 4 version?

4.	What are new features in angular 4?

5.	Which latest version of angular is stable?


6.	What is directive, component, module, pipes in angular?

7.	For what purpose angular service is used?

8.	Is there any global variable in angular?

9.	How can you share data between angular components?

10.	What is @Input and @Output?

11.	What is router? and why is it used?

12.	What is module and how to modulerize application?

13.	What is lazy loading and why is it used for?

Lazy Loading is on demand loading of the application modules

```
Routes= [{path:'recipes'},loadChildren:'./recipes/recipes.module#RecipesModule']
```
14.	What is FormGroup and FormControl in angular? Why is it used for?

15.	What is change in BrowserAnimationsModule from angular version 2 to 4?

16.	What is angular decoration and why is used for?

17.	What is angular CLI?

18.	Is there platform dependency for running angular application?

19.	How to bootstrap angular application?

20.	What is dependency injection in angular?

21.	What is interpolation in angular component?

22.	How do you use one way and two way data binding?

23.	How to apply animation to the angular component?


24.	Describe Component lifecycle hooks.

25.	How can you dynamically load the component?

26.	What is difference between Structural and Attribute directives?

27.	How to apply Custom validation to angular form?

28.	Which is better, reactive or template-driven?

29.	Tell me the properties of NgModule, Component, Directive, Injectable, Pipe.

30.	What is an entry component?

An entry component is any component that Angular loads imperatively by type.

A component loaded declaratively via its selector is not an entry component.

The bootstrapped root AppComponent is an entry component

Components in route definitions are also entry components

32. What's the difference between a bootstrap component and an entry component?

A bootstrapped component is an entry component that Angular loads into the DOM during the bootstrap (application launch) process. Other entry components are loaded dynamically by other means, such as with the router.

31.	Tell something about Routing & Navigation.

To enable routing in Angular apps, following steps need to be done:

 - Most routing applications should add a <base> element to the index.html as the first child in the <head> tag to tell the router how to compose navigation URLs

 - ```
 import { RouterModule, Routes } from '@angular/router';
 ```
 - define paths in the app.module

 const appRoutes: Routes = [
   { path: 'crisis-center', component: CrisisListComponent },
   { path: 'hero/:id',      component: HeroDetailComponent },

  - imports array use that object in the RouterModule.forRoot(appRoutes)

  -
    ```
    <router-outlet></router-outlet>
    <!-- Routed views go here -->
    ```
  -

  -  include in html
  ```
    <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
  ```

32.	Tell me about testing in angular? How to do end to end and unit testing in Angular? Which framework to use for this purpose?

The Angular Test Bed (ATB) is a higher level Angular Only testing framework that allows us to easily test behaviours that depend on the Angular Framework.

```
import {TestBed, ComponentFixture} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {AuthService} from "./auth.service";

describe('Component: Login', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(LoginComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    // UserService provided to the TestBed
    authService = TestBed.get(AuthService);

  });

  it('canLogin returns false when the user is not authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });
})
```

A fixture is a wrapper for a component and it’s template.

We create an instance of a component fixture through the TestBed, this injects the AuthService into the component constructor.

We can find the actual component from the componentInstance on the fixture.

We can get resolve dependencies using the TestBed injector by using the get function.

33.	Name few Built-in directives.

   ngFor, ngIf, ngBind

37. What Are The New Features Of Angular 2? Why You Used Angular 2?

## Component-Based

   Angular 2 is entirely component based. Controllers and $scope are no longer used. They have been replaced by components and directives

## Directives

   The specification for directives is considerably simplified, although they are still subject to change. With the
   @Directive annotation, a directive can be declared

## Forms and Validations

   local references , TDD vs Reactive

39. How Can We Setting Up Our Development Environment For Angular 2?

  node, angular CLI, to create project

40. What are TypeScript Types? In Detail?

boolean, number, string ,Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:

// Declare a tuple type
```
 let x: [string, number];
```

41. What is AOT Compilation? - Pros and Cons of Ahead-of-Time!

You should use AOT to compile an application that must launch quickly. With AOT, there is no runtime compile step. The client doesn't need the compiler library at all and excluding it significantly reduces the total payload
```
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
```

43. How would you Optimize the Angular 4 Application for Better Performance?

Using Lazy Loading

Please Read More on this good article [Optimizing Angular Application](https://netbasal.com/optimizing-the-performance-of-your-angular-application-f222f1c16354)


44. What are the Securities Threats should we be Aware of in Angular 2 Applications?
45. What are major changes in Angular 2?
46. What are the core components of Angular 2?
47. What set of modern browsers are supported in Angular 2?
48. What are differences between Angular 2 and Angular 1?
49. Can you write both Angular 1 and Angular 2 codes in a single project?
50. What are differences between Constructors and OnInit?
51. What did you like about working with Angular 2?
52. When will ngInit be called?
53. How would you make use of NgOnInit()?
54. What is the difference between NgOnInit() and constructor() of a component?
55. What is the possible order of life-cycle hooks?
56. What is the Best way to Declare and Access a Global Variable in Angular 2?
57. What is Angular 4? What's New in Angular 4?
58. What is Angular 5? What's New in Angular 5?

59. What is Angular Metadata

Angular metadata tells Angular how to construct instances of your application classes and interact with them at runtime.
You specify the metadata with decorators such as @Component() and @Input(). You also specify metadata implicitly in the constructor declarations of these decorated classes.

60. What are different compilation methods available?

## Just-in-time (JIT) compilation
   A bootstrapping method of compiling components and modules in the browser and launching the application dynamically. Just-in-time mode is a good choice during development.
   the JIT compiler performs a lot of work to analyze the components in the application at runtime and generate code in memory. When the page is refreshed, all the work that has been done is thrown away, and the JIT compiler does the work all over again
## Ahead-of-time (AOT) compilation
   The component factories are generated at build time, Angular can skip the compilation and move straight to
   creating views at runtime
   No need to deploy the compiler (Half of Angular size).

61. How Angular deals with security?

    DomSanitizer and call one of the following methods:
    ```
    bypassSecurityTrustHtml
    bypassSecurityTrustScript
    bypassSecurityTrustStyle
    bypassSecurityTrustUrl
    bypassSecurityTrustResourceUrl
    ```

62. How to migrate from Angular 1 to 4


## Components Questions

1. What is Components in Angular 2?
2. What are differences between Components and Directives?
3. What are Components Life-Cycles?
4. What is @Inputs in Angular 2?
5. What is Outputs in Angular 2?
6. What is hidden property in Angular 2?
7. How do components communicate with each other?
8. How would you create a component to display error messages throughout your application?
9. What are the difference between Renderer and ElementRef in angular 2?

## Services Questions

1. What is an Angular 2 Service?
2. What are the features of Angular 2 Service?
3. What are the differences between Observables & Promises?
4. How To Create & Call Angular 2 Services in Components?
5. How do we create a singleton service in Angular 2?
6. How HTTP Client is Interact with Angular 2 Servers?
7. What the best way to inject one service into another in angular 2?

## Pipes Questions

1. What is Pipes? Why use Pipes?
2. What is a pure and impure pipe?
3. What is Async Pipe?
4. How to create and use a custom Pipes?
5. Pipes Examples

## Directives Questions

1. What is Directives in Angular 2?
2. What is router-outlet directive in Angular 2?
3. What is a structural directive?
4. How do you identify a structural directive in html?

## Template Questions

1. What is Template Angular 2? Why Use?
2. What are differences between template and templateUrl?
3. What are differences between templateUrl and styleUrls?
4. What is a template variable. How would you use it?
5. How to use {}, [], [] and [()] in Angular2 Template?
6. How can you add an active class to a selected element in a list component?


## Styling Questions

1. How to use styleUrls and styles in Angular 2?
2. How to import css using system import?
3. How to Load external css style into Angular 2?

## Routing Questions

1. What is Routing Concepts in Angular 2?
2. What is Routes?

3. What is Router Imports?
```
import { RouterModule, Routes } from '@angular/router';
```

4. What is RouterOutlet?
Acts as a placeholder that Angular dynamically fills based on the current router state.

5. Is it possible to have a multiple router-outlet in the same template?
You can have one primary <router-outlet> for every route and additional named <router-outlet name="abc">.
The routes addressing these named outlets are called auxiliary routes.

6. What is RouterLink?
The RouterLink directives let you link to specific parts of your app.
When the link is static, you can use the directive as follows:
```
<a routerLink="/user/bob">link to user component</a>
```
7. What is base Href?
Most routing applications should add a <base> element to the index.html as the first child in the <head> tag to tell the router how to compose navigation URLs.

8. What is wildcard Route?
The ** path in the last route is a wildcard. The router will select this route if the requested URL doesn't match any paths for routes defined earlier in the configuration. This is useful for displaying a "404 - Not Found" page or redirecting to another route.

9. What is RouterModule.forRoot() ?
We pass the paths object that contains the routes of our application, inside this
RouterModule.forRoot() method.

## State Management Questions
1. What are cookies in Angular 2?

2. How would you pass data from a parent component to a child component?

3. How would you pass data from a child component to a parent component?


## Dependency Injection Questions

1. What is Dependency Injection (DI) in Angular 2?

It's a coding pattern in which a class receives its dependencies from external sources rather than creating them itself.
it uses TypeScript's constructor syntax for declaring parameters and properties simultaneously.

2. What is @Injectable()? Why Use?
@Injectable() is a decorator that is added to every service class, that has dependencies on other service
3. What is @Inject()? Why Use?

Angular 2 @Inject() is a special technique for letting Angular know that a parameter must be injected.
```
import { Inject } from '@angular/core';
import { Http } from '@angular/http';

class UserService {
  users:Array<any>;

  constructor(@Inject(Http) http:Http) {}
}
```

4. @Injectable() vs. @Inject()?
@Injectable() marks a class as available to an injector for instantiation. An injector reports an error when trying to instantiate a class that is not marked as @Injectable().

```
import {Injectable, bind} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable() /* This is #Step 1 */
export class UserService {
  constructor(http: Http/* This is #Step 2 */ ) {
    this.http = Http;
  }
}
```
How to use Dependency Injection (DI) correctly in Angular 2?

The basics Steps of Dependency injection,
- 1. A class with @Injectable() to tell angular 2 that it’s to be injected “UserService”.
- 2. A class with a constructor that accepts a type to be injected.


7. Why DI is important?

   Each class creates its own instance of the Desired method
   which makes it difficult to share that method among different
   classes and each time a new copy is created.
   If the dependencies of the method whose instance is created are changed
   we have to rewrite the class
   When we write unit tests we are at the mercy of the hidden dependencies of the desired method

   ### Solution
   Change this
   ```
   public engine: Engine;
     public tires: Tires;
     public description = 'No DI';

     constructor() {
       this.engine = new Engine();
       this.tires = new Tires();
     }
   ```
   to this
   ```
   public description = 'DI';

   constructor(public engine: Engine, public tires: Tires) { }
   ```
   and we can create a new instance of the car class by passing engines and tyres
   in the constructor

   ```
   let car = new Car(new Engine(), new Tires());
   ```

   The definition of the engine and tire dependencies are decoupled from the Car class. You can pass in any kind of engine or tires you like, as long as they conform to the general API requirements of an engine or tires.

## API Questions
1. Why would you use renderer methods instead of using native element methods?
2. How would you control size of an element on resize of the window in a component?

## Ng-Modules Questions

1. What is the purpose of NgModule??

   @NgModule takes a metadata object that tells Angular how to compile and run module code. It identifies the module's
   own components, directives, and pipes, making some of them public so external components can use them.

   @NgModule may add service providers to the application dependency injectors

2. How do you decide to create a new NgModule?

   If the part of the app in becomes big contains the directives, services, components, interceptors then its a good
   idea to make a separate module and import it in the root module of the app

3. What would you have in a shared module?

   Service like the service that makes http calls, custom directive,pipes

4. What is the purpose of exports in a NgModule?

   Export this NgModule's classes so they can be imported and used by components of other modules

   An NgModule is a class decorated with @NgModule metadata. The metadata do the following:

   - Declare which components, directives, and pipes belong to the module.
   - Make some of those classes public so that other component templates can use them.
   - Import other modules with the components, directives, and pipes needed by the components in this module.
   - Provide services at the application level that any application component can use.

5. Angular 2 Modules vs. JavaScript Modules

 - 1. An Angular module bounds declarable classes only. Declarables are the only classes that matter to the Angular.
 - 2. Instead of defining all member classes in one giant file (as in a JavaScript module), we list the module's
      classes in the @NgModule.declarations list.
 - 3. An Angular module can only export the declarable classes it owns or imports from other modules. It doesn't
      declare or export any other kind of class.

6. What is the difference between a module's forRoot() and forChild() methods and why do you need it?


## NgZones - Questions
1. What are Zones? What is Change Detection?
2. What is NgZone run outside Angular 2?
3. What would be a good use for NgZone service?

## Angular Testing Questions
1. What Are Isolated Unit Tests?
2. What Are Angular Testing Utilities?
3. Isolated Unit Tests vs. Angular Testing Utilities!

## ECMA Script and TypeScript Questions
1.  What is ECMAScript ES5/ES6?
```
Give examples
```
2.  What is “ES6 +A”?

3.  What is TypeScript in Angular 2?

Typings describes contract of libraries you use. This allows the TypeScript compiler that what you use exist (classes, properties, ...).

4.  Why should I use Typescript ?

5.  What are Types in TypeScript?

6.  TypeScript Advantages - Pros and Cons!

7.  How to Setup and Install Typescript NPM and Angular 2

8.  What is an Interface in TypeScript?

9.  What is Functions in TypeScript? How many types you defined in TypeScript?
10. TypeScript - The Fundamental Concepts!
11. How Work Automatic Assignment of Constructor Parameters in TypeScript?
12. What is Typings in Angular 2?
13. Why type definition with TypeScript in Angular 2?
14. Can I use Angular 2 with Typings in Angular 2?
15. Are Typescript type definitions Required?
16. Do we only need type definition files not “node_modules”?

17. How to create custom type definitions in Angular 2?

18. How to load file in your Angular 2 project?



19. Dynamic vs. Static Typing?

Statically typed programming languages do type checking (the process of verifying and enforcing the constraints of types) at compile-time as opposed to run-time. Dynamically typed programming languages do type checking at run-time as opposed to Compile-time

20. What is Destructuring?

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables

21. What is a spread operator? what is the alternative in JS?

To copy values in an immutable way

[...state]

Object.assign({}, state,{})

## Coding to implement features in Angular 2/4


### Interceptors

Interceptors intercept http request and manipulate with it

first in the app.module import
```
import {HTTP_INTERCEPTORS} from "@angular/common/http";
```
add to the providers array
```
{provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
```
make an interceptor service

```
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {AuthService} from "../auth/auth.service";
import {Injectable} from "@angular/core";

@Injectable()

export class AuthInterceptor implements HttpInterceptor{

    constructor(private authService:AuthService){}

    intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercepted!', req);
        const copiedReq = req.clone({params:req.params.set('auth',this.authService.getToken())});
        return next.handle(copiedReq);
    }
}
```

## Components

make a component.ts file
```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

```
add it in the declarations array in the app.module

## Directives

### Directives overview

There are three kinds of directives in Angular:

1. Components—directives with a template.
2. Structural directives—change the DOM layout by adding and removing DOM elements. *ngFor, *ngIf
3. Attribute directives—change the appearance or behavior of an element, component, or another directive. ngStyle

```
import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
```
add in the exports array of the app.module

to use it in the component
```
<li appDropdown >
```

## Services

```
import { Injectable } from '@angular/core';

@Injectable()
export class myService {
  constructor(private router: Router) {}
}
```
include the service in the providers array in the app.module

to use it in the component add to the following to app.ts file

```
import { myService } from 'myService.service';
@Component({
  selector: 'my-app',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class serviceComponent implements OnInit {
  constructor(private mService: myService) {}
```



Core Concepts

__Animations__: Animate component behavior without deep knowledge of animation techniques or CSS with Angular's
animation library.

**Change detection** : The change detection documentation will cover how Angular decides that a component property
value has changed, when to update the screen, and how it uses zones to intercept asynchronous activity and run its change detection strategies.

**Events** : The events documentation will cover how to use components and services to raise events with mechanisms
for publishing and subscribing to events.

**Forms** : Support complex data entry scenarios with HTML-based validation and dirty checking.

**HTTP** : Communicate with a server to get data, save data, and invoke server-side actions with an HTTP client.

**Lifecycle hooks** : Tap into key moments in the lifetime of a component, from its creation to its destruction, by
implementing the lifecycle hook interfaces.

**Pipes** : Use pipes in your templates to improve the user experience by transforming values for display. Consider
this currency pipe expression:

price | currency:'USD':true

**Router** : Navigate from page to page within the client application and never leave the browser.

**Testing** : Run unit tests on your application parts as they interact with the Angular framework using the Angular
Testing Platform.

**Angular LifeCycle Hooks**

- constructor
- ngOnChanges
- ngOnInit
- ngDoCheck
-- ngAfterContentInit
-- ngAfterContentChecked
-- ngAfterViewInit
-- ngAfterViewChecked
- ngOnDestroy


Q. Difference between Constructor and ngOnInit

constructor method takes the values for the dependency injection and
ngOnInit is a lifecycle hook that is fired after ngOnChanges

inside ngOnInit() we can use


##Node JS


Q. ### Key Concepts: Asynchronous , Non-Blocking, Event Based, Single Threaded

Q. How to add JSON object and read it from a file in node

```
const fs = require ('fs');
let originalNote = {
   title:'Some title',
   body:'Some Body'
};

let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);
let noteString  = fs.readFileSync('notes.json');
const jsonNote = JSON.parse(noteString);

console.log(jsonNote);

```
Q. debugging node

```
node debugging /filename
```
## REPL mode
```
repl (Read Evaluate print loop)
```

## Problem with arrow functions

Consider this code
```
var user = {

    name :'Ali',
    logName:()=>{
        console.log(arguments);
        console.log('My name is: ',this.name);  //this will return undefined as "this" here will refer to as the
        global object thats the issue with arrow function
    },
    logName2 () {
        console.log(arguments);
        console.log('My name is: ',this.name); //this will work perfectly fine

    }
};

user.logName2(1,2,3);
```