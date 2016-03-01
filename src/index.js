import React, { Component, PropTypes } from 'react';

export default class Conditional extends Component {
  static propTypes = {
    /**
     * Warn if children is missing or not a single element
     * @type {Element}
     */
    children: PropTypes.element.isRequired,

    /**
     * The condition in which to render the child component
     * @type {Boolean|Function}
     */
    if: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired
  }

  render() {
    let content = null;

    if (typeof this.props.if === 'function') {
      if (this.props.if()) {
        content = this.props.children;
      }

    } else if (this.props.if) {
      content = this.props.children;
    }

    return content;
  }
}
