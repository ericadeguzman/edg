import { Outlet } from "react-router-dom";
import Nav from "../Nav";
import Footer from '../Footer';

//styles
import '../css/App.css';


function RootLayout() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

        }}
      >
        <Nav />
        <div style={{ margin: '20px 60px', }}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default RootLayout;
