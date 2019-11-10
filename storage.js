const storage = require('electron-json-storage');
const os = require('os');

storage.setDataPath(os.tmpdir());

function rememberFingerprint() {
  fingerPrint = document.getElementById("fingerprint").value;
  storage.set('fingerprintdata', { fingerprint: fingerPrint }, function(error) {
    if (error) throw error;
  });
}

function rememberColor() {
  colorFromHTML = document.getElementById("color").value;
  storage.set('colordata', { color: colorFromHTML }, function(error) {
    if (error) throw error;
  });
}

function rememberedValues() {
  storage.get('fingerprintdata', function(error, data) {
    if (error) throw error;
    if (data.fingerprint === undefined)
      data.fingerprint = '';
    document.getElementById("fingerprint").value = data.fingerprint;
  });

  storage.get('colordata', function(error, data) {
    if (error) throw error;
    if (data.color === undefined)
      data.color = '';
    document.getElementById("color").value = data.color;
  });
}

window.onload = rememberedValues();
