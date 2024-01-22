//sukuriame masyvą su maršrutų duomenimis
let routes = [
    {
        cityA: "Vilnius",
        cityB: "Kaunas",
        departureDate: "2025-06-10",
        departureTime: "10:00",
        arrivalDate: "2025-06-10",
        arrivalTime: "11:00",
        duration: "01:00"
    },
    {
        cityA: "Ignalina",
        cityB: "Klaipėda",
        departureDate: "2025-10-01",
        departureTime: "07:30",
        arrivalDate: "2025-10-01",
        arrivalTime: "12:30",
        duration: "05:00",
    },
    {
        cityA: "Molėtai",
        cityB: "Raudondvaris",
        departureDate: "2024-12-13",
        departureTime: "11:25",
        arrivalDate: "2024-12-13",
        arrivalTime: "13:25",
        duration: "02:00",
    },
    {
        cityA: "Jupiteris",
        cityB: "Saturnas",
        departureDate: "2086-12-24",
        departureTime: "23:05",
        arrivalDate: "2086-12-26",
        arrivalTime: "23:05",
        duration: "48:00",
    },
    {
        cityA: "Panevėžys",
        cityB: "Utena",
        departureDate: "2027-01-30",
        departureTime: "00:10",
        arrivalDate: "2027-01-30",
        arrivalTime: "02:40",
        duration: "02:30",
    }
]


//funkcija, kuri išspausdina maršrutų duomenis
function printRoute() {
    for (let i = 0; i < routes.length; i++) {
        console.log("Maršrutas: " + routes[i].cityA + " - " + routes[i].cityB + ", išvyksta: " + routes[i].departureDate + ", " + routes[i].departureTime + ", kelionės trukme: " + routes[i].duration);
    }
}
//funkcijos iškvietimas
//printRoute();

//funkcija, kuri grąžina maršruto išvykimo datą ir laiką
function getDepartureDateAndTime(cityA, cityB) {
    for (let i = 0; i < routes.length; i++) {
        if (routes[i].cityA === cityA && routes[i].cityB === cityB) {
            return "Maršruto " + routes[i].cityA + " - " + routes[i].cityB + " išvykimo data ir laikas: " + routes[i].departureDate + ", " + routes[i].departureTime + " val.";
        }
        else return "Neteisingai įvesti duomenis";
    }
}

//"iškonsoliname" funkciją
//console.log(getDepartureDateAndTime("Vilnius", "Kaunas"));

function printTravelTime(cityA, cityB) {
    for (let i = 0; i < routes.length; i++) {
        if (routes[i].cityA === cityA && routes[i].cityB === cityB) {
            return "Maršruto " + routes[i].cityA + " - " + routes[i].cityB + " kelionės trukme: " + routes[i].duration + " val.";
        }
        else return "Neteisingai įvesti duomenis";
    }
}

//"iškonsoliname" funkciją
//console.log(printTravelTime("Vilnius", "Kaunas"));

//funkcija, kuri grąžina atvykimo datą ir laiką

function getArrivalDateAndTime(cityA, cityB) {
    for (let i = 0; i < routes.length; i++) {
        if (routes[i].cityA === cityA && routes[i].cityB === cityB) {
            return "Maršruto " + routes[i].cityA + " - " + routes[i].cityB + " atvykimo data ir laikas: " + routes[i].arrivalDate + ", " + routes[i].arrivalTime + " val.";
        }
    }
}

//"iškonsoliname" funkciją
//console.log(getArrivalDateAndTime("Vilnius", "Kaunas"));

//funkcija, kuri grąžina kelionės trukmę

function getTravelTime(cityA, cityB) {
    for (let i = 0; i < routes.length; i++) {
        if (routes[i].cityA === cityA && routes[i].cityB === cityB) {
            return  "Kelionės trukme: " + routes[i].duration + " val.";
        }
    }
}

//"iškonsoliname" funkciją
//console.log(getTravelTime("Vilnius", "Kaunas"));

//funkcija, trumpiausiam maršrutui rasti

function findShortestRoute() {
    let shortestRoute = routes[0];
    for (let i = 0; i < routes.length; i++) {
        if (routes[i].duration < shortestRoute.duration) {
            shortestRoute = routes[i];
        }
    }
    return `Trumpiausias maršrutas: ${shortestRoute.cityA} - ${shortestRoute.cityB}, išvykimo laikas: ${shortestRoute.departureDate}, ${shortestRoute.departureTime}, kelionės trukme: ${shortestRoute.duration} val.`;
}

//"iškonsoliname" funkciją
//console.log(findShortestRoute());

//funkcija, ilgiausiam maršrutui rasti

function findLongestRoute() {
    let longestRoute = routes[0];
    for (let i = 0; i < routes.length; i++) {
        if (routes[i].duration > longestRoute.duration) {
            longestRoute = routes[i];
        }
    }
    return `Ilgiausias maršrutas: ${longestRoute.cityA} - ${longestRoute.cityB}, išvykimo laikas: ${longestRoute.departureDate}, ${longestRoute.departureTime}, kelionės trukme: ${longestRoute.duration} val.`;
}

//"iškonsoliname" funkciją
//console.log (findLongestRoute());
