const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                            <img src="${user.avatarUrl}" alt="foto do perfil do usuario" />
                                            <div class="data">
                                                <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                                                <p>${user.bio ?? 'Não possui bio cadastrado 😥'}</p>
                                            </div>
                                        </div>
                                        
                                       
                                        <div class="socialData">
                                        <div>👥 Seguidores: ${user.followers}</div>
                                        <div>👥 Seguindo: ${user.following}</div> </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target= "_blank">${repo.name}</a></li>`)
        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class= "repositories section">
                                                <h2>Repositorios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }
        let eventItens = ''
        user.events.forEach(event => eventItens += `<div><h2>${event.repo.name}:</h2>atividade do tipo: ${event.type}</div>`)
        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class= "events">
                                                <h1>Atividades</h1> 
                                                ${eventItens}
                                             </div>`
        }
    },
    
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }