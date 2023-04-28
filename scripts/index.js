const buttonCheckOut = () =>{
    const buttonsList = document.querySelectorAll(".checkout")

    buttonsList.forEach( button => {
        button.addEventListener("click", () =>{
            window.open("https://go.perfectpay.com.br/PPU38CLUNN0", "_blank");
        })
    })
}


buttonCheckOut()