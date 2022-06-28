<template>
  <div class="card-header">
    <h1 class="header">Phone page</h1>

    <form>
      <div class="mb-3 row">
        <label for="inputPhone" class="col-sm-6 col-form-label">Phone
          <div class="col-lg-12">
        <input type="tel" class="form-control" id="inputPhone" placeholder="phone">
          </div>
        </label>
      </div>
      <div class="mb-3 row">
        <label for="textarea" class="col-sm-6 col-form-label">Description
          <div class="col-lg-12">
        <textarea class="form-control" id="textarea" rows="3"></textarea>
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
