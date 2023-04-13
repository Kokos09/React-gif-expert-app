import { render } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFecthGifs } from "../../src/hooks/useFecthGifs";

jest.mock('../../src/hooks/useFecthGifs');

describe('Pruebas en <GifGrid/>', () => { 
    const category = "One Punch";
    test('debe de mostrar el loading incialmente', () => {
        render(<GifGrid category={category} /> );
        expect(screen.getByText('Cragando...'));
        expect(screen.getByText('category'));
     });
     test('debe de mostrar items cuando se cargan las imagenes userFecthGifs', () => {
        const gifs=[
            {
                id:'ABC',
                title:'Saitama',
                url:'https://localhost/saitama.jpg'
            },
            {
                id:'123',
                title:'Goku',
                url:'https://localhost/goku.jpg'
            }
        ]
        useFecthGifs.mockReturnValue({
            images:gifs,
            isLoading:true
        });
        render(<GifGrid category={category} /> );
        expect(screen.getAllByRole('img').length).toBe(2);
       })
 })