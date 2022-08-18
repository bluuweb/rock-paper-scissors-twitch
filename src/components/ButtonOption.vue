<script setup>
import { computed } from "@vue/reactivity";
import IconHand from "./icons/IconHand.vue";
import IconRockHand from "./icons/IconRockHand.vue";
import IconScissorsHand from "./icons/IconScissorsHand.vue";

const { text } = defineProps(["text"]);

const optionColorClass = {
    rock: "border-red-500 hover:border-red-700",
    paper: "border-blue-500 hover:border-blue-700",
    scissors: "border-yellow-500 hover:border-yellow-700",
};

const dinamicClass = computed(() => optionColorClass[text]);
</script>

<template>
    <button
        class="border-[10px] rounded-full p-4 h-[150px] w-[150px] flex justify-center items-center bg-white"
        :class="dinamicClass"
    >
        <IconHand v-if="text === 'paper'" width="80" />
        <IconRockHand v-if="text === 'rock'" width="75" />
        <IconScissorsHand v-if="text === 'scissors'" width="80" />
    </button>
</template>

<style scoped></style>
