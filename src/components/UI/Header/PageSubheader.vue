<template>
  <h2 class="page_subheader">
    <slot></slot>
  </h2>
</template>

<script>
export default {};
</script>

<style>
.page_subheader {
  color: #6d6d6d;
}
@media (min-width: 0px) {
  .page_subheader {
    font-size: 5vw;
  }
}

@media (min-width: 576px) {
  .page_subheader {
    font-size: 3.5vw;
  }
}
@media (min-width: 992px) {
  .page_subheader {
    font-size: 3vw;
  }
}

@media (min-width: 1200px) {
  .page_subheader {
    font-size: 1.75vw;
  }
}
</style>
