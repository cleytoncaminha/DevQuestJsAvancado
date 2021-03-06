const screen = {
    
    userProfile: document.querySelector('.profile-data'),
    
    renderScreen(user) {
        
        this.renderUser(user)
        this.renderRepositories(user.repositories)
        this.renderEvents(user.events)
        
    },
    
    // Render user information

    renderUser(userInfo){
        this.userProfile.innerHTML = `<div class="info">
                                            <img src="${userInfo.avatarUrl}" alt="foto do perfil do usuario" />
                                            <div class="data">
                                                <h1>${userInfo.name ?? 'NÃ£o possui nome cadastrado ð¥'}</h1>
                                                <p>${userInfo.bio ?? 'NÃ£o possui bio cadastrado ð¥'}</p>
                                            </div>
                                        </div>
                                        
                                       
                                        <div class="socialData">
                                        <div>ð¥ Seguidores: ${userInfo.followers}</div>
                                        <div>ð¥ Seguindo: ${userInfo.following}</div> 
                                        </div>`
    },

    //Render repositories

    renderRepositories(userRepo){
        let repositoriesItens = ''
        userRepo.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target= "_blank">
                                                                    ${repo.name}
                                                                    <div class= "repoProperties">
                                                                    <div>ð´${repo.forks}</div>
                                                                    <div>â­${repo.stargazers_count}</div>
                                                                    <div>ðâð¨${repo.watchers}</div>
                                                                    <div>ð¨âð»${repo.language == null ? "sem linguagem" : repo.language}</div>
                                                                    </div></a>
                                                                </li>`)
        if (userRepo.length > 0) {
            this.userProfile.innerHTML += `<div class= "repositories section">
                                                <h2>Repositorios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }
    },

    //Render events

    renderEvents(events){
        let eventItens = ''
        events.forEach(event => eventItens += `<div><h2>${event.repo.name}:</h2>atividade do tipo: ${event.type}</div>`)
        if (events.length > 0) {
            this.userProfile.innerHTML += `<div class= "events">
                                                <h1>Atividades</h1> 
                                                ${eventItens}
                                             </div>`
        }
    },
    
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>UsuÃ¡rio nÃ£o encontrado</h3>"
    }
}

export { screen }