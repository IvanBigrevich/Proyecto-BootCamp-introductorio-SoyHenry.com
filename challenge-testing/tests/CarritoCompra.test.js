const CarritoCompra = require('../index');

describe('CarritoCompra', () => {
    let carrito;

    beforeEach(() => {
        carrito = new CarritoCompra();
    });

    test('debería inicializar el carrito vacío', () => {
        expect(carrito.carrito).toEqual([]);
    });

    test('debería agregar productos al carrito', () => {
        const producto = { nombre: 'Producto 1', precio: 100 };
        carrito.agregarProducto(producto);
        expect(carrito.carrito).toContain(producto);
    });

    test('debería calcular el total de la compra', () => {
        carrito.agregarProducto({ nombre: 'Producto 1', precio: 100 });
        carrito.agregarProducto({ nombre: 'Producto 2', precio: 200 });
        expect(carrito.calcularTotal()).toBe(300);
    });

    test('debería aplicar un descuento al total', () => {
        carrito.agregarProducto({ nombre: 'Producto 1', precio: 100 });
        carrito.agregarProducto({ nombre: 'Producto 2', precio: 200 });
        expect(carrito.aplicarDescuento(10)).toBe(270);
    });

    test('debería manejar descuento del 0%', () => {
        carrito.agregarProducto({ nombre: 'Producto 1', precio: 100 });
        expect(carrito.aplicarDescuento(0)).toBe(100);
    });

    test('debería manejar descuento del 100%', () => {
        carrito.agregarProducto({ nombre: 'Producto 1', precio: 100 });
        expect(carrito.aplicarDescuento(100)).toBe(0);
    });
});
