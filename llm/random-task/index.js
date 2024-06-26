/**
 * This is a simple example of how you can import
 * the ollama sdk and work with that
 * import ollama from "https://esm.sh/ollama/browser"
 * add the code below to your buttons click event listener
 * const respone = await ollama.chat({messages: [{role: 'user', content: 'What is the capital of the United States?'}]});
 * console.log(response);
 */
// ----------------------------
/**
 * There might be another way. The platform val.town
 * allows free requests to openai api. https://www.val.town/v/std/openai
 * Limits are:
 * - Usage Quota: We limit each user to 10 requests per minute.
 * - Features: Chat completions is the only endpoint available.
 * - There is no streaming support
 *
 * This might be enough for our usecase.
 * Do make this easier @ff6347 wrote this simple wrapper class
 * that you can use to interact with val.town openai api
 * mimicing the ollama sdk.
 * It is an esm module so you need to include type="module" in your script tag
 * <script type="module" src="index.js"></script>
 */

// import the wrapper class
import { LLM } from "./llm.js";

// create an instance of the class
// you need to insert the run url for your val.town openai api
// @ff6347 will instruct you on how to get this

const llm = new LLM({
  host: "https://hannahsoophie-openai_api.web.val.run/",
});
const information = [];

const infos = {
  extraButtons: "",
  boomButton: ""
}
// get the button#run element from the index.html
const loadingSpinner = document.getElementById("loading-spinner");
const extraButton1 = document.getElementById("extra-button-1");
const extraButton2 = document.getElementById("extra-button-2");
const extraButton3 = document.getElementById("extra-button-3");
const extraButton4 = document.getElementById("extra-button-4");
const startButton = document.getElementById("start");
const runModelButton = document.getElementById("runModel");
const timedTextDiv = document.getElementById("timed-text");
const extraButtonsContainer = document.getElementById('extra-buttons-container');
const finishedButton = document.getElementById("finished");
const chooseEmotion = document.getElementById("extra-buttons-text")
const wellDoneText = document.getElementById("well-done");


wellDoneText.classList.add("hidden");

// timedTextDiv.addEventListener("", () => {
//   timedTextDiv.classList.remove("hidden")
// })
// timedTextDiv.addEventListener("", () => {
//   timedTextDiv.classList.add("hidden")
// })

startButton.addEventListener("click", () => {
  extraButtonsContainer.classList.remove('hidden');
  extraButton1.classList.remove("hidden");
  extraButton2.classList.remove("hidden");
  extraButton3.classList.remove("hidden");
  extraButton4.classList.remove("hidden");
  startButton.classList.add("hidden");
  timedTextDiv.classList.add("hidden"); // Hide the "Choose your emotion" section
  chooseEmotion.classList.remove("hidden");
});

extraButton1.addEventListener("click", () => {
  information.push("enthousiastic");
  extraButton1.classList.add("hidden");
  extraButton2.classList.add("hidden");
  extraButton3.classList.add("hidden");
  extraButton4.classList.add("hidden");
  runModelButton.classList.remove("hidden");
  timedTextDiv.classList.add("hidden"); // Hide the "Choose your emotion" section
  chooseEmotion.classList.add("hidden");
});

extraButton2.addEventListener("click", () => {
  information.push("sad");
  extraButton1.classList.add("hidden");
  extraButton2.classList.add("hidden");
  extraButton3.classList.add("hidden");
  extraButton4.classList.add("hidden");
  runModelButton.classList.remove("hidden");
  timedTextDiv.classList.add("hidden"); // Hide the "Choose your emotion" section
  chooseEmotion.classList.add("hidden");
});

extraButton3.addEventListener("click", () => {
  information.push("anxious");
  extraButton1.classList.add("hidden");
  extraButton2.classList.add("hidden");
  extraButton3.classList.add("hidden");
  extraButton4.classList.add("hidden");
  runModelButton.classList.remove("hidden");
  timedTextDiv.classList.add("hidden"); // Hide the "Choose your emotion" section
  chooseEmotion.classList.add("hidden");
});
extraButton4.addEventListener("click", () => {
  information.push("peaceful");
  extraButton1.classList.add("hidden");
  extraButton2.classList.add("hidden");
  extraButton3.classList.add("hidden");
  extraButton4.classList.add("hidden");
  runModelButton.classList.remove("hidden");
  timedTextDiv.classList.add("hidden"); // Hide the "Choose your emotion" section
  chooseEmotion.classList.add("hidden");
});
function handleButtonClick(feeling) {
  information.push(feeling);
  extraButton1.classList.add("hidden");
  extraButton2.classList.add("hidden");
  extraButton3.classList.add("hidden");
  extraButton4.classList.add("hidden");
  runModelButton.classList.remove("hidden");
  timedTextDiv.classList.add("hidden"); // Hide the "Choose your emotion" section
}



const textSections = [
  "we live in a society...",
  "obsessed with making sense...",
  "optimizing, glamourzing, bettering the self...",
  "but what if, just for a minute...",
  "we would throw all that aside...",
  "and start playing again...",
  "we invite you...",
  "to complete one of our tasks daily...",
  "to start doing things again...",
  "without the desire for a certain outcome.",
];
let currentSectionIndex = 0;

function displayNextTextSection() {
  if (currentSectionIndex < textSections.length) {
    timedTextDiv.innerText = textSections[currentSectionIndex];
    currentSectionIndex++;
    setTimeout(displayNextTextSection, 1900); // Change text every 3 seconds
  } else {
    // Show the button after all text sections have been displayed
    timedTextDiv.classList.add("hidden")
    startButton.classList.remove("hidden");
  }
}

// Start displaying the text sections
displayNextTextSection();

// add a click event listener to the button that runs the async function
runModelButton.addEventListener("click", async () => {
  // some options for the chat
  console.log("this is your information you sleected from the user", information[0]); // ["sad" | "happy"]
 // ["sad" | "happy"]

  
  const format = "json"; // we want json output
  // we set the seed so we get always the same output
  // we set the temperature which controls the creativity of the model
  const options = {
    // seed: 42,
    temperature: 1.5,
  };
  // the messages that we want to send to the model
  // allowed are 'system', 'assistant' and 'user' role for the messages
  const messages = [
    {
      role: "system",
      content: ` Give me a random task to do, that can be finished in 1-5 Minutes. The task has to be set in the close environment. The user is feeling ${information[0]} today, so make the match his mood . Make it very random, so that you would normally not think about doing a task like this. Make it slightly playful and creative, as if a child came up with the idea. Make it still mindful so that the user feels good about completing the task. Make it realistic, so that the user is able to successfully complete the task. Just give out the task with no context or extra information, like saying that you are about to give the user a task. You can use the examples as well. Make up a differnt task each time. Include a fitting emoji.
      
      
      **Examples:** <Write a short poem about the last noise you heard. . Call the first person in your contacts. Hug a tree or a living being. Use household items to create a fun obstacle course in your living room.
      Stand in an open space and spin around until you get dizzy, then lie down and watch the world spin.
      Spend time walking backwards around your house or yard just to see how it feels.
      Use tiny cups and plates to have a tea party with actual snacks.
      Try walking around with a book balanced on your head to see how long you can keep it there.
      Spend a few minutes acting like your favorite animal.> `,
    },
    {
      role: "user",
      content:
        "Give me a task to do every time I ask. Each time I ask, give me a different task",
    },
  ];

  try {
    // now we make the call to the api.
    // we wrap it in a try catch block to catch any errors
    chooseEmotion.classList.add("hidden");
    loadingSpinner.classList.remove("hidden"); // Show loading spinner
    const response = await llm.chat({ options, messages });
    console.log(response);
    const outputDiv = document.getElementById("output");
    outputDiv.innerText = response.completion.choices[0].message.content;
    finishedButton.classList.remove("hidden");
  } catch (error) {
    // we had an error lets handle it
    console.error(error);
  }finally {
      loadingSpinner.classList.add("hidden"); // Hide loading spinner
 
  }
});
finishedButton.addEventListener("click", () => {
  finishedButton.classList.add("hidden");
  startButton.classList.add("hidden")
  wellDoneText.classList.remove("hidden");
});
