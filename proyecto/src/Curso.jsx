import React from "react";



const Curso = ({paquete, image, price, ben1, ben2, ben3, ben4, ben5, ben6}) => (
<>
    <article class="card">
        <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={image} alt=""/>
        </div>
        <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 class="t5 s-mb-2 s-center">
                {paquete}
            </h3> 
            <div class="s-mb-2 s-main-center">
                <div class="card__teacher s-cross-center">
                    <span class="small">{ben1}</span>
                </div>
            </div> 
            <div class="s-mb-2 s-main-center">
                <div class="card__teacher s-cross-center">
                    <span class="small">{ben2}</span>
                </div>
            </div>
            
            <div class="s-mb-2 s-main-center">
                <div class="card__teacher s-cross-center">
                    <span class="small">{ben3}</span>
                </div>
            </div>

            <div class="s-mb-2 s-main-center">
                <div class="card__teacher s-cross-center">
                    <span class="small">{ben4}</span>
                </div>
            </div>

            <div class="s-mb-2 s-main-center">
                <div class="card__teacher s-cross-center">
                    <span class="small">{ben5}</span>
                </div>
            </div>

            <div class="s-mb-2 s-main-center">
                <div class="card__teacher s-cross-center">
                    <span class="small">{ben6}</span>
                </div>
            </div>
 
            <div class="s-main-center">
                <a class="button--ghost-alert button--tiny" href="http://localhost:3000/CreateUser">{price}</a>
            </div>

        </div>

        
    </article>
</>
)
export default Curso;