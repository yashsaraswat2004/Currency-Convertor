import { InputBox } from './components'
import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyinfo'
import Footer from './components/Footer'

function App() {
 const [amount, setAmount] = useState(0)
 const [from, setFrom] = useState("usd")
 const [to, setTo] = useState("inr")
 const [convertedAmount, setConvertedAmount] = useState(0)
 const CurrencyInfo = useCurrencyInfo(from)

 const Options = Object.keys(CurrencyInfo)

 const Swap = () => {
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
 }

 const convert = () => {setConvertedAmount(amount*CurrencyInfo[to])}
 return (
  <div
      className="w-full h-screen flex flex-wrap  justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1536058314415-35dff709a44a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3VycnJlbmN5JTIwY29udmVydG9yfGVufDB8fDB8fHww)`,
      }}
  >
    
    <h1 className='t text-yellow-600 text-5xl bg bg-black px-8 p-5 rounded-lg font-serif font-extrabold mb-20 mt-10'>Currency Convertor</h1>
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                     convert()
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox className='bg-gray-400'
                          label="From"
                          amount={amount}
                          currencyOptions={Options}
                          onCurrencyChange={(currency) => setFrom(currency)}
                          onAmountChange={(amount) => {setAmount(amount)}}
                          selectCurrency={from}
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-black text-white px-2 py-0.5"
                          onClick={Swap}
                      >
                          <i className="ri-exchange-line w-3 rounded-full"></i>
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                      className='bg-red-400'
                          label="To"
                          amount={convertedAmount}
                          currencyOptions={Options}
                          onCurrencyChange={(currency) => setTo(currency)}
                          selectCurrency={to}
                          amountDisable
                      />
                  </div>
                  <button type="submit" className="w-full bg-black text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
      <Footer/>
  </div>
);
}

export default App