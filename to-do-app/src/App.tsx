import { useState } from 'react'
import { ToDoItem } from "./ToDoItem"
import { ToDoList } from './ToDoList'
import {AddToDoItem} from "./AddToDoItem"
import { ActiveToDoItem } from './ActiveToDoItem'
import { ToDoListView } from './ToDoListView'
import { registerRootStore } from 'mobx-keystone'

export default function App() {
  const [list] = useState(() => registerRootStore(new ToDoList({ items: [] })))
  return (
    <div>
      <AddToDoItem addToDo={(item: ToDoItem) => { list.add(item) }}/> 
      <ActiveToDoItem list={list}/>
      <ToDoListView list={list}/>
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
