let myInfo = {

    render: async() => {
        let view = /*html*/ 
        `   
            <section class="profile-photo">
                <h1> Mi info</h1>
            </section>
            <div class="photo">
             <img src="./img/elements/foto.png" class="element-photo"/>
             <h1>Nombre</h1>
            </div>
            <form>
            <div class="form-profile">
            <label for="name">Nombre de tu mascota</label><br>
            <input type="text" class="input-profile"><br>
            <label for="nickname">Apodos</label><br>
            <input type="text" class="input-profile"><br>
            <label for="specie">Especie</label><br>
            <input type="text" class="input-profile"><br><br>
            <div class="age">
            <label for="num-age">Edad</label>
            <input type="number" class="num-age">
            <select name="choose" class="input-age"><br>
            <option value="nul" selected disabled></option>
            <option value="opt1">Años</option>
            <option value="opt2">Meses</option>
           <option value="opt3">Semanas</option><br>
           </select>
           </div>
           <div class="description-fur">
            <label for="description">Cuéntanos algo de tu mascota</label>
            <input type="text" class="input-description"><br>
            <button type="button" class="button-agree" id="agree-fur">+ Agregar mascotas</button><br><br>
            </div>
            <div class="save">
            <button type="button" class="buttons" id="save">Guardar</button> 
            </div>
            
  </div>
            
            
    </select>
  </div>
  </div>
  

            `
            
        
        return view
    },
    after_render: async() => {

    }
}
export default myInfo;