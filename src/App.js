import "./styles.css";

export default function App() {
  const car = [
    {
      name: "BMW",
      avg: "24.5",
      color: "blue",
      cost: "1.2cr"
    },
    {
      name: "Harrier",
      avg: "24.5",
      color: "BLACK",
      cost: "25L"
    },
    {
      name: "Suzuki",
      avg: "24.5",
      color: "RED",
      cost: "15L"
    },
    {
      name: "Creta",
      avg: "25",
      color: "BALCK",
      cost: "13L"
    }
  ];

  return (
    <div className="App">
      <h1>Car Details</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>AVG</th>
            <th>COLOR</th>
            <th>COST</th>
          </tr>
        </thead>

        <tbody>
          {car.map((car) => (
            <tr>
              <td>{car.name}</td>
              <td>{car.avg}</td>
              <td>{car.color}</td>
              <td>{car.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
