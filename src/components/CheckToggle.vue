<template>
  <div class="form-check form-switch">
    <label class="form-check-label" for="switchCheck"> {{checkToggle ? 'ON' : 'OF'}}
      <input
          :value="value"
          class="form-check-input"
          type="checkbox" role="switch"
          id="switchCheck"
          :checked="modelValue?.includes(value)"
          @change="event=>onChange(event.target.value)"
          @click="toggleCheck"
      >
    </label>
  </div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  data:()=>({
    checkToggle:null
  }),

  props: {
    value: null,
    modelValue: [],
  },

  emits: ['update:modelValue'],

  computed: mapGetters(['getName']),

  methods:{

    toggleCheck() {
      this.checkToggle = !this.checkToggle
    },

    onChange(value) {
      if (this.modelValue?.includes(this.value)) {
        this.$emit('update:modelValue', this?.modelValue?.filter(cv => cv !== value))

      }
      else {
        this.$emit('update:modelValue', this.modelValue?.concat(value))
      }
    }
  }

}
</script>