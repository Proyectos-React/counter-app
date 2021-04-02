
describe('Prueba ene el archivo demo.test.js', () => {
    test('debe de ser iguales los strings', () => {
        // 1. inicialización
        const mensaje = 'Hola Mundo';
    
        // 2. estímulo
        const mensaje2 = `Hola Mundo`;
    
        // 3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    });
})

