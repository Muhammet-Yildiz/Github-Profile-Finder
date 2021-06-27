class UI {

    constructor() {

        this.profileDiv = document.querySelector(".profile")

        this.repoDiv = document.querySelector("#repos")

        this.repoTitle = document.querySelector(".page-heading")

        this.headField = document.querySelector(".head")
        this.lastSearchEmployee = document.querySelector("#last-search");
        this.lastSearchEmp = document.querySelector(".addLastSearchEmp");

    }

    alertMessage(type, message) {

        const alertDiv = document.createElement("div")

        alertDiv.className = `alert alert-${type}`

        alertDiv.textContent = message
        this.headField.appendChild(alertDiv)

        setTimeout(() => {

            alertDiv.remove()
        }, 5000);


    }

    showInfoUser(user) {

        this.profileDiv.innerHTML = `
        
        <div class="user-information">

        <div class="user-img">
            <a href="${user.html_url}">

                <img src="${user.avatar_url}" alt="photo" width="200px">
            </a>
        </div>
        <div class="user-follow-city-email">
            <div class="user-follow">

                <li class="follower"> Takipçi <span>${user.followers}</span></li>
                <li class="followed"> Takip Edilen <span>${user.following}</span></li>
                <li class="repos"> Repolar <span>${user.public_repos}</span></li>


            </div>
            <hr style="opacity: 0.2; width: 45vw;">

            <div class="user-city-email">

                <li class="company">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
                        <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
                </svg>
                    <p>${user.company} </p>
                </li>

                <li class="location">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
                    <p>${user.location}</p>

                </li>
                <li class="email">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                </svg>
                    <p> ${user.email} </p>
                </li>
            </div>

        </div>


        </div>

        <div class="user-name-bio">

            <h2>${user.name}</h2>
            <hr style="opacity: 0.2; width: 300px;">
            <p style="margin-top: 1rem;">${user.bio} </p>
        </div> 
        
        `

    }

    clearUserİnfo() {
        this.profileDiv.innerHTML = ""

    }
    showRepoInfo(repos) {
        this.repoDiv.innerHTML = " "
        this.repoDiv.appendChild(this.repoTitle)
        this.repoTitle.style.display = "block"


        repos.forEach((repo) => {

            this.repoDiv.innerHTML += `
            <div class="repo">
            <li>
               <a href="${repo.html_url}" class="Repo_url">${repo.name}</a>
            </li>
           <li class="repo-stars">
               Starlar
               <span>${repo.stargazers_count}</span>
   
           </li>
           <li class="repo-forks">
               Forklar
               <span>${repo.forks}</span>
           </li> 
           
           </div>
           `



        })
    }


    clearRepoInfo() {

        this.repoDiv.innerHTML = ""


    }

    addSearchtoUI(username) {

        this.lastSearchEmployee.style.display = "block"
        let users = Storage.getSearchedUsersFromStorage();

        if (users.indexOf(username) === -1) {


            const li = document.createElement("li");

            li.className = "last_search_value";

            li.textContent = username;

            this.lastSearchEmp.appendChild(li)
            const hr = document.createElement("hr");
            hr.style.backgroundColor = "var(--lightgray)"
            hr.style.opacity = "0.2"
            this.lastSearchEmp.appendChild(hr)


        }
    }


    deleteLastUsers() {

        this.lastSearchEmp.innerHTML = ""

    }


}