import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);

  const url = `${import.meta.env.VITE_BASE_URL}/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);

  return (
    <div>
      <h2 className="text-center text-3xl font-bold">
        Your bookings: {booking.length}
      </h2>
    </div>
  );
};

export default Bookings;
