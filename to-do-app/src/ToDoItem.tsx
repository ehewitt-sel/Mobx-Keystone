import { Model, model, modelAction, prop } from "mobx-keystone"

@model("app/ToDoItem")
export class ToDoItem extends Model({
      description: prop<string>("").withSetter(),
      priority: prop<number>(0),
      dueDate: prop<string>("").withSetter()
    })
{
    @modelAction
    setPriority(value: number) {
        if (value < 0 || isNaN(value)) {
            this.priority = 0
        } else if (value > 10) {
            this.priority = 10
        } else {
            this.priority = value
        }
    }
}
