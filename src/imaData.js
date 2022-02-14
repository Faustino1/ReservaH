import indoorpool from "./imagenes/Hotel.png";
import bar from "./imagenes/hotel1.png";
import imageStandard from "./imagenes/Hotel3.png";
import suit from "./imagenes/hoteles.png";
import outdoorpool from "./imagenes/habitacion.png";
import ejecutivo from "./imagenes/habitacion1.png";
import juniorsuit from "./imagenes/habitacion2.png";
import balcony from "./imagenes/habitacion3.png";

const imaData = [
    {
        src: indoorpool,
        title: "Nuestra piscina cubierta",
        description: "Piscina cubierta de 25 m de largo con hamacas"
    },

    {
        src: bar,
        title: "barra de cócteles",
        description: "Hermoso hotel con bar"
    },

    {
        src: outdoorpool,
        title: "Outdoor poolPiscina al aire libre",
        description: "Infinitas sonrrizas y espetaculos"
    },
    {
        src: suit,
        title: "Nuestra suite de esquina",
        description: "Discreto y lujoso con servicio de mayordomo",
        cat: "room",
        price: 350,
        stock: 4,
        notAvailablestart: new Date(2022, 1, 20).getTime(),
        notAvailableend: new Date(2022, 1, 25).getTime(),
    },
    {
        src: juniorsuit,
        title: "Junior Suite con cocineta",
        description: "Nuestras Junior Suites son perfectas para familias",
        cat: "room",
        price: 170,
        stock: 15,
        notAvailablestart: new Date(2022, 1, 10).getTime(),
        notAvailableend: new Date(2022, 1, 10).getTime(),
    },

    {
        src: ejecutivo,
        title: "ejecutivo",
        description: "Habitaciones de 20 m2 con todas las comodidades",
        cat: "room",
        price: 170,
        stock: 9,
        notAvailablestart: new Date(2022, 1, 13).getTime(),
        notAvailableend: new Date(2022, 1, 13).getTime(),
    },

    {
        src: balcony,
        title: "Habitaciones con balcón",
        description: "Habitaciones con increíbles vistas al mar",
        cat: "room",
        price: 170,
        stock: 15,
        notAvailablestart: new Date(2022, 1, 10).getTime(),
        notAvailableend: new Date(2022, 1, 10).getTime(),
    },
    
    {
        src: imageStandard,
        title: "Habitación estándar",
        description: "Habitaciones de 20 m2 con todas las comodidades",
        cat: "room",
        price: 140,
        stock: 12,
        notAvailablestart: new Date(2022, 1, 13).getTime(),
        notAvailableend: new Date(2022, 1, 13).getTime(),
    },

];

export const chips = [
    { key: 0, label: "Flexibilidad de cancelación"},
    { key: 1, label: "Habitaciones estándar"},
    { key: 2, label: "Habitaciones ejecutivas"},
    { key: 3, label: "Acceso al salón"},
    { key: 4, label: "Muchas sorpresas mas" },
];
export default imaData;