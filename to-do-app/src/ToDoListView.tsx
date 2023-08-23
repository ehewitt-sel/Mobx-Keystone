import { observer } from 'mobx-react'
import { ToDoList } from './ToDoList'

export const ToDoListView = observer(({list} : { list : ToDoList }) =>  {
  const priorityStyle = {
    backgroundColor: 'red',
  };
  
  const rows = list.items.map((item, i) => (
    <tr style={item === list.topPriorityItem ? priorityStyle : {}}>
        <td><input value={item.description} onChange={e => item.setDescription(e.currentTarget.value)}/></td>
        <td><input value={item.priority} onChange={e => item.setPriority(Number(e.currentTarget.value))}/></td>
        <td><input value={item.dueDate} onChange={e => item.setDueDate(e.currentTarget.value)}/></td>
    </tr>
  ))
  return (
    <table>
      <thead><tr><th>Description</th><th>Priority</th><th>Due Date</th></tr></thead>
      <tbody>{rows}</tbody>
    </table>
    )
})
