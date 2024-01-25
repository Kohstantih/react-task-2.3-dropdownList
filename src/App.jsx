import './App.css'
import { Dropdown } from './components/Dropdown'

const menuList = ['Profile Information', 'Change Password', 'Become PRO', 'Help', 'Log Out'];

function App() {
  return (
    <>
      <Dropdown filters={menuList}/>
    </>
  )
}

export default App
