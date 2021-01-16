exports.codeGen = () => {
  const availableChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";
  for (let i = 0; i < 25; i++) {
    code += availableChars[Math.floor(Math.random() * availableChars.length)];
  }
  return code;
};
