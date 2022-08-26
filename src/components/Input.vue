<template>
        <label for="inputName" class="col-sm-6 col-form-label">NAME=>
            <div class="col-lg-12" >

              <input
                  :value="$store.state.name?.name || ''"
                  type="text"
                  class="form-control validate"
                  id="inputName"
                  placeholder="name"
              >


            </div>
          </label>
</template>