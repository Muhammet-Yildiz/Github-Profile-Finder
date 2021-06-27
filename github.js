class Github {

    constructor() {

        this.url = "https://api.github.com/users/"


    }

    async getGithubData(username) {

        const responseUser = await fetch(this.url + username);

        const responseRepos = await fetch(this.url + username + "/repos")


        const userData = await responseUser.json()

        const userRepo = await responseRepos.json()

        console.log("DATA : ", userData)
        console.log("REPO : ", userRepo)
        return {

            user: userData,
            repo: userRepo

        }

    }

}