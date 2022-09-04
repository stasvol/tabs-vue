<template>
          <label for="inputName" class="col-sm-6 col-form-label">Name
            <div class="col-lg-12">

              <input
                  :value="modelValue || getName.name?.name || ''  "
                  @input="$emit('update:modelValue', $event.target.value)"
                  placeholder="name"
                  type="text"
                  class="form-control validate"
                  id="inputName"
                  required

              >
  <!--            :is="getName.name?.name"-->
  <!--            @input="getName.name?.name"-->
            </div>

          </label>

<!--  <label for="inputName" class="col-sm-6 col-form-label">Name-->
<!--    <div class="col-lg-12" >-->

<!--      <input-->
<!--          :value="modelValue"-->
<!--          @input="$emit('update:modelValue', $event.target.value)"-->
<!--          :placeholder="getName.name?.name || 'name'"-->
<!--          type="text"-->
<!--          class="form-control validate"-->
<!--          id="inputName" >-->
<!--      &lt;!&ndash;            :is="getName.name?.name"&ndash;&gt;-->
<!--      &lt;!&ndash;            @input="getName.name?.name"&ndash;&gt;-->
<!--    </div>-->
<!--  </label>-->
</template>
<script>
import {mapGetters} from "vuex";
import useVuelidate from "@vuelidate/core";
import {required} from "@vuelidate/validators";

export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  methods: {
    clearInput() {
      this.modelValue = this.$store.state.name.name = ''
    }
  },
  data:() => ({
    // modelValue: this?.$store.state.name?.name
  }),
  // setup: () => ({v$: useVuelidate()}),
  //
  // validations() {
  //   return {
  //     modelValue: {required},
  //   }
  // },
  computed: mapGetters(['getName']),
}


</script>