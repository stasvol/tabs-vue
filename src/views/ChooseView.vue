<template>
  <div class="card-header" id="checkChoose ">
    <Modal v-model="checked" />
    <!--             :value="modelValue"-->
    <!--             @input="$emit('update:modelValue', $event.target.value)"/>-->
    <!--             :modelValue="check.value"-->
    <!--             @update:modelValue="check.value = $event"/>-->
    <h1 class="header">Choose page</h1>
    <div class="checked">
      <form @submit.prevent="onSubmit">

        <div class="form-check  mb-3 " v-for="(value,i) in 5 " :key="i">
          <label class="form-check-label col-sm-1 for='flexCheckDefault{{value}}' ">
            <div>

              <!--              Value: {{checkValue?.check }}-->
              <!--              <input-->
              <!--                  type="checkbox"-->
              <!--                  :value="value"-->
              <!--                  :checked="modelValue.includes(value)"-->
              <!--                  @change="evt => onChange(evt.target.value)"-->
              <!--              >  -->
                            <CheckField v-model="checked" :value="value" />
<!--              <input-->
<!--                  v-model="checked"-->
<!--                  :value="value || checkValue?.checked"-->
<!--                  class="form-check-input"-->
<!--                  type="checkbox"-->
<!--                  id="flexCheckDefault{{value}}"-->
<!--                  @change="onChange"-->
<!--                  :checked="value || checked || checkValue?.checked"-->
<!--              /> {{checked}}-->
              <!--&lt;!&ndash;              <input&ndash;&gt;-->
              <!--&lt;!&ndash;                  :value="modelValue"&ndash;&gt;-->
              <!--&lt;!&ndash;                  @update:modelValue="newValue => value = newValue"&ndash;&gt;-->
              <!--&lt;!&ndash;                  @input="$emit('update: modelValue', $event.target.value)"&ndash;&gt;-->
              <!--&lt;!&ndash;                  @click="check=!check"&ndash;&gt;-->
              <!--&lt;!&ndash;                  class="form-check-input"&ndash;&gt;-->
              <!--&lt;!&ndash;                  type="checkbox"&ndash;&gt;-->
              <!--&lt;!&ndash;              >&ndash;&gt;-->
            </div>


            Add data <b>{{ value }}</b>
          </label>
        </div>
        <!--        <div class="form-check  mb-3">-->
        <!--          <label class="form-check-label col-sm-1 " for="flexCheckDefault1">-->
        <!--            <div>-->
        <!--              <input v-model="check" class="form-check-input" name="one" type="checkbox" value="1" id="flexCheckDefault1">-->
        <!--            </div>-->
        <!--            Add-->
        <!--          </label>-->
        <!--        </div>-->
        <!--        <div class="form-check mb-3">-->
        <!--          <label class="form-check-label col-sm-1" for="flexCheckDefault2">-->
        <!--            <div>-->
        <!--              <input v-model="check" class="form-check-input" name="two" type="checkbox" value="2" id="flexCheckDefault2">-->
        <!--            </div>-->
        <!--            Add-->
        <!--          </label>-->
        <!--        </div>-->
        <!--        <div class="form-check mb-3">-->
        <!--          <label class="form-check-label col-sm-1" for="flexCheckDefault3">-->
        <!--            <div>-->
        <!--              <input v-model="check" class="form-check-input" name="three" type="checkbox" value="3" id="flexCheckDefault3">-->
        <!--            </div>-->
        <!--            Add-->
        <!--          </label>-->
        <!--        </div>-->
        <div class="btn-group-lg" role="group" aria-label="Basic mixed styles example">
          <button @click="prevPath" type="button" class="btn btn-warning">Prev</button>
          <button type="submit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Save
          </button>

          <!--        <router-link to="/modal" tag="button" class="btn btn-primary">Save</router-link>-->
        </div>

      </form>
    </div>

  </div>
</template>
<script>
import Modal from "@/views/Modal";
import {mapGetters} from "vuex";
import CheckField from "@/components/CheckField";

export default {
  name: 'choose',
  props: ['modelValue'],
  // emits: ['update:modelValue'],

  components: {CheckField, Modal},
  // props: {
  //   value: { type: String, default: null, },
  //   modelValue: { type: Array, default: () => [], },
  // },
  // methods: {
  //   onChange(value) {
  //     if (this.modelValue.includes(this.value)) {
  //       this.$emit('update:modelValue', this.modelValue.filter(cv => cv !== value))
  //     }
  //     else {
  //       this.$emit('update:modelValue', this.modelValue.concat(value))
  //     }
  //   }
  // }

  data: () => ({
    checked: [],
  }),

  computed: mapGetters(['getName', 'getPhone', 'getPhoto', 'checkValue']),

  methods: {

    onChange(e) {
      const data = e.target.value
      console.log(e)
      console.log(data)
    },

    prevPath() {
      this.$router.push('/photo')
      // this.getPhoto?.photos?.photos[0]
    },

    onSubmit() {

      const formData = {
        checked: this.checked,
      }

      try {
        this.$store.dispatch('checkValue', formData)

      } catch (e) {
        throw new Error(e)
      }
      console.log(this.check)
    }
  },

}
</script>
<style scoped>
.checked {
  /*justify-content: center;*/
  /*align-items: center;*/
}

.form-check {
  border: 1px solid silver;
  display: flex;
  justify-content: center;
  padding: 10px;
}

</style>