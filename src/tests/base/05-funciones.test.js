import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from '../../base/05-funciones';


describe('Pruebas en 05-funciones.test.js', () => {

    test('getSaludo debe de retornar uno objecto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        console.log(user);
        expect( user ).toEqual(userTest);
    });

    test('getUsuarioActivo debe de retornar un objecto', () => {
        const name = 'Josue';
        const user = getUsuarioActivo(name);

        expect( user ).toEqual({
            uid: 'ABC567',
            username: name
        })
    })
    


    
})
