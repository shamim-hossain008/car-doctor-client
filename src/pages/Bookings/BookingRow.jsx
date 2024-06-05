const BookingRow = ({ item, handleDelete }) => {
  const { _id, date, service, price, img } = item;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-square btn-sm btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className=" w-24 h-24 rounded">
            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>${price}</td>
      <td>{date}</td>
      <th>
        <button className="btn btn-error btn-xs">Pending</button>
      </th>
    </tr>
  );
};

export default BookingRow;
