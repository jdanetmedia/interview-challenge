<template>
  <div id="app" class="app">
    <div class="page">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 18px;
  line-height: 1.56;
}

h1,
h2,
h3 {
  line-height: 1.1;
  margin-bottom: 20px;
}

p {
  margin-bottom: 20px;
}

.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #595959;
  background-color: #fafafa;
  min-height: 100vh;
}

.page {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 80px 60px;
  text-align: center;
}

.o-btn {
  display: inline-flex;
  background: none;
  border: none;
  border-radius: 0;
  appearance: none;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  position: relative;
  padding-left: 48px;
  padding-right: 20px;
  cursor: pointer;

  &:focus {
    outline: 0;
  }

  &__icon {
    width: 40px;
    height: 40px;
    background: #2db9cf;
    border-radius: 20px;
    position: absolute;
    top: 0;
    left: 0;
    transition: width 300ms ease-out;
    z-index: 0;

    &:before,
    &:after {
      content: "";
      display: block;
      background-color: #fff;
      width: 12px;
      height: 2px;
      position: absolute;
      top: 14px;
      left: 14px;
      transform: rotate(45deg);
      transition: left 300ms ease-in-out;
    }

    &:after {
      transform: rotate(-45deg);
      top: 22px;
    }
  }

  &:hover {
    .o-btn__icon {
      width: 100%;

      &:before,
      &:after {
        left: 18px;
      }
    }

    .o-btn__label {
      color: #fff;
      transform: translateX(-5px);
    }
  }

  &__label {
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    z-index: 1;
    transition: color 300ms ease-in-out, transform 300ms ease-in-out;
  }
}

.o-task {
  border-radius: 2px;
  font-size: 16px;
  line-height: 1.3;
  text-align: left;
  background-color: #fff;
  border: 1px solid #ebebeb;
  padding: 20px;
  padding-left: 25px;
  position: relative;

  &:before {
    content: "";
    width: 5px;
    position: absolute;
    top: 0;
    left: -1px;
    bottom: 0;
    background-color: #2db9cf;
    font-style: italic;
  }
}

.o-input {
  width: 100%;
  height: 50px;
  -webkit-appearance: none;
  border: 1px solid #ebebeb;
  border-radius: 2px;
  font-size: 20px;
  padding: 0 12px;

  &:focus {
    outline: 0;
  }
}

.o-result {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  max-width: 600px;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 60px;
  text-align: center;
  z-index: 10;
  border-radius: 2px;

  h1 {
    margin: 0;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 600px;
    height: 5px;
    background-color: lighten(#595959, 35%);
    transform-origin: left;
    animation: timer 3000ms ease-in forwards;
  }
}

.o-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  background-color: rgba(#e74c3c, 0.9);

  &--good {
    background-color: rgba(#2ecc71, 0.9);
  }
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 300ms;
}
.overlay-enter, .overlay-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.result-enter-active,
.result-leave-active {
  transition: opacity 200ms, transform 300ms;
}
.result-enter, .result-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(1.1) translate(-50%, -50%);
}

@keyframes timer {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
</style>
