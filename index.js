$("#filter").spectrum({
  color: '#000',
  flat: true,
  showInput: true,
  preferredFormat: 'rgb', // hex rgb
  move(c){
    document.querySelector('.filterShow .after').style.background = c.toRgbString()
    document.querySelector('.filterText').innerText = `${c.toRgbString()} ${c.toHexString()}`
  },
});


document.querySelector('.compareIpt').oninput = (e)=>{
  document.querySelector('.filterShow .before').style.background = e.target.value
}
