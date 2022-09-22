let m;
let robot;
let n = prompt("");
let str = "";
while (n > 0) {
  for (let i = 0; i < n; i++) {
    str += "| ";
  }
  alert(str);
  str = "";
  alert("Your turn!");
  m = prompt("Get the matches!");
  /** todo isNaN() m <= 0 or m>3 */
  if (isNaN(m) || m <= 0 || m > 3) {
    alert("Wrong number");
    continue;
  }
  n -= m;

  if (n <= 0) {
    alert("Your win!");
    break;
  }
  alert("My turn!");
  robot = (n - 1) % 4 == 0 ? 1 : (n - 3) % 4 == 0 ? 3 : 2;
  /* todo */
  n -= robot;
  if (n <= 0) {
    alert("I win!");
    break;
  }
}
