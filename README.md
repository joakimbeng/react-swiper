react-swiper
================

> Detects and triggers touch events for swiping such as onSwipeLeft, onSwipeDown, etc. with ReactJS

## Installation

```bash
npm install --save react react-swiper
```

## Usage

### Example with defaults

Creating an example component:

```javascript
var React = require('react');
var Swiper = require('react-swiper');

React.initializeTouchEvents(true);

var React = require('react');

var Example = React.createClass({

  render: function() {
    return (
      <Swiper className="swipe-container" onSwipeLeft={this.handleLeftSwipe}>
        Hello world!
      </Swiper>
    );
  },

  handleLeftSwipe: function (e) {
    console.log(e);
  }

});

module.exports = Example;
```

The `Swiper` component will render a `<div/>` element by default, this can be changed either by providing the `tagName` property or the `component` property.

### Example with custom element

Creating a Swiper link (i.e. a swipeable `<a/>` element):

```javascript
var React = require('react');
var Swiper = require('react-swiper');

React.initializeTouchEvents(true);

var React = require('react');

var Example = React.createClass({

  render: function() {
    return (
      <Swiper tagName="a" href="http://example.com" onSwipe={this.handleSwipe}>
        Swipe or click me...
      </Swiper>
    );
  },

  handleSwipe: function (e) {
    console.log(e);
  }

});

module.exports = Example;
```

### Example with custom component

Creating a Swiper from another component:

```javascript
var React = require('react');
var Swiper = require('react-swiper');
var MyComponent = require('./my-component');

React.initializeTouchEvents(true);

var React = require('react');

var Example = React.createClass({

  render: function() {
    return (
      <Swiper component={MyComponent} propForMyComponent="hello world!" onSwipe={this.handleSwipe} />
    );
  },

  handleSwipe: function (e) {
    console.log(e);
  }

});

module.exports = Example;
```

## License

MIT
