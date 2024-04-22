import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Container, Image, Input, Menu } from 'semantic-ui-react'
import { useOktaAuth } from '@okta/okta-react'
import Logo from '../../../assets/image/logo/logo.png'

export const Header: React.FC = () => {
  const { oktaAuth, authState } = useOktaAuth()
  const navigate = useNavigate()

  const handleLogout = (): void => {
    void oktaAuth.signOut().then(() => {
      window.localStorage.clear()
      navigate('/home')
    })
  }
  return (
    <>
      <Menu inverted color='teal' style={{ margin: 0 }}>
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
              {authState === null || authState.isAuthenticated === false
                ? (
                <Link to={'/login'}>
                  <Button primary>Login / Signup</Button>
                </Link>
                  )
                : (
                <Button onClick={handleLogout} primary>
                  Signout
                </Button>
                  )}
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </>
  )
}
