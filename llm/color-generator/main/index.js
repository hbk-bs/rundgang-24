let isGenerating = false;
const data = [];
let hueSum = 0;
let clickCount = 0;

function preload() {
    if (llm) {
        console.log('Yes, llm is there');
    } else {
        console.error('NO, llm is not there')
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);

        const outputParagraph = document.getElementById('output');
        const saveButton = document.getElementById('saveButton');

    canvas.addEventListener('click', (event) => {
        if(clickCount < 5){
            const hueValue = map(event.clientX, 0, windowWidth, 0, 360);
            hueSum += hueValue;
            clickCount++;

            if(clickCount === 5){
                const averageHue = hueSum / 5;
                outputParagraph.textContent = `Durchschnittlicher Hue-Wert: ${averageHue}`;

    isGenerating = true;
    llm.chat({
        format: 'json',
        options:{
            seed: 42,
            temperatur: 0.8

        },
        messages: [{
            role: 'system',
            content: `You are a p5js color layer generator. You will get mouse positions. YOU ONLY ANSWER IN JSON. Dont give me explanations. Dont escape the JSON. Dont add new lines. 
            
            Please gererate circles on the hole canvas. NOT ONLY in the left upper corner. THIS IS VERY IMPORTANT TO ME! And generate 1 up to 5 datasets. IMPORTANT. Please DO NOT generate two circles on the same position. VERY IMPORTENT!  I want the dataset in the following format: 

            {data:[{hue: ${averageHue}, saturation:<number between 0 and 100>, brightness:<number between 0 and 100>, x: <positive number between 0 and ${windowWidth}>, y: <positive number between 0 and ${windowHeight}> }]}`,

        },
        {
            role: 'user',
            content: `${averageHue}`,
        }],
    })
        .then((response) => {
            isGenerating = false;
            console.log(response.completion.choices[0].message.content);
            const json = JSON.parse(response.completion.choices[0].message.content);
            data.push(...json.data);

            hueSum = 0;
            clickCount = 0;
        })

    
        .catch((error) => {
            isGenerating = false;
            console.error(error);
        });

        data.push({ x: random(0, 400), y: random(0, 400) });

            }
        }

        });

    saveButton.addEventListener('click', () => {
        saveCanvas('myCanvas', 'png');
    });
    
}


function draw() {
    background(255);
    textAlign(CENTER, CENTER);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();


    if (data.length > 0) {

            data.forEach(item =>{
                
                    for (let i = 0; i < 200; i++) {
                        fill(item.hue % 360, item.saturation, item.brightness, 1);
                        circle(item.x, item.y,  i*2);
                    }
                });
        }
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

document.getElementById('closeButton').addEventListener('click', () => {
    document.getElementById('welcomeModal').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
});