import TYPES from "./actionTypes";

export const productsInitialState = {
    products: [
        {
            id: 1,
            title: 'Fornite',
            description: 'Fortnite Battle Royale es un videojuego multiplataforma gratuito perteneciente al género battle royale desarrollado y publicado por Epic Games.',
            image: 'src/assets/images/fornite.png',
            price: 11.99
        },
        {
            id: 2,
            title: 'Dota 2',
            description: 'Perteneciente al género de Arena de batalla en línea ARTS, también conocido como MOBA',
            image: 'src/assets/images/dota2.png',
            price: 65.70
        },
        {
            id: 3,
            title: 'Valorant',
            description: 'Valorant es un hero shooter en primera persona multijugador gratuito desarrollado y publicado por Riot Games',
            image: 'src/assets/images/valorant.png',
            price: 	9.99
        },
        {
            id: 4,
            title: 'GTA V',
            description: 'videojuego de acción-aventura de mundo abierto en tercera persona desarrollado por el estudio Rockstar North y distribuido por Rockstar Games.',
            image: 'src/assets/images/gtav.png',
            price: 34.99
        },
        {
            id: 5,
            title: 'CS GO',
            description: 'Counter-Strike: Global Offensive es un videojuego de disparos en primera persona desarrollado por Valve Corporation y Hidden Path Entertainment. Es el cuarto juego de la saga Counter-Strike.',
            image: 'src/assets/images/csgo.png',
            price: 14.99
        },
        {
            id: 6,
            title: 'Call of Duty MW3',
            description: 'videojuego de disparos en primera persona desarrollado por Infinity Ward y Sledgehammer Games, con el trabajo adicional de Raven Software, y distribuido por Activision',
            image: 'src/assets/images/mw3.png',
            price: 29.01
        },
        {
            id: 7,
            title: 'Halo Infinity',
            description: 'Halo Infinite es un videojuego de disparos en primera persona de la franquicia de videojuegos de ciencia ficción creada por Bungie Studios y actualmente desarrollada por 343 Industries',
            image: 'src/assets/images/infinity.png',
            price: 10
        },
        {
            id: 8,
            title: 'FIFA 23',
            description: 'FIFA 23 es un videojuego de simulación de fútbol publicado por Electronic Arts. Es la trigésima entrega de la serie FIFA desarrollada por EA Sports, y la última entrega bajo el estandarte de FIFA',
            image: 'src/assets/images/fifa.png',
            price: 99.99
        },
        {
            id: 9,
            title: 'APEX',
            description: 'Apex Legends es un videojuego gratuito perteneciente a los géneros battle royale y hero shooter en primera persona, desarrollado por Respawn Entertainment y publicado por Electronic Arts.',
            image: 'src/assets/images/apex.png',
            price: 6.41
        }

    ],
    cart: [],
    totalPriceShoppingCart: 0
}

export const reducerCart = (state, action) => {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            let newProduct = state.products.find((product) => product.id === action.payload)
            return {
                ...state,
                cart: [...state.cart, newProduct]
            };
        }
        case TYPES.DELETE_PRODUCT_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter((product) => product.id !== action.payload)
            }
        }

        case TYPES.DELETE_ALL_FROM_CART: {
            return productsInitialState;
        }

        case TYPES.CALCULATE_TOTAL_PRICE_OF_THE_CART: {
            return {
                ...state,
                totalPriceShoppingCart: state.cart.reduce((previousValue, product) => previousValue + product.price, 0)
            }
        }
        default:
            return state;
    }

    throw Error("Unknown action: " + action.type);
}