for(var i = 0; i < 649; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

if (bIE) document.getElementById('u85').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u85'); });
else {
    document.getElementById('u85').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u85'); }, true);
    document.getElementById('u85').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u85'); }, true);
}

widgetIdToDragFunction['u85'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u85',0,widgetDragInfo.yDelta,'none',500);

	SetPanelState('u89', 'pd1u89','none','',500,'none','',500);

}

}

widgetIdToDragDropFunction['u85'] = function() {
var e = windowEvent;

if (IsNotOver(GetWidgetRectangles('u61'), GetWidgetRectangles('u85'))) {

	MoveWidgetTo('u61', GetNum('0'), GetNum('71'),'linear',250);

	MoveWidgetTo('u85', GetNum('0'), GetNum('105'),'linear',250);
function waitu232fa84d859a41968c677e6a87f0b7bf1() {

	SetPanelState('u89', 'pd0u89','none','',500,'none','',500);
}
setTimeout(waitu232fa84d859a41968c677e6a87f0b7bf1, 250);

}

}

if (bIE) document.getElementById('u113').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u113'); });
else {
    document.getElementById('u113').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u113'); }, true);
    document.getElementById('u113').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u113'); }, true);
}

widgetIdToDragFunction['u113'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u113',0,widgetDragInfo.yDelta,'none',500);

	MoveWidgetBy('u120',0,widgetDragInfo.yDelta,'none',500);

	MoveWidgetBy('u148',0,widgetDragInfo.yDelta,'none',500);

	SetPanelState('u124', 'pd1u124','none','',500,'none','',500);

	SetPanelState('u152', 'pd1u152','none','',500,'none','',500);

}

}

widgetIdToDragDropFunction['u113'] = function() {
var e = windowEvent;

if (IsNotOver(GetWidgetRectangles('u113'), GetWidgetRectangles('u52'))) {

	MoveWidgetTo('u113', GetNum('0'), GetNum('143'),'linear',250);

	MoveWidgetTo('u52', GetNum('0'), GetNum('45'),'linear',250);

	MoveWidgetTo('u61', GetNum('0'), GetNum('71'),'linear',250);

	MoveWidgetTo('u85', GetNum('0'), GetNum('105'),'linear',250);

	MoveWidgetTo('u120', GetNum('0'), GetNum('169'),'linear',250);

	MoveWidgetTo('u148', GetNum('0'), GetNum('203'),'linear',250);
function waitu39c1b02b51864b86aa362ffbc1edb32c1() {

	SetPanelState('u124', 'pd0u124','none','',500,'none','',500);

	SetPanelState('u152', 'pd0u152','none','',500,'none','',500);
}
setTimeout(waitu39c1b02b51864b86aa362ffbc1edb32c1, 250);

}
else
if (IsOver(GetWidgetRectangles('u113'), GetWidgetRectangles('u52'))) {

	MoveWidgetTo('u113', GetNum('0'), GetNum('143'),'linear',250);

	MoveWidgetTo('u52', GetNum('0'), GetNum('45'),'linear',250);

	MoveWidgetTo('u61', GetNum('0'), GetNum('71'),'linear',250);

	MoveWidgetTo('u85', GetNum('0'), GetNum('105'),'linear',250);

	MoveWidgetTo('u120', GetNum('0'), GetNum('169'),'linear',250);

	MoveWidgetTo('u148', GetNum('0'), GetNum('203'),'linear',250);
function waitu47d1b6e6e9a64539972a641dc10271631() {

	SetPanelState('u124', 'pd0u124','none','',500,'none','',500);

	SetPanelState('u152', 'pd0u152','none','',500,'none','',500);
}
setTimeout(waitu47d1b6e6e9a64539972a641dc10271631, 250);

}

}

if (bIE) document.getElementById('u61').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u61'); });
else {
    document.getElementById('u61').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u61'); }, true);
    document.getElementById('u61').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u61'); }, true);
}

widgetIdToDragFunction['u61'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u61',0,widgetDragInfo.yDelta,'none',500);

	SetPanelState('u65', 'pd1u65','none','',500,'none','',500);

}

}

widgetIdToDragDropFunction['u61'] = function() {
var e = windowEvent;

if (IsNotOver(GetWidgetRectangles('u85'), GetWidgetRectangles('u61'))) {

	MoveWidgetTo('u61', GetNum('0'), GetNum('105'),'linear',250);

	MoveWidgetTo('u85', GetNum('0'), GetNum('71'),'linear',250);
function waitu294880ebe3e448d5847e0395fdf3fcc01() {

	SetPanelState('u65', 'pd0u65','none','',500,'none','',500);
}
setTimeout(waitu294880ebe3e448d5847e0395fdf3fcc01, 250);

}
else
if (IsOver(GetWidgetRectangles('u85'), GetWidgetRectangles('u61'))) {

	MoveWidgetTo('u61', GetNum('0'), GetNum('71'),'linear',250);

	MoveWidgetTo('u85', GetNum('0'), GetNum('105'),'linear',250);
function waitu6ee3b8f537c046e3a6038e56174319931() {

	SetPanelState('u89', 'pd0u89','none','',500,'none','',500);
}
setTimeout(waitu6ee3b8f537c046e3a6038e56174319931, 250);

}

}

if (bIE) document.getElementById('u120').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u120'); });
else {
    document.getElementById('u120').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u120'); }, true);
    document.getElementById('u120').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u120'); }, true);
}

widgetIdToDragFunction['u120'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u120',0,widgetDragInfo.yDelta,'none',500);

	SetPanelState('u124', 'pd1u124','none','',500,'none','',500);

}

}

widgetIdToDragDropFunction['u120'] = function() {
var e = windowEvent;

if (IsNotOver(GetWidgetRectangles('u148'), GetWidgetRectangles('u120'))) {

	MoveWidgetTo('u120', GetNum('0'), GetNum('206'),'linear',250);

	MoveWidgetTo('u148', GetNum('0'), GetNum('169'),'linear',250);
function waitu1d96cfa99e9c434e9fd33a59ff5bcb0b1() {

	SetPanelState('u124', 'pd0u124','none','',500,'none','',500);
}
setTimeout(waitu1d96cfa99e9c434e9fd33a59ff5bcb0b1, 250);

}
else
if (IsOver(GetWidgetRectangles('u148'), GetWidgetRectangles('u120'))) {

	MoveWidgetTo('u120', GetNum('0'), GetNum('169'),'linear',250);

	MoveWidgetTo('u148', GetNum('0'), GetNum('203'),'linear',250);
function waitu5cf2a6ace44b44b1992f2b0b04929bcd1() {

	SetPanelState('u152', 'pd0u152','none','',500,'none','',500);
}
setTimeout(waitu5cf2a6ace44b44b1992f2b0b04929bcd1, 250);

}

}

if (bIE) document.getElementById('u52').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u52'); });
else {
    document.getElementById('u52').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u52'); }, true);
    document.getElementById('u52').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u52'); }, true);
}

widgetIdToDragFunction['u52'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u52',widgetDragInfo.xDelta,widgetDragInfo.yDelta,'none',500);

	MoveWidgetBy('u61',widgetDragInfo.xDelta,widgetDragInfo.yDelta,'none',500);

	MoveWidgetBy('u85',widgetDragInfo.xDelta,widgetDragInfo.yDelta,'none',500);

	SetPanelState('u65', 'pd1u65','none','',500,'none','',500);

	SetPanelState('u89', 'pd1u89','none','',500,'none','',500);

}

}

widgetIdToDragDropFunction['u52'] = function() {
var e = windowEvent;

if (IsNotOver(GetWidgetRectangles('u113'), GetWidgetRectangles('u52'))) {

	MoveWidgetTo('u113', GetNum('0'), GetNum('45'),'linear',250);

	MoveWidgetTo('u52', GetNum('0'), GetNum('143'),'linear',250);

	MoveWidgetTo('u61', GetNum('0'), GetNum('169'),'linear',250);

	MoveWidgetTo('u85', GetNum('0'), GetNum('203'),'linear',250);

	MoveWidgetTo('u120', GetNum('0'), GetNum('71'),'linear',250);

	MoveWidgetTo('u148', GetNum('0'), GetNum('105'),'linear',250);
function waitu75563e09be5c460e9e4601732195d53c1() {

	SetPanelState('u65', 'pd0u65','none','',500,'none','',500);

	SetPanelState('u89', 'pd0u89','none','',500,'none','',500);
}
setTimeout(waitu75563e09be5c460e9e4601732195d53c1, 250);

}
else
if (IsOver(GetWidgetRectangles('u113'), GetWidgetRectangles('u52'))) {

	MoveWidgetTo('u113', GetNum('0'), GetNum('143'),'linear',250);

	MoveWidgetTo('u52', GetNum('0'), GetNum('45'),'linear',250);

	MoveWidgetTo('u61', GetNum('0'), GetNum('71'),'linear',250);

	MoveWidgetTo('u85', GetNum('0'), GetNum('105'),'linear',250);

	MoveWidgetTo('u120', GetNum('0'), GetNum('169'),'linear',250);

	MoveWidgetTo('u148', GetNum('0'), GetNum('203'),'linear',250);
function waitu60b7d72df9e04100802da8bc3930eacd1() {

	SetPanelState('u65', 'pd0u65','none','',500,'none','',500);

	SetPanelState('u89', 'pd0u89','none','',500,'none','',500);
}
setTimeout(waitu60b7d72df9e04100802da8bc3930eacd1, 250);

}

}

if (bIE) document.getElementById('u148').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u148'); });
else {
    document.getElementById('u148').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u148'); }, true);
    document.getElementById('u148').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u148'); }, true);
}

widgetIdToDragFunction['u148'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u148',0,widgetDragInfo.yDelta,'none',500);

	SetPanelState('u152', 'pd1u152','none','',500,'none','',500);

}

}

widgetIdToDragDropFunction['u148'] = function() {
var e = windowEvent;

if (IsNotOver(GetWidgetRectangles('u120'), GetWidgetRectangles('u148'))) {

	MoveWidgetTo('u120', GetNum('0'), GetNum('169'),'linear',250);

	MoveWidgetTo('u148', GetNum('0'), GetNum('203'),'linear',250);
function waitu7a5fb46627184f199d0c20c847fe6a671() {

	SetPanelState('u152', 'pd0u152','none','',500,'none','',500);
}
setTimeout(waitu7a5fb46627184f199d0c20c847fe6a671, 250);

}

}
gv_vAlignTable['u370'] = 'center';gv_vAlignTable['u488'] = 'center';gv_vAlignTable['u646'] = 'center';document.getElementById('u167_img').tabIndex = 0;

u167.style.cursor = 'pointer';
$axure.eventManager.click('u167', function(e) {

if (true) {

	SetPanelState('u166', 'pd0u166','fade','',500,'fade','',500);

	SetPanelVisibility('u171','hidden','fade',500);

}
});
gv_vAlignTable['u465'] = 'top';gv_vAlignTable['u17'] = 'center';document.getElementById('u180_img').tabIndex = 0;

u180.style.cursor = 'pointer';
$axure.eventManager.click('u180', function(e) {

if (true) {

SetWidgetNotSelected('u176');
SetWidgetNotSelected('u178');
SetWidgetSelected('u180');
SetWidgetNotSelected('u182');
}
});
gv_vAlignTable['u400'] = 'center';gv_vAlignTable['u216'] = 'top';u194.tabIndex = 0;

u194.style.cursor = 'pointer';
$axure.eventManager.click('u194', function(e) {

if (true) {

}
else
if ((GetGlobalVariableValue('OnLoadVariable')) == ('自选')) {

SetGlobalVariableValue('OnLoadVariable', '1');

}
});
gv_vAlignTable['u514'] = 'center';gv_vAlignTable['u492'] = 'center';gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u450'] = 'center';u486.tabIndex = 0;

u486.style.cursor = 'pointer';
$axure.eventManager.click('u486', function(e) {

if (true) {

	SetPanelState('u257', 'pd2u257','none','',500,'none','',500);

}
});
document.getElementById('u78_img').tabIndex = 0;

u78.style.cursor = 'pointer';
$axure.eventManager.click('u78', function(e) {

if (true) {

	SetPanelState('u75', 'pd1u75','fade','',500,'fade','',500);

	SetPanelVisibility('u80','','fade',500);

}
});
gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u464'] = 'top';document.getElementById('u139_img').tabIndex = 0;

u139.style.cursor = 'pointer';
$axure.eventManager.click('u139', function(e) {

if (true) {

	SetPanelState('u138', 'pd0u138','fade','',500,'fade','',500);

	SetPanelVisibility('u143','hidden','fade',500);

}
});
gv_vAlignTable['u201'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u215'] = 'top';gv_vAlignTable['u193'] = 'top';gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u126'] = 'center';gv_vAlignTable['u332'] = 'top';gv_vAlignTable['u473'] = 'top';u527.tabIndex = 0;

u527.style.cursor = 'pointer';
$axure.eventManager.click('u527', function(e) {

if (true) {

	SetPanelState('u396', 'pd1u396','none','',500,'swing','up',500);

}
});
gv_vAlignTable['u346'] = 'top';gv_vAlignTable['u389'] = 'center';u165.tabIndex = 0;

u165.style.cursor = 'pointer';
$axure.eventManager.click('u165', function(e) {

if (true) {

}
});
gv_vAlignTable['u463'] = 'top';gv_vAlignTable['u302'] = 'center';gv_vAlignTable['u236'] = 'center';gv_vAlignTable['u192'] = 'center';gv_vAlignTable['u67'] = 'center';u484.tabIndex = 0;

u484.style.cursor = 'pointer';
$axure.eventManager.click('u484', function(e) {

if (true) {

	SetPanelState('u396', 'pd0u396','none','',500,'swing','up',500);

}
});
gv_vAlignTable['u269'] = 'top';gv_vAlignTable['u331'] = 'top';document.getElementById('u321_img').tabIndex = 0;

u321.style.cursor = 'pointer';
$axure.eventManager.click('u321', function(e) {

if (true) {

	SetPanelState('u318', 'pd1u318','none','',500,'none','',500);

}
});
gv_vAlignTable['u150'] = 'center';gv_vAlignTable['u607'] = 'center';gv_vAlignTable['u436'] = 'center';gv_vAlignTable['u345'] = 'top';gv_vAlignTable['u601'] = 'center';gv_vAlignTable['u476'] = 'top';u268.tabIndex = 0;

u268.style.cursor = 'pointer';
$axure.eventManager.click('u268', function(e) {

if (true) {

SetGlobalVariableValue('OnLoadVariable', '1');

}
});
gv_vAlignTable['u227'] = 'top';gv_vAlignTable['u584'] = 'center';gv_vAlignTable['u42'] = 'center';gv_vAlignTable['u642'] = 'center';gv_vAlignTable['u63'] = 'center';document.getElementById('u326_img').tabIndex = 0;

u326.style.cursor = 'pointer';
$axure.eventManager.click('u326', function(e) {

if (true) {

	SetPanelState('u323', 'pd1u323','none','',500,'none','',500);

}
});
gv_vAlignTable['u177'] = 'center';gv_vAlignTable['u475'] = 'top';gv_vAlignTable['u93'] = 'center';u112.tabIndex = 0;

u112.style.cursor = 'pointer';
$axure.eventManager.click('u112', function(e) {

if (true) {

	SetPanelVisibility('u108','hidden','fade',500);

	SetPanelState('u103', 'pd0u103','none','',500,'fade','',500);

}
});
gv_vAlignTable['u410'] = 'center';gv_vAlignTable['u285'] = 'top';gv_vAlignTable['u605'] = 'center';gv_vAlignTable['u424'] = 'center';u74.tabIndex = 0;

u74.style.cursor = 'pointer';
$axure.eventManager.click('u74', function(e) {

if (true) {

}
});
gv_vAlignTable['u128'] = 'center';gv_vAlignTable['u162'] = 'center';gv_vAlignTable['u541'] = 'center';gv_vAlignTable['u460'] = 'top';gv_vAlignTable['u597'] = 'top';gv_vAlignTable['u357'] = 'center';gv_vAlignTable['u79'] = 'center';gv_vAlignTable['u586'] = 'center';document.getElementById('u176_img').tabIndex = 0;

u176.style.cursor = 'pointer';
$axure.eventManager.click('u176', function(e) {

if (true) {

SetWidgetSelected('u176');
SetWidgetNotSelected('u178');
SetWidgetNotSelected('u180');
SetWidgetNotSelected('u182');
}
});
u528.tabIndex = 0;

u528.style.cursor = 'pointer';
$axure.eventManager.click('u528', function(e) {

if (true) {

	SetPanelVisibility('u396','hidden','fade',500);

}
});
gv_vAlignTable['u111'] = 'top';gv_vAlignTable['u342'] = 'top';gv_vAlignTable['u578'] = 'center';gv_vAlignTable['u518'] = 'center';gv_vAlignTable['u596'] = 'top';gv_vAlignTable['u512'] = 'center';document.getElementById('u356_img').tabIndex = 0;

u356.style.cursor = 'pointer';
$axure.eventManager.click('u356', function(e) {

if (true) {

	SetPanelState('u353', 'pd1u353','none','',500,'none','',500);

}
});
u175.tabIndex = 0;

u175.style.cursor = 'pointer';
$axure.eventManager.click('u175', function(e) {

if (true) {

	SetPanelVisibility('u171','hidden','fade',500);

	SetPanelState('u166', 'pd0u166','none','',500,'fade','',500);

}
});
gv_vAlignTable['u229'] = 'top';gv_vAlignTable['u110'] = 'center';gv_vAlignTable['u611'] = 'center';gv_vAlignTable['u461'] = 'top';gv_vAlignTable['u283'] = 'top';gv_vAlignTable['u526'] = 'center';gv_vAlignTable['u279'] = 'top';gv_vAlignTable['u241'] = 'top';gv_vAlignTable['u160'] = 'center';gv_vAlignTable['u297'] = 'center';gv_vAlignTable['u595'] = 'top';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u355'] = 'center';gv_vAlignTable['u474'] = 'top';gv_vAlignTable['u228'] = 'top';gv_vAlignTable['u304'] = 'top';gv_vAlignTable['u282'] = 'top';document.getElementById('u76_img').tabIndex = 0;

u76.style.cursor = 'pointer';
$axure.eventManager.click('u76', function(e) {

if (true) {

	SetPanelState('u75', 'pd0u75','fade','',500,'fade','',500);

	SetPanelVisibility('u80','hidden','fade',500);

}
});
gv_vAlignTable['u240'] = 'center';document.getElementById('u296_img').tabIndex = 0;

u296.style.cursor = 'pointer';
$axure.eventManager.click('u296', function(e) {

if (true) {

	SetPanelState('u293', 'pd1u293','none','',500,'none','',500);

}
});
u137.tabIndex = 0;

u137.style.cursor = 'pointer';
$axure.eventManager.click('u137', function(e) {

if (true) {

}
});
gv_vAlignTable['u426'] = 'center';gv_vAlignTable['u33'] = 'center';gv_vAlignTable['u254'] = 'center';gv_vAlignTable['u173'] = 'center';gv_vAlignTable['u422'] = 'center';gv_vAlignTable['u343'] = 'top';gv_vAlignTable['u290'] = 'center';gv_vAlignTable['u213'] = 'top';gv_vAlignTable['u617'] = 'center';gv_vAlignTable['u566'] = 'center';gv_vAlignTable['u303'] = 'top';gv_vAlignTable['u122'] = 'center';gv_vAlignTable['u420'] = 'center';gv_vAlignTable['u5'] = 'center';u317.tabIndex = 0;

u317.style.cursor = 'pointer';
$axure.eventManager.click('u317', function(e) {

if (true) {

	SetPanelState('u257', 'pd0u257','none','',500,'none','',500);

}
});
gv_vAlignTable['u317'] = 'top';gv_vAlignTable['u295'] = 'center';gv_vAlignTable['u615'] = 'center';gv_vAlignTable['u136'] = 'center';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u434'] = 'center';document.getElementById('u253_img').tabIndex = 0;

u253.style.cursor = 'pointer';
$axure.eventManager.click('u253', function(e) {

if (true) {

	SetPanelVisibility('u396','','fade',500);

	SetPanelState('u396', 'pd0u396','none','',500,'swing','up',500);

	BringToFront("u396");

}
});
gv_vAlignTable['u551'] = 'center';gv_vAlignTable['u398'] = 'center';gv_vAlignTable['u472'] = 'top';gv_vAlignTable['u644'] = 'center';gv_vAlignTable['u267'] = 'center';gv_vAlignTable['u134'] = 'center';gv_vAlignTable['u280'] = 'top';gv_vAlignTable['u500'] = 'center';u252.tabIndex = 0;

u252.style.cursor = 'pointer';
$axure.eventManager.click('u252', function(e) {

if (true) {

}
});
document.getElementById('u266_img').tabIndex = 0;

u266.style.cursor = 'pointer';
$axure.eventManager.click('u266', function(e) {

if (true) {

	SetPanelState('u263', 'pd1u263','none','',500,'none','',500);

}
});
gv_vAlignTable['u564'] = 'center';document.getElementById('u301_img').tabIndex = 0;

u301.style.cursor = 'pointer';
$axure.eventManager.click('u301', function(e) {

if (true) {

	SetPanelState('u298', 'pd1u298','none','',500,'none','',500);

}
});
gv_vAlignTable['u619'] = 'center';gv_vAlignTable['u438'] = 'center';gv_vAlignTable['u315'] = 'top';gv_vAlignTable['u21'] = 'center';gv_vAlignTable['u251'] = 'top';gv_vAlignTable['u170'] = 'center';gv_vAlignTable['u627'] = 'center';gv_vAlignTable['u446'] = 'center';gv_vAlignTable['u82'] = 'center';u238.tabIndex = 0;

u238.style.cursor = 'pointer';
$axure.eventManager.click('u238', function(e) {

if (true) {

	SetPanelVisibility('u230','hidden','fade',500);

}
});
gv_vAlignTable['u200'] = 'center';gv_vAlignTable['u502'] = 'center';gv_vAlignTable['u314'] = 'top';gv_vAlignTable['u292'] = 'center';gv_vAlignTable['u77'] = 'center';document.getElementById('u369_img').tabIndex = 0;

u369.style.cursor = 'pointer';
$axure.eventManager.click('u369', function(e) {

if (true) {

	SetPanelState('u366', 'pd1u366','none','',500,'none','',500);

}
});
gv_vAlignTable['u490'] = 'center';gv_vAlignTable['u250'] = 'center';gv_vAlignTable['u387'] = 'center';u147.tabIndex = 0;

u147.style.cursor = 'pointer';
$axure.eventManager.click('u147', function(e) {

if (true) {

	SetPanelVisibility('u143','hidden','fade',500);

	SetPanelState('u138', 'pd0u138','none','',500,'fade','',500);

}
});
gv_vAlignTable['u594'] = 'center';document.getElementById('u34_img').tabIndex = 0;

u34.style.cursor = 'pointer';
$axure.eventManager.click('u34', function(e) {

if (true) {

SetWidgetNotSelected('u28');
SetWidgetNotSelected('u30');
SetWidgetNotSelected('u32');
SetWidgetSelected('u34');
}
});
gv_vAlignTable['u562'] = 'center';gv_vAlignTable['u327'] = 'center';gv_vAlignTable['u164'] = 'center';gv_vAlignTable['u633'] = 'center';gv_vAlignTable['u576'] = 'center';gv_vAlignTable['u549'] = 'center';gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u368'] = 'center';gv_vAlignTable['u430'] = 'center';gv_vAlignTable['u146'] = 'top';gv_vAlignTable['u444'] = 'center';gv_vAlignTable['u459'] = 'top';gv_vAlignTable['u613'] = 'center';document.getElementById('u277_img').tabIndex = 0;

u277.style.cursor = 'pointer';
$axure.eventManager.click('u277', function(e) {

if (true) {

	SetPanelState('u274', 'pd1u274','none','',500,'none','',500);

}
});
gv_vAlignTable['u572'] = 'center';document.getElementById('u388_img').tabIndex = 0;

u388.style.cursor = 'pointer';
$axure.eventManager.click('u388', function(e) {

if (true) {

	SetPanelState('u385', 'pd1u385','none','',500,'none','',500);

}
});
gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u212'] = 'center';gv_vAlignTable['u510'] = 'center';document.getElementById('u28_img').tabIndex = 0;

u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

SetWidgetSelected('u28');
SetWidgetNotSelected('u30');
SetWidgetNotSelected('u32');
SetWidgetNotSelected('u34');
}
});
gv_vAlignTable['u145'] = 'center';gv_vAlignTable['u524'] = 'center';gv_vAlignTable['u560'] = 'center';gv_vAlignTable['u322'] = 'center';gv_vAlignTable['u457'] = 'top';gv_vAlignTable['u276'] = 'center';gv_vAlignTable['u574'] = 'center';gv_vAlignTable['u130'] = 'center';gv_vAlignTable['u553'] = 'center';gv_vAlignTable['u406'] = 'center';gv_vAlignTable['u384'] = 'center';gv_vAlignTable['u442'] = 'center';gv_vAlignTable['u261'] = 'top';gv_vAlignTable['u640'] = 'center';gv_vAlignTable['u537'] = 'top';gv_vAlignTable['u456'] = 'center';gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u260'] = 'top';gv_vAlignTable['u329'] = 'top';gv_vAlignTable['u248'] = 'top';gv_vAlignTable['u210'] = 'top';gv_vAlignTable['u325'] = 'center';gv_vAlignTable['u83'] = 'top';gv_vAlignTable['u107'] = 'center';gv_vAlignTable['u44'] = 'center';document.getElementById('u383_img').tabIndex = 0;

u383.style.cursor = 'pointer';
$axure.eventManager.click('u383', function(e) {

if (true) {

	SetPanelState('u380', 'pd1u380','none','',500,'none','',500);

}
});
document.getElementById('u30_img').tabIndex = 0;

u30.style.cursor = 'pointer';
$axure.eventManager.click('u30', function(e) {

if (true) {

SetWidgetNotSelected('u28');
SetWidgetSelected('u30');
SetWidgetNotSelected('u32');
SetWidgetNotSelected('u34');
}
});
gv_vAlignTable['u224'] = 'top';gv_vAlignTable['u581'] = 'top';gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u189'] = 'center';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u91'] = 'center';document.getElementById('u309_img').tabIndex = 0;

u309.style.cursor = 'pointer';
$axure.eventManager.click('u309', function(e) {

if (true) {

	SetPanelState('u306', 'pd1u306','none','',500,'none','',500);

}
});
u328.tabIndex = 0;

u328.style.cursor = 'pointer';
$axure.eventManager.click('u328', function(e) {

if (true) {

SetGlobalVariableValue('OnLoadVariable', '1');

}
});
gv_vAlignTable['u631'] = 'center';gv_vAlignTable['u621'] = 'center';document.getElementById('u106_img').tabIndex = 0;

u106.style.cursor = 'pointer';
$axure.eventManager.click('u106', function(e) {

if (true) {

	SetPanelState('u103', 'pd1u103','fade','',500,'fade','',500);

	SetPanelVisibility('u108','','fade',500);

}
});
gv_vAlignTable['u520'] = 'center';gv_vAlignTable['u404'] = 'center';gv_vAlignTable['u382'] = 'center';gv_vAlignTable['u223'] = 'center';gv_vAlignTable['u142'] = 'center';gv_vAlignTable['u378'] = 'top';gv_vAlignTable['u265'] = 'center';gv_vAlignTable['u340'] = 'top';gv_vAlignTable['u237'] = 'top';gv_vAlignTable['u156'] = 'center';gv_vAlignTable['u545'] = 'center';gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u458'] = 'top';gv_vAlignTable['u311'] = 'top';gv_vAlignTable['u603'] = 'center';u395.tabIndex = 0;

u395.style.cursor = 'pointer';
$axure.eventManager.click('u395', function(e) {

if (true) {

SetGlobalVariableValue('OnLoadVariable', '1');

}
});
gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u534'] = 'center';gv_vAlignTable['u209'] = 'top';gv_vAlignTable['u272'] = 'top';gv_vAlignTable['u592'] = 'center';gv_vAlignTable['u570'] = 'center';gv_vAlignTable['u402'] = 'center';gv_vAlignTable['u19'] = 'center';document.getElementById('u104_img').tabIndex = 0;

u104.style.cursor = 'pointer';
$axure.eventManager.click('u104', function(e) {

if (true) {

	SetPanelState('u103', 'pd0u103','fade','',500,'fade','',500);

	SetPanelVisibility('u108','hidden','fade',500);

}
});
gv_vAlignTable['u308'] = 'center';gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u221'] = 'top';gv_vAlignTable['u599'] = 'center';gv_vAlignTable['u119'] = 'center';gv_vAlignTable['u416'] = 'center';gv_vAlignTable['u394'] = 'center';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u629'] = 'center';gv_vAlignTable['u352'] = 'center';gv_vAlignTable['u271'] = 'top';gv_vAlignTable['u312'] = 'top';gv_vAlignTable['u547'] = 'center';gv_vAlignTable['u418'] = 'center';gv_vAlignTable['u339'] = 'top';gv_vAlignTable['u158'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u117'] = 'center';document.getElementById('u393_img').tabIndex = 0;

u393.style.cursor = 'pointer';
$axure.eventManager.click('u393', function(e) {

if (true) {

	SetPanelState('u390', 'pd1u390','none','',500,'none','',500);

}
});
gv_vAlignTable['u31'] = 'center';gv_vAlignTable['u234'] = 'top';gv_vAlignTable['u408'] = 'center';gv_vAlignTable['u532'] = 'center';document.getElementById('u351_img').tabIndex = 0;

u351.style.cursor = 'pointer';
$axure.eventManager.click('u351', function(e) {

if (true) {

	SetPanelState('u348', 'pd1u348','none','',500,'none','',500);

}
});
u102.tabIndex = 0;

u102.style.cursor = 'pointer';
$axure.eventManager.click('u102', function(e) {

if (true) {

}
});
gv_vAlignTable['u338'] = 'center';gv_vAlignTable['u300'] = 'center';gv_vAlignTable['u471'] = 'top';gv_vAlignTable['u414'] = 'center';gv_vAlignTable['u392'] = 'center';gv_vAlignTable['u233'] = 'top';gv_vAlignTable['u469'] = 'top';gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u350'] = 'center';gv_vAlignTable['u508'] = 'center';gv_vAlignTable['u539'] = 'center';gv_vAlignTable['u247'] = 'center';gv_vAlignTable['u198'] = 'top';gv_vAlignTable['u364'] = 'top';gv_vAlignTable['u432'] = 'center';gv_vAlignTable['u101'] = 'center';gv_vAlignTable['u452'] = 'center';gv_vAlignTable['u190'] = 'top';gv_vAlignTable['u115'] = 'center';gv_vAlignTable['u232'] = 'top';gv_vAlignTable['u468'] = 'top';u530.tabIndex = 0;

u530.style.cursor = 'pointer';
$axure.eventManager.click('u530', function(e) {

if (true) {

	SetPanelState('u257', 'pd2u257','none','',500,'none','',500);

}
});
u529.tabIndex = 0;

u529.style.cursor = 'pointer';
$axure.eventManager.click('u529', function(e) {

if (true) {

	SetPanelState('u257', 'pd2u257','none','',500,'none','',500);

}
});
gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u219'] = 'top';gv_vAlignTable['u363'] = 'top';gv_vAlignTable['u448'] = 'center';gv_vAlignTable['u132'] = 'center';gv_vAlignTable['u377'] = 'top';gv_vAlignTable['u57'] = 'top';gv_vAlignTable['u648'] = 'center';document.getElementById('u169_img').tabIndex = 0;

u169.style.cursor = 'pointer';
$axure.eventManager.click('u169', function(e) {

if (true) {

	SetPanelState('u166', 'pd1u166','fade','',500,'fade','',500);

	SetPanelVisibility('u171','','fade',500);

}
});
gv_vAlignTable['u231'] = 'top';gv_vAlignTable['u278'] = 'center';gv_vAlignTable['u636'] = 'top';gv_vAlignTable['u187'] = 'center';u485.tabIndex = 0;

u485.style.cursor = 'pointer';
$axure.eventManager.click('u485', function(e) {

if (true) {

	SetPanelVisibility('u396','hidden','fade',500);

}
});
gv_vAlignTable['u38'] = 'center';gv_vAlignTable['u245'] = 'center';gv_vAlignTable['u522'] = 'center';gv_vAlignTable['u218'] = 'center';gv_vAlignTable['u362'] = 'center';gv_vAlignTable['u582'] = 'top';gv_vAlignTable['u557'] = 'center';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u286'] = 'top';gv_vAlignTable['u168'] = 'center';gv_vAlignTable['u506'] = 'center';gv_vAlignTable['u412'] = 'center';document.getElementById('u32_img').tabIndex = 0;

u32.style.cursor = 'pointer';
$axure.eventManager.click('u32', function(e) {

if (true) {

SetWidgetNotSelected('u28');
SetWidgetNotSelected('u30');
SetWidgetSelected('u32');
SetWidgetNotSelected('u34');
}
});
gv_vAlignTable['u623'] = 'center';document.getElementById('u361_img').tabIndex = 0;

u361.style.cursor = 'pointer';
$axure.eventManager.click('u361', function(e) {

if (true) {

	SetPanelState('u358', 'pd1u358','none','',500,'none','',500);

}
});
gv_vAlignTable['u638'] = 'center';gv_vAlignTable['u462'] = 'top';gv_vAlignTable['u580'] = 'center';gv_vAlignTable['u375'] = 'top';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u310'] = 'center';gv_vAlignTable['u478'] = 'top';gv_vAlignTable['u207'] = 'top';gv_vAlignTable['u185'] = 'center';gv_vAlignTable['u483'] = 'top';gv_vAlignTable['u40'] = 'center';gv_vAlignTable['u243'] = 'top';gv_vAlignTable['u479'] = 'top';gv_vAlignTable['u360'] = 'center';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u555'] = 'center';gv_vAlignTable['u45'] = 'top';gv_vAlignTable['u374'] = 'top';gv_vAlignTable['u428'] = 'center';gv_vAlignTable['u536'] = 'center';gv_vAlignTable['u470'] = 'top';gv_vAlignTable['u206'] = 'center';gv_vAlignTable['u504'] = 'center';gv_vAlignTable['u482'] = 'top';gv_vAlignTable['u242'] = 'top';document.getElementById('u291_img').tabIndex = 0;

u291.style.cursor = 'pointer';
$axure.eventManager.click('u291', function(e) {

if (true) {

	SetPanelState('u288', 'pd1u288','none','',500,'none','',500);

}
});
gv_vAlignTable['u496'] = 'center';gv_vAlignTable['u609'] = 'center';document.getElementById('u337_img').tabIndex = 0;

u337.style.cursor = 'pointer';
$axure.eventManager.click('u337', function(e) {

if (true) {

	SetPanelState('u334', 'pd1u334','none','',500,'none','',500);

}
});
gv_vAlignTable['u256'] = 'center';gv_vAlignTable['u635'] = 'center';gv_vAlignTable['u454'] = 'center';gv_vAlignTable['u174'] = 'top';gv_vAlignTable['u440'] = 'center';gv_vAlignTable['u590'] = 'center';gv_vAlignTable['u183'] = 'center';gv_vAlignTable['u481'] = 'top';gv_vAlignTable['u179'] = 'center';gv_vAlignTable['u558'] = 'top';document.getElementById('u141_img').tabIndex = 0;

u141.style.cursor = 'pointer';
$axure.eventManager.click('u141', function(e) {

if (true) {

	SetPanelState('u138', 'pd1u138','fade','',500,'fade','',500);

	SetPanelVisibility('u143','','fade',500);

}
});
gv_vAlignTable['u197'] = 'top';gv_vAlignTable['u568'] = 'center';gv_vAlignTable['u336'] = 'center';gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u477'] = 'top';gv_vAlignTable['u372'] = 'top';gv_vAlignTable['u543'] = 'center';gv_vAlignTable['u467'] = 'top';gv_vAlignTable['u204'] = 'top';document.getElementById('u182_img').tabIndex = 0;

u182.style.cursor = 'pointer';
$axure.eventManager.click('u182', function(e) {

if (true) {

SetWidgetNotSelected('u176');
SetWidgetNotSelected('u178');
SetWidgetNotSelected('u180');
SetWidgetSelected('u182');
}
});
gv_vAlignTable['u480'] = 'top';document.getElementById('u178_img').tabIndex = 0;

u178.style.cursor = 'pointer';
$axure.eventManager.click('u178', function(e) {

if (true) {

SetWidgetNotSelected('u176');
SetWidgetSelected('u178');
SetWidgetNotSelected('u180');
SetWidgetNotSelected('u182');
}
});
gv_vAlignTable['u140'] = 'center';gv_vAlignTable['u498'] = 'center';gv_vAlignTable['u196'] = 'top';gv_vAlignTable['u516'] = 'center';gv_vAlignTable['u494'] = 'center';gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u154'] = 'center';gv_vAlignTable['u371'] = 'top';gv_vAlignTable['u588'] = 'center';gv_vAlignTable['u625'] = 'center';gv_vAlignTable['u466'] = 'top';gv_vAlignTable['u203'] = 'top';gv_vAlignTable['u181'] = 'center';u84.tabIndex = 0;

u84.style.cursor = 'pointer';
$axure.eventManager.click('u84', function(e) {

if (true) {

	SetPanelVisibility('u80','hidden','fade',500);

	SetPanelState('u75', 'pd0u75','none','',500,'fade','',500);

}
});
gv_vAlignTable['u258'] = 'top';gv_vAlignTable['u320'] = 'center';gv_vAlignTable['u195'] = 'top';u225.tabIndex = 0;

u225.style.cursor = 'pointer';
$axure.eventManager.click('u225', u225Click);
InsertAfterBegin(document.body, "<div class='intcases' id='u225LinksClick'></div>")
var u225LinksClick = document.getElementById('u225LinksClick');
function u225Click(e) 
{
windowEvent = e;


	ToggleLinks(e, 'u225LinksClick');
}

InsertBeforeEnd(u225LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u225Clicku597dc4db89d14bd3b0753544e9df924e(event)'>输入正确</div>");
function u225Clicku597dc4db89d14bd3b0753544e9df924e(e)
{

	ToggleLinks(e, 'u225LinksClick');
}

InsertBeforeEnd(u225LinksClick, "<div class='intcaselink' onmouseout='SuppressBubble(event)' onclick='u225Clickuefeb19bd012c4d48b2d515780338baa9(event)'>输入错误提示</div>");
function u225Clickuefeb19bd012c4d48b2d515780338baa9(e)
{

	SetPanelVisibility('u230','','fade',500);
function waituc0aff4641207452d9ae93d348ffce79f1() {

	SetPanelVisibility('u230','hidden','fade',500);
}
setTimeout(waituc0aff4641207452d9ae93d348ffce79f1, 2000);

	ToggleLinks(e, 'u225LinksClick');
}
