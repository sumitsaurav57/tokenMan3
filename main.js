const section = document.querySelectorAll('section');
var btn = document.getElementById('addb');
var back = document.querySelector('.back');
const form = document.querySelector('form');
/* form.addEventListener('submit',add()) */
section.forEach(section => {
    section.style.display = 'none';
})
section[0].style.display = 'block';
btn.onclick = function () {
  add()
}
back.onclick = function () {
    section.forEach(section => {
        section.style.display = 'none';
    })
    section[0].style.display = 'block';
}
var tasks = [];
console.log(tasks)
function add() {
    var el = document.getElementById('section2');
    function Profile(name, age, about,token) {
        this.name = name;
        this.age = age;
        this.about = about;
        this.token = token;
    };
    var elc = document.getElementById('name').value;
    var ela = document.getElementById('age').value;
    var elb = document.getElementById('about').value;
    if (ela==null||ela==''&& elb==null||elb==''&& elc == null||elc=='') {
        alert("fill this form")
    }
    else {
        var token = sha256(JSON.stringify(elc) + JSON.stringify(ela) + JSON.stringify(elb)).toString();
        var task = new Profile(elc, ela, elb, token);
        if (task) {
            tasks.push(task);
            elc = '';
            ela = '';
            elb = '';
            token = '';
            document.getElementById('name').value = '';
            document.getElementById('age').value = '';
            document.getElementById('about').value = '';
            var data = '';
            if (tasks.length > 0) {
                for (let i = 0; i < tasks.length; i++) {
                    data += `<div class='data'> hi ${tasks[i].name} this is your unique token<div class='token'> ${tasks[i].token}</div> </div>`;
                }
            }
        }
        section.forEach(section => {
            section.style.display = 'none';
        })
        section[1].style.display = 'block';
    }
    el.innerHTML = data;
};
   /*  var btn = document.getElementById('addb');
    btn.addEventListener('click', add)
 */
    const canvas = document.getElementById('matrix');
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;
    const fontSize = 16;
    const columns = canvas.width/fontSize;
    const rainDrops = [];
    for( let x = 0; x < columns; x++ ) {
        rainDrops[x] = 1;
    }
    const draw = () => {
        context.fillStyle = 'rgba(0, 0, 0, 0.05)';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = '#0F0';
        context.font = fontSize + 'px monospace';
        for(let i = 0; i < rainDrops.length; i++)
        {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            context.fillText(text, i*fontSize, rainDrops[i]*fontSize);
            if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };
    setInterval(draw, 30);