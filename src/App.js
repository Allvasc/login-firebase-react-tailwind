import SignUp from "./components/SignUp"
import { Route, Routes } from 'react-router-dom'
import SignIn from './components/SignIn'
import Account from './components/Account'

function App() {
  return (
    <div className="">
      <h1 className='text-3xl text-center font-bold'>
        Firebase Auth & context
      </h1>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
