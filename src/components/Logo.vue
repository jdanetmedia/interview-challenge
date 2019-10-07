<template>
  <div class="logo" :style="logoStyle">
    <svg
      class="logo__icon"
      xmlns="http://www.w3.org/2000/svg"
      width="168"
      height="112.3"
      viewBox="0 0 168 112.3"
    >
      <path d="M113.8 24.7v70.1L89 87.6V17.8z" fill="#fff" />
      <path d="M113.8 24.7L89 30.2V17.8z" fill="#777" />
      <path d="M12.7 0h76.4l24.7 24.7H24z" fill="#fff" />
      <path d="M12.7 0l27 24.7H24.2z" fill="#777" />
      <path d="M58.2 100L0 24.7 12.7 0l67.8 87.6z" fill="#fff" />
      <path d="M54.9 95.7L44.4 82l36 5.5z" fill="#777" />
      <path d="M67.7 112.3H0V87.6h80.5z" fill="#fff" />
      <path d="M89 87.6l4 1.7 20.8-1.7v-5.5z" fill="#777" />
      <path d="M113.8 112.3H168V87.6H89z" fill="#fff" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: {
    size: {
      type: Number,
      default: 100
    }
  },
  computed: {
    logoStyle() {
      const styles = {
        width: this.size + "px",
        height: this.size + "px"
      };
      return styles;
    }
  }
};
</script>

<style lang="scss">
.logo {
  background-color: #2db9cf;
  position: relative;
  border-radius: 10%;

  &__icon {
    width: 55%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>