<script setup>
import { useGame } from "@/composables/useGame.js";

import ButtonGameOption from "@/components/ButtonGameOption.vue";

const { userOption, botOption, resetGame, result } = useGame();
</script>

<template>
    <section class="flex justify-between items-center max-w-lg mx-auto">
        <ButtonGameOption
            :text="userOption"
            :class="result !== 'lose' && 'animate__animated animate__bounce'"
        />
        <button class="bg-slate-400 px-4 py-3 rounded-lg" @click="resetGame">
            Reset
        </button>
        <ButtonGameOption
            :text="botOption"
            :class="result !== 'win' && 'animate__animated animate__bounce'"
        />
    </section>
</template>
