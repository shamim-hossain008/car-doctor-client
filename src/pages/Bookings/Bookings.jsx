import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);

  const url = `${import.meta.env.VITE_BASE_URL}/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [url]);

  const handleDelete = (id) => {
    // proceed its optional we are use Sweet alert
    const proceed = confirm("Are You Sure you want to delete");
    if (proceed) {
      fetch(`${import.meta.env.VITE_BASE_URL}/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            // user sweet alert
            alert("Deleted Successful");
            // After delete data show the remaining data
            const remaining = booking.filter((item) => item._id !== id);
            setBooking(remaining);
          }
        });
    }
  };

  const handleBookingConfirm = (id) => {
    fetch(`${import.meta.env.VITE_BASE_URL}/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          //   get other all
          const remaining = booking.filter((item) => item._id !== id);
          //get only one which one you update
          const updated = booking.find((item) => item._id === id);
          updated.status;
          const newBookings = [updated, ...remaining];
          setBooking(newBookings);
        }
      });
  };

  return (
    <div>
      <h2 className="text-center text-3xl font-bold">
        Your bookings: {booking.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {booking.map((item) => (
              <BookingRow
                key={item._id}
                item={item}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
