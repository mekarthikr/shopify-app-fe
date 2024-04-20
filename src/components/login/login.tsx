import {
  Button,
  Dimmer,
  Grid,
  Header,
  Image,
  Loader,
  Segment
} from 'semantic-ui-react'
import { useOktaAuth } from '@okta/okta-react'
import { toRelativeUrl } from '@okta/okta-auth-js'
import { Link, useNavigate } from 'react-router-dom'

import { useEffect } from 'react'
import Logo from '../../assets/image/logo/logo.png'

export const Signup: React.FC = () => {
  const { oktaAuth, authState } = useOktaAuth()
  const naviage = useNavigate()

  useEffect(() => {
    if (authState !== null && authState.isAuthenticated === true) {
      naviage('/home')
    }
  }, [authState, authState?.isAuthenticated])

  const handleLogin = (): void => {
    if (authState?.isAuthenticated === false) {
      const originalUri = toRelativeUrl(
        window.location.href,
        window.location.origin
      )
      oktaAuth.setOriginalUri(originalUri)
      void oktaAuth.signInWithRedirect()
    }
  }

  if (authState !== null && authState.isAuthenticated === true) {
    return (
      <>
        <Dimmer active inverted>
          <Loader size='large'>Logged in Successfully, Redirecting....</Loader>
        </Dimmer>
      </>
    )
  }
  if (authState !== null && authState.isAuthenticated === false) {
    return (
      <Grid textAlign='center' style={{ height: '85vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 400 }}>
          <Segment color='teal'>
            <Header
              as='h2'
              color='teal'
              textAlign='center'
              style={{
                fontFamily: '"Roboto", sans-serif'
              }}>
              <Image src={Logo as unknown} /> Log-in to your account
            </Header>
            <Button color='teal' fluid size='large' onClick={handleLogin}>
              Login
            </Button>
            <Link to={'/register'}>
              <Button fluid size='large' style={{ marginTop: '0.5rem' }}>
                New to us? Sign Up
              </Button>
            </Link>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
  return <></>
}
