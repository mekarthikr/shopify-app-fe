import { Button, Container } from 'semantic-ui-react'

export const Home: React.FC = () => {
  return (
    <>

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

    </>
  )
}
