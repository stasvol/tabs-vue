<template>
  <div class="card-header">
    <Modal v-model="check" />
<!--             :value="modelValue"-->
<!--             @input="$emit('update:modelValue', $event.target.value)"/>-->
<!--        :modelValue="check.value"-->
<!--           @update:modelValue="check.value = $event"/>-->
    <h1 class="header">Choose page</h1>
    <div class="checked">
      <form @submit.prevent="onSubmit">
        <div class="form-check  mb-3 " v-for="(value,i) in 5" :key="i">
          <label class="form-check-label col-sm-1 for='flexCheckDefault{{value}}' ">
            <div>
<!--              <input-->
<!--                  type="checkbox"-->
<!--                  :value="value"-->
<!--                  :checked="modelValue.includes(value)"-->
<!--                  @change="evt => onChange(evt.target.value)"-->
<!--              >-->
              <input
                  v-model="check"
                  :value="value"
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
          <button @click="$router.push('/photo')" type="button" class="btn btn-warning">Prev</button>
          <button type="submit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Save</button>

          <!--        <router-link to="/modal" tag="button" class="btn btn-primary">Save</router-link>-->
        </div>

      </form>
    </div>

  </div>
</template>
<script>
import Modal from "@/views/Modal";
export default {
  name: 'choose',
  // props: ['modelValue'],
  // emits: ['update:modelValue'],

  components: {Modal},

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

  data:() => ({
    check: [],
  }),

  methods: {

    onSubmit() {

      const formData = {
        check: this.check,
      }

      console.log(formData)
     try {
        this.$store.dispatch('checkValue',formData)

     }catch (e) {}

    }
  }
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

.rows {
  /*display: flex;*/
  /*justify-content: center;*/
  /*  align-items: center;*/
}

.col {
}
</style>