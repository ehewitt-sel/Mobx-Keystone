import { observer } from 'mobx-react'
import { ToDoList } from './ToDoList'

export const ActiveToDoItem = observer(({ list } : { list: ToDoList }) => 
    <span>
      You should be working on... {list.topPriorityItem.description}
       <button onClick={() => list.remove(list.topPriorityItem)} disabled={list.items.length === 0}>Done</button>
    </span>
)
 