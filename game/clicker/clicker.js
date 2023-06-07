function clicker(){
    const cookies = document.cookie;
    const array = cookies.split(';');
    let click_count = 0
    array.forEach(function(value) {
        const content = value.split('=');
        console.log(content[1]);
        click_count = Number(content[1]) + 1
        document.cookie = "click_count="+click_count;
        document.getElementById('count').innerHTML = click_count ;
        if (click_count === 100) {
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
        if (click_count === 1000000){
            alert("congratulation you clicked 1000000 times")
        }

    })
}