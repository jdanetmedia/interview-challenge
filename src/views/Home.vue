<template>
  <transition name="start">
    <div class="home">
      <app-logo :size="168" />
      <h1 class="home__header">
        Shoreline
        <br />interview challenge
      </h1>
      <p>Tak for samtalen i fredags. Det var spændende at møde jer og få et indblik i jeres hverdag.</p>
      <p>
        Hermed mit bud på den lille udfordring.
        <br />Jeg glæder mig til at høre fra jer.
      </p>
      <p>
        <b>
          Venlig Hilsen
          <br />Jesper Dalsgaard
        </b>
      </p>
      <div class="o-btn" @click="startChallence">
        <div class="o-btn__icon"></div>
        <div class="o-btn__label">Start</div>
      </div>
    </div>
  </transition>
</template>

<script>
import Logo from "@/components/Logo";

export default {
  components: {
    "app-logo": Logo
  },
  methods: {
    startChallence() {
      this.$router.push("/challenge-one");
    }
  }
};
</script>

<style lang="scss">
.home {
  margin: 0 auto;
  max-width: 600px;
  &__header {
    font-size: 27px;
    text-transform: uppercase;
  }

  .logo {
    margin: 0 auto;
    margin-bottom: 40px;
  }
}

@media (min-width: 768px) {
  .home {
    margin-top: 100px;
  }
}

@media (min-width: 1024px) {
  .home {
    margin-top: 40px;
  }
}

.start-enter-active,
.start-leave-active {
  transition: opacity 1000ms;
}
.start-enter, .start-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>