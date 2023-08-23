import { Model, model, modelAction, tProp, types } from "mobx-keystone"
import { ToDoItem } from "./ToDoItem"
import { computed } from "mobx"

@model("app/ToDoList")
export class ToDoList extends Model({
  items: tProp(types.array(types.model<ToDoItem>(ToDoItem)), () => []),
}) {
  @modelAction add(todo: ToDoItem) {
    this.items.push(todo)
  }

  @modelAction remove(todo: ToDoItem) {
    const index = this.items.indexOf(todo)
    if (index >= 0) {
      this.items.splice(index, 1)
    }
  }

  @computed get topPriorityItem() {
    var sortedItems = [...this.items].sort((a,b) => a.priority > b.priority ? -1 : 1)
    return sortedItems.length === 0 ? new ToDoItem({}) : sortedItems[0]
  }
}
