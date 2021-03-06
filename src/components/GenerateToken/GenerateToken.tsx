import { Redirect } from "react-router-dom";

function generateRandomToken(tokenLength: number) {
  let result = "";
  const characters = "abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-+";
  const charactersLength = characters.length;
  for (let i = 0; i < tokenLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const GenerateToken = () => {
  const token = generateRandomToken(10);
  return <Redirect to={`/login/${token}`} />;
};

export default GenerateToken;
