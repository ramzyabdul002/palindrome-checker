"strict mode"

const input = document.getElementById('inputPlaceholder');

function reverseString(str) {
  return str.split("").reverse().join("");

}

function check() {
  const value = input.value;

  // alert(value)

  const reverse = reverseString(value);

  if (value === reverse) {
    alert('🎉 P A L I N D R O M E 🎉');
  } else (
    alert('You can do better than that ☠️')
  )

  input.value = ""
}

