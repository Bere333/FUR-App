let home = {

    render: async() => {
        let view = /*html*/ `
            <section class="home">
            <hr class="line-1">
            <div class="flex-container">
            <div>
            <a href="#Memes">
            <img src="img/happy-emoticon-with-one-tooth.svg" alt="Memes" class="memes">
            <p class="etiquetas-filtrado">Memes</p>
            </a>
            </div>
            <div>
            <img src="img/vaccine.svg" alt="Veterinario" class="veterinario">
            <p class="etiquetas-filtrado">Veterinario</p>
            </div>
            <div>
            <img src="img/pet.svg" alt="PetFriendly" class="pet-friendly">
            <p class="etiquetas-filtrado">PetFriendly</p>
            </div>
            <div>
            <img src="img/elemental-tip.svg" alt="Tips" class="tips">
            <p class="etiquetas-filtrado">Tips</p>
            </div>
            <div>
            <img src="img/icon.svg" alt="Perdidos" class="perdidos">
            <p class="etiquetas-filtrado">Perdidos</p>
            </div>
            </div>
            <hr class="line-2">
            <div class="publication-conteiner">
            <div class="utilidades">
            
            </div>
            <div>
            </div>
            <div>
            </section>
        `
        return view
    },
    after_render: async() => {

    }
}
export default home;