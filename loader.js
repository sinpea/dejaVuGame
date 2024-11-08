import scenes from "./scenes.json" with { type: "json" };
export const scene = JSON.parse(scenes);
export function loadScene(index)
{
    drawBgScene(scene[index].sceneBgPath);
    drawTextBox(scene[index].textPrompt + "           " +scene[index].choiceTexts.a + " , "+scene[index].choiceTexts.b);

    choiceCoordinateArr[0].corner1.x = scene[index].choiceBoxes.a.x1;
    choiceCoordinateArr[1].corner2.x = scene[index].choiceBoxes.b.x2;

    choiceCoordinateArr[0].corner1.y = scene[index].choiceBoxes.a.y1;
    choiceCoordinateArr[1].corner2.y = scene[index].choiceBoxes.b.y2;

    SceneIndex = index;
}