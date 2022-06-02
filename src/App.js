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
  
  let fdata = Data.filter((p, i)=>p.status === true && p.expiry >= 2022);
  let ans = fdata.reduce((a, p, i) => a + p.price, 0);
  return (
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
          Data.map((p, i) => {
            return (
              <tr>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.quantity}</td>
                <td>{p.price}</td>
                <td>{p.expiry}</td>
                <td>{p.status.toString()}</td>
                <td>{p.price + ''}</td>
              </tr>
            )  
          })
        }
      </table>
    );
  }
    
export default App;
