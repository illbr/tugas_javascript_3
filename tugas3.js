
const cekAlamatRumah = (address) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const validAddresses = ["Jalan A", "Jalan B", "Jalan C", "Jalan D"];
            let isAddressValid = validAddresses.includes(address);

            if (isAddressValid) {
                resolve("Alamat rumah valid");
            } else {
                reject("Alamat rumah tidak valid");
            }
        }, 3000);
    });
};

const handlePromiseThenCatch = (address) => {
    console.log("Running handle promise");
    cekAlamatRumah(address)
        .then(result => console.log(result))
        .catch(error => console.log(error));
};

handlePromiseThenCatch("Jalan B");




// const cekJenisBenda = (object) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const solidObjects = ["meja", "kursi", "buku"];
//             const liquidObjects = ["air", "minyak", "susu"];
            
//             if (solidObjects.includes(object)) {
//                 resolve("Ini adalah benda padat");
//             } else if (liquidObjects.includes(object)) {
//                 resolve("Ini adalah benda cair");
//             } else {
//                 reject("Jenis benda tidak dikenal");
//             }
//         }, 3000);
//     });
// };

// const handlePromiseThenCatch = (object) => {
//     console.log("Running handle promise");
//     cekJenisBenda(object)
//         .then(result => console.log(result))
//         .catch(error => console.log(error));
// };

// handlePromiseThenCatch("air");
