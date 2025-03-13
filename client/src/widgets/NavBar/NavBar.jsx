import React from "react";
import { useNavigate } from "react-router";

export default function NavBar({ logoutHandler, user }) {
  // console.log(user);
  const navigate = useNavigate();
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
          paddingTop: "5px",
          paddingBottom: "5px",
          backgroundColor: 'rgb(255, 201, 201)',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
        }}
        className="navbar"
      >
        <div style={{ display: "flex", alignItems: "center", paddingLeft: '20px' }}>
          <a className="navbar-brand">
            <img
              src="../../../public/flash-card.png"
              alt="Bootstrap"
              style={{
                width: "auto",
                height: "60px",
              }}
            />
          </a>
          <button
          onClick={()=>navigate('/user')}
            style={{
              backgroundColor: 'rgb(254, 236, 152)',
              border: '2px solid black',
              marginLeft: "20px",
              transition: "filter 0.3s ease",
            }}
            type="button"
            className="btn btn-lg"
            onMouseEnter={(e) => e.target.style.filter = 'brightness(1.2)'}
            onMouseLeave={(e) => e.target.style.filter = 'brightness(1)'}
          >
            {user.status === "logged" ? user.data.userName : "Guest"}
          </button>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <button
          onClick={()=>navigate('/main')}
            style={{
              backgroundColor: 'rgb(254, 236, 152)',
              border: '2px solid black',
              paddingRight: '80px',
              paddingLeft: '80px',
              marginRight: '85px',
              transition: "filter 0.3s ease",
            }}
            type="button"
            className="btn btn-lg"
            onMouseEnter={(e) => e.target.style.filter = 'brightness(1.2)'}
            onMouseLeave={(e) => e.target.style.filter = 'brightness(1)'}
          >
            Главная
          </button>
        </div>
        <div style={{ display: "flex", alignItems: "center", paddingRight: '20px' }}>
          <button onClick={user.status === "logged" ? ()=> logoutHandler().then(() => navigate('/login')) : 
                () => navigate('/login')}
            style={{
              backgroundColor: 'rgb(254, 236, 152)',
              border: '2px solid black',
              transition: "filter 0.3s ease",
            }}
            type="button"
            className="btn btn-lg"
            onMouseEnter={(e) => e.target.style.filter = 'brightness(1.2)'}
            onMouseLeave={(e) => e.target.style.filter = 'brightness(1)'}
          >
            {user.status === "logged" ? 'Выход' : "Войти"}
          </button>
        </div>
      </nav>
    </>
  );
}
