const input = document.querySelector('input');
const btn = document.querySelector('button');
const main = document.querySelector('.main');

btn.addEventListener('click',()=>{
  const inputValue = input.value
  
  if(inputValue === ""){
    alert("Please Enter Link")
  }
  else{
    const img = document.createElement('img');
    img.style.marginTop = '20px'
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
  
    main.append(img);
    input.value = ""
  }
});