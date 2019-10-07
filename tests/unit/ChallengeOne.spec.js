import { shallowMount } from "@vue/test-utils";
import ChallengeOne from "@/views/ChallengeOne.vue";

describe("ChallengeOne.vue", () => {
  it("Checks for proper nesting", () => {
    const wrapper = shallowMount(ChallengeOne);
    expect(wrapper.vm.inputString).toBe("(()(())())");
    expect(wrapper.vm.solution(wrapper.vm.inputString)).toBe(1);
  });
});
