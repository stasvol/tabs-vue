<template>
        <label for="inputName" class="col-sm-6 col-form-label">NAME=>
            <div class="col-lg-12" >

              <input
                  :value="$store.state.name?.name || ''"
                  @input="$emit('update:modelValue', $event.target.value)"
                  type="text"
                  class="form-control validate"
                  id="inputName"
                  placeholder="name"


              >


            </div>
          </label>
</template>
<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  methods: {

  }
}
</script>