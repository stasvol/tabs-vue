<template>
  <div class="card-header">
    <h1 class="header">Names page</h1>

    <form @submit.prevent="onSubmit">
      <div class="mb-3 row">
        <label for="inputName" class="col-sm-6 col-form-label">Name
          <div class="col-lg-12">
            <input v-model.trim="name" type="text" class="form-control validate" id="inputName" placeholder="name">
          </div>
        </label>
        <small
            class="helper-text invalid"
            v-if="v$.name.$error"
        >
          Name field required. &nbsp; HAS AN ERROR !
        </small>
      </div>
      <div class="mb-3 row">
        <label for="inputEmail" class="col-sm-6 col-form-label">Email
          <div class="col-lg-12">
            <input v-model.trim="email" type="email" class="form-control validate" id="inputEmail" placeholder="email">
          </div>
        </label>
        <small
            class="helper-text invalid"
            v-if="v$.email.$error"
        >
          Email field required. &nbsp; HAS AN ERROR !
        </small>

      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-6 col-form-label">Password
          <div class="col-lg-12">
            <input v-model.trim="password" type="password" class="form-control validate" id="inputPassword"
                   placeholder="password">
          </div>
        </label>
        <small
            class="invalid"
            v-if="v$.password.$error"
        >
          Password field is required and length {{ password.length }} - should be:
          {{ v$.password.minLength.$params.min }}.&nbsp; HAS AN ERROR !
        </small>
      </div>
      <div class="form-check form-switch">
        <label class="form-check-label" for="switchCheck">{{ checkToggle ? 'ON' : 'OF'}}
          <input
              v-model="checkToggle"
              class="form-check-input"
              type="checkbox" role="switch"
              id="switchCheck"
              @click="toggleCheck"
              value="checkToggle"
          >
        </label>
      </div>
      <div class=" btn-group-lg" role="group" aria-label="Basic mixed styles example">
        <!--      <button type="button" class="btn btn-warning">Prev</button>-->
        <!--      <button type="button" class="btn btn-warning">Middle</button>-->
        <button
            type="submit"
            class="btn btn-success"
        >
          Next
        </button>
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
    <!--    <b> Name: {{name}}</b>-->
    <!--    <b> Email: {{email}}</b>-->
  </div>
</template>

<script>
// @ is an alias to /src

// import mapGetters from "vuex";
import useVuelidate from "@vuelidate/core";
import {email, minLength, required} from "@vuelidate/validators";
import {mapActions} from "vuex";

export default {
  name: 'nameUser',
  data: () => ({
    name: '',
    email: '',
    password: '',
    checkToggle: null
  }),

  setup: () => ({v$: useVuelidate()}),
  // setup() {
  //   return {v$: useVuelidate()}
  // },
  validations() {
    return {
      name: {required},
      email: {required, email},
      password: {required, minLength: minLength(6)}
    }
  },

  components: {},

  // methods: mapActions(['getName']),
  methods: {
    toggleCheck() {
      // console.log(this.check)
      this.checkToggle = !this.checkToggle
    },
    // patchPhone() {
    //   if (this.v$.$error === false) {
    //     this.$router.push('/phone')
    //   }
    // },
    onSubmit() {
      if (this.v$.$invalid) {
        this.v$.$touch()
        return
      }
      const formData = {
        name: this.name,
        email: this.email,
        password: this.password,
        checkToggle: this.checkToggle
      }
      console.log(formData)

      try {
        // this.getName(formData)
        this.$store.dispatch('getName', formData)
        if (!this.v$.$error) {
          this.$router.push('/phone')
        }
      } catch (e) {
      }
      //   if (this.v$.$error === false) {
      //     this.$router.push('/phone')
      this.name = this.email = this.password = ''

    },
  },
}
</script>
<style scoped>
.form-check {
  display: flex;
  justify-content: center;
}

.checkVal {
  content: "ON";
}

.nodCheck {
  content: "OF";
}

/*.validate {*/
/*  color: #a90f0f;*/
/*}*/
/*.btn {*/
/* width: 250px;*/
/*}*/
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
