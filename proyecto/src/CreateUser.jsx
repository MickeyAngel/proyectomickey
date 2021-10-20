import React from "react";

const CreateUser = () => (

    <>
        <article class="card">
            <form>
                <div class="ed-container">

                    <div class="ed-item l-40 form__item">
                        <label>Apellido Paterno </label>
                        <input type="text" />
                    </div>

                    <div class="ed-item l-40 form__item">
                        <label>Apellido Materno </label>
                        <input type="text" />
                    </div>

                    <div class="ed-item l-40 form__item">
                        <label>Nombre </label>
                        <input type="text" />
                    </div>

                    <div class="ed-item l-40 form__item">
                        <label>Alias</label>
                        <input type="text" />
                    </div>

                    <div class="ed-item form__item">
                        <label>Contraseña</label>
                        <input type="password" />
                    </div>

                    <div class="ed-item form__item">
                        <label>Confirmar Contraseña</label>
                        <input type="password" />
                    </div>
                    

                    <div class="ed-item l-70 form__item">
                        <p class="small">TIPO DE MEMBRESIA</p>
                        <label>
                            <input type="radio" name="radio" />MEMBRESIA BASICA
                        </label>
                        <label>
                            <input type="radio" name="radio" />MEMBRESIA UAEMEX
                        </label>
                    </div>
                    <div class="ed-item form__item">
                        <label>SELECCIONA TU COLONIA</label>
                        <select>
                            <option>TEXCOCO</option>
                            <option>CHIMALHUACAN</option>
                            <option>NEZAHUALCOYOTL</option>
                            <option>LA PAZ</option>
                            <option>CHICOLOAPAN </option>
                            <option>VALLE DE CHALCO </option>
                        </select>
                    </div>
                   
                    <div class="ed-item form__item">
                        <input class="button full small" type="submit" value="Enviar" />
                    </div>
                </div>
            </form>

        </article>
    </>

)


export default CreateUser;