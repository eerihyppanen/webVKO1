const helloButton = document.getElementById("my-button");

helloButton.addEventListener("click", function(){
    console.log("Hello world");
    document.getElementById("header").textContent = "Moi maailma";
})

const listButton = document.getElementById("add-data");

listButton.addEventListener("click", function(){
    const customText = document.getElementById("custom-text").value;
    const newItem = document.createElement("li");
    newItem.textContent = customText;
    document.getElementById("my-list").appendChild(newItem);
})
