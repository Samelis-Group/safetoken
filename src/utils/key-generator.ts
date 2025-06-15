
const lower_case = "abcdefghijklmnopqrstuvwxyz";
const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const symbols = "@#$%&*/?:+-^,.;!§€~{[|_()]}=<>";

const Use_for = lower_case + upper_case + number + symbols;

const date = Date.now();

function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default function generatePassword (length:number) {
  const a = Math.random().toString(36);
  const b = a.substring(2, a.length);
  const strong = b + Use_for + date;
  const array = strong.split("");
  shuffleArray(array);
  let strongPassword = "";
  for (let index = 0; index < length; index++) {
    const randomIndex = Math.floor(Math.random() * array.length);
     strongPassword += array[randomIndex];
  }
  return strongPassword;
}