let dogForm = document.querySelector("#dog-form")
let dogSelect = document.querySelector("#dog-select")

dogForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // const xujovasSuo = sudiniSunys.find( jobanaiSunys => jobaniSunys.includes(“tavo norimas jobnutas sudas”))

})
fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((dogList) => {
        let listX = dogList.message.hound
        listX.map((item) => {
            console.log("hound")
            console.log(item)
        })


        let objectsSecondRow = Object.entries(listX).flatMap((test22) => test22[0])
        objectsSecondRow.map((objectSecond) => {
            let dogBreedOption = document.createElement("option")
            dogBreedOption.innerHTML = `${objectSecond}`
            dogSelect.append(dogBreedOption)
        })
        dogForm.addEventListener("submit", (e) => {

            let dogSelectByName = dogSelect.value

            fetch(`https://dog.ceo/api/breed/${dogSelectByName}/images/random`)
                .then((res) => res.json())
                .then((dogImg) => {
                    let dogImgRandom = dogImg.message



                    let dogImgSrc = document.querySelector("#dog-image").src = dogImgRandom


                })


            e.preventDefault()

        })

    })