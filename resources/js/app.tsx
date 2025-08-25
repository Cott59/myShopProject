import Homepage from "./pages/homepage";
import "./../css/app.css"
import store from './../../storage/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
        <Homepage />
    </Provider>
    
  )
}

export default App