import Curso from './Curso';
import React from "react";

const cursos = [
    {
      "paquete" : "MEMBRESIA BASICA",
      "image" : "https://conganasdeviajar.es/wp-content/uploads/2021/06/bengaluru-radisson-gym-6.jpg",
      "price" : "300 MX AL MES",
      "ben1" : "ACCESO A TODOS LO EQUIPOS DE EJERCICIO",
      "ben2" : "INSTRUCTOR",
      "ben3" : "ACCESO A REGADERAS",
      
    },  {
      "paquete" : "MEMBRESIA UAEMEX",
      "image" : "https://cadenaser00.epimg.net/ser/imagenes/2021/05/10/radio_mallorca/1620656384_069803_1620656619_noticia_normal.jpg",
      "price" : "450 MX AL MES",
      "ben1" : "ACCESO A TODOS LO EQUIPOS DE EJERCICIO",
      "ben2" : "INSTRUCTOR",
      "ben3" : "ACCESO A REGADERAS",
      "ben4" : "ACCESO A ZONA DE MASAJE",
      "ben5" : "ACCESO A LA ALBERCA",
      "ben6" : "PLAYERA",
    },
  ]





const Puente = () => (

  <div className="ed-grid m-grid-2">
        {
        cursos.map (c => <Curso paquete =  {c.paquete} image = {c.image} price = {c.price} ben1 = {c.ben1} ben2 = {c.ben2} ben3 = {c.ben3} ben4 = {c.ben4} ben5 = {c.ben5} ben6 = {c.ben6}/>)      
        }
      </div>

)




export default Puente