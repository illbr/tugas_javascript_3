const getMonth = (callback) => {
    setTimeout(() => {
      let error = false
      let month = ["januari","februari","maret","april","mei","juni","juli","agustus","september","oktober","november","desember"]
  
      if(!error){
        callback(null, month)
      }else{
        callback(new Error("sorry data not found"),[])
      }
    },4000)
  }
  
  const printMonth = (error, month) => {
    month.map(item => console.log(item))
  }
  getMonth(printMonth)


  