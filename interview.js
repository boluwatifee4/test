
// ----------------- method 1 --------------------
// const myForm = document.getElementById('mForm')

// myForm.addEventListener('submit',(e)=>{
//     e.preventDefault();

//     const formData = new FormData(myForm)

//     fetch('https://3.68.112.247/usermanagement/swagger/v1/swagger.json',{
//         headers: { 'Content-Type':"multipart/form-data" },    
//        method: 'post',
//        body: {
//         Username: "user",
//         Password: "pass"
//         }
//     }).then((res)=>{
//         return res.text()
//     }).then(function text(){
//         console.log(text)
//     }).catch((error)=>{
//         console.log(error)
//     })
// })

//--------------- method 2 ------------------

// formElem.onsubmit = async (e) => {
//     e.preventDefault();

//     let response = await fetch('https://3.68.112.247/usermanagement/swagger/v1/swagger.json', {
//       method: 'POST',
//       body: new FormData(formElem)
//     });

//     let result = await response.json();

//     alert(result.message);
//   };

var hour = new Date().getHours()
let out;
function greet() {
    if (hour === 0 && hour < 12) {
        out = 'GOOD MORNING USER'
    } else if (hour > 12 && hour < 16) {
        out = 'GOOD AFTERNOON USER'
    } else {
        out = "GOOD EVENING USER"
    }
    document.getElementById('bold').innerHTML = out;
}
greet()