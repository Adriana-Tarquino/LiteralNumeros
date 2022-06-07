
describe("Traducir numeros", () => {
    it("Deberia devolver las letras con solo un digito", () => {
       const repuesta = traducirNumeros(1);
       expect(repuesta).toEqual("uno");
   });
});

function traducirNumeros(numero) {
    if(numero == 1){
        return "uno";
    }
    
}