<template>
  <div class="card-header" id="inputPhone">
    <h1 class="header">Phone page</h1>

    <form @submit.prevent="onSubmit">

      <div class="mb-3 row">
        <PhoneInput v-model.number.trim="phone" />
<!--        <label for="inputPhone" class="col-sm-6 col-form-label">Phone-->
<!--          <div class="col-lg-12">-->
<!--        <input v-model.trim.number="phone"  :placeholder="getPhone.phone?.phone || 'phone'" type="tel" class="form-control" id="inputPhone" >-->

<!--          </div>-->
<!--        </label>-->
<!--        <small-->
<!--            class="helper-text invalid"-->
<!--            v-if="v$.phone.$error"-->
<!--        >-->
<!--          Phone field required,  must be a number. &nbsp; HAS AN ERROR !-->
<!--        </small>-->
      </div>
      <EmailInput v-model.trim="email" />
<!--      <div class="mb-3 row">-->
<!--        <label for="inputEmail" class="col-sm-6 col-form-label">Email-->
<!--          <div class="col-lg-12">-->
<!--            <input v-model.trim="email"-->
<!--                   :placeholder="getPhone.phone?.email || 'email'"-->
<!--                   type="email" class="form-control validate"-->
<!--                   id="inputEmail"-->
<!--                   placeholder="email">-->
<!--          </div>-->
<!--        </label>-->
<!--&lt;!&ndash;        <label for="textarea" class="col-sm-6 col-form-label">Description&ndash;&gt;-->
<!--&lt;!&ndash;          <div class="col-lg-12">&ndash;&gt;-->
<!--&lt;!&ndash;        <textarea v-model="description" :placeholder="getPhone.phone?.description || 'description'" class="form-control" id="textarea" rows="3"></textarea>&ndash;&gt;-->
<!--&lt;!&ndash;          </div>&ndash;&gt;-->
<!--&lt;!&ndash;        </label>&ndash;&gt;-->
<!--      </div>-->

      <div class=" btn-group-lg" role="group" aria-label="Basic mixed styles example">
        <button @click="namePath" type="button" class="btn btn-warning">Prev</button>
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
import {createRouter as $router} from "vue-router";
import {mapGetters} from "vuex";
import CustomInput from "@/components/NamesInput";
import PhoneInput from "@/components/PhoneInput";
import EmailInput from "@/components/EmailInput";

export default {
  name: 'phone',
  components: {EmailInput, PhoneInput, CustomInput},
  data:() => ({
    // name:'',
    phone: null,
    email: ''
    // description: ''
  }),

  // mounted() {
  //   if (localStorage.phone && localStorage.description) {
  //     this.phone = localStorage.phone;
  //     this.description = localStorage.description;
  //   }
  // },
  // watch: {
  //   phone(newPhone) {
  //     localStorage.phone = newPhone;
  //
  //   },
  //   description( newDescription) {
  //     localStorage.description = newDescription;
  //   }
  // },

  setup:() => ({ v$: useVuelidate()}),

  // validations:()=> ({phone: {required}}),

  // computed: {
  //   getPhone() {
  //     return this.$store.getters.getPhone
  //   }
  // },

  methods: {
    namePath() {
      this.$router.push('/')
    },

    onSubmit() {
      if (this.v$.$invalid) {
        this.v$.$touch()
        return
      }
      const formData = {
         phone: this.phone,
         email: this.email,
         // description: this.description
       }
      try {
         this.$store.dispatch('getPhone', formData)

        if (this.getName.name.name) {
           this.$router.push('/photo')
        }else if (!this.getName.name.name) {
          this.$router.push('/')
        }

      } catch (e) {
        throw new Error(e)
      }
      // this.phone = this.description = ''

    }
  },
  computed: mapGetters(['getName','getPhone','getPhoto', 'checkValue']),
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
