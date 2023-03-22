const camera = document.getElementById("camera");
const result = document.getElementById("result");

Webcam.set({
    width: 360,
    heigth: 250,
    image_format: 'png',
    png_quality: 90


});

Webcam.attach(camera);

function snap() {
    result.innerHTML = "";
    Webcam.snap(function (dataURI) {
        const captura = document.createElement("img");
        captura.setAttribute("id", "captura" );
        captura.setAttribute("src", "dataURI");
        result.appendChild(captura);

    })
};

const teachablemachineLink = 'https://teachablemachine.withgoogle.com/models/_z3s49uTg/';
const modeLink = teachablemachineLink + 'model.json'
const classifier =  m15.image.Classifier(modeLink, modelLoaded)

function modelLoaded() {
    console.log('Modelo Carregado')
}