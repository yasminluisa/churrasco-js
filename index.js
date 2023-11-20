let adultos = prompt('Quantos adultos que bebem álcool estarão no churrasco?');
let naobebemalcool = prompt('Quantos adultos que não bebem álcool estarão no churrasco?');
let crianças = prompt('Quantas crianças estarão nesse churrasco?');

let adultsTotal = Number(adultos) + Number(naobebemalcool);
let totalpessoas = Number(adultsTotal) + Number(crianças);
let totalCarne = Number((0.2 * crianças)) + Number((0.4 * adultsTotal));
let sideDishes = 0.2 * totalpessoas;
let alccol = adultos * 2;
let refri = totalpessoas * 0.5;
let agua = totalpessoas * 0.4;

if (adultsTotal === 0) {
    alert('Não é possível fazer um churrasco sem adultos responsáveis!');
} else {
    alert(`A quantidade de carne necessária será ${totalCarne.toFixed(2)}KG`);
    alert(`A quantidade de acompanhamentos necessários será de ${sideDishes.toFixed(2)}KG`);
    alert(`A quantidade de cerveja necessária será de ${alccol.toFixed(2)}L`);
    alert(`A quantidade de refrigerante necessário será de ${refri.toFixed(2)}L`);
    alert(`A quantidade de água necessária será de ${agua.toFixed(2)}L`);
}