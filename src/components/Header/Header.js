import React from 'react';
import { Menu, Input } from 'semantic-ui-react';

export default function Header() {
  return(
    <>
      <Menu stackable className='header-style'>
        <Menu.Item>
          Home
        </Menu.Item>
        <Menu.Item>
          Seasons
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <Input 
            icon="search"
            iconPosition="left"
            placeholder="Try to search something here..."
            />
        </Menu.Item>
      </Menu.Menu>
      
      </Menu>
    </>
  );
}