<template>
  <button class="btn" :disabled="disabled" :class="classList" @click="onClick">
    {{ title }}
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class TodoInput extends Vue {
  @Prop({ default: "" }) readonly classList!: string;
  @Prop({ required: true }) readonly title!: string;
  @Prop({ default: false }) readonly disabled!: boolean;

  onClick() {
    if (!this.disabled) {
      this.$emit("onClick");
    }
  }
}
</script>
