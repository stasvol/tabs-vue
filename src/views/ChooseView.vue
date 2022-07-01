<template>
  <div class="card-header">
    <Modal />
    <h1 class="header">Choose page</h1>
    <div class="checked">
      <form @submit.prevent="onSubmit">
        <div class="form-check  mb-3 ">
          <label class="form-check-label col-sm-1" for="flexCheckDefault">
            <div>
              <input v-model="check" class="form-check-input" type="checkbox" value="1" id="flexCheckDefault">
            </div>
            Add Name
          </label>
        </div>
        <div class="form-check  mb-3">
          <label class="form-check-label col-sm-1 " for="flexCheckDefault">
            <div>
              <input v-model="check" class="form-check-input" type="checkbox" value="2" id="flexCheckDefault">
            </div>
            Add email
          </label>
        </div>
        <div class="form-check mb-3">
          <label class="form-check-label col-sm-1" for="flexCheckDefault">
            <div>
              <input v-model="check" class="form-check-input" type="checkbox" value="3" id="flexCheckDefault">
            </div>
            Add phone
          </label>
        </div>
        <div class="form-check mb-3">
          <label class="form-check-label col-sm-1" for="flexCheckDefault">
            <div>
              <input v-model="check" class="form-check-input" type="checkbox" value="4" id="flexCheckDefault">
            </div>
            Add photo
          </label>
        </div>
        <div class="btn-group-lg" role="group" aria-label="Basic mixed styles example">
          <button type="submit" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Save</button>
          <!--      <button type="button" class="btn btn-warning">Middle</button>-->
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
  components: {Modal},
  data:() => ({
    check: {
     value: false
    }
  }),
  methods: {
    onSubmit() {
      const formData = {
        check: this.check.value
      }
      console.log(formData)
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