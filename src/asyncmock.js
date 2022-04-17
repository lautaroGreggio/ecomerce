const products = [
    { 
        id: 1, 
        name: 'Pantalon Adidas deportivo', 
        price: 8000, 
        category: 'pantalon', 
        img:'https://www.tradeinn.com/l/13788/137880687/adidas-originals-pantalones-cargo-3-stripes.jpg', 
        stock: 20, 
        description:'Descripcion de pantalon Adidas'
    },
    {   id: 2,
        name: 'Buzo Nike',
        price: 6200,
        category: 'buzo',
        img:'https://www.authogar.com/media/catalog/product/cache/1/small_image/200x200/9df78eab33525d08d6e5fb8d27136e95/b/v/bv2648.jpg',
        stock: 20,
        description:'Descripcion de buzo Nike'},

    {   id: 3,
        name: 'Zapatilla Running Nike ',
        price: 1200,
        category: 'zapatilla',
        img:'https://static.runnea.com/images/202107/nike-nike-zapatillas-running-air-zoom-structure-24-eu-42-thunder-blue-wolf-grey-black-200x200x80xX.jpg?1', 
        stock: 20,
        description:'Descripcion de zapatilla Nike'}
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}