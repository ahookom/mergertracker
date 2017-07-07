import React from 'react'
import {SideNav, SideNavItem, Button} from 'react-materialize'
import {Link} from 'react-router'

const SideBar = props => {

  return (
    <SideNav
      trigger={<Button>Menu</Button>}
      options={{ closeOnClick: false }}
      >
      <SideNavItem userView
        user={{
          background: 'img/coins.jpg',
          image: 'img/andrew.png',
          name: 'Andrew Hookom',
          email: 'hookom@gmail.com'
        }}
      />
      <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
      <Link to='/target/1'>Second Link</Link>
      <SideNavItem divider />
      <SideNavItem subheader>Subheader</SideNavItem>
      <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
    </SideNav>
  )
}

export default SideBar

