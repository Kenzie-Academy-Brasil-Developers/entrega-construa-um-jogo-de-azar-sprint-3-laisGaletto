function game(min,max){ 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function gameBall(){
    const number = game(0,19);

    const answer = [
  
    "Como eu vejo, sim.",
    "É decididamente assim",
    "Pergunte de novo mais tarde.",
    "Muito duvidoso.",
    "Sim definitivamente.",
    "Isto está Certo",
    "Parece bom.",
    "Provavelmente.",
    "Sim",
    "Não posso prever agora",
    "Melhor não te contar agora",
    "Os sinais apontam para sim",
    "Não parece tão bom.",
    "Não contaria com isso.",
    "Resposta nebulosa, tente de novo.",
    "Minha resposta é não.",
    "Minha fontes dizem que não.",
    "Sem duvida",
    "Você pode contar com isto",
    "Concentra e pergunte de novo",
    
    ]

    const div = document.getElementById("gameBallBot");
    div.innerHTML = "";
    const result = document.createTextNode(answer[number]);
    const creatAnswer = document.createElement("p");
    creatAnswer.appendChild(result);
    div.appendChild(creatAnswer);
}