// function getAdmins(map) {
//     let admins = [];
//     for ([key, value] of map) {
//         if (value === 'Admin') {
//             admins.push(key);
//         }
//     }

//     return admins;
// }

// const usuarios = new Map();

// usuarios.set('Luiz', 'Admin');
// usuarios.set('Luan', 'Admin');
// usuarios.set('Carla', 'User');

// console.log(getAdmins(usuarios));


const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];


function valoresUnicos(arr){
    const meSet = new Set(arr);

    return [...meSet];
}

console.log(valoresUnicos(meuArray));