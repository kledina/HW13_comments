let inputfield = document.getElementsByClassName('inputfield');
function capitalizeName(str) {
    return str[0].toUpperCase() + str.toLowerCase().slice(1);
}

function checkYes(updatedUsername) {
    let checkbox = document.getElementById('yes');
    if(checkbox.checked === false)
    {
        inputfield[0].value = "Username";
    }
    else {
        inputfield[0].value = updatedUsername;
    }
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
    checkYes(updatedUsername);
    
    let date = Date.now();

    function leadingZero(token) {
        return ("0" + token).slice(-2)
    }

    let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

    let weekday = days[(new Date (date)).getDay()];
        year = (new Date (date)).getFullYear(),
        month = leadingZero((new Date (date)).getMonth() + 1),
        day = leadingZero((new Date (date)).getDate()),
        hours = leadingZero((new Date (date)).getHours()),
        minutes = leadingZero((new Date (date)).getMinutes())
    
//var myDate = new Date();
//var fullDate = "Сегодня: " + myDate.getDate() + " " + months[myDate.getMonth()] + 
    //" " + myDate.getFullYear() + ", " + days[myDate.getDay()];
    let currentDate = `${weekday}, ${day}.${month}.${year} в ${hours}:${minutes}`;
    document.getElementById('date').innerHTML = currentDate;

    let avatarImage = document.getElementById('pic');
    let images = [
        './assets/baby.jpg',
        './assets/bird.jpg',
        './assets/brad.jpg',
        './assets/smile.jpg',
        './assets/lemon.jpg',
    ];
    if (avatar === '') {
        avatarImage.src = images[Math.floor(Math.random()*images.length)];
    }
    else {
        avatarImage.src = avatar;
    }
    
    newMessage.value = message.replace(/viagra|xxx/gi, '***');
}