import { shallowMount } from "@vue/test-utils";
import TodoButton from "@/components/TodoButton.vue";

describe("TodoButton.vue", () => {
  it("should have correct title", () => {
    const btnTitle = "test";
    const wrapper = shallowMount(TodoButton, {
      propsData: {
        title: "test"
      }
    });
    expect(wrapper.text()).toMatch(btnTitle);
  });

  it("should have correct default class when classList doesn't pass", () => {
    const classList = "btn";
    const wrapper = shallowMount(TodoButton, {
      propsData: {
        title: "test",
        classList: ""
      }
    });
    expect(wrapper.classes().join(" ")).toMatch(classList);
  });

  it("should have correct classes when additional classes passed", () => {
    const classList = "btn btn-default test-btn";
    const wrapper = shallowMount(TodoButton, {
      propsData: {
        title: "test",
        classList: "btn-default test-btn"
      }
    });
    expect(wrapper.classes().join(" ")).toMatch(classList);
  });

  it("should not be disabled by default", () => {
    const wrapper = shallowMount(TodoButton, {
      propsData: {
        title: "test"
      }
    });
    expect(wrapper.props("disabled")).toBe(false);
  });

  it("should be disabled if disabled is true", () => {
    const wrapper = shallowMount(TodoButton, {
      propsData: {
        title: "test",
        disabled: true
      }
    });
    expect(wrapper.props("disabled")).toBe(true);
  });

  it("should emit onClick event when clicked and button is not disabled", () => {
    const wrapper = shallowMount(TodoButton, {
      propsData: {
        title: "test",
        disabled: false
      }
    });
    wrapper.trigger("click");
    expect(wrapper.emitted("onClick")).toBeTruthy();
  });

  it("shouldn't emit onClick event when clicked on disabled button", () => {
    const wrapper = shallowMount(TodoButton, {
      propsData: {
        title: "test",
        disabled: true
      }
    });
    wrapper.trigger("click");
    expect(wrapper.emitted("onClick")).toBeFalsy();
  });
});
