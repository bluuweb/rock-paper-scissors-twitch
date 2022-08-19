<script setup>
import { useGame } from "@/composables/useGame.js";
import ButtonGameOption from "@/components/ButtonGameOption.vue";

const { startGame } = useGame();
</script>

<template>
    <section
        class="grid grid-cols-2 justify-items-center max-w-md mx-auto bg-[url('@/assets/bg-triangle.svg')] bg-no-repeat bg-center bg-[length:10rem]"
    >
        <ButtonGameOption text="rock" @click="startGame('rock')" />
        <ButtonGameOption text="paper" @click="startGame('paper')" />
        <div class="col-span-2">
            <ButtonGameOption text="scissors" @click="startGame('scissors')" />
        </div>
    </section>
</template>
