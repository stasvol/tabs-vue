<template>
  <div class="card-header">
   <h1 class="header">Names page</h1>
    <form @click="onSubmit">

      <div class="mb-3 row">
        <label for="inputName" class="col-sm-6 col-form-label">Name
          <div class="col-lg-12">
            <input type="text" class="form-control" id="inputName" placeholder="name">
          </div>
        </label>
      </div>
      <div class="mb-3 row">
        <label for="inputEmail" class="col-sm-6 col-form-label">Email
        <div class="col-lg-12">
          <input type="email" class="form-control" id="inputEmail" placeholder="email">
        </div>
        </label>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-6 col-form-label">Password
        <div class="col-lg-12">
          <input type="password" class="form-control" id="inputPassword" placeholder="password">
        </div>
        </label>
      </div>
      <div class="form-check form-switch">
        <label class="form-check-label" for="switchCheck">ON
        <input class="form-check-input" type="checkbox" role="switch" id="switchCheck">
        </label>
      </div>
    </form>
    <div class=" btn-group-lg" role="group" aria-label="Basic mixed styles example">
      <button type="button" class="btn btn-warning">Left</button>
<!--      <button type="button" class="btn btn-warning">Middle</button>-->
      <button type="button" class="btn btn-success">Right</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
methods: {
  onSubmit() {
    console.log('SUBMIT')
  }
}
}
</script>
<style scoped>
.form-check {
  display: flex;
  justify-content: center;
}
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
