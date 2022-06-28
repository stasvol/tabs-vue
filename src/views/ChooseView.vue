
<template>
  <div class="card-header">
  <h1 class="header">Choose page</h1>
    <div class="checked">
    <form  >
      <div class="form-check  mb-3 ">
        <label class="form-check-label col-sm-1" for="flexCheckDefault">
          <div>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          </div>
          Add Name
        </label>
      </div>
      <div class="form-check  mb-3">
        <label class="form-check-label col-sm-1 " for="flexCheckDefault">
          <div>
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          </div>
          Add email
        </label>
      </div>
      <div class="form-check mb-3">
        <label class="form-check-label col-sm-1" for="flexCheckDefault">
          <div>
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          </div>
          Add phone
        </label>
      </div>
      <div class="form-check mb-3">
        <label class="form-check-label col-sm-1" for="flexCheckDefault">
          <div>
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          </div>
          Add photo
        </label>
      </div>
    </form>
    </div>
  </div>
</template>
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
.rows  {
/*display: flex;*/
/*justify-content: center;*/
/*  align-items: center;*/
}
.col {
}
</style>