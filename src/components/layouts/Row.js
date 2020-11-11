import styled from 'styled-components'

const RowElement = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
`

const Row = (props) => {
  return (
    <RowElement style={{ height: props.height }}>{props.children}</RowElement>
  )
}

export default Row
