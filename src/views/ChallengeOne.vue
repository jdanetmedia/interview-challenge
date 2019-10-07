<template>
  <transition name="start">
    <div class="challenge-one" v-if="prevGone">
      <h1>Challenge #1</h1>
      <p>Write a function that, given a string S consisting of N characters, returns 1 if string S is properly nested and 0 otherwise.</p>
      <div class="o-task">
        <strong>A string S consisting of N characters is called properly nested if:</strong>
        <br />
        <br />S is empty;
        <br />S has the form "(U)" where U is a properly nested string;
        <br />S has the form "VW" where V and W are properly nested strings.
        <br />For example, string "(()(())())" is properly nested but string "())" isn't.
      </div>

      <div class="challenge-one__test">
        <h2>Enter the string to test</h2>
        <p>Replace the string to test another.</p>
        <input type="text" class="o-input" v-model="inputString" />
        <div class="challenge-one__cta">
          <button class="o-btn" id="testButton" @click="checkString">
            <div class="o-btn__icon"></div>
            <div class="o-btn__label">Run the test</div>
          </button>
        </div>
      </div>
      <transition name="result" mode="in-out">
        <div class="o-result" v-if="result === 0 || result === 1">
          <div v-if="result === 1">
            <h1>"1"</h1>
            <h1>
              YEAH!
              <br />The string is properly nested! :-D
            </h1>
          </div>
          <div v-if="result === 0">
            <h1>"0"</h1>
            <h1>
              Sorry...
              <br />The string is not properly nested... :-(
            </h1>
          </div>
        </div>
      </transition>
      <transition name="overlay" mode="in-out">
        <div
          class="o-overlay"
          :class="{'o-overlay--good': result === 1}"
          v-if="result === 0 || result === 1"
          @click="result = null"
        ></div>
      </transition>
      <div class="o-btn challenge-one__forward" @click="goToSecond">
        <div class="o-btn__icon"></div>
        <div class="o-btn__label">Challenge #2</div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      inputString: "(()(())())",
      tokens: ["(", ")"],
      result: null,
      prevGone: false
    };
  },
  methods: {
    checkString() {
      this.result = this.solution();
      setTimeout(() => {
        this.result = null;
      }, 3000);
    },
    solution() {
      const charArray = this.inputString.split("");
      let stack = [];

      for (let i = 0; i < charArray.length; i++) {
        if (this.isValidChar(charArray[i])) {
          if (this.isOpen(charArray[i])) {
            stack.push(charArray[i]);
          } else {
            if (stack.length === 0) {
              return 0;
            }
            const top = stack.pop();
            if (!this.matchPairs(top, charArray[i])) {
              return 0;
            }
          }
        }
      }
      return stack.length === 0 ? 1 : 0;
    },
    isValidChar(character) {
      const str = "()";
      if (str.indexOf(character) > -1) {
        return true;
      } else {
        return false;
      }
    },
    isOpen(pChar) {
      return pChar === this.tokens[0] ? true : false;
    },
    matchPairs(topOfStack, closePar) {
      if (this.tokens[0] === topOfStack && this.tokens[1] === closePar) {
        return true;
      }
      return false;
    },
    goToSecond() {
      this.$router.push("/challenge-two");
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
.challenge-one {
  text-align: left;

  &__test {
    background-color: #fff;
    border: 1px solid #ebebeb;
    border-radius: 2px;
    margin-top: 20px;
    padding: 30px;
  }

  &__cta {
    text-align: center;
  }

  .o-input {
    margin-bottom: 40px;
  }

  .o-btn {
    margin-bottom: 20px;
  }

  &__forward {
    position: fixed;
    bottom: 20px;
    right: 30px;
  }
}
@media (min-width: 768px) {
  .challenge-one {
    margin-top: 100px;
  }
}

@media (min-width: 1024px) {
  .challenge-one {
    margin-top: 40px;
  }
}
</style>