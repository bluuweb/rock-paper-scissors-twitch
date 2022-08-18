<script setup>
import { ref } from "vue";

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const userOption = ref("");
const BotOption = ref("");
const options = ["paper", "rock", "scissors"];
const result = ref("");
const totalwins = ref(0);
const totallost = ref(0);
const totaldraw = ref(0);

const startGame = (opcion) => {
    userOption.value = opcion;
    BotOption.value = options[getRandomIntInclusive(0, 2)];

    // Opción 1: jomersgamer
    const caseopcion = {
        rock: { rock: "draw", scissors: "win", paper: "lose" },
        paper: { paper: "draw", scissors: "lose", rock: "win" },
        scissors: { paper: "win", scissors: "draw", rock: "lose" },
    };

    const res = caseopcion[opcion][BotOption.value];
    switch (res) {
        case "win":
            totalwins.value++;
            break;
        case "draw":
            totaldraw.value++;
            break;
        case "lose":
            totallost.value++;
            break;
    }
    result.value = res;

    // opcion 2:
    // const objectOptions = {
    //     rockscissors: true,
    //     paperrock: true,
    //     scissorspaper: true,
    // };
    // const res = objectOptions[userOption.value + BotOption.value];
    // if (res) {
    //     totalwins.value++;
    //     return (result.value = "winner");
    // }
    // if (userOption.value === BotOption.value) {
    //     totaldraw.value++;
    //     return (result.value = "draw");
    // }
    // totallost.value++;
    // return (result.value = "You lose");

    // opcion 3:
    // if (userOption.value === BotOption.value) {
    //     totaldraw.value++;
    //     return (result.value = "draw");
    // }
    // if (
    //     (userOption.value === "rock" && BotOption.value === "scissors") ||
    //     (userOption.value === "paper" && BotOption.value === "rock") ||
    //     (userOption.value === "scissors" && BotOption.value === "paper")
    // ) {
    //     totalwins.value++;
    //     return (result.value = "winner");
    // }
    // totallost.value++;
    // return (result.value = "You lose");

    // opcion 4:
    // switch (userOption.value + BotOption.value) {
    //     case "rockscissors":
    //     case "paperrock":
    //     case "scissorspaper":
    //         totalwins.value++;
    //         result.value = "draw";
    //         break;
    //     case "rockrock":
    //     case "paperpaper":
    //     case "scissorsscissors":
    //         totaldraw.value++;
    //         result.value = "draw";
    //         break;
    //     default:
    //         totallost.value++;
    //         result.value = "You lose";
    // }

    // opcion 5:
    // if (userOption.value === BotOption.value) {
    //     totaldraw.value++;
    //     return (result.value = "draw");
    // }
    // if (userOption.value === "rock" && BotOption.value === "scissors") {
    //     totalwins.value++;
    //     return (result.value = "winner");
    // }
    // if (userOption.value === "paper" && BotOption.value === "rock") {
    //     totalwins.value++;
    //     return (result.value = "winner");
    // }
    // if (userOption.value === "scissors" && BotOption.value === "paper") {
    //     totalwins.value++;
    //     return (result.value = "winner");
    // }
    // totallost.value++;
    // return (result.value = "You lose");
};
</script>

<template>
    <main class="text-center">
        <h1 class="text-center mt-6">Rock Paper Scissors</h1>
        <h2>userOption: {{ userOption }}</h2>
        <h2>BotOption: {{ BotOption }}</h2>
        <h2>Result: {{ result }}</h2>
        <h2>Total wins: {{ totalwins }}</h2>
        <h2>Total lost: {{ totallost }}</h2>
        <h2>Total draws: {{ totaldraw }}</h2>

        <button
            class="bg-blue-800 text-white rounded-lg px-5 py-3 mr-2"
            @click="startGame('rock')"
        >
            Rock
        </button>
        <button
            class="bg-blue-800 text-white rounded-lg px-5 py-3 mr-2"
            @click="startGame('paper')"
        >
            Paper
        </button>
        <button
            class="bg-blue-800 text-white rounded-lg px-5 py-3 mr-2"
            @click="startGame('scissors')"
        >
            Scissors
        </button>
    </main>
</template>
