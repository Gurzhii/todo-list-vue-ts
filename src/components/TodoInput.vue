<template>
  <input
    class="form-control"
    :class="classList"
    :placeholder="placeholder"
    :type="type"
    :checked="checked"
    :value="value"
    @click="onClick"
    @input="onInput($event.target.value)"
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
    this.$emit("onClick");
  }
  onInput(value: string) {
    this.$emit("update:value", value);
  }
}
</script>
