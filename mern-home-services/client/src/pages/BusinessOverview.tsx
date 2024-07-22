import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import classNames from "classnames";
import {
  LuMapPin,
  LuMail,
  LuUser,
  LuClock,
  LuUpload,
  LuCalendarDays,
} from "react-icons/lu";
import { useBusiness } from "../hooks/useBusiness";
import Button from "../components/common/Button";
import SimmilarBusinesses from "../components/businesses/SimmilarBusinesses";
import BookingSidebar from "../components/bookings/BookingSidebar";
import Spinner from "../components/common/Spinner";
import styles from "./BusinessOverview.module.scss";
import useAuthStore from "../store/authStore";

const BusinessOverview: React.FC = () => {
  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const { user } = useAuthStore();
  
  const { id } = useParams();

  const { business, isLoading, error } = useBusiness(id);

  if (isLoading) {
    return (
      <div className={styles.page}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {isSidebarOpen && (
        <BookingSidebar
          onClose={() => setIsSidebarOpen(false)}
          business_id={id}
        />
      )}
      <div className={styles.row_container}>
        <div className={styles.left}>
          <div className={styles.left_container}>
            <img src={business?.photos[0]} className={styles.photo} />
            <div>
              <span className={styles.category_name}>{business?.category}</span>
              <h2 className={styles.business_name}>{business?.name}</h2>
              <p className={styles.business_info}>
                <LuMapPin size={20} />
                <span>{business?.address}</span>
              </p>
              <p className={styles.business_info}>
                <LuMail size={20} />
                <span>{business?.email}</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.right_business_info}>
            <span className={styles.upload_icon}>
              <LuUpload size={20} />
            </span>
            <p
              className={classNames(
                styles.business_info,
                styles.contact_person
              )}
            >
              <LuUser size={20} />
              <span>{business?.contactPerson}</span>
            </p>
            <p className={styles.business_info}>
              <LuClock size={20} />
              <span className={styles.available_time}>
                Available 8:00 AM to 10:PM
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.row_container}>
        <div className={styles.left}>
          <h3 className={styles.heading_small}>Description</h3>
          <p>{business?.description}</p>
          <h3 className={styles.heading_small}>Gallary</h3>
          <div className={styles.gallery}>
            {business?.photos.map((photo) => (
              <div key={photo}>
                <img src={photo} className={styles.gallery_photo} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.right}>
          <Button
            className={styles.book_btn}
            onClick={() => {
              if (!user) {
                navigate("/login");
              }
              setIsSidebarOpen(true);
            }}
          >
            <LuCalendarDays size={20} />
            <span>Book Appointment</span>
          </Button>

          {business?.category && (
            <SimmilarBusinesses category={business.category} id={id} />
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessOverview;
