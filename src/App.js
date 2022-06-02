import logo from './logo.svg';
import './App.css';

function App() {
  const Data = [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    }
  ];

  const Employee = [
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ]

  let fdata = Data.filter((p) => p.status === true && p.expiry >= 2022);
  let ans = fdata.reduce((a, p) => a + p.price, 0);

  let mdata = Employee.filter((p) => p.status === true);
  let final = mdata.reduce((a, p) => a + p.salary + p.bonus, 0);

  return (
    <div>
      <table border="1">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Expiry</th>
          <th>Status</th>
          <th>total</th>
        </tr>
        {
          fdata.map((p, i) => {
            return (
              <tr>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.quantity}</td>
                <td>{p.price}</td>
                <td>{p.expiry}</td>
                <td>{p.status.toString()}</td>
                {i === 0 ? <td rowSpan={2}>{ans}</td> : null}
              </tr>
            )
          })
        }
      </table>


      <table border="1">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Salary</th>
          <th>Bonus</th>
          <th>Status</th>
          <th>Total</th>
        </tr>
        {
          Employee.map((p, i) => {
            return (
              <tr>
                <td>{p.name}</td>
                <td>{p.age}</td>
                <td>{p.salary}</td>
                <td>{p.bonus}</td>
                <td>{p.status.toString()}</td>
                {i === 0 ? <td rowSpan={5}>{final}</td> : null}
              </tr>
            )
          })
        }
      </table>
    </div>
  );
}

export default App;
