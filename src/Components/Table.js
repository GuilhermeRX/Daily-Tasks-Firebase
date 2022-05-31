import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import { MyTable, TableBody, TableHead } from '../Style/Components/Table'

export default function Table() {
  const {task} = useContext(AppContext)
  return (
    <MyTable>
        <TableHead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Description
            </th>
            <th>
              Priority
            </th>
          </tr>
        </TableHead>

        <TableBody>
          {task.map((obj, index) => (
            <tr key={index}>
              <td>
                {obj.name}
              </td>
              <td>
                {obj.description}
              </td>
              <td>
                {obj.priority}
              </td>
            </tr>
          ))}
        </TableBody>
    </MyTable>
  )
}
