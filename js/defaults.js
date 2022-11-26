// const baseUrl = "http://localhost:5000/v1/";
const baseUrl = "https://zte-api.onrender.com/v1/";



function checkIfLoggedIn() {
    fetch(baseUrl + "auth/checkifloggedin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            accesstoken: localStorage.getItem("Authorization")
        })
    }).then(async (res) => {
        const data = await res.json();
        console.log(res.status);
        if(res.status != 200) {
            location.assign("/login.html");
        }
        console.log(data);
    }).catch(error => {
        console.log(error);
        location.assign("/login.html");
    });
}
