import { Outlet } from "react-router-dom";
// import Header from '../../components/Header/Header.jsx'

function Default() {
  return (
    <>
      {/* <Header/> */}
      <main>
        <div className="container">
          <Outlet/>
        </div>
      </main>
    </>
  )
}
export default Default; 