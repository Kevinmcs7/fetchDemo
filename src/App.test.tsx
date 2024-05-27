import { describe, it, expect } from "vitest";

import { render, screen } from "@testing-library/react";

import App from "./App";

import useEvent from "@testing-library/user-event";

import userEvent from "@testing-library/user-event";

/* describe("App", () => {
  it("renders headline", () => {
    render(<App title="React" />);

    screen.debug();

    // check if App components renders headline
  });
});

describe("App component", () => {
  it("renders correct haeading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/Our Firts Test/);
  });
}); */
/* 
describe("App component", () => {
  it("renders Default state", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  it("renders New text", async () => {
    const user = useEvent.setup();
    render(<App />);
    const button = screen.getByRole("button", { name: "Click me!!" });
    await user.click(button);
    expect(screen.getByRole("heading").textContent).toMatch(/new text/i);
  });
}); */



describe('Counter component', () => { // Define un bloque de pruebas llamado 'Counter component'.
  it('initial heading text is "Count: 0"', () => { // Define una prueba que verifica que el texto inicial del encabezado del contador sea "Count: 0".
    render(<App />);  // Renderiza el componente App en el entorno de prueba.
    expect(screen.getByRole('heading').textContent).toBe('Count: 0');   // Verifica que el texto del elemento de encabezado sea "Count: 0".
  });
  it('increments the count', async () => { // Define una prueba que verifica que el contador se incrementa correctamente.
    render(<App />);
    const incrementButton = screen.getByText('Increments'); // Busca y obtiene el botón de incremento dentro del componente App.
    await userEvent.click(incrementButton);  // Simula un clic en el botón de incremento.
    expect(screen.getByRole('heading').textContent).toBe('Count: 1'); // Verifica que el texto del elemento de encabezado sea "Count: 1" después de hacer clic en el botón de incremento.
  });
  it('decrements the count', async () => {
    render(<App />);
    const decrementButton = screen.getByText('Decrements');
    await userEvent.click(decrementButton);
    expect(screen.getByRole('heading').textContent).toBe('Count: -1');
  });
});
