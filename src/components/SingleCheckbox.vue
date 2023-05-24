<template>
  <input
      @input="(event) => $emit('update:checked', event.target.checked)"
      class="hidden peer"
      type="checkbox"
      :checked="checked"
      :id="fieldId"
  />
  <label :for="fieldId" :class="checked?'day-check':'day-uncheck'">
    <span class="text-xs">{{ label }}</span>
  </label>
</template>

<script>
export default {
  props: {
    label: String,
    fieldId: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      default:false
    },
  },
};
</script>

<style>
</style>
