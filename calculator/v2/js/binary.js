// let b_value = "2166";
let b_value = document.querySelector(".binary-input").value
let bit_8 = [128, 64, 32, 16, 8, 4, 2, 1];
let bit_16 = [32768, 16384, 8192, 4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1,];
let bit_32 = [ 2147483648, 1073741824, 536870912, 268435456, 134217728, 67108864, 33554432, 16777216, 8388608, 4194304, 2097152, 1048576, 524288, 262144, 131072, 65536, 32768,16384, 8192, 4096, 2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];
let binary = "";
let pro = "Auto"

function binary_error(params) {
  document.querySelector("#binary-error").innerText = params
  document.querySelector(".binary-error").classList.remove("hidden")
  setTimeout(() => {
      document.querySelector(".binary-error").classList.add("hidden")
  }, 1000);
 
}
function change(element) {
  for (const it of element) {
    if (it <= b_value) {
      if (it == b_value) {
        b_value = b_value - it;
        binary = binary + "1";
      } else {
        b_value = b_value - it;
        binary = binary + "1";
      }
    } else {
      binary = binary + "0";
    }
  }
  return binary
}
function b_convert(bro = "Auto") {
  if (bro == "Auto") {
    if (b_value >= 16777216) {
      binary_error("value is too big to handle")
      console.log("value is too big to handle");
    } else if (b_value > 255 && b_value < 65536) {
      change(bit_16);
    } else if (b_value > 65535) {
      change(bit_32);
    } else {
      change(bit_8);
    }
   
  } 
  else if (bro == "bit-8") {
    if (b_value > 255) {
      binary_error("please use 16-bit or more convert this value")
      console.log("please use 16-bit or more convert this value");
    } else {
      change(bit_8);
    }
  } 
  else if (bro == "bit-16") {
    if (b_value > 65535) {
      binary_error("please use 32-bit or more convert this value")
      console.log("please use 32-bit or more convert this value");
    } else {
      change(bit_16);
    }
  } 
  else if (bro == "bit-32") {
    if (b_value >= 4294967296) {
      binary_error("Value is too big to be converted")
      console.log("Value is too big to be converted");
    } else {
      change(bit_32);
    }
  } 
  return binary
}

document.querySelector(".selected-box").addEventListener("click", (e) =>{
  e.stopPropagation()
  document.querySelector(".select-options-box").classList.toggle("hidden-box")
})

document.querySelectorAll(".options").forEach((e) =>{
  e.addEventListener("click",() =>{
     document.querySelector(".selected-element").innerText = e.value
     pro = e.getAttribute('id')
  })
})

document.querySelector(".binary-solve").addEventListener("click", ()=>{
  for (let index = 0; index < 2; index++) {
b_convert(`${pro}`)
    document.querySelector(".display-binary").innerText = binary;
    // setTimeout(() => {
      b_value = document.querySelector(".binary-input").value
      binary = ""
    // }, 0);
  } 
})
document.querySelector(".binary-clear").addEventListener("click", ()=>{
    document.querySelector(".display-binary").innerText = "0";
    // setTimeout(() => {
      document.querySelector(".binary-input").value = "0"
      binary = ""
    // }, 0);
})


 