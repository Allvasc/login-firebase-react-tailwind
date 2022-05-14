import SignUp from "./components/SignUp"
import { Route, Routes } from 'react-router-dom'
import SignIn from './components/SignIn'
import Account from './components/Account'
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <h1 className='text-3xl text-center font-bold'>
        Firebase Auth & context
      </h1>

      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>}/>
        </Routes>
      </AuthContextProvider>

    </div>
  );
}

export default App;
