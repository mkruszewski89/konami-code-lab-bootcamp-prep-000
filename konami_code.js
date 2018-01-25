const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var index = 0

function init() {
  document.body.addEventListener('keydown', onKeyDownHandler)
}

function onKeyDownHandler(e) {
  console.log(e.detail)
  console.log(e.which)
  console.log(e.location)
  const key = parseInt(e.detail || e.which)
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
