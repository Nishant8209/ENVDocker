
import './App.css'
const app = import.meta.env.VITE_APP;

const AuthUrl= import.meta.env.VITE_AUTH_URL;
function App() {
 
  return (
    <>
      <div>{app}</div>
      {AuthUrl}
      
    </>
  )
}

export default App
