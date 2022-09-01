<template>
  <label class="form-check-label col-sm-1 for='flexCheckDefault{{value}}' ">
    <div>
      <!--              <input-->
      <!--                  type="checkbox"-->
      <!--                  :value="value"-->
      <!--                  :checked="modelValue.includes(value)"-->
      <!--                  @change="evt => onChange(evt.target.value)"-->
      <!--              >-->
      <input
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          class="form-check-input"
          type="checkbox"
          id="flexCheckDefault{{value}}"
      >
      <!--              <input-->
      <!--                  :value="modelValue"-->
      <!--                  @update:modelValue="newValue => value = newValue"-->
      <!--                  @input="$emit('update: modelValue', $event.target.value)"-->
      <!--                  @click="check=!check"-->
      <!--                  class="form-check-input"-->
      <!--                  type="checkbox"-->
      <!--              >-->
    </div>
    Add Data  <b>{{value}}</b>
  </label>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  // data:() => ({
  //   check: [],
  // }),

  props: ['modelValue','value'],
  emits: ['update:modelValue'],

  computed: mapGetters(['checkValue']),
}
</script>
