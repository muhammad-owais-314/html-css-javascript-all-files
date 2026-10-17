let animalNames = ['Cat','Kangroo','Monkey','Cow','Donkey','Lion','Tiger','Dear'];


// console.log(animalNames.length)


// for(let i=0; i < animalNames.length; i++){
//     console.log(animalNames[i])
// }

// for(let i=0; i < 7; i++){
//     document.writeln(`${i} - ${animalNames[i]} <br>`)
// }



// document.writeln(animalNames)
// document.write(animalNames)

// document.writeln('jfkdsajfkjdskjfdksj')usama

// let inc =0;
// while(inc < 7){
//     console.log(animalNames[inc]);
//     inc++
// }



// let inc = 0;

// do{
//     console.log(animalNames[inc]);
//     inc++;
// }
// while(inc < 7)


// let userInp = '';
// do{
//    userInp = prompt('Enter your Name');
// }
//  while(userInp == '');

// console.log(userInp);

//Map 


console.log(document.getElementById('tableBody'))


animalNames.map((animal,index)=>{
document.getElementById('tableBody').innerHTML += `
        <tr>
            <td>${index+1}</td>
            <td>${animal}</td>
        </tr>
`
})





// animalNames.map((item,ind)=>{
//     console.log(item,ind);
//     document.writeln(item)
// })


