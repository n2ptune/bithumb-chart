import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Block from '../layouts/Block'
import Title from '../typography/Title'
import getTicker from '../../api/bithumb/ticker'
import formatNumberComma from '../../api/util/number-comma'

const StyledTicker = styled.div``

const StyledContentWrapper = styled.div`
  padding: 0.5rem;
`

const StyledContent = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
  margin-left: 0.5rem;
`

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
    <Block width="15%">
      <StyledTicker>
        {loading ? (
          <div className="loading">Loading!!!</div>
        ) : (
          <div className="content">
            <Title text="빗썸 가상 자산 현재가" />
            <StyledContentWrapper>
              <div>
                시가 :
                <StyledContent>
                  {formatNumberComma(
                    ticker.data.opening_price,
                    '원 (00시 기준)'
                  )}
                </StyledContent>
              </div>
              <div>
                종가 :
                <StyledContent>
                  {formatNumberComma(
                    ticker.data.closing_price,
                    '원 (00시 기준)'
                  )}
                </StyledContent>
              </div>
            </StyledContentWrapper>
          </div>
        )}
      </StyledTicker>
    </Block>
  )
}

export default Ticker
