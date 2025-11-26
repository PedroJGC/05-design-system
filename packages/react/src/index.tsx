import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$md',
  padding: '$4',
})

export function App() {
  return (
    <div>
      <Button>hello world</Button>
    </div>
  )
}
