export default function initTypeWriter(){

    const frase = document.querySelector('p');
    const frase2 = document.querySelector('p');
    function typeWriter(element){
        const fraseArray = element.innerHTML.split('');
        element.innerHTML = '';
        fraseArray.forEach((l, i) => {
            setTimeout(()=>{
                element.innerHTML += l;
            }, 60 * i)
        });
    }

    typeWriter(frase);
}