<template>
  <div class="card-header">
    <h1 class="header">Photo page</h1>
    <form @submit.prevent="onSubmit">
      <div class="mb-3 row">
        <label for="formFile" class="col-sm-6 col-form-label">Choose files
          <div class="col-lg-10">
            <input v-on:change="photo" class="form-control" type="file" id="formFile">
          </div>
        </label>
      </div>
      <div class=" btn-group-lg" role="group" aria-label="Basic mixed styles example">
        <button @click="$router.push('/phone')" type="button" class="btn btn-warning">Prev</button>
        <!--      <button type="button" class="btn btn-warning">Middle</button>-->
        <button type="submit" class="btn btn-success">Next</button>
      </div>
    </form>

  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'photo',
  data:() => ({
    photo: []
  }),
  methods: {
    onSubmit() {
      const formData = {
        photo: this.photo
      }
      this.photo = []
      console.log(formData)
    }
  }
}
</script>
<style>
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