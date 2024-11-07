//import {loadScene} from './loader.js';
//import {scene} from './loader.js';


let ScreenX = 1000;
let ScreenY = 1000;
let SceneIndex = 0;
let MouseX = 0;
let MouseY = 0;

//let ScenePath = "assets/";
let choiceCoordinateArr = [Object.create(choiceCoordinates),Object.create(choiceCoordinates)];


function mousePosManage(event)
{
    MouseX = event.clientX;
    MouseY = event.clientY;


}
//to do lator: Create Json to store scene data....manage scenes and stuff.. incorporate funvyiond msfr till nowWs
//
//const vectorField = 
//
//    x:0,y:0
//};
const choicer =
{
    choiceMade: false,
    option: 0
};
const choiceCoordinates = 
{
    //corner1:Object.create(vectorField),
    //corner2:Object.create(vectorField)
    corner1:{x:0,y:0},
    corner2:{x:0,y:0}
};


function sceneManager()
{
    
    //onClick SceneManager gets triggered
    let choice = clickManager(MouseX,MouseY,choiceCoordinateArr);

    //Todo: Write logic behind scene management
    loadScene(SceneIndex);

}
function clickManager(x,y,choiceCoords)
{
    //csll function after DOM click is detected
    c = Object.create(choicer);
    for(let i = 0;i < choiceCoords.length;i++)
    {
        //check if x,y is inside any of these coordinates
        if((x > choiceCoords[i].corner1.x && y > choiceCoords[i].corner1.y)&&(x < choiceCoords[i].corner2.x && y < choiceCoords[i].corner2.y))
        {
            c.choiceMade = true;
            c.option = i + 1;
            return c;
        }

    }

    return c;

}


function drawBgScene(imgPath)
{
    const canv = document.getElementById("canvas");
    const ctx = canv.getContext("2d");
    const img = new Image();
    img.src = imgPath;
    //draw the images layer by layer
    ctx.drawImage(img,0,0);
}

function drawTextBox(sceneText,fontSize)
{
    const canv = document.getElementById("canvas");
    const ctx = canv.getContext("2d");
    
    //draw the block to be drawn
    ctx.fillStyle = "black";
    ctx.fillRect(0,ScreenY * 0.9,ScreenX,ScreenY * 0.1);

    //Enter Text
    ctx.fillStyle = "white";

    ctx.font = "regular"+fontSize+"pt Arial";
    ctx.fillText(sceneText,20,ScreenY * 0.9 + 2 + fontSize);
}


//createSceneManager
//createDecisionTree 
//createSpecializedAnimationManager

function gameStart()
{
    document.getElementById("canvas").addEventListener("click", sceneManager); 
    console.log("SEX");
    drawBgScene("assets/startScreen.png");
    drawTextBox("Deja Vu v1.0.0      CLICK ON CANVAS TO CONTINUE",40);
}

