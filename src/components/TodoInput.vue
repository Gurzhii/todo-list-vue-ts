<template>
  <input
    class="form-control"
    :class="classList"
    :placeholder="placeholder"
    :type="type"
    :checked="checked"
    :value="value"
    @click="onClick"
    @input="onInput"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class TodoInput extends Vue {
  @Prop() value!: string;
  @Prop({ default: "" }) readonly classList!: string;
  @Prop({ default: "Placeholder" }) readonly placeholder!: string;
  @Prop({ default: "text" }) readonly type!: string;
  @Prop({ default: false }) readonly checked!: boolean;

  onClick() {
    this.$emit("onClick", event);
  }
  // @ts-ignore
  onInput(event) {
    this.$emit("update:value", event.target.value);
  }
}
</script>
