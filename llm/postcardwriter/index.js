

// import the wrapper class
import { LLM } from './llm.js';


const llm = new LLM({
  host: 'https://anne2810-openai_api.web.val.run/',
});

document.addEventListener("DOMContentLoaded", function() {
  var aboutButton = document.getElementById("about");
  var indexButton = document.getElementById("index");

  if (aboutButton){
    aboutButton.addEventListener("click", function() {
      // Öffne eine neue Seite
      window.location.href = "about.html";
  });
};

 if(indexButton){
  indexButton.addEventListener("click", function() {
      // Öffne eine neue Seite
      window.location.href = "index.html";
  });
}
});


let isGenerating = false;
const form = document.querySelector('form');
const submitButton = document.querySelector('form>button[type="submit"]');


const messages = [
  {
    role: "system",
    content: 'write a postcard',
  },

];
// get the button#run element from the index.html

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  const contentText= (formData.get("content"));
  const nameText = (formData.get("name"));
  const yourName = (formData.get("yourName"));

  const currentMessage = {
    role: 'user',
    content: `write an event card from me named: ${yourName} for my friend named: ${nameText} and the card is about ${contentText}. do not give an front image. give me emojis. Give me diferent content. Do not write Event`,
  };

  
  isGenerating = true;

  messages.push(currentMessage)
llm.
chat ({
  options: {
    temperature: 0.5,
    seed: 42,
  }, 
  messages: messages
  
  })
  .then((response) => {
      isGenerating = false;
    console.log(response);
    console.log(messages);
    messages.push(response.completion.choices[0].message);

    const htmlContent = messages.map( item => {
      if (item.role === 'system') {
        return ''
      }
      if (item.role === 'assistant') {
        return `<p><span class="role assistant">${item.role}: </span><span class="content">${item.content}</span></p>`
      }
      //if (item.role === 'user') {
        //return `<p><span class="role user">${item.role}: </span><span class="content">${item.content}</span></p>`
     //s }
    })
    console.log(htmlContent);
    document.getElementById('target').innerHTML = htmlContent.join("");
      //const json = JSON.parse(response.message.content);
      //data.push(...json.data);
      
  })
  .catch((error) => {
      isGenerating = false;
      console.error(error);
  });

})
// add a click event listener to the button that runs the async function;
