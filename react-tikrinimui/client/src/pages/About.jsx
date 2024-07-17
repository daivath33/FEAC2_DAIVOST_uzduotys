import { Link } from "react-router-dom";
import classNames from "classnames";
import Button from "../components/common/Button";
import styles from "./About.module.scss";
import Image from "../assets/images/about1.jpg";

function About() {
  return (
    <div className={styles.about_page}>
      <section className={classNames(styles.section, styles.banner)}>
        <div className={classNames(styles.container, styles.banner_column)}>
          <img className={styles.banner_image} src={Image} alt="Illustration" />
          <div className={styles.banner_inner}>
            <h1 className={styles.heading}>
              We are <span>Home Services Masters</span>
            </h1>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
              pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo
              in ullamcorper quis vestibulum ligula elementum ut. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar
              ullamcorper suspendisse ac eget.
            </p>
            <Link to="/services">
              <Button>Explore our Services</Button>
            </Link>
          </div>
        </div>
      </section>

      <ul className={styles.images_gallery}>
        <li>
          <img src="https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </li>
        <li>
          <img src="https://images.pexels.com/photos/4239147/pexels-photo-4239147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </li>
        <li>
          <img src="https://images.pexels.com/photos/4246119/pexels-photo-4246119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </li>
        <li>
          <img src="https://images.pexels.com/photos/4792521/pexels-photo-4792521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </li>
        <li>
          <img src="https://images.pexels.com/photos/5768107/pexels-photo-5768107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </li>
        <li>
          <img src="https://images.pexels.com/photos/4498138/pexels-photo-4498138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </li>
      </ul>
    </div>
  );
}

export default About;
