var usernum = ""
var rnumber = Math.floor(Math.random() * 10) + 1
console.log(rnumber)
var right_or_worng = document.getElementById("rw")
var chance_obj = document.getElementById("chance")
var chance = Number(chance_obj.textContent)



function ans() {
    usernum = document.getElementById("inputnumber").value
    if (rnumber == usernum) {

        right_or_worng.textContent = "Your are  right"
        alert("you are win!")
        location.reload(true)

    }
    else {
        right_or_worng.textContent = "Your are wrong"
        chance_obj.textContent = --chance
        if (chance === 0) {
            alert("Your chance is emty")
            location.reload(true)
        }
    }
}

function relode(){
    location.reload(true)
    
}