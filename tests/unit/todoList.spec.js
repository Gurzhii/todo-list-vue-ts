import { mount } from "@vue/test-utils";
import TodoList from "@/components/TodoList.vue";
import TodoListItem from "@/components/TodoListItem.vue";

describe("TodoInput.vue", () => {
  it("has disabled submit button when input is empty", () => {
    const wrapper = mount(TodoList);
    expect(wrapper.find("button").attributes("disabled")).toMatch("");
  });

  it("has non-disabled submit button when input is not empty", () => {
    const wrapper = mount(TodoList);
    wrapper.find('input[type="text"]').setValue("My first todo");
    expect(wrapper.find("button").attributes("disabled")).toMatch("disabled");
  });

  it("has no TodoListItemComponents at start", () => {
    const wrapper = mount(TodoList);
    expect(wrapper.findComponent(TodoListItem).exists()).toBe(false);
  });

  it("has welcome message when list is empty and not loading", () => {
    const wrapper = mount(TodoList, {
      data() {
        return {
          loading: false,
          items: []
        };
      }
    });
    expect(wrapper.text()).toMatch(
      "You have no tasks to do for today. Add first!"
    );
  });
});
