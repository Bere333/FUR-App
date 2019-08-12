let Navbar = {
    render: async() => {
        let view = `
        <header class="header">

        <nav>
            <figure>
                <img src="img/fur-logo.png" alt="logo">
            </figure>
            <menu>
                <ul class="menu">
                    <li class="menu-bars">
                        <i class="fas fa-bars"></i>
                        <ul class="options">
                            <div class="options-menu">
                                <li><a href="#/home">Inicio</a> </li>
                                <li><a href="#/mi-informacion">Mi info</a></li>
                                <li><a href="#/mis-actividades">Mis actividades</a></li>
                                <li><a href="#/ayuda">Ayuda</a></li>
                                <li id="sign-out">Cerrar sesión</li>
                            </div>
                        </ul>
                    </li>

                </ul>
                <ul class="menu-desktop">
                    <li><a href="#/home">Inicio</a> </li>
                    <li><a href="#/mi-informacion">Mi info</a></li>
                    <li><a href="#/mis-actividades">Mis actividades</a></li>
                    <li><a href="#/ayuda">Ayuda</a></li>
                    <li id="sign-out-desk">Cerrar sesión</li>
                </ul>
            </menu>

        </nav>
        <hr id="divider">
    </header>`
        return view
    },
    after_render: async() => {}
}
export default Navbar;