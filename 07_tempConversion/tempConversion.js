const ftoc = function(ftemp) {
  return parseFloat(((ftemp - 32) * 5 / 9).toFixed(1))
};

const ctof = function(ctemp) {
  return parseFloat((ctemp * 9 / 5 + 32).toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
