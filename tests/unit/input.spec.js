import { shallowMount } from "@vue/test-utils";
import TodoInput from "@/components/TodoInput.vue";

describe("TodoInput.vue", () => {
  it("should have default type of text", () => {
    const wrapper = shallowMount(TodoInput);
    expect(wrapper.props("type")).toMatch("text");
  });

  it("should have type checkbox if it's explicit", () => {
    const wrapper = shallowMount(TodoInput, {
      propsData: {
        type: "checkbox"
      }
    });
    expect(wrapper.props("type")).toMatch("checkbox");
  });

  it("should emit update:value event on change", () => {
    const wrapper = shallowMount(TodoInput);
    wrapper.setValue("Input");
    expect(wrapper.emitted("update:value")).toBeTruthy();
  });

  it('shouldn"t emit update:value event if nothing going on', () => {
    const wrapper = shallowMount(TodoInput);
    expect(wrapper.emitted("update:value")).toBeFalsy();
  });

  it("should have correct value when passed", () => {
    const inputValue = "My test value";
    const wrapper = shallowMount(TodoInput, {
      propsData: {
        value: "My test value"
      }
    });
    expect(wrapper.props("value")).toMatch(inputValue);
  });

  it("should have checked true if it's true", () => {
    const wrapper = shallowMount(TodoInput, {
      propsData: {
        type: "checkbox",
        checked: true
      }
    });
    expect(wrapper.props("checked")).toBeTruthy();
  });

  it("should have checked false if it's true", () => {
    const wrapper = shallowMount(TodoInput, {
      propsData: {
        type: "checkbox",
        checked: false
      }
    });
    expect(wrapper.props("checked")).toBeFalsy();
  });
});
