let info = {
    vardas: ["akvile", "erika", "lina", "moliugas"],
    pavarde: ["sabaliauskas", "vysniauskas", "malisauskas", "grybauskas"]



}
console.log(Object.entries(info)[0].flatMap((item) => item))