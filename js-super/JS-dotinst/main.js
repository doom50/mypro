'use strict';

{
  //const scores = [80, 90, 78, 40];
  //console.log(scores);
  //scores[1] = 50;
  //  //console.log(scores);
  //console.log(scores.length);
  //scores.push(60, 50);
  //console.log(scores);
  //scores.unshift(3, 8);
  //console.log(scores);
  //scores.shift([1]);
  //console.log(scores);
  //scores.splice(4, 0, 500, 800);
  //console.log(scores);

  //foreach文
  //scores.forEach((score) => {
  //  console.log(score);
  //});
  //for (let i = 0; i < scores.length; i++) {
  //  console.log(` ${i} : ${scores[i]}`);
  //}

  //map()メソッド
  //const prices = [180, 190, 200];
  //const updatedPrices = prices.map(price =>
  //  price + 20);
  //console.log(updatedPrices);
  //document.querySelector('h1').textContent = 'GAFA';

  //setTimeout(update, 1200);
  document.querySelector('button').addEventListener("click", () => {
    const tgnode = document.getElementById('aaa');
    tgnode.textContent = 'GAFA';
    tgnode.title = 'this is title';
    tgnode.style.color = 'blue';
  });
}
