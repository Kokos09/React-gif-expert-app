import { renderHook, waitFor } from "@testing-library/react";
import { useFecthGifs } from "../../src/hooks/useFecthGifs";

describe('Pruebas en el hook useFetchGifs', () => { 
    test('debe de regresar un estado incial', () => { 
        const {result}=renderHook(()=>useFecthGifs('One punch'));
        const {images, isLoading}=result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
     });
     test('debe de regresar un estado incial', async() => { 
        const {result}=renderHook(()=>useFecthGifs('One punch'));
       
        await waitFor(
        ()=>expect(result.current.length.images).toBeGreaterThan(0)
       );

       const {images, isLoading}=result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeFalsy();
     }) ; 
});