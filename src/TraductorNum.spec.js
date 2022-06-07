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
});
