import { mount, shallowMount } from "@vue/test-utils";
import TodoListItem from "@/components/TodoListItem.vue";
import TodoInput from "@/components/TodoInput.vue";
import { TaskModel } from "@/models/TaskModel";

describe("TodoListItem.vue", () => {
  it("has class completed when completed", () => {
    const completedClassList = "form-check-label completed";
    const wrapper = shallowMount(TodoListItem, {
      propsData: {
        task: new TaskModel({
          isCompleted: true,
          title: "Hello world"
        })
      }
    });
    expect(
      wrapper
        .find("label")
        .classes()
        .join(" ")
    ).toMatch(completedClassList);
  });

  it("doesn't have completed when is not completed", () => {
    const nonCompletedClassList = "form-check-label";
    const wrapper = shallowMount(TodoListItem, {
      propsData: {
        task: new TaskModel({
          isCompleted: false,
          title: "Hello world"
        })
      }
    });
    expect(
      wrapper
        .find("label")
        .classes()
        .join(" ")
    ).toMatch(nonCompletedClassList);
  });

  it("renders task title", () => {
    const title = "Hello world";
    const wrapper = shallowMount(TodoListItem, {
      propsData: {
        task: new TaskModel({
          isCompleted: false,
          title: "Hello world"
        })
      }
    });
    expect(wrapper.text()).toMatch(title);
  });

  it("emits delete event", () => {
    const wrapper = mount(TodoListItem, {
      propsData: {
        task: new TaskModel({
          isCompleted: false,
          title: "Hello world"
        })
      }
    });
    wrapper.find("button").trigger("click");
    expect(wrapper.emitted("deleteItem")).toBeTruthy();
  });

  it("emits toggle complete event", () => {
    const wrapper = mount(TodoListItem, {
      propsData: {
        task: new TaskModel({
          isCompleted: true,
          title: "Hello world"
        })
      }
    });
    wrapper.findComponent(TodoInput).trigger("click");
    expect(wrapper.emitted("toggleCompleted")).toBeTruthy();
  });
});
