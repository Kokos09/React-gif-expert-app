import { fireEvent } from "@testing-library/react";


describe('Pruebas de <AddCategory/>', () => {
    test('debe de cambiar el valor de la caja de texto', () => {
        render(<AddCateory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');
        // screen.debug();
        fireEvent.input(input, { target: { value: 'Saitama' } });
        expect(input.value).toBe('');
        screen.debug();
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = "Saitama"
        const onNewCategory = jest.fn();
        render(<AddCateory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(2);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue+'!');
    });

    test('no debe de llamar el onNewCategory si el input está vació', () => { 
        const onNewCategory = jest.fn();
        render(<AddCateory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).not.toHaveBeenCalled(1);
     })
})

AddCateory.propTypes = {
    onNewCategory: PropType
}