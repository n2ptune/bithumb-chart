// 요청 당시 빗썸 거래소 가상자산 현재가 정보를 제공합니다.
// https://apidocs.bithumb.com/docs/ticker
// GET | https://api.bithumb.com/public/ticker/{order_currency}_{payment_currency}
// {order_currency} = 주문 통화(코인), ALL(전체), 기본값 : BTC
// {payment_currency} = 결제 통화(마켓), 기본값 : KRW
export default function getTicker(order = 'BTC', payment = 'KRW') {
  // mockup
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      const _mockup_data = {
        status: '0000',
        data: {
          opening_price: '16999000',
          closing_price: '17000000',
          min_price: '16674000',
          max_price: '17300000',
          units_traded: '2114.05799874',
          acc_trade_value: '35994623252.2128',
          prev_closing_price: '16850000',
          units_traded_24H: '4112.07130364',
          acc_trade_value_24H: '70287241632.1964',
          fluctate_24H: '-103000',
          fluctate_rate_24H: '-0.60',
          date: '1604992981657'
        }
      }

      resolve(_mockup_data)
    }, 500)
  })
}
