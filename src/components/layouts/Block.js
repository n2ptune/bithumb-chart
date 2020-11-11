import styled from 'styled-components'

const StyleBlock = styled.div`
  align-self: center;
  color: var(--white);
  border-right: 1px solid var(--color-600);
  border-bottom: 1px solid var(--color-600);
  flex-basis: ${(props) => props.width};
  height: 100%;
  padding: 0.5rem 1rem;
`

const Block = (props) => {
  return <StyleBlock width={props.width}>{props.children}</StyleBlock>
}

export default Block
