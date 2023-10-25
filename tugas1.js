const cekHariKerja = (day) => {

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const dataDay = ["senin","selasa","rabu","kamis","jumat"]
            let cek = dataDay.find((item)=>{
                return item === day
            })
            
            if(cek){
                resolve("hari kerja")
            }else{
                reject("hari ini bukan hari kerja")
            }
        },3000)
    })
}

let handlePromiseThenCatch = () => {
    console.log("running handle promise")
    cekHariKerja("minggu")
    .then(rest => console.log(rest))
    .catch(error => console.log(error))
}

handlePromiseThenCatch("")

// let handlePromiseTryCatch = async () => {
//     try {
//         const result = await cekHariKerja("senin")
//         console.log(result)
//         console.log("finis")
//     } catch (error) {
//         console.log(error)
//     }
// }
// handlePromiseTryCatch("")

// fungsi try dan catch digunakan untuk menangani kesalahan (error) yang mungkin terjadi saat menjalankan promise cekHariKerja.
// Dalam blok try, kode mencoba mengeksekusi cekHariKerja("senin") menggunakan await. Jika promise tersebut berhasil diselesaikan
// (resolved) tanpa ada kesalahan, nilai hasil (result) dari promise akan disimpan dalam variabel result. Kemudian, nilai result 
// tersebut akan dicetak ke konsol menggunakan console.log(result), dan pesan "finis" akan dicetak juga.



// fungsi then dan catch digunakan untuk menangani hasil dari promise cekHariKerja secara berurutan.
// Dalam fungsi handlePromiseThenCatch, pertama-tama, pesan "running handle promise" akan dicetak ke konsol.
// Kemudian, fungsi cekHariKerja("kamis") akan dipanggil. Promise ini akan mengecek apakah "kamis" merupakan
// hari kerja atau bukan. Setelah melewati waktu penundaan 3 detik menggunakan setTimeout, promise akan
// diresolusi (resolved) atau ditolak (rejected) sesuai dengan hasil pengecekan. 
// Jika promise berhasil diresolusi, yaitu "kamis" merupakan hari kerja, fungsi then akan dieksekusi. Hasil resolusi dari promise,
// yaitu "hari kerja", akan disimpan dalam parameter rest dan dicetak ke konsol menggunakan console.log(rest).
    

