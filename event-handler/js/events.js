function transformUppercase(_val){
    return _val.toUpperCase();
}

//Dom event listener
let elNamaPengguna = document.getElementById("namaPengguna")
elNamaPengguna.addEventListener("keyup",function(){
    elNamaPengguna.value = transformUppercase(elNamaPengguna.value)
})

function checkPassword(){
    let elKataLaluan = document.getElementById("kataLaluan")
let pass_val = elKataLaluan.value
if(pass_val.length > 5){
    alert("password check...ok!")
} else {
    alert("password too short!")
}
}
let elKL = document.getElementById("kataLaluan")
elKL.onblur = checkPassword