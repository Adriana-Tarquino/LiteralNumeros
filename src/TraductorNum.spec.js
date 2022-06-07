import traducirNumeros from './traductorNumeros.js';

describe("Traducir numeros", () => {
    it("Deberia devolver las letras con solo un digito", () => {
       const repuesta = traducirNumeros(1);
       expect(repuesta).toEqual("uno");
   });
   it("Deberia devolver las letras con solo un digito", () => {
    const repuesta = traducirNumeros(2);
    expect(repuesta).toEqual("dos");
    });
    it("Deberia devolver las letras con solo un digito", () => {
        const repuesta = traducirNumeros(3);
        expect(repuesta).toEqual("tres");
    });
    it("Deberia devolver las letras con solo un digito", () => {
        const repuesta = traducirNumeros(4);
        expect(repuesta).toEqual("cuatro");
    });
    it("Deberia devolver las letras con solo un digito", () => {
        const repuesta = traducirNumeros(5);
        expect(repuesta).toEqual("cinco");
    });
    it("Deberia devolver las letras con solo un digito", () => {
        const repuesta = traducirNumeros(6);
        expect(repuesta).toEqual("seis");
    });
    it("Deberia devolver las letras con solo un digito", () => {
        const repuesta = traducirNumeros(7);
        expect(repuesta).toEqual("siete");
    });
    it("Deberia devolver las letras con solo un digito", () => {
        const repuesta = traducirNumeros(8);
        expect(repuesta).toEqual("ocho");
    });
    it("Deberia devolver las letras con solo un digito", () => {
        const repuesta = traducirNumeros(9);
        expect(repuesta).toEqual("nueve");
    });
    it("Deberia devolver las letras con solo un digito", () => {
        const repuesta = traducirNumeros(10);
        expect(repuesta).toEqual("diez");
    });
});
