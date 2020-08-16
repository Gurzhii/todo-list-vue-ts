<template>
  <li>
    <div class="form-check">
      <label class="form-check-label" :class="{ completed: task.isCompleted }">
        <TodoInput
          :type="'checkbox'"
          :classList="'checkbox'"
          :checked="task.isCompleted"
          @onClick="toggleCompleted"
        />
        {{ task.title }}
        <i class="input-helper"></i>
      </label>
    </div>
    <todo-button
      @onClick="deleteItem"
      :title="'Delete'"
      :classList="'btn-danger ml-auto'"
    />
  </li>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import TodoButton from "./TodoButton.vue";
import TodoInput from "./TodoInput.vue";
import { TaskModel } from "../models/TaskModel";

@Component({
  name: "TodoListItem",
  components: {
    TodoButton,
    TodoInput
  }
})
export default class TodoList extends Vue {
  @Prop({ required: true }) readonly task!: TaskModel;
  toggleCompleted() {
    this.$emit("toggleCompleted", this.task);
  }
  deleteItem() {
    this.$emit("deleteItem", this.task);
  }
}
</script>
