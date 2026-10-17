// console.log("H")



let obj = [
    {
        accountHolder: "Arif Alvi",
        accountNumber: 2398498239849783,
        pin: 2344,
    },
    {
        accountHolder: "Zahid Khan",
        accountNumber: 53644564564564545,
        pin: 5443,
    },
    {
        accountHolder: "Hina Majid",
        accountNumber: 18687687687658578,
        pin: 7656,
    },
    {
        accountHolder: "Sadaf Sarfaraz",
        accountNumber: 15656978769687697,
        pin: 7678,
    },
]



// console.log(obj)

// let stringifyObj = JSON.stringify(obj);

// console.log("Json string Method",stringifyObj)



// console.log("Json Parse method",JSON.parse(stringifyObj))


localStorage.setItem("bankDataLocal",JSON.stringify(obj))

sessionStorage.setItem("bankDataSession",JSON.stringify(obj))

console.log(sessionStorage.getItem("IsThisFirstTime_Log_From_LiveServer"))
console.log(JSON.parse(localStorage.getItem("bankDataLocal")))
