import { Outlet } from "react-router-dom";
import Header from '../../components/Header/Header.jsx'

function Default() {
  return (
    <div className="global-container">
      <Header/>
      <main className="cntr-default-layout">
        <Outlet/>
      </main>
    </div>
  )
}
export default Default; 