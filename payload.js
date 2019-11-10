const request = require('request');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  document.getElementById("form").style.visibility = 'hidden';
  document.getElementById("progressBar").style.visibility = 'visible';

  let color;
  let wasabi;
  let cooldown;
  let reqResponse;
  let estimatedTime;

  let x1 = document.getElementById("x1").value;
  let y1 = document.getElementById("y1").value;
  let x2 = document.getElementById("x2").value;
  let y2 = document.getElementById("y2").value;
  let colorChosen = document.getElementById("color").value;

  let xCoor = Number(x1);
  let yCoor = Number(y1);

  while (true) {
    document.getElementById("progressBar").value = 0;

    if (colorChosen === 'r')
      color = Math.floor(Math.random() * 15);
    else
      color = colorChosen;

    wasabi = Number(xCoor) + Number(yCoor) + 2342;

    if(xCoor === 0 && yCoor === 0)
      xCoor++;

    let query = `{\"x\":${xCoor},\"y\":${yCoor},\"color\":${color},\"fingerprint\":\"${document.getElementById('fingerprint').value}\",\"token\":null,\"wasabi\":${wasabi}}`;

    request({
        url: "https://europe-west1-pixelcanvasv2.cloudfunctions.net/pixel",
        method: "POST",
        gzip: true,
        headers: {
        'Content-type': 'application/json',
        'DNT': '1',
        'Origin': 'https://pixelcanvas.io',
        'Referer' : `https://pixelcanvas.io/@${x1},${y2}`,
        'Sec-Fetch-Mode' : 'cors',
        'Accept-Encoding': 'gzip',
        'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36 OPR/63.0.3368.57388'
        },
        body: query
    },  function (error, response, body) {
      statusCode = response.statusCode;
      reqResponse = JSON.parse(body);
      let date = new Date();
      let firstTime;

      console.log(`x:${xCoor}\ny:${yCoor}\nstatus: ${statusCode}\ncooldown: ${reqResponse.waitSeconds}\ntime: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
      document.getElementById("output").innerHTML=`Placed pixel at x:${xCoor} and y:${yCoor}<br>Returned with status code: ${statusCode}<br>Cooldown until next pixel: ${reqResponse.waitSeconds}<br>Time placed: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      if (statusCode !== 200)
        console.log(`errors: ${reqResponse.errors[0].msg}`);

      let timeleft = reqResponse.waitSeconds - 2;
      document.getElementById("progressBar").max = reqResponse.waitSeconds - 2;
      let downloadTimer = setInterval(function(){
        document.getElementById("progressBar").value = reqResponse.waitSeconds - 2 - timeleft;
        timeleft -= 1;
        if(timeleft <= 0){
          clearInterval(downloadTimer);
        }
      }, 1000);
    });

    await sleep(1000);

    if(statusCode === 200)
      xCoor++;

    if (xCoor === Number(x2) + 1 && yCoor === Number(y2)) {
      console.log("Completed.");
      document.getElementById("output").innerHTML='<h1>Completed!</h1>';
      document.getElementById("progressBar").style.visibility = 'hidden';
      return;
    }

    if (xCoor !== Number(x2) && yCoor !== Number(y2)) {
      if (xCoor === Number(x2) + 1) {
        xCoor = Number(x1);
        yCoor++;
      }
    }

    await sleep((reqResponse.waitSeconds - 1) * 1000);
  }
  console.log('done');
}
