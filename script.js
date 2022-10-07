let str;
function matches() {
  let m;
  let robot;
  let n = prompt("How many matches?");

  while (n > 0) {
    alert(show(n));
    alert("Your turn!");
    m = prompt("Get the matches!");
    /** todo isNaN() m <= 0 or m>3 */
    if (isNaN(m) || m <= 0 || m > 3) {
      alert("Wrong number");
      continue;
    }
    n -= m;
    alert(show(n));
    if (n <= 0) {
      alert("Your win!");
      return;
    }
    alert("My turn!");
    robot = (n - 1) % 4 == 0 ? 1 : (n - 3) % 4 == 0 ? 3 : 2;
    /* todo */
    n -= robot;
    show(n);
    if (n <= 0) {
      alert("I win!");
      return;
    }
  }
}
function show(amount) {
  str = amount + ": ";
  for (let i = 0; i < amount; i++) {
    str += "| ";
  }
  return str;
}
matches();
