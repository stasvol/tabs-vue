<template>
  <div class="mb-3 row">
    <label for="inputEmail" class="col-sm-6 col-form-label">Email
      <div class="col-lg-12">
        <input
               :value="modelValue || getPhone.phone?.email || '' "
               @input="$emit('update:modelValue', $event.target.value)"
               placeholder="email"
               type="email"
               class="form-control validate"
               id="inputEmail"
               >
      </div>
    </label>
  </div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],

  computed: mapGetters(['getPhone']),

}
</script>