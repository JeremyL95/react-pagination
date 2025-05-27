import './App.css';
import Data from './data.json';

function App() {
  return (
    <>
      <table className="table-auto">
        <thead>
          <tr>
            {Object.keys(Data[0]).map((key, i) => (
              <td key={`th${i}`}>{key}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {Data.map((data, i) => (
            <tr key={i}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
