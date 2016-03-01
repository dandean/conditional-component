# `<Conditional>` Component

Conditional Component is a higher order component to help with conditionally
rendering components.

## Example

```js
import React, { Component, PropTypes } from 'react';
import Conditional from 'conditional-component';

class ContactsList extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    contacts: PropTypes.array
  };

  hasConfirmedContacts() {
    return this.props.contacts.filter(contact => contact.isConfirmed).length > 0
  }

  render() {
    <div>
      {/* Use a boolean property to conditionally render: */}
      <Conditional if={this.props.isLoading}>
        <div className="loading-message">
          Contacts loading, please wait...
        </div>
      </Conditional>

      {/* Use a function to conditionally render: */}
      <Conditional if={this.hasConfirmedContacts.bind(this)}>
        <ul className="contacts-list">
          {this.props.contacts.map((contact) => {
            return <li>{contact.name}</li>
          })}
        </ul>
      </Conditional>
    </div>
  }
}
```

## Install

`npm install --save conditional-component`
