# CSS Questions


## Question: What does float do?

Answer: float pushes an element to the sides of a page with text wrapped around it.

## Question: How can you clear sides of a floating element?

Answer: Clear is used to stop wrap of an element around a floating element.

## Question: Which one would you prefer among px, em % or pt and why?

Answer: it depends on what you are trying to do.

px gives fine grained control and maintains alignment because 1 px or multiple of 1 px is guaranteed to look sharp. px is not cascade, this means if parent font-size is 20px and child 16px. child would be 16px.

em maintains relative size. you can have responsive fonts. em is the width of the letter 'm' in the selected typeface. However, this concept is tricky. 1em is equal to the current font-size of the element or the browser default. if u sent font-size to 16px then 1em = 16px. The common practice is to set default body font-size to 62.5% (equal to 10px). em is cascade

% sets font-size relative to the font size of the body. Hence, you have to set font-size of the body to a reasonable size. this is easy to use and does cascade. for example, if parent font-size is 20px and child font-size is 50%. child would be 10px.

pt(points) are traditionally used in print. 1pt = 1/72 inch and it is fixed-size unit.


## Question: What are the differences between visibility hidden and display none?

Answer: display: none removes the element from the normal layout flow and allow other elements to fill in. visibility: hidden tag is rendered, it takes space in the normal flow but doesn't show it.

## Question: What are the differences between inline, block and inline-block?

Answer:

inline, elements do not break the flow. think of span it fits in the line. Important points about inline elements, margin/ padding will push other elements horizontally not vertically. Moreover, inline elements ignores height and width.

block, breaks the flow and dont sits inline. they are usually container like div, section, ul and also text p, h1, etc.

inline-block, will be similar to inline and will go with the flow of the page. Only differences is this this will take height and width.

## CSS AutoPrefixer

minifier for css

## Normalize.css

A modern, HTML5-ready alternative to CSS resets

## Node.js

alternate to php, ruby, in order to talk to servers, backend

## NPM

### Package Management

centralized store where developers share their code so we av
we avoid reinventing the wheel

instead of getting jquery, bootstrap from their individual websites we use
content management, and get the updated versions

### Node Packages ---> Automation, Build Tools, Server Tasks.

### Jquery, lodash, bootstrap

### package.json

is a grocery list when u do npm install it installs the project dependencies automatically

package files are not tracked by git only package.json

.gitIgnore file , we can include node modules

### Dependencies and devDepenedencies

You should use devDependency for parts of the app that you might need as a developer to build/test/compile/serve the app. Things like your test suite or your gulp/other task runners.

You should use dependency for anything that the client needs to run the compiled app. In your case, both Angular and Angular datepicker are dependencies.

One main difference is that if you run bower install -p (for production) you will only install into your bower_components directory and ignore devDependencies.

### gulp task runner

template strings `${name}`

call stack --> Node API ---> Callback Queue ---> Event Loop

set timeout functions wait in the callback queue

a function is that is passed as an argument to other function

The JSON.stringify() method converts a JavaScript value to a JSON string

The JSON.parse() method parses a JSON string, constructing the JavaScript value

pretty print

```
console.log(JSON.stringify(body,undefined,2));
```

# javascript debugging

```
var elm = document.getElementById('btn');
getEventListeners(elm)
```

to monitor events

```
unmonitorEvents(elm)
monitorEvents(elm,['click','mouseout'])
```

## to compile ts

```
tsc script.ts
```


## --save vs --save-dev

--save install it as the project depenedecny and will include along the project files when we ship the project

whereas the --save-dev make it install as the development dependency and it will include in the project file when we
ship the project

hoisting in typescript ?
arrow functions this variable ?

WCAG 2.0

  4 principles   POUR

  information should be percievable
  information should be operable (button that can only be clicked through mouse)
  information is understandable
  website should be robust (mobile, desktop)

  12 general guideline

  61 testable criteria

  3 levels of conformance  (AAA,AA)

  Disability Categories

  Visual (Blind, color blind)
  shouldnt have contrast between text and backgorund
  make it accessible through screen reader
  images should use alt tag


  Audio (hearing impaired)
  subtitles/captions for videos

  Motor (mouse, keyboard)
  make it accessible through keyboard

  cognitive
  biggest category
  learning, reading, adhd
  make information accessible to people with learning disabilitites

  separate html from css and javascript

  provide alternatives


ARIA tags

   role = banner //header
   role = form //form
   role = navigation nav

   should be only one element with role=nav

   <aside role = 'complementary'>

   <footer role = 'contentinfo'>

508 compliance

  make all electronic information accessible to people with disabilities
  this means make your content compatible with screen readers and magnifiers

rehabilitation act

  good document struture,
  alt text for visually presented docs

namespaces and modules



focus ring
visual focus indicator
tab order:
tab key   links, buttons, banners


# super constructor

invokes the constructor of the base class

# extends vs implements

extends means - it gets all from its parent
implements in this case is almost like implementing an interface. Child object can pretend that it is parent.. but it does not get any implementation

new -> It creates a new instance of Java object.

extends -> It is used to inherit the properties of a class

static


interface vs type

interface implements type agreement so that whatever class implements it reuqires the tpe

Unlike an interface declaration, which always introduces a named object type, a type alias declaration can introduce a name for any kind of type, including primitive, union, and intersection types.

An interface can have multiple merged declarations, but a type alias for an object type literal cannot

age?: 27, optional property on the object

implements to use interface

extends to implement inheritance

interfaces dont get compiled, they are just their to produce compilation errors