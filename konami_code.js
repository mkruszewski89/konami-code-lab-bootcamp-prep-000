const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0

document.body.addEventListener('keydown', onKeyDownHandler(e) {
  const key = parseInt(e.which)
  if (key === code[index]) {
    index += 1
    if (index === code.length) {
      alert("Hurray!")
      index = 0
    }
  } else {
    index = 0
  }
})

/*
function onKeyDownHandler(e) {
  const key = parseInt(e.which)
  if (key === code[index]) {
    index += 1
    if (index === code.length) {
      alert("Hurray!")
      index = 0
    }
  } else {
    index = 0
  }
}
*/
