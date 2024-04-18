import { useNavigate } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export const Home: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1>Home</h1>{' '}
      <Button
        content='Primary'
        onClick={() => {
          navigate('/protected')
        }}>
        {' '}
        Click to go to Protected{' '}
      </Button>
    </>
  )
}
