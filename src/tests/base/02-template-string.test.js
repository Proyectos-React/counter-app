import '@testing-library/jest-dom'
import { getSaludo } from "../../base/02-template-string";


describe('Pruebas en 02-template-string.test.js', () => {
    test('getSaludo debe de retornar hola Josue', () => {
        const nombre = 'Josue';
        const saludo = getSaludo(nombre);
        expect( saludo ).toBe('Hola ' + nombre);
    })
    // getSaludos debe de retornar Hola Carlos si no hay nombre

    test('getSaludos debe de retornar Hola Carlos si no hay nombre', () => {
        const saludo = getSaludo();
        expect( saludo ).toBe('Hola Carlos');
    })
    

    
})
