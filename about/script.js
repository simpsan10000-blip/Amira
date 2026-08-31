const tabs = document.querySelectorAll(".tabs button")

tabs.forEach(button => {
    const id = button.querySelector("span").id
    const target = document.getElementById(id.split("-")[0])

    if (!target) return

    button.addEventListener("click", () => {
        document.querySelector(".tabbed.active")?.classList.remove("active")
        target.classList.add("active")
    })
})
