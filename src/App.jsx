import './App.css'
import GraficComputer from './components/grafic-computer'

function App() {

  return (
    <>
    <div className='h-4/5 bg-quaternary flex flex-row justify-around items-center bg-home bg-center bg-cover bg-no-repeat '>
      <div className='text-black h-[100%] w-[50%]  flex justify-around items-center '>
        <h1>
          Welcome
        </h1>

      </div>
      <div className='h-[100%] w-[50%] flex justify-around items-center'>
        <GraficComputer/>
      </div>
      
    </div>
      
    </>
  )
}

export default App
