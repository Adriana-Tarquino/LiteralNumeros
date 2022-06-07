import fs from 'fs';

describe("Traducir un numero a palabras", () => {
    beforeAll(() =>{
        document.body.innerHTML = fs.readFileSync("index.html", "utf8");
        require("./presenter.js");
        });
        it("Deberia mostrar el titulo en la segunda pagina", () => {
            const resultado = document.querySelector("#titulo");
            expect(resultado.innerHTML).toEqual("Traducir los numeros");
        });
        it("Deberia capturar el numero", () => {
            const resultado = document.querySelector("#primer-numero");
            resultado.value = "1";
            const botton = document.querySelector("#boton-traducir");
            botton.click();
            //expect(resultado.innerHTML).toEqual("uno");
        });
        
});