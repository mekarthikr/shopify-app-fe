import { Link } from 'react-router-dom'
import { Button, Container, Image, Input, Menu } from 'semantic-ui-react'

import Logo from '../../assets/image/logo/logo.png'

export const Home: React.FC = () => {
  return (
    <>
      <Menu inverted fixed='top' color='teal'>
        <Container>
          <Menu.Item as='a' header>
            <Image size='mini' src={Logo} style={{ marginRight: '1.5em' }} />
            Sopify
          </Menu.Item>
          <Menu.Item as='a'>Home</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item>
            <Link to={'/register'}>
              <Button primary>Login / Signup</Button>
              </Link>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
      <div className='banner'>
        <Container>
          <div className='banner-content'>
            <h1>Welcome to Shopify - Your One-Stop Shop</h1>
            <Button color='teal' size='huge'>
              Explore
            </Button>
            <Button color='teal' size='huge'>
              Login
            </Button>
          </div>
        </Container>
      </div>

      <Container className='main-content'>
        {/* Your main content here */}
        <h2>Featured Products</h2>
        {/* Add your products or other content */}
      </Container>

      <Menu inverted fixed='bottom' color='teal'>
        <Container>
          <Menu.Item as='a' header>
            &copy; 2024 Shopify. All rights reserved.
          </Menu.Item>
        </Container>
      </Menu>
    </>
  )
}
