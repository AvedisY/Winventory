import styles from '../styles/try.module.css';

export default function Table() {
    return (
        <table className="table table-dark h-100" style={{}}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Demand</th>
      <th scope="col">Ordering Cost</th>
      <th scope="col">Annual Holding Cost</th>
      <th scope="col">EOQ</th>
      <th scope="col">ROP</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
    </tr>

  </tbody>
</table>
    )
}


