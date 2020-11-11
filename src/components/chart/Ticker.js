import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Block from '../layouts/Block'
import Title from '../typography/Title'
import getTicker from '../../api/bithumb/ticker'

const StyledTicker = styled.div``

const Ticker = () => {
  const [ticker, setTicker] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTicker = async () => {
      const _ticker = await getTicker()
      setTicker(_ticker)
      setLoading(false)
    }

    fetchTicker()
  }, [])

  return (
    <Block width="35%">
      <StyledTicker>
        {loading ? (
          <div>Loading!!!</div>
        ) : (
          <div>
            <Title text="빗썸 가상 자산 현재가" />
          </div>
        )}
      </StyledTicker>
    </Block>
  )
}

export default Ticker
