const Queue = require("./queue.js");
const Vehicle = require("./vehicle.js");
const readline = require('readline');

function BOT(){
    this.list = [];
    this.total = 0;
}
BOT.prototype.pass = function(vehicle){
    this.list.push(vehicle);
    this.total += vehicle.point;
    return 1;
}

// Các giá trị khởi tạo
// Tạo BOT
const bot = new BOT();
// tạo giá trị kiểm tra cho xe qua BOT
var check = 0;
//Tạo hàng chờ
let q = new Queue();

const vehiclesType = [
    {
        name: 'Car',
        value: 5
    },
    {
        name: 'Bus',
        value: 10
    },
    {
        name: 'Truck',
        value: 15
    },
    {
        name: 'Container',
        value: 20
    }
    //'Car', 'Bus', 'Truck', 'Container'
];

function createVehicle(maxRange) {
    var keyType = Math.floor(Math.random() * maxRange)
    return new Vehicle(vehiclesType[keyType].name, vehiclesType[keyType].value)
}
// Hàm tạo xe vào BOT
function openTheBOT(maxRangeVehicle, loopTimeCreateVehicle) {
    var idBOTLoop = setInterval(() => { 
        var vehi = createVehicle(maxRangeVehicle)
        //console.log(vehi);
        q.enqueue(vehi);
    }, loopTimeCreateVehicle);
}

// Các hàm show thông tin
function showBotList() {
    console.log(bot);
}
function showQueueList() {
    console.log(q);
}
function showAllTypeVehicle() {
    console.log(vehiclesType);
}
function passVehicles() {
    var curPass = q.peek();
    check = bot.pass(q.peek());
    if (check === 1) {
        q.dequeue();
        check = 0;
    }
    console.log(`BOT đã cho qua chiếc xe: ${curPass.type} - ${curPass.point}`);
    console.log('BOT đã lưu lại thông tin');
}

function controlBOT() { //Hàm menu điều khiển
    console.log('1: Show BOT list');
    console.log('2: Show queue list');
    console.log('3: Show all type vehicle');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('What do you think? >  ', (option) => {
        switch (parseInt(option)) {
            case 1:
                showBotList();
                break;
            case 2:
                showQueueList();
                break;
            case 3:
                showAllTypeVehicle();
                break;
            case 4: 
                passVehicles();
                break;
            default:
                break;
        }
        rl.close();
        controlBOT();
    });
}

// Gọi Hàm
openTheBOT(4, 200);
controlBOT();


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function openTheBOTver2(x, y) {
    for (let index = 0; index < 10; index++) {
        var vehi = createVehicle(x)
        console.log(vehi);
        q.enqueue(vehi);
        await sleep(y);
    }
}



// async function main() {
//     await openTheBOTver2(4, 600);
// }
// //showQueueList();
// //showBotList();
// main()