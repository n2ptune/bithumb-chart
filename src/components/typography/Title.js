import styled from 'styled-components'

const StyledTitle = styled.h1`
  color: var(--white);
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`

const Title = (props) => <StyledTitle>{props.text}</StyledTitle>

export default Title
