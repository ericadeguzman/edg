import { Outlet } from "react-router-dom";
import Nav from "../Nav";

//styles
import "../css/app.css";

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
      </div>
    </>
  );
}

export default RootLayout;
