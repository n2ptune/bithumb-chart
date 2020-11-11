import styled from 'styled-components'

const StyledTitle = styled.h1`
  color: var(--white);
  font-size: 1.5rem;
  font-weight: bold;
`

const Title = (props) => <StyledTitle>{props.text}</StyledTitle>

export default Title
