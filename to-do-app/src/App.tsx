import { useState } from 'react'
import { ToDoItem } from "./ToDoItem"
import { ToDoList } from './ToDoList'
import {AddToDoItem} from "./AddToDoItem"
import { ActiveToDoItem } from './ActiveToDoItem'
import { ToDoListView } from './ToDoListView'
import { applySnapshot, getSnapshot, registerRootStore } from 'mobx-keystone'
import { reaction } from 'mobx'

export default function App() {
  const [serialized, setSerialized] = useState("")
  
  const [list] = useState(() => registerRootStore(new ToDoList({ items: [] })))
  
  reaction(() => getSnapshot(list), (snapshot) => { setSerialized(JSON.stringify(snapshot)) })
  
  return (
    <div>
      <AddToDoItem addToDo={(item: ToDoItem) => { list.add(item) }}/> 
      <ActiveToDoItem list={list}/>
      <ToDoListView list={list}/>
      <br/><br/>
      Serialized state:<br/>
      <textarea cols={120} rows={20} value={serialized} onChange={e => setSerialized(e.currentTarget.value)}/>
      <br/>
      <button onClick={() => {
        try {
          var parsed = JSON.parse(serialized)
          applySnapshot(list, parsed)
        }
        catch (error) {
          alert(error)
        }
      }
        }>Apply</button>
    </div>
  )
}























// import React, { useState } from 'react';
// import { Todo } from './todo';
// import { registerRootStore } from 'mobx-keystone';
// import { observer } from "mobx-react"
// import { LogsView } from './logs';

// function App() {
//   var item = new Todo({text: "Get a job", done: false})
//   const [rootStore] = useState(registerRootStore(item))

//   return (
//     <div className="App">
//       <ItemView item={rootStore}/>
//       <br/>
//       {/* <LogsView rootStore={rootStore}/> */}
//     </div>
//   );
// }


// export const ItemView = observer(({ item }: {item : Todo} ) => {
//   return (
//     <div>
//       {item.text}<br/>
//       {item.customId}<br/>
//       {item.$modelType}<br/>
//       <button onClick={() => {item.setText("Hi!!!")}}>Click Me!</button>
//     </div>
//   )
// })

// export default App;
