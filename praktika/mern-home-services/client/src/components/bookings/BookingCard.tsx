import React from "react";
import { LuMapPin, LuUser, LuClock, LuCalendarDays } from "react-icons/lu";
import { Booking } from "../../entities/booking";
import styles from "./BookingCard.module.scss";

interface BookingCardProps {
  booking: Booking;
}

const BookingCard: React.FC<BookingCardProps> = ({ booking }) => {
  return (
    <div className={styles.card}>
      <img src={booking.company.photos[0]} className={styles.card_photo} />
      <div>
        <h4 className={styles.card_business_name}>{booking.company.name}</h4>
        <div className={styles.row_group}>
          <span className={styles.card_icon}>
            <LuUser size={16} />
          </span>
          <span className={styles.card_contact_person}>
            {booking.company.contactPerson}
          </span>
        </div>
        <div className={styles.row_group}>
          <span className={styles.card_icon}>
            <LuMapPin size={16} />
          </span>

          <p>{booking.company.address}</p>
        </div>
        <div className={styles.row_group}>
          <span className={styles.card_icon}>
            <LuCalendarDays size={16} />
          </span>
          <p>Service on:</p>{" "}
          <span className={styles.card_date_time}>
            {booking.date.toString().split("T")[0]}
          </span>
        </div>
        <div className={styles.row_group}>
          <span className={styles.card_icon}>
            <LuClock size={16} />
          </span>
          <p>Service on:</p>{" "}
          <span className={styles.card_date_time}>{booking.time}</span>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
