const showName = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(result => result.json())
    .then(data =>{
        data.forEach(element => {
            console.log("nama : " + element.name)
        });
    })
}
showName("")

