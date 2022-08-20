<script setup>
import { computed } from "vue";
import IconPaper from "./icons/IconPaper.vue";
import IconRock from "./icons/IconRock.vue";
import IconScissors from "./icons/IconScissors.vue";

const { text } = defineProps(["text"]);

const classDinamic = computed(() => {
    if (text === "rock") return "border-red-500 hover:border-red-700";
    if (text === "paper") return "border-blue-500 hover:border-blue-700";
    if (text === "scissors") return "border-yellow-500 hover:border-yellow-700";
});
</script>

<template>
    <button
        class="border-8 rounded-full h-32 w-32 bg-white"
        :class="classDinamic"
    >
        <IconPaper v-if="text === 'paper'" class="w-[50px] mx-auto" />
        <IconRock v-if="text === 'rock'" class="w-[50px] mx-auto" />
        <IconScissors
            v-if="text === 'scissors'"
            class="w-[50px] mx-auto rotate-90"
        />
    </button>
</template>
