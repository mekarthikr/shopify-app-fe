import { Container, Menu } from 'semantic-ui-react'

export const Footer: React.FC = () => {
  return (
    <>
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
