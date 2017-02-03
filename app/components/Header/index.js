import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {FormattedMessage} from 'react-intl'
import LanguageSwitch from '../LanguageSwitch'
import messages from './messages'

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <FormattedMessage {...messages.header}/>
          <Menu.Item name='authors' active={activeItem === 'authors'} onClick={this.handleItemClick}>Writings</Menu.Item>
          <Menu.Item name='writings' active={activeItem === 'writings'} onClick={this.handleItemClick} />
          <Menu.Item name='events' active={activeItem === 'events'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            {/*<Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />*/}
                <LanguageSwitch/>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
