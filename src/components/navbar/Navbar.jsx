import "./navbar.scss";
import {
  SearchOutlined,
  DarkModeOutlined,
  FullscreenExitOutlined,
  LanguageOutlined,
  NotificationsNoneOutlined,
  ChatBubbleOutlineOutlined,
  ListOutlined,
} from "@mui/icons-material";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

function Navbar() {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined />
        </div>

        <div className="items">
          <div className="item">
            <LanguageOutlined icon="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlined
              icon="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlined icon="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlined icon="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined icon="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListOutlined icon="icon" />
          </div>

          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
