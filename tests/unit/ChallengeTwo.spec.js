import { shallowMount } from "@vue/test-utils";
import ChallengeTwo from "@/views/ChallengeTwo.vue";

describe("ChallengeTwo.vue", () => {
  it("Gets max triplet from array of numbers", () => {
    const wrapper = shallowMount(ChallengeTwo);
    const array = [-3, 1, 2, -2, 5, 6];
    expect(wrapper.vm.findMaxTriplet(array)).toBe(60);
  });
});
