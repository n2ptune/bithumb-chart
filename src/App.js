import Row from './components/layouts/Row'
import Ticker from './components/chart/Ticker'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
`

function App() {
  return (
    <Wrapper className="app">
      <Row height="20%">
        <Ticker />
      </Row>
      <Row height="60%">
        <div>asdfg</div>
      </Row>
      <Row height="20%"></Row>
    </Wrapper>
  )
}

export default App
