const randID = () => {
  let text = [];
  let possible = "0123456789";
  for (var i = 0; i < 6; i++) {
    text.push(possible.charAt(Math.floor(Math.random() * possible.length)));
  }
  return text.join("");
}

const randStat = () => {
  let text = [];
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 14; i++) {
    text.push(possible.charAt(Math.floor(Math.random() * possible.length)));
  }
  return text.join("");
}

module.exports = {
    "numeric":randID,
    "static":randStat
  }
