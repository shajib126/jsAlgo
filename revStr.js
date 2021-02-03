function reverse(str){
    var arr = str.split("");
    arr.reverse()
     const res = arr.join("")
    return res

}
console.log(reverse("shajib"))


function rever(str2){
    let rev = "";
    for(let char of str2){
        rev = char + rev
    }
    return rev
}
console.log(rever("zubaer"));


function rev2(str3){
    return str3.split('').reduce((rev,char)=> char + rev ,'')
}
console.log(rev2("mitu"))