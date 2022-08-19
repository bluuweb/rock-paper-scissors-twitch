<script setup>
import ButtonGameOption from "./ButtonGameOption.vue";
import { useGame } from "@/composables/useGame.js";

const { userOption, BotOption, resetGame, result } = useGame();
</script>

<template>
    <section class="flex justify-between items-center">
        <div :class="result !== 'lose' && 'animate__animated animate__bounce'">
            <ButtonGameOption :text="userOption" />
        </div>
        <button
            @click="resetGame"
            class="text-lg border-2 rounded-lg px-3 py-2 mx-3"
        >
            Reset
        </button>
        <div :class="result !== 'win' && 'animate__animated animate__bounce'">
            <ButtonGameOption :text="BotOption" />
        </div>
    </section>
</template>

<style>
.sombraEffect {
    border-radius: 50%;
    box-shadow: 0px 0px 0px 20px rgba(201, 201, 201, 0.13),
        0px 0px 0px 40px rgba(221, 221, 221, 0.308),
        0px 0px 0px 60px rgba(221, 221, 221, 0.199);
    transition: box-shadow 1s ease 0s;
}
</style>
