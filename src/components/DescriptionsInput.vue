<template>
  <div class="mb-3 row">
    <label for="textarea" class="col-sm-6 col-form-label">Description
      <div class="col-lg-12">
            <textarea
                      :value="modelValue || getName.name?.description"
                      @input="$emit('update:modelValue', $event.target.value)"
                      :placeholder="getName.name?.description || 'description'"
                      class="form-control"
                      id="textarea"
                      rows="3">

            </textarea>
      </div>
    </label>

  </div>
</template>
<script>
import {mapGetters} from "vuex";

export default {

  props: ['modelValue'],
  emits: ['update:modelValue'],

  computed: mapGetters(['getName']),
}
</script>