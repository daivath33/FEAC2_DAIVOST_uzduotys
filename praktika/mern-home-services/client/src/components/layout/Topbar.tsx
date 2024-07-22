import React from "react";
import { useNavigate } from "react-router-dom";
import { LuMenuSquare, LuXCircle } from "react-icons/lu";
import Dropdown from "./Dropdown";
import MobileLinks from "./MobileLinks";
import Button from "../common/Button";
import VisitorLinks from "./VisitorLinks";
import useAuthStore from "../../store/authStore";
import styles from "./Topbar.module.scss";

const Topbar: React.FC = () => {
  const navigate = useNavigate();
  const [navList, setNavList] = React.useState(false);
  const { isLoggedIn } = useAuthStore();

  return (
    <div className={styles.topbar}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <img src="/logo.svg" alt="logo" />
          {!navList ? <VisitorLinks /> : <MobileLinks />}
        </div>

        <div className={styles.rightSide}>
          {isLoggedIn ? (
            <Dropdown />
          ) : (
            <Button onClick={() => navigate("/login")}>Login / Sign Up</Button>
          )}
        </div>
        <div onClick={() => setNavList(!navList)} className={styles.toggle}>
          {!navList ? (
            <LuMenuSquare size={42} color="#1f2937" />
          ) : (
            <LuXCircle size={42} color="#1f2937" />
          )}
        </div>
      </div>{" "}
    </div>
  );
};

export default Topbar;
