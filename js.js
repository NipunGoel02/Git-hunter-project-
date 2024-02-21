




let names = document.getElementById("form")


names.addEventListener('submit', function (e) {
    e.preventDefault()

    var search = document.getElementById("textes").value

    var originalName = search.split(' ').join('')



    async function getData() {
        let x = await fetch("https://api.github.com/users/" + originalName)
        let data = await x.json()
        console.log(data)
        let html = `  <div class="container2">
        <img src="${data.avatar_url}" alt="image">
        <div class="data ">
        <div>
        Followers : ${data.followers}
        </div>
        <div>
        Following : ${data.following}
        </div>
        <div>
        Repositories : ${data.public_repos}
        </div>
        <div>
        Profile link : <a href="https://www.github.com/${originalName}"> Profile link </a>
        </div>
        </div>
        `

        document.getElementById("body").innerHTML = document.getElementById("body").innerHTML + html





    }
    async function main() {
        let data = await getData()
        console.log("https://api.github.com/users/" + originalName)



    }




    main()






})


