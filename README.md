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

## Properties

### `tagName`

**Type** `String`

**Default** `"div"`


Specifies what type of element the `Swiper` component should be rendered as. See `component` below as well.

### `component`

**Type** `ReactComponent`

**Default** `undefined`


Specifies what component `Swiper` should be rendered as. See `tagName` above as well. If both `tagName` and `component` are specified the later takes precedence.

### `onSwipe`

**Type** `Function(event)`

**Default** `undefined`


If provided it's called on all swipes.

Example `event`:

```javascript
{
  type: String, // The type of swipe, e.g. "swipeLeft", "swipeUp" or "swipeDownRight"
  timeStampStart: Date, // Timestamp for when the swipe was initiated
  timeStampEnd: Date, // Timestamp for when the swipe was finished,
  initialTouch: Touch, // A Touch object for the initial touch position - https://developer.mozilla.org/en-US/docs/Web/API/Touch
  finalTouch: Touch, // A Touch object for the final touch position
}
```

### `onSwipe<direction>`

**Direction** `Up`, `UpRight`, `Right`, `DownRight`, `Down`, `DownLeft`, `Left` and `UpLeft`

**Type** `Function(event)`

**Default** `undefined`


If provided it's called with a swipe event (see example in `onSwipe` above) for a swipe in the wanted direction.
E.g. `onSwipeUp` is called for swipes in the up direction.

## `minSwipeLength`

**Type** `Number`

**Default** `75`


The minimum swipe length that's required for a swipe event to be triggered.

## `moveThreshold`

**Type** `Number`

**Default** `10`


The minimum move length in one direction to be considered as the swipe direction, this also affects the required velocity in which the swipe must occur.


## License

MIT
