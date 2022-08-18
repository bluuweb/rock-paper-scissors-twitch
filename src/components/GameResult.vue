<script setup>
import { useGame } from "@/composables/useGame";
import ButtonOption from "./ButtonOption.vue";
import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();

const { userOption, BotOption, resetGame, result } = useGame();

if (result.value === "win") {
    jsConfetti.addConfetti();
}
</script>

<template>
    <section class="flex justify-between items-center">
        <ButtonOption :text="userOption" />
        <div>
            <h2 class="uppercase">{{ result }}</h2>
            <button @click="resetGame">Try Again</button>
        </div>
        <ButtonOption :text="BotOption" />
    </section>
</template>
