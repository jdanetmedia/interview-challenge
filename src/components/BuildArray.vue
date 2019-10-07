<template>
  <div class="build-array">
    <transition name="result" mode="in-out">
      <div class="build-array__window">
        <h1>Add array items below</h1>
        <div class="build-array__add">
          <input type="number" class="o-input" v-model="newItem" />
          <span class="build-array__error" v-if="error">Sorry, the array must have at least 3 items</span>
          <div class="o-btn" @click="addItem">
            <div class="o-btn__icon"></div>
            <div class="o-btn__label">Add item</div>
          </div>
        </div>
        <div class="build-array__list" v-if="newArray.length > 0">
          <div class="build-array__item" v-for="(n, index) in newArray" :key="index">{{n}}</div>
        </div>
        <div class="build-array__finish">
          <div class="o-btn" @click="imDone">
            <div class="o-btn__icon"></div>
            <div class="o-btn__label">I'm done</div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="overlay" mode="in-out">
      <div class="o-overlay o-overlay--good"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "build-array",
  data: () => {
    return {
      newArray: [],
      newItem: "",
      error: false
    };
  },
  methods: {
    addItem() {
      if (this.newItem !== "") {
        this.newArray.push(this.newItem);
        this.newItem = "";
      }
    },
    imDone() {
      if (this.newArray.length >= 3) {
        this.$emit("new-array", this.newArray);
      } else {
        this.error = true;
      }
    }
  }
};
</script>

<style lang="scss">
.build-array {
  &__list {
    margin-top: 40px;
    margin-bottom: 20px;
  }

  &__window {
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    background-color: #fff;
    width: 90%;
    max-width: 600px;
    padding: 60px;
    border-radius: 2px;

    .o-input {
      margin-bottom: 20px;
    }
  }

  &__finish {
    text-align: right;
  }

  &__item {
    width: 80px;
    height: 80px;
    margin: 2px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: #2db9ce;
    color: #fff;
    font-weight: bold;
    user-select: none;
  }

  &__error {
    color: #e74c3c;
    font-size: 12px;
    text-transform: uppercase;
    position: absolute;
    bottom: 10px;
    right: 12px;
    font-weight: bold;
  }
}
</style>