<template>
  <div class="form-check form-switch">
    <label class="form-check-label" for="switchCheck"> {{checkToggle ? 'ON' : 'OF'}}
      <input
          :value="modelValue || getName.name?.checkToggle"
          @input="$emit('update:modelValue', $event.target.value)"
          class="form-check-input"
          type="checkbox" role="switch"
          id="switchCheck"
          @click="toggleCheck"
          value="checkToggle"
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
  props: ['modelValue'],
  emits: ['update:modelValue'],
  computed: mapGetters(['getName']),
  methods:{
    toggleCheck() {
      this.checkToggle = !this.checkToggle
    },
  }

}
</script>