
const massPetya = 72,
    heightPetya = 1.88,
    massDenis = 82,
    heightDenis = 1.73;

const bmiPetya = massPetya / (heightPetya * heightPetya),
    bmiDenis = massDenis / (heightDenis * heightDenis),
    bmiHigher = bmiPetya < bmiDenis



console.log(bmiPetya, bmiDenis, bmiHigher)

