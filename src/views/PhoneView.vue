<template>
  <div class="card-header">
    <h1 class="header">Phone page</h1>

    <form @submit.prevent="onSubmit">

      <div class="mb-3 row">
        <label for="inputPhone" class="col-sm-6 col-form-label">Phone
          <div class="col-lg-12">
        <input v-model.trim.number="phone" type="tel" class="form-control" id="inputPhone" placeholder="phone">
          </div>
        </label>
        <small
            class="helper-text invalid"
            v-if="v$.phone.$error"
        >
          Phone field required,  must be a number. &nbsp; HAS AN ERROR !
        </small>
      </div>
      <div class="mb-3 row">
        <label for="textarea" class="col-sm-6 col-form-label">Description
          <div class="col-lg-12">
        <textarea v-model="description" class="form-control" id="textarea" rows="3"></textarea>
          </div>
        </label>
      </div>

      <div class=" btn-group-lg" role="group" aria-label="Basic mixed styles example">
        <button @click="$router.push('/')" type="button" class="btn btn-warning">Prev</button>
        <!--      <button type="button" class="btn btn-warning">Middle</button>-->
        <button type="submit" class="btn btn-success">Next</button>
      </div>

    </form>
    <div>
      <i class="invalid" v-for="error of v$.$errors"
         :key="error.$uid"
      >
        <strong>{{ error.$validator }}</strong>
        <small> on property</small>
        <strong>{{ error.$property }}</strong>
        <small> says:</small>
        <strong>{{ error.$message }}</strong>
      </i>
    </div>

  </div>
</template>
<script>
// @ is an alias to /src
import useVuelidate from "@vuelidate/core";
import {required} from "@vuelidate/validators";

export default {
  name: 'phone',
  data:() => ({
    phone: null,
    description: ''
  }),
  setup:() => ({ v$: useVuelidate()}),
  validations:()=> ({phone: {required}}),

  methods: {
    onSubmit() {
      if (this.v$.$invalid) {
        this.v$.$touch()
        return
      }
      const formData = {
         phone: this.phone,
         description: this.description
       }
      console.log(formData)
      try {
         this.$store.dispatch('getPhone', formData)
        // await this.$store.dispatch('getInfo')
        // console.log(this.$store.getters.info.locale)
        // await this.$router.push('/')
        if (!this.v$.$error) {
           this.$router.push('/photo')
        }
      } catch (e) {}
      console.log(formData)
      this.phone = this.description = ''
    }
  }
}
</script>
<style scoped>
/*.row {*/
/*  display: flex;*/
/*  justify-content: center;*/
/*}*/
/*.header {*/
/*  text-align: center;*/
/*  color: #030350;*/
/*  margin: 2rem;*/
/*}*/
</style>
