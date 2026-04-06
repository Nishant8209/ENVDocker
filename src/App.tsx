
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
      <div>
        This is the dev branch code
      </div>
    </>
  )
}

export default App
