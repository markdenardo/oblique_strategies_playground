
document.addEventListener("DOMContentLoaded", (e) => {

  getRandomCard();

  uiDiv.addEventListener("click",(e) => {

  if (e.target.id === "newcard"){
      canvasDiv.innerHTML = "loading strategy..."
      getRandomCard()
    }

})

  canvasDiv.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.id === "strategy" && n === 0){
      n = 1;
      strategyForm = document.createElement("form")
      strategyForm.innerHTML =
      `<input type="text" name="strategyinput" id="strategyinput" cols="30" rows="10" placeholder="${e.target.innerHTML.replace(/[^a-zA-Z ]+[0-9]/g, '')}">
      <button id='submit'>edit strategy</button>`
      e.target.append(strategyForm)
    }

    if (e.target.id === "submit"){
      let input = document.getElementById("strategyinput")
      strategyInput = input.value
      console.log(strategyInput)
      if (strategyInput !== ""){
        editCard(strategyInput);
      }
    }

    if (e.target.className === "note-url"){
      window.open(e.target.innerHTML);
    }

    if (e.target.className === "delete-note"){
      console.log(e.target.id)

      let deleteButton = document.getElementById(e.target.id)
      deleteButton.remove();
      let urlItem = document.getElementById(e.target.id)
      urlItem.remove();
      let noteItem = document.getElementById(e.target.id)
      noteItem.remove();
      noteId = e.target.id

      console.log(noteId)
      deleteNote(noteId);
    }

  })

  noteForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("submit")

    if (e.target.text.value !== "" && e.target.url.value !== ""){
      createNote(textInput,urlInput);
    }
  })

})
