<template>
  <div class="col">
    <!-- Button trigger modal -->
<!--   <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">-->
<!--      Launch demo modal-->
<!--    </button>-->
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mod">
             <span>Name:</span>
            </div>
            <div class="mod">
              <span>Email:{</span>
            </div>
            <div class="mod">
              <span>Phone:</span>
            </div>
            <div class="mod">
              <span>Description:</span>
            </div>
            <div class="mod">
              <span>Photo:</span>
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
  ...mapGetters
}
</script>
<style scoped>
.mod {
  border: 1px solid #c2c1c1;
  padding: 1rem;
}
</style>