import { useState } from "react";
import styles from "./SideBarStyle.module.css";
import burgerMenuIcon from "../../assets/icons8-menu.svg";
import crossIcon from "../../assets/icons8-cross.svg";

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className={styles.container}>
            <button className={styles.burgerMenuButton}>
                <img
                    src={burgerMenuIcon}
                    alt="Menu"
                    onClick={toggleOpen}
                />
            </button>
            <nav className={isOpen ? styles.navBarOpen : styles.navBarClosed}>
                <button className={styles.crossButton}>
                    <img
                        src={crossIcon}
                        alt="Close"
                        onClick={toggleOpen}
                    />
                </button>
                <ul>
                    <li>
                        <a>
                            <span>Příběh</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>Menu</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>Kontakt</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>Rezervace</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default SideBar;
