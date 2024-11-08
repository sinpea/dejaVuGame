//import scenes from "./scenes.json" with { type: "json" };
export const scenes =
    [{
        "sceneIndex":"0",
        "sceneBgPath":"./assets/bg0.png",
        "choiceBoxes":{"a":{"x1":"120","y1":"140","x2":"120","y2":"140"},"b":{"x1":"120","y1":"140","x2":"120","y2":"140"}},
        "choiceTexts":{"a":"Brush","b":"Don't Brush"},
        "textPrompt":"You just woke up prettyface, wanna go brush your teeth eh?"
    }];

export function loadScene(index)
{
    let scene = JSON.parse(scenes[index]);
    drawBgScene(scene[index].sceneBgPath);
    drawTextBox(scene[index].textPrompt + "           " +scene[index].choiceTexts.a + " , "+scene[index].choiceTexts.b);

    choiceCoordinateArr[0].corner1.x = scene[index].choiceBoxes.a.x1;
    choiceCoordinateArr[1].corner2.x = scene[index].choiceBoxes.b.x2;

    choiceCoordinateArr[0].corner1.y = scene[index].choiceBoxes.a.y1;
    choiceCoordinateArr[1].corner2.y = scene[index].choiceBoxes.b.y2;

    SceneIndex = index;
}