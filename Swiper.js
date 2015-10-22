/**
 * @jsx React.DOM
 */

var React = require('react'),
    objectAssign = require('object-assign');

var Swiper = React.createClass({displayName: 'Swiper',
  propTypes: {
    tagName: React.PropTypes.string,
    component: React.PropTypes.element,
    minSwipeLength: React.PropTypes.number,
    moveThreshold: React.PropTypes.number,
    onSwipe: React.PropTypes.func,
    onSwipeLeft: React.PropTypes.func,
    onSwipeUpLeft: React.PropTypes.func,
    onSwipeUp: React.PropTypes.func,
    onSwipeUpRight: React.PropTypes.func,
    onSwipeRight: React.PropTypes.func,
    onSwipeDownRight: React.PropTypes.func,
    onSwipeDown: React.PropTypes.func,
    onSwipeDownLeft: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      tagName: 'div',
      minSwipeLength: 75,
      moveThreshold: 10
    };
  },

  getInitialState: function () {
    return {
      direction: null,
      initialTouch: null,
      touch: null,
      swipeStart: null
    };
  },

  render: function() {
    var Component = this.props.component || this.props.tagName;
    return (
      Component(Object.assign({}, this.props, {onTouchStart: this.handleTouchStart, 
          onTouchEnd: this.handleTouchEnd, 
          onTouchCancel: this.handleTouchEnd, 
          onTouchMove: this.handleTouchMove}), 
        this.props.children
      )
    );
  },

  handleTouchStart: function (e) {
    if (e.touches.length !== 1) {
      return;
    }
    this._initiateSwipe(e.touches[0]);
  },

  handleTouchEnd: function (e) {
    if (!this.state.direction) {
      return;
    }
    if (this._getSwipeLength(this.state.initialTouch) > this.props.minSwipeLength) {
      var method = this._getEventMethodName();
      var evt = {
        type: this._getEventTypeName(),
        timeStampStart: this.state.swipeStart,
        timeStampEnd: new Date(),
        initialTouch: this.state.initialTouch,
        finalTouch: this.state.touch
      };
      this.props.onSwipe && this.props.onSwipe(evt);
      this.props[method] && this.props[method](evt);
      e.preventDefault();
    }
    this._resetSwipe();
  },

  handleTouchMove: function (e) {
    if (e.touches.length !== 1 || !this.state.direction) {
      return;
    }
    var touch = e.touches[0];
    var direction = this._getSwipeDirection(touch);
    if (this._isSwipeDirectionUnchanged(direction)) {
      this._updateSwipe(direction, touch);
      e.preventDefault();
      return;
    }
    this._resetSwipe();
  },

  _initiateSwipe: function (touch) {
    this.setState({direction: {x: null, y: null}, initialTouch: touch, touch: touch, swipeStart: new Date()});
  },

  _resetSwipe: function () {
    this.setState(this.getInitialState());
  },

  _updateSwipe: function (direction, touch) {
    this.setState({direction:direction, touch:touch});
  },

  _getSwipeLength: function (touch) {
    return this._getSwipeLengthX(touch) + this._getSwipeLengthY(touch);
  },

  _getSwipeLengthX: function (touch) {
    return Math.abs(touch.pageX - this.state.touch.pageX);
  },

  _getSwipeLengthY: function (touch) {
    return Math.abs(touch.pageY - this.state.touch.pageY);
  },

  _getSwipeDirection: function (touch) {
    var dir = objectAssign({x: null, y: null}, this.state.direction);
    if (this._getSwipeLengthY(touch) > this.props.moveThreshold) {
      dir.y = this._getSwipeDirectionY(touch);
    }
    if (this._getSwipeLengthX(touch) > this.props.moveThreshold) {
      dir.x = this._getSwipeDirectionX(touch);
    }
    return dir;
  },

  _getSwipeDirectionX: function (touch) {
    return touch.pageX < this.state.touch.pageX ? 'Left' : 'Right';
  },

  _getSwipeDirectionY: function (touch) {
    return touch.pageY < this.state.touch.pageY ? 'Up' : 'Down';
  },

  _getSwipeDirectionName: function () {
    return (this.state.direction.y || '') + (this.state.direction.x || '');
  },

  _isSwipeDirectionUnchanged: function (direction) {
    return (!this.state.direction.x || this.state.direction.x === direction.x) &&
           (!this.state.direction.y || this.state.direction.y === direction.y);
  },

  _getEventMethodName: function () {
    return 'onSwipe' + this._getSwipeDirectionName();
  },

  _getEventTypeName: function () {
    return 'swipe' + this._getSwipeDirectionName();
  }
});

module.exports = Swiper;
