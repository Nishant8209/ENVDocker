
import './App.css'
const app = import.meta.env.VITE_APP;

const AuthUrl= import.meta.env.VITE_AUTH_URL;
function App() {
  console.log('app',app);
  console.log('AuthUrl',AuthUrl)
  return (
    <>
      <div>{app}</div>
      {AuthUrl}
      This is the main branch code
    </>
  )
}

export default App
