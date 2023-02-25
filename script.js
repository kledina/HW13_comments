let inputfield = document.getElementsByClassName('inputfield');
function capitalizeName(str) {
    return str[0].toUpperCase() + str.toLowerCase().slice(1);
}
const postIt = () => {
    let username = document.getElementById('username').value.replace('/\s+/g', ' ').trim();
    let avatar = document.getElementById('avatar').value;
    let message = document.getElementById('message').value;
    let usernameArray = username.split(' ');
    let updatedUsername = ' ';
    usernameArray.forEach((item) => {
        updatedUsername = capitalizeName(item) + ' ' + updatedUsername;
    })
    function checkYes() {
        let checkbox = document.getElementById('yes');
        if(checkbox.checked!=false)
        {
            inputfield[0].value = "Username";
        }
        else {
            inputfield[0].value = updatedUsername;
        }
    }
    
    let date = Date.now();

    function leadingZero(token) {
        return ("0" + token).slice(-2)
    }
    
    let weekday = date.getDay(),
        year = date.getFullYear(),
        month = leadingZero(date.getMonth() + 1),
        day = leadingZero(date.getDate()),
        hours = leadingZero(date.getHours()),
        minutes = leadingZero(date.getMinutes())
    
    let currentDate = `${weekday}, ${day}.${month}.${year} в ${hours}:${minutes}`;
    document.getElementById('date').value = currentDate;

    let avatarSrc = document.getElementById('avatar').value;
    let avatarImage = document.getElementById('pic');
    let images = [
        '../assets/baby.jpg',
        '../assets/bird.jpg',
        '../assets/brad.jpg',
        '../assets/smile.jpg',
        '../assets/lemon.jpg',
    ];
    if (avatarSrc = '') {
        avatarImage.src = images[Math.floor(Math.random()*images.length)];
    }
    else {
        avatarImage.src = avatarSrc;
    }
    
    newMessage.value = message.replace(/viagra|xxx/gi, '***');
}