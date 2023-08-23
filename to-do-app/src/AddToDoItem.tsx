import { useState } from 'react'
import { ToDoItem } from './ToDoItem'
import { observer } from 'mobx-react'
import { clone } from 'mobx-keystone'

export const AddToDoItem = observer(({ addToDo }: { addToDo: (item : ToDoItem) => void} ) =>
{
    const [item] = useState(() => new ToDoItem({}))
    return (
        <>
            New Task: <input value={item.description} onChange={e => item.setDescription(e.currentTarget.value)}/><br/>
            Priority: <input value={item.priority} onChange={e => item.setPriority(Number(e.currentTarget.value))}/>
            <button onClick={() => item.setPriority(item.priority + 1)}>+</button>
            <button onClick={() => item.setPriority(item.priority-1)}>-</button><br/>
            Due Date: <input value={item.dueDate} onChange={e => item.setDueDate(e.currentTarget.value)}/><br/>
            <button onClick={() => addToDo(clone(item))}>Add</button><br/>
        </>
    )
})