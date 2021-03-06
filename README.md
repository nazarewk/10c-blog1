# Introduction

![*Yeah, well, that's just like your opinon, man.*](http://www.teslamotorsclub.com/attachment.php?attachmentid=47346&d=1397707694)

I love expressing my opinion about everything and then having a healthy
discussion about it. This article will be no different.

Right now I simply don't have enough knowledge about React and forgot too much
about Dojo to make it objective analysis. This part will come later - after I
have tested it in a side project.

## What is the purpose of this article?

At some point I learned that [React][react] is just the View part of MVC and
should not obstruct with the Models & Controllers. I toyed with the idea of
using it with/instead of Dijit (Dojo's View layer) to make Dojo more
accessible to the general public.

Well... the day finally came to put the idea into action.

I have no experience whatsoever with React or modern (2015+) frontend
development ideas. Things got out of hand very fast so today I will stick to
explaining pros & cons of Dojo as I know it, why would I even want to do such
thing as mixing it with React and finally share my proof of concept.

I am planning to follow up with my own implementation of [Today I Learned][TIL]
idea and share my experiences in future articles.
You can check the application’s progress [here][tilapp].

## Who am I?

Currently I am a full stack developer at 10Clouds slowly changing into strictly
Python developer since nobody wants to use my beloved Dojo. Hopefully this
*series* of articles and release of Dojo 2 will change the situation.

I had a pleasure (or misery) of learning Dojo as my first JavaScript library.
I used it in a side project for almost a year and I definitely liked what i
found. However it was not a land flowing with milk and honey - it has very
steep learning curve. It is simply not possible to make a quick start guide
for it. It took me 2 weeks to even begin writing my Single Page Application.

In retrospective I think the vast knowledge of ES5 standard I obtained using
Dojo was well worth the effort.


# What exactly is [Dojo Toolkit][dojo]?

You may or may not have heard about it before. It is one of the
[oldest][dojo-history] JavaScript libraries out there and a pioneer of
the JavaScript itself as we know it today. It might be getting old and
is notoriously hard to get started with, but I still think it is one of the
best written and the most complete JavaScript libraries there are.

## Library, not a framework

I can't stress it enough, **Toolkit** is the keyword here. You can't really
compare it to `AngularJS` or `Backbone.js` as they are whole frameworks. If you
really want to compare it to something look at `Underscore.js` or `jQuery`.

Putting it another way comparing Dojo to Angular is like comparing the well
equipped car workshop to the full blown car factory. The former lets you do
anything you could imagine while the latter lets you do stuff only in the way
it was designed to, but *a lot* faster.

### It lets you do whatever you want, however you want...

Dojo makes an art of not being opinionated about anything as opposed to
Angular which is as opinionated about everything as they get. Start with
Angular, you can hardly add anything else.

To some (including me) it is Dojo's greatest feature...

### ...but for the most it is Dojo's downfall

Dojo has all the bolts and screws you would need in frontend development and
still nobody tells you how they fit together. Figuring it out by yourself is
the hardest and most disgusting part of Dojo.

Actually making a framework on top of Dojo requires so little effort
that people do it all the time without even realising it. What is missing
is definitive guide on how it should be used in a real world project or a good
software architect supervising it.

## Dojo 2

In recent years Dojo started falling behind the frantically developing
JavaScript world pending a full rewrite in form of [Dojo 2][dojo2]. I had a
pleasure to use some of the new modules ([`dstore`][dstore] and
[`dgrid`][dgrid]) in their infancy and I sincerely hope that the rewrite will
give Dojo an entirely new life.

## Dojo's structure

Dojo is split into 3 official modules:
- `dojo` - core of the library, you can build pretty much anything with it,
- `dijit` - most of the User Interface related code lives here,
- `dojox` - community contributions not deemed stable enough to be pulled into
    `dijit` or `dojo`, still it is very useful,

I also know of 3 *future* modules which will be incorporated into Dojo 2
release:
- [`dstore`][dstore] - replaces `dojo/store`,
    the Data Storage implementation of Dojo,
- [`dmodel`][dmodel] - specifically Data Modelling tool extracted from
    `dstore`,
- [`dgrid`][dgrid] - Dojo's grid implementation, call it whatever you want:
    I absolutely love it for displaying tabular data/extending it with whatever
    feature I might dream of,

## Random games comparisons

Using Dojo and Angular feels like playing:
- [Defense of the Ancients][dota] and [League of Legends][lol]/[Heroes of the Storm][hots],
- Counter Strike and Quake/Team Fortress,
- Starcraft and Warcraft,

The latter give significantly more immediate fun, but the former give you the
feeling of hard earned achievement and confidence that once you got the hang
of it it will *just work*.

DotA taught me enough about the genre (well, there wasn't any genre yet when i
played it the most) to immediately jump into mid-to-high level LoL/HotS games
just as Dojo taught me enough about JavaScript internals to easily grasp
Angular concepts.


# Why React?

Basically Dijit lacks easy to use templating system while it is React's JSX's
greatest feature. Simple as that.

Some people love Dijit, I am not one of them. While stock implementation is
a lot closer to Angular in terms of opinionation and ease of use, the Dijit's
core [`_WidgetBase`][widgetbase] is way more complicated to customize than it
should be. It's kind of like Java: well defined and structured, but requires
a lot of boilerplate code and initial effort.

# Proof of concept

Great, you are still here. So let's get to the proof of concept example.
[You can see the fully working comparison of React vs Dijit here][example].

## What are we doing?

I tried something more ambitious, but my lack of knowledge of React told me

![You shall not pass!](http://i.stack.imgur.com/2BvbQ.jpg)

So here we are: displaying list of messages and getting the personalized
`alert()` upon clicking them.

## Development setup
- PyCharm IDE,
- [Jetbrains's Babel File Watcher][jetbrains-babel] to transpile `JSX` + `ES6`
    to `ES5`, it is by far the simplest to set up (as compared to those crazy
    grunt/gulp/webpack/browserify wombo-combo Starter Kits floating around
    the Internet nowadays),
- `gulp-serve` as a simple HTTP server hosting code,

## Issues and insights worth mentioning
- [`AMD`][modules] is subset of Dojo's asynchronous modules implementation,
    Dojo had them long before it became standard and has extra loaders that
    didn't make it into the final standard. It is kind of like a `square`
    is a `rectangle`, but not the other way around,
- Dojo's inheritance model is incompatible with JavaScript strict mode, but
    otherwise should work fine with ES2015 transpilers,
- Personally I did not figure out how to circumvent automatic inclusion of
    `'use strict';` in Babel for just the Dojo files, so I stick to the ES5,

## [`index.html`](http://nazarewk.github.io/10c-blog1/demo/index.html)

Dumbed down version of `index.html`:

```html
<html>
<head>
    <!-- head boilerplate code, including pure.css and some basic styling -->
</head>
<body>
<!-- We'll use Pure's 50-50 vertical grid -->
<div class="pure-g">
    <div class="pure-u-1-2" id="react">
        <!-- We'll inject react code here -->
    </div>
    <div class="pure-u-1-2" id="dijit">
        <!-- We'll inject dijit widget here -->
    </div>
</div>
<script>
    /*
        We need to kickstart the dojo with specific configuration,
        you can find more info here:
        https://dojotoolkit.org/documentation/tutorials/1.10/hello_dojo/index.html
        https://dojotoolkit.org/documentation/tutorials/1.10/dojo_config/index.html
     */
    var dojoConfig = {
        async: true,
        baseUrl: '',
        packages: [{
            name: 'dojo',
            location: '//ajax.googleapis.com/ajax/libs/dojo/1.10.4/dojo'
            // point `dojo` package to google CDN
        }, {
            name: 'dijit',
            location: '//ajax.googleapis.com/ajax/libs/dojo/1.10.4/dijit'
            // point `dijit` package to google CDN
        }, {
            name: 'app',
            location: 'app'
        }],
        /*
        Kickstart the app with `app/main` module right after dojo loads using
        `deps`
        */
        deps: [
            'app/main'
        ]
    };
</script>
<!--
React and ReactDOM variables are required for transpiled JSX to work
we can either include react globally or require it in every single AMD module
Obviously the former is easier to use
-->
<script src="//fb.me/react-0.14.7.js"></script>
<script src="//fb.me/react-dom-0.14.7.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/dojo/1.10.4/dojo/dojo.js" defer></script>
</body>
</html>
```

## The entry point ([`main.jsx`](http://nazarewk.github.io/10c-blog1/demo/app/main.jsx))

```javascript
define([
  'dojo/dom',
  './ReactEntryList',
  './dijit/EntryList'
], (dom, ReactEntryList, dijitEntryList) => {
  // Generate 5 entries
  let entries = [1, 2, 3, 4, 5].map((i) => ({
    title: `Title ${i}`,
    onClick: () => alert(`Message ${i}`)
  }));

  // Render them with React
  ReactDOM.render(
    <ReactEntryList entries={entries}/>,
    dom.byId('react')
  );

  // Render them as custom Dijit widget
  // basically the first argument to _WidgetBase constructor gets mixed into
  // the widget object inside _WidgetBase.postMixInProperties()
  new dijitEntryList({
    item: entries
  }).placeAt(dom.byId('dijit'));
});
```

## Custom Dijit widget code:

Yeah, creating custom Dijit widget **is** cumbersome.

### [`EntryList.js`](http://nazarewk.github.io/10c-blog1/demo/app/dijit/EntryList.js)

```javascript
define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dojo/dom-construct',
  'dojo/on',
  './Entry'
], function (declare, _WidgetBase, domConstruct, on, Entry) {
  return declare([_WidgetBase], {
    constructor: function constructor() {
      this.inherited(arguments);
      // Instantiate the variable inside constructor, because it is
      // object-specific, not class-specific
      this.entries = [];
    },

    buildRendering: function buildRendering() {
      // This is where the DOM tree is built in dijit

      // this.domNode is a <div> created higher in inheritance hierarchy
      this.inherited(arguments);

      // Build the preface the proper dojo's domConstruct way
      domConstruct.create('h1', {
        innerHTML: 'Dojo + Dijit version'
      }, this.domNode);
      domConstruct.create('p', {
        innerHTML: 'Click to display alert'
      }, this.domNode);

      this.listNode = domConstruct.create('ul', {}, this.domNode);

      // Build the files list from HTML text
      var files = '\
        <h2>Files list:</h2>\
        <ul> \
          <li><a href="app/main.jsx">app/main.jsx</a></li> \
          <li><a href="app/dijit/Entry.js">app/dijit/Entry.js</a></li> \
          <li><a href="app/dijit/EntryList.js">app/dijit/EntryList.js</a></li> \
        </ul>';
      domConstruct.place(
        domConstruct.toDom(files), // contruct DOM from text
        this.domNode
      );
    },

    postCreate: function postCreate() {
      // We have to manually create child widgets, then destroy them later

      // It could be located at buildRendering(), but I prefer to build widgets
      // in postCreate()
      this.inherited(arguments);
      var that = this;
      that.entries = that.item.map(function (entry) {
        return new Entry({item: entry}).placeAt(that.listNode);
      });
    },

    destroy: function destroy() {
      // We have to manually destroy child widgets to avoid memory leaks
      this.inherited(arguments);
      this.entries.forEach(function (entry) {
        entry.destroy();
      })
    }
  });
});
```

### [`Entry.js`](http://nazarewk.github.io/10c-blog1/demo/app/dijit/Entry.js)

```javascript
define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dojo/dom-construct',
  'dojo/on'
], function (declare, _WidgetBase, domConstruct, on) {
  return declare([_WidgetBase], {

    buildRendering: function buildRendering() {
      // Normally this.domNode is a div created in super() call
      // this.inherited(arguments) in dojo's inheritance model
      // we'll skip it and create <li> instead
      this.domNode = domConstruct.create('li', {
        innerHTML: this.item.title
      });
    },

    postCreate: function postCreate() {
      this.inherited(arguments);
      this.signal = on(this.domNode, 'click', this.item.onClick);
    },

    destroy: function destroy() {
      this.signal.remove();
      this.inherited(arguments);
    }
  });
});
```

## [`ReactEntry.jsx`](http://nazarewk.github.io/10c-blog1/demo/app/ReactEntryList.jsx)
Yeah exactly, this's all there is:

```javascript
define([], () => {
  const Entry = ({entry}) => (
    <li onClick={entry.onClick}>
      {entry.title}
    </li>
  );

  return (props) => (
    <div>
      <h1>Dojo + React version</h1>
      <p>Click to display alert</p>
      <ul>
        {props.entries.map((entry, i) => (
          <Entry entry={entry} key={i}/>
        ))}
      </ul>
      <h2>Files list:</h2>
      <ul>
        <li><a href="app/main.jsx">app/main.jsx</a></li>
        <li><a href="app/ReactEntryList.jsx">app/ReactEntryList.jsx</a></li>
      </ul>
    </div>
  );
});
```

# Conclusions

I am not sure how it will work out in my [Today I Learned app][tilapp], but
for now using React instead of custom Dijit looks very promising in solving
the problem of Dojo being too complicated for the average mortal.

Hopefully I will keep you posted in the follow-ups.


[TIL]: https://github.com/jbranchaud/til
[tilapp]: https://github.com/nazarewk/tilapp

[dojo-jsx]: https://github.com/nazarewk/dojo-jsx
[dojo]: https://dojotoolkit.org/
[dojo-history]: https://en.wikipedia.org/wiki/Dojo_Toolkit#Release_history
[dojo2]: https://dojotoolkit.org/community/roadmap/
[dgrid]: http://dgrid.io/
[dstore]: http://dstorejs.io/
[dmodel]: https://github.com/SitePen/dmodel
[widgetbase]: https://dojotoolkit.org/documentation/tutorials/1.10/understanding_widgetbase/index.html

[example]: http://nazarewk.github.io/10c-blog1/demo/

[react]: https://facebook.github.io/react/
[jetbrains-babel]: http://blog.jetbrains.com/webstorm/2015/05/ecmascript-6-in-webstorm-transpiling/
[modules]: https://medium.com/@brianleroux/es6-modules-amd-and-commonjs-c1acefbe6fc0#.ic17udaoc

[dota]: http://blog.dota2.com/?l=english
[lol]: http://leagueoflegends.com
[hots]: http://eu.battle.net/heroes/en/