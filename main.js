const githubform = document.querySelector(".search-form")[0]

const nameInput = document.querySelector(".githubname")

const searchbutton = document.querySelector(".search-button")

const clearlastUsers = document.querySelector("#clear-last-users")

const last_users = document.querySelector(".last-users")

const form = document.querySelector(".search-form")
const github = new Github();

const ui = new UI();
eventListeners();

function eventListeners() {
    searchbutton.addEventListener("click", getData);
    form.addEventListener("submit", getData)
    clearlastUsers.addEventListener("click", clearAllSearched)


    document.addEventListener("DOMContentLoaded", getAllSearched)
}

function getData(e) {

    e.preventDefault()
    const username = nameInput.value.trim()

    if (username === "") {
        ui.alertMessage("warning", "Aramak istediginiz kullanıcı adını giriniz ")
    } else {
        github.getGithubData(username)
            .then(response => {

                    if (response.user.message === "Not Found") {
                        // demekki böyle bir endpoit yok

                        Storage.addSearchedUsersfromStorage(username)

                        ui.clearUserİnfo()
                        ui.clearRepoInfo()

                        ui.alertMessage("danger", " Kullanıcı  bulunamadı ")
                    } else {
                        ui.alertMessage("success", `${response.user.name} adlı kullanıcı bulundu. Github giriş adı : ${response.user.login}`)

                        ui.addSearchtoUI(username)

                        Storage.addSearchedUsersfromStorage(username)


                        ui.showInfoUser(response.user)


                        ui.showRepoInfo(response.repo)
                    }
                }

            )


        .catch(err => console.log(err))
    }




}

function clearAllSearched() {

    if (confirm("Tüm arananları silmek istiyormusunuz ? ")) {

        Storage.clearAllSearchedUsersFromStorage()


        ui.deleteLastUsers()


    }





}

function getAllSearched() {

    let users = Storage.getSearchedUsersFromStorage();


    users.forEach((username) => {

        const addLastSearchEmp = document.querySelector(".addLastSearchEmp");

        addLastSearchEmp.innerHTML += `
        
            <li class="last_search_value">

                ${username}
            </li>
            <hr style="background-color:white ;opacity:0.1">

        `

    })


}