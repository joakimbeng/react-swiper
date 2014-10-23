react-swipeable
================

> Detects and triggers touch events for swiping such as onSwipeLeft, onSwipeDown, etc. with ReactJS

## Installation

```bash
npm install --save react react-swipeable
```

## Usage

### Example with defaults

Creating an example component:

```javascript
var React = require('react');
var Swipeable = require('react-swipeable');

React.initializeTouchEvents(true);

var React = require('react');

var Example = React.createClass({

  render: function() {
    return (
      <Swipeable className="swipe-container" onSwipeLeft={this.handleLeftSwipe}>
        Hello world!
      </Swipeable>
    );
  },

  handleLeftSwipe: function (e) {
    console.log(e);
  }

});

module.exports = Example;
```

The `Swipeable` component will render a `<div/>` element by default, this can be changed either by providing the `tagName` property or the `component` property.

### Example with custom element

Creating a swipeable link (i.e. an `<a/>` element):

```javascript
var React = require('react');
var Swipeable = require('react-swipeable');

React.initializeTouchEvents(true);

var React = require('react');

var Example = React.createClass({

  render: function() {
    return (
      <Swipeable tagName="a" href="http://example.com" onSwipe={this.handleSwipe}>
        Swipe or click me...
      </Swipeable>
    );
  },

  handleSwipe: function (e) {
    console.log(e);
  }

});

module.exports = Example;
```

### Example with custom component

Creating a swipeable from another component:

```javascript
var React = require('react');
var Swipeable = require('react-swipeable');
var MyComponent = require('./my-component');

React.initializeTouchEvents(true);

var React = require('react');

var Example = React.createClass({

  render: function() {
    return (
      <Swipeable component={MyComponent} propForMyComponent="hello world!" onSwipe={this.handleSwipe} />
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
