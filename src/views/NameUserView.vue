<template>
  <div class="card-header" id="inputName">
    <h1 class="header">Names page</h1>

    <form @submit.prevent="onSubmit">

      <div class="mb-3 row">
     <NamesInput v-model.trim="name" :value="getName?.name?.name" />

<!--        <label for="inputName" class="col-sm-6 col-form-label">Name-->
<!--          <div class="col-lg-12" >-->

<!--            <input-->
<!--                v-model.trim="name"-->
<!--                :placeholder="getName.name?.name || 'name'"-->
<!--                type="text"-->
<!--                class="form-control validate"-->
<!--                id="inputName" >-->
<!--&lt;!&ndash;            :is="getName.name?.name"&ndash;&gt;-->
<!--&lt;!&ndash;            @input="getName.name?.name"&ndash;&gt;-->
<!--          </div>-->
<!--        </label>-->
        <small
            class="helper-text invalid"
            v-if="v$.name?.$error"
        >
          Name field required. &nbsp; HAS AN ERROR !
        </small>
      </div>
      <DescriptionsInput v-model.trim="description"/>
<!--      <div class="mb-3 row">-->
<!--        <label for="textarea" class="col-sm-6 col-form-label">Description-->
<!--          <div class="col-lg-12">-->
<!--            <textarea v-model.trim="description"-->
<!--                      :placeholder="getName.name?.description || 'description'"-->
<!--                      class="form-control" id="textarea" rows="3">-->

<!--            </textarea>-->
<!--          </div>-->
<!--        </label>-->
<!--&lt;!&ndash;        <label for="inputEmail" class="col-sm-6 col-form-label">Email&ndash;&gt;-->
<!--&lt;!&ndash;          <div class="col-lg-12">&ndash;&gt;-->
<!--&lt;!&ndash;            <input v-model.trim="email"&ndash;&gt;-->
<!--&lt;!&ndash;                   :placeholder="getName.name?.email || 'email'"&ndash;&gt;-->
<!--&lt;!&ndash;                   type="email" class="form-control validate"&ndash;&gt;-->
<!--&lt;!&ndash;                   id="inputEmail"&ndash;&gt;-->
<!--&lt;!&ndash;                   placeholder="email">&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--&lt;!&ndash;        </label>&ndash;&gt;-->

<!--&lt;!&ndash;        <small&ndash;&gt;-->
<!--&lt;!&ndash;            class="helper-text invalid"&ndash;&gt;-->
<!--&lt;!&ndash;            v-if="v$.email.$error"&ndash;&gt;-->
<!--&lt;!&ndash;        >&ndash;&gt;-->
<!--&lt;!&ndash;          Email field required. &nbsp; HAS AN ERROR !&ndash;&gt;-->
<!--&lt;!&ndash;        </small>&ndash;&gt;-->

<!--      </div>-->
<!--      <div class="mb-3 row">-->
<!--        <label for="inputPassword" class="col-sm-6 col-form-label">Password-->
<!--          <div class="col-lg-12">-->
<!--            <input v-model.trim="password" type="password" class="form-control validate" id="inputPassword"-->
<!--                   placeholder="password" autocomplete="current password">-->
<!--          </div>-->
<!--        </label>-->
<!--        <small-->
<!--            class="invalid"-->
<!--            v-if="v$.password.$error"-->
<!--        >-->
<!--          Password field is required and length {{ password.length }} - should be:-->
<!--          {{ v$.password.minLength.$params.min }}.&nbsp; HAS AN ERROR !-->
<!--        </small>-->
<!--      </div>-->

<!--      <CheckToggle v-model="checkToggle" />-->

      <div class="form-check form-switch">
        <label class="form-check-label" for="switchCheck" > {{checkToggle ? 'ON' : 'OF'}}
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

import useVuelidate from "@vuelidate/core";
import {email, minLength, required} from "@vuelidate/validators";
import {mapActions, mapGetters} from "vuex";
import Input from "@/components/EmailInput";
import NamesInput from "@/components/NamesInput";
import DescriptionsInput from "@/components/DescriptionsInput";
import CheckField from "@/components/CheckField";
import CheckToggle from "@/components/CheckToggle";

export default {
  name: 'nameUser',
  // props: ['modelValue'],
  // emits: ['update:modelValue'],

  data: () => ({
    name: '',
    description: '',
    // email: '',
    password: '',
    checkToggle: null,
  }),

  mounted() {
    if (localStorage.checkToggle) {
      this.checkToggle = localStorage.checkToggle;
    }
  },

  watch: {
    checkToggle: {
      handler(newCheckToggle) {
        localStorage.checkToggle = newCheckToggle;
        if (localStorage.checkToggle === newCheckToggle) {
          // localStorage.clear()
          localStorage.removeItem('checkToggle')
        }
      },
      deep: true,
    }
    },
  // watch: {
  //   checked:{
  //     handler(newChecked) {
  //       localStorage.checked = JSON.stringify(newChecked);
  //     },
  //     deep:true
  //   },
  // }


  setup: () => ({v$: useVuelidate()}),
  // setup() {
  //   return {v$: useVuelidate()}
  // },
  validations() {
    return {
      // name: {required},
      // email: {required, email},
      // password: {required, minLength: minLength(6)}
    }
  },

  components: {CheckToggle, CheckField, DescriptionsInput, Input, NamesInput},

  computed: mapGetters(['getName','getPhone','getPhoto', 'checkValue']),

  // methods: mapActions(['getName']),
  methods: {

    toggleCheck() {
      this.checkToggle = !this.checkToggle
    },

    onSubmit() {
      if (this.v$.$invalid) {
        this.v$.$touch()
        return
      }

      const formData = {
        name: this.name,
        description: this.description,
        // email: this.email,
        // password: this.password,
        checkToggle: this.checkToggle,
      }
      // this.$emit('submit',  formData )
      try {
        this.$store.dispatch('getName', formData)
        if (!this.v$.$error) {
          this.$router.push('/phone')
        }

      } catch (e) {
        throw new Error(e)
      }
      //   if (this.v$.$error === false) {
      //     this.$router.push('/phone')
      // this.name = this.email = this.password = ''
      // this.name = this.$store.state?.name?.name
      // console.log(this.$store.state?.name?.name)

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
