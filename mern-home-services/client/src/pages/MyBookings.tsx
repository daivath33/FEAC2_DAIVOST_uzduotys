import React from "react";
import BookingCard from "../components/bookings/BookingCard";
import Spinner from "../components/common/Spinner";
import styles from "./MyBookings.module.scss";
import { useBookingsByUserId } from "../hooks/useBookingByUser";
import useAuthStore from "../store/authStore";

const MyBookings: React.FC = () => {
  const [completed, setCompleted] = React.useState<boolean>(false);
  const { user } = useAuthStore();
  const { bookings, isLoading, error } = useBookingsByUserId(user?.email);
  if (isLoading) {
    return (
      <div className={styles.page}>
        <Spinner />
      </div>
    );
  }

  let myBookings = bookings;

  if (completed === true) {
    myBookings = myBookings?.filter(
      (booking) => booking.status === "Completed"
    );
  }
  return (
    <div className={styles.page}>
      <h2 className={styles.heading}>My Bookings</h2>
      <div className={styles.topbar}>
        <p
          onClick={() => setCompleted(false)}
          style={{
            color: `${completed === true ? "gray" : "black"}`,
            fontWeight: 600,
          }}
        >
          Booked
        </p>
        <p
          onClick={() => setCompleted(true)}
          style={{
            color: `${completed === true ? "black" : "gray"}`,
            fontWeight: 600,
          }}
        >
          Completed
        </p>
      </div>
      <div className={styles.bookings}>
        {myBookings?.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
