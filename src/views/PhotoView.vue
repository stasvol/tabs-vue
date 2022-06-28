<template>
  <div class="card-header">
    <h1 class="header">Photo page</h1>
    <form>
      <div class="mb-3 row">
        <label for="formFile" class="col-sm-6 col-form-label">Choose files
          <div class="col-lg-10">
            <input class="form-control" type="file" id="formFile">
          </div>
        </label>
      </div>
    </form>

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