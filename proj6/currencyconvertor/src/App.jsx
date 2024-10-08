import { useState } from 'react'
import cameron from './assets/CameronSmoking.jpg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/inputBox.jsx'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertAmount)
  }

  const convert = () => {
    const ans = amount * currencyInfo[to]
    setConvertedAmount(ans.toFixed(2))
  }

  return (
    <>
      <div className='w-full h-screen flex flex-wrap justify-center items-center '
        style={{ backgroundImage: `url(${cameron})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor:'#d99b59' }}>
        <div className='w-full'>
          <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
            <form onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}>
              <div className='w-full mb-1'>
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectedCurrency={from}
                />
              </div>
              <div className='relative w-full h-0.5'>
                <button
                type='button' 
                onClick={swap} 
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-orange-300 text-black px-2 py-0.5'>
                  Swap
                </button>
              </div>
              <div className='w-full mb-1'>
                <InputBox
                  label="To"
                  currencyOptions={options}
                  amount={convertAmount}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectedCurrency={to}
                  amountDisabled
                />
              </div>
              <button type="submit" className="w-full bg-orange-300 text-black px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App