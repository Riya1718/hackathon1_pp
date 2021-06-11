let image = document.querySelectorAll(".image");
let searchBar = document.querySelector(".search");
let mainCanvas = document.querySelector(".main-canvas");
let ctx;
let firstLine;
let secondLine;
let saveBtn = document.querySelector("#save-btn");


for (let i = 0; i < image.length; i++) {
   image[i].addEventListener("click", openMeme);
}

let canvas ;
function openMeme(e) {
   
   canvas = document.querySelector("#canvas");
   mainCanvas.classList.remove("hide");

   searchBar.innerHTML = "";

   ctx = canvas.getContext("2d");

   let imgSrc = e.target.currentSrc;
   console.log(e);

   let imgObj = new Image();

   imgObj.src = imgSrc;

   imgObj.onload = function () {
     // ctx.drawImage(imgObj, 400, 0, 600, 500);
      ctx.drawImage(imgObj, 0, 0, 1200, 600);
   }
}


function firstText() {
   firstLine = document.getElementById("first").value;
   console.log(firstLine);
   ctx.font = '50px Fredoka One';
   ctx.fillStyle = "black";
   ctx.fillText(firstLine, 100, 90);
}


function secondText() {
   secondLine = document.getElementById("second").value;
   console.log(secondLine);
   ctx.font = '50px Fredoka One';
   ctx.fillStyle = "black";
   ctx.fillText(secondLine, 100, 550);
}


saveBtn.addEventListener("click", function () {
   let imageUrl = canvas.toDataURL(); //canvas object => file url String
   console.log(imageUrl)
   saveMedia(imageUrl);
})

      // function download(){

      //    let imageUrl = canvas.toDataURL("image/jpg"); //canvas object => file url String

      //    //skip downloading part for now
      //           let aTag = document.createElement("a");
      //           aTag.download = "photo.jpg";
      //           aTag.href = imageUrl;
      //           aTag.click();
      // }



      // let textInput = document.getElementById("textInput");
      // textInput.classList.remove("hide");

      // textInput.style.position = "absolute";
      // textInput.style.top = 0;
      //  textInput.style.left= 0;
      // textInput.style.width ="100px";
      // textInput.style.background = "red";
      // textInput.style.zIndex=2;

      // mainCanvas.append(textInput);

      // console.log(textInput);

//     })
// }



//    
//       let imageDiv =document.createElement("div");
//       imageDiv.classList.add("newImage");

//       imageDiv.innerHTML = `<div class="imgSrc">
//       <img src="${imgSrc}">
//       </div>
//       <div class="lines">

//       Enter First Line Of Text : <input type="text">
//       Enter Second Line Of Text : <input type="text">

//       </div>`

//      searchBar.append(imageDiv); 

//  imgDiv = document.querySelector(".imgSrc");
// imgDiv.addEventListener("click",addText);


// }

// function addText(e){
//    console.log(e);

//    let textDiv = document.createElement("div");
//    textDiv.contentEditable="true";
//    textDiv.style.position = "absolute";
//    textDiv.style.height = "60px";
//    textDiv.style.width = "50px"

//    let x = e.clientX;
//    let y = e.clientY;

//   let{top,left,bottom,right} = textDiv.getBoundingClientRect();

//    textDiv.style.top = y;
//    textDiv.style.left = x;
//    textDiv.style.bottom = top + 30;
//    textDiv.style.right = left + 20;

//    textDiv.innerHTML = `<div class=""firstLine" <input type = "text">
//    <div class=""secondLine" <input type = "text">`

//    textDiv.style.background="red";
//    textDiv.style.zIndex = 2;
//    imgDiv.append(textDiv);

//    console.log(textDiv);

//}
