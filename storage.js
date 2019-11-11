const storage = require('electron-json-storage');
const os = require('os');

storage.setDataPath(os.tmpdir());

function rememberInfo() {
  fingerPrint = document.getElementById("fingerprint").value;
  colorFromHTML = document.getElementById("color").value;
  storage.set('application', { color: colorFromHTML, fingerprint: fingerPrint }, function(error) {
    if (error) throw error;
  });
}

function rememberedValues() {
  storage.get('application', function(error, data) {
    if (error) throw error;
    if (data.fingerprint === undefined)
      data.fingerprint = '';
    if (data.color === undefined)
      data.color = '';
    document.getElementById("fingerprint").value = data.fingerprint;
    document.getElementById("color").value = data.color;
  });
}

window.onload = rememberedValues();
