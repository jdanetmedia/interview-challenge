<template>
  <transition name="start" mode="in-out" v-if="prevGone">
    <div class="challenge-two">
      <h1>Challenge Two</h1>
      <p>Write a function that, given a non-empty zero-indexed array A, returns the value of the maximal product of any triplet.</p>
      <div class="o-task">
        <strong>For example, given array A such that: [-3, 1, 2, -2, 5, 6]</strong>
        <br />
        <br />The function should return 60, as the product of triplet (2, 4, 5) is maximal.
      </div>
      <div class="challenge-one__test">
        <h2>The following array is ready to be tested</h2>
        <div class="challenge-two__list">
          <div
            class="challenge-two__item"
            v-for="(n, index) in testArray"
            :key="index"
            @dblclick="showAddNew = true"
          >{{n}}</div>
        </div>
        <p>Doubleclick one of the items to build a new array for testing.</p>
        <div class="challenge-one__cta">
          <div class="o-btn" @click="testNow">
            <div class="o-btn__icon"></div>
            <div class="o-btn__label">Run the test</div>
          </div>
        </div>
      </div>
      <transition name="result" mode="in-out">
        <div class="o-result" v-if="result">
          <h1>
            Exellent!
            <br />
            The maximal triplet is {{result}}
          </h1>
        </div>
      </transition>
      <transition name="overlay" mode="in-out">
        <div class="o-overlay o-overlay--good" v-if="result" @click="result = null"></div>
      </transition>
      <build-array @new-array="replaceArray" v-if="showAddNew" />
    </div>
  </transition>
</template>

<script>
import BuildArray from "@/components/BuildArray";
export default {
  components: {
    BuildArray
  },
  data: () => {
    return {
      testArray: [-3, 1, 2, -2, 5, 6],
      result: null,
      prevGone: false,
      showAddNew: false
    };
  },
  methods: {
    testNow() {
      this.result = this.findMaxTriplet(this.testArray);
      setTimeout(() => {
        this.result = null;
      }, 3000);
    },
    findMaxTriplet(array) {
      let sum = 0;

      for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
          for (let k = j + 1; k < array.length; k++) {
            if (sum < array[i] * array[j] * array[k]) {
              sum = array[i] * array[j] * array[k];
            }
          }
        }
      }

      return sum;
    },
    replaceArray(payload) {
      if (payload.length > 0) {
        this.testArray = payload;
      }
      this.showAddNew = false;
    }
  },
  mounted() {
    setTimeout(() => {
      this.prevGone = true;
    }, 1000);
  }
};
</script>

<style lang="scss">
.challenge-two {
  text-align: left;

  &__list {
    margin-bottom: 20px;
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
}

@media (min-width: 768px) {
  .challenge-two {
    margin-top: 100px;
  }
}

@media (min-width: 1024px) {
  .challenge-two {
    margin-top: 40px;
  }
}
</style>