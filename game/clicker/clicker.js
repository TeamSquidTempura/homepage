var click_count = 0
function clicker(){
    click_count = click_count + 1
    document.getElementById('count').innerHTML = click_count ;
    if (click_count === 100){
        alert("congratulation you clicked 100 times")
    }
    if (click_count === 1000){
        alert("congratulation you clicked 1000 times")
    }
    if (click_count === 10000){
        alert("congratulation you clicked 10000 times")
    }
    if (click_count === 100000){
        alert("congratulation you clicked 100000 times")
    }
}