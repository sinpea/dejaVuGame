//import scenes from "./scenes.json" with { type: "json" };
const scenes =
    [{
        sceneIndex:"0",
        sceneBgPath:"./assets/bg0.png",
        choiceBoxes:{a:{x1:"120",y1:"140",x2:"180",y2:"190"},b:{x1:"240",y1:"140",x2:"300",y2:"190"}},
        choiceTexts:{a:"Brush",b:"Don't Brush"},
        textPrompt:"You just woke up prettyface, wanna go brush your teeth eh?"
    }];

function loadScene(index)
{
    //let scene = JSON.parse(scenes[index]);
    drawBgScene(scenes[index].sceneBgPath);
    drawTextBox(scenes[index].textPrompt + "           " +scenes[index].choiceTexts.a + " , "+scenes[index].choiceTexts.b,48);

    choiceCoordinateArr[0].corner1.x = scenes[index].choiceBoxes.a.x1;
    choiceCoordinateArr[1].corner2.x = scenes[index].choiceBoxes.b.x2;

    choiceCoordinateArr[0].corner1.y = scenes[index].choiceBoxes.a.y1;
    choiceCoordinateArr[1].corner2.y = scenes[index].choiceBoxes.b.y2;

    SceneIndex = index;
}