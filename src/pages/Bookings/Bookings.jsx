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
  }, []);

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
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
