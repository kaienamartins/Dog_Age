const idadeCachorro = prompt("Qual a idade do seu cachorro (idade humana)");
const tamanhoCachorro = prompt("Qual o porte dele? (P, M ou G)");


function pic() {
    let img = document.createElement("img");
    img.src = 'images/dog-thinking-about-bone.png';
    let blockPic = document.getElementById("show");
    blockPic.appendChild(img);
    img.style.height = '200px';
    img.style.width = '250px';
}

function picElse() {
    let imgElse = document.createElement("img");
    imgElse.src = 'images/unkown.png';
    let block = document.getElementById("show");
    block.appendChild(imgElse);
    imgElse.style.height = '200px';
    imgElse.style.width = '250px';
}

if (tamanhoCachorro === "P" || tamanhoCachorro === "p") {
    let idadeReal = (2*12.5) + (idadeCachorro-2) * 4.5.toFixed(0);
    document.getElementById("show").innerHTML = "Seu cachorro tem: "+ idadeReal + " anos";
    pic();
}else if (tamanhoCachorro === "M" || tamanhoCachorro === "m") {
    let idadeReal = (2*10.5) + (idadeCachorro-2) * 5.7.toFixed(0)
    document.getElementById("show").innerHTML = "Seu cachorro tem: "+ idadeReal + " anos";
    pic();
}else if (tamanhoCachorro === "G" || tamanhoCachorro === "g") {

    let idadeReal = (2*9) + (idadeCachorro-2) * 8.0.toFixed(0)
    document.getElementById("show").innerHTML = "Seu cachorro tem: "+ idadeReal + " anos";
    pic();
}else {
    document.getElementById("show").innerHTML = "Não entendi, tente novamente!";
    picElse();
}