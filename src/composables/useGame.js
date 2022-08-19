import { ref } from "vue";
import { getRandomIntInclusive } from "@/helpers/randomjs.js";

const userOption = ref("");
const BotOption = ref("");
const result = ref("");
const totalwins = ref(0);
const totallost = ref(0);
const totaldraw = ref(0);

export const useGame = () => {
    // Opción 1: jomersgamer
    const options = ["paper", "rock", "scissors"];
    const caseopcion = {
        rock: { rock: "draw", scissors: "win", paper: "lose" },
        paper: { paper: "draw", scissors: "lose", rock: "win" },
        scissors: { paper: "win", scissors: "draw", rock: "lose" },
    };

    const startGame = (opcion) => {
        userOption.value = opcion;
        BotOption.value = options[getRandomIntInclusive(0, 2)];

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
    };

    return {
        userOption,
        BotOption,
        result,
        totalwins,
        totallost,
        totaldraw,
        startGame,
    };
};
