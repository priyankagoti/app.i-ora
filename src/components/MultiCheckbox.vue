<template>
<!--  <div

  >-->
    <SingleCheckbox
        v-for="option in options"
        :checked="value && value.includes(option.id)"
        @update:checked="check(option.id, $event)"
        :fieldId="option.name"
        :label="option.name"
        :key="option"
    />
<!--  </div>-->
</template>

<script>
import SingleCheckbox from "./SingleCheckbox.vue";

export default {
  emits: ["update:value"],
  props: {
    value: {
      type: Array,
      required: true,
    },
    options: {
      type: Array,
      required: true,
      validator: (value) => {
        const hasNameKey = value.every((option) =>
            Object.keys(option).includes("name")
        );
        const hasIdKey = value.every((option) =>
            Object.keys(option).includes("id")
        );
        return hasNameKey && hasIdKey;
      },
    },
  },
  mounted() {
  },
  methods:{
    check(optionId, checked){
      console.log(optionId,checked)
      let updatedValue = this.value;

      if (checked) {
        updatedValue.push(optionId);
      } else {
        updatedValue.splice(updatedValue.indexOf(optionId), 1);
      }
      this.emitter.emit("update:value", updatedValue);
      console.log(updatedValue)
    }
  },
  /*setup(props, context) {
    const check = (optionId, checked) => {
      let updatedValue = [...props.value];
      if (checked) {
        updatedValue.push(optionId);
      } else {
        updatedValue.splice(updatedValue.indexOf(optionId), 1);
      }
      context.emit("update:value", updatedValue);
    };

    return {
      check,
    };
  },*/
  components: {
    SingleCheckbox,
  },
};
</script>
