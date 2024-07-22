import React from "react";
import Calendar from "react-calendar";
import { MdClose } from "react-icons/md";
import Button from "../common/Button";
import Toast from "../common/Toast";
import { useCreateBooking } from "../../hooks/useCreateBooking";
import useAuthStore from "../../store/authStore";
import styles from "./BookingSidebar.module.scss";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
const slots = [
  { time: "10:00 AM" },
  { time: "10:30 AM" },
  { time: "11:00 AM" },
  { time: "11:30 AM" },
  { time: "12:00 AM" },
  { time: "13:30 PM" },
  { time: "14:00 PM" },
  { time: "14:30 PM" },
  { time: "15:30 PM" },
];

interface BookingSidebarProps {
  onClose: () => void;
  business_id: string | undefined;
}
const BookingSidebar: React.FC<BookingSidebarProps> = ({
  onClose,
  business_id,
}) => {

  const { user } = useAuthStore();
  const [date, onChange] = React.useState<Value>(new Date());
  const [time, setTime] = React.useState<string>("");
  const [shwToast, setShowToast] = React.useState<boolean>(false);

  const { createBooking, isCreating, error } = useCreateBooking();

  const handleBooking = async () => {
    try {
      const bookingData = {
        date: date?.toLocaleString().split(" ")[0],
        time,
        userEmail: user?.email,
        username: user?.name,
        business_id,
      };
     
      await createBooking(bookingData);
      setShowToast(true)
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles.overlay}>
     
      <div className={styles.sidebar}>
      {shwToast && (
        <Toast
          message="Successfully booked home service!"
          type="SUCCESS"
          onClose={() => setShowToast(false)}
        />
      )}
        <div className={styles.close} onClick={onClose}>
          <MdClose size={20} />
        </div>
        <div className={styles.group}>
          <h4>Book a Service</h4>
          <p>Select Date and Time slot to book a service</p>
        </div>
        <div className={styles.group}>
          <h4>Select Date</h4>
          <Calendar onChange={onChange} value={date} />
        </div>

        <div className={styles.group}>
          <h4>Select Time Slot</h4>
          <div className={styles.slots}>
            {slots.map((slot, i) => (
              <div
                key={i}
                className={styles.slot}
                onClick={() => setTime(slot.time)}
              >
                {slot.time}
              </div>
            ))}
          </div>
        </div>
        <Button
          onClick={handleBooking}
          disabled={isCreating}
          className={styles.btn}
        >
          Submit Booking
        </Button>
      </div>
    </div>
  );
};

export default BookingSidebar;
