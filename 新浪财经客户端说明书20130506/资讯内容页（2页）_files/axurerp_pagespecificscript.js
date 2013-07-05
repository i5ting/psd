for(var i = 0; i < 133; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

if (bIE) document.getElementById('u73').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u73'); });
else {
    document.getElementById('u73').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u73'); }, true);
    document.getElementById('u73').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u73'); }, true);
}

widgetIdToDragFunction['u73'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u73',0,widgetDragInfo.yDelta,'none',500);

}

}

widgetIdToDragDropFunction['u73'] = function() {
var e = windowEvent;

if (IsNotOver(GetWidgetRectangles('u73'), GetWidgetRectangles('u103'))) {

	MoveWidgetTo('u73', GetNum('0'), GetNum('0'),'linear',250);

}

}

if (bIE) document.getElementById('u10').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u10'); });
else {
    document.getElementById('u10').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u10'); }, true);
    document.getElementById('u10').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u10'); }, true);
}

widgetIdToDragFunction['u10'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u10',0,widgetDragInfo.yDelta,'none',500);

}

}

widgetIdToDragDropFunction['u10'] = function() {
var e = windowEvent;

if (IsNotOver(GetWidgetRectangles('u10'), GetWidgetRectangles('u33'))) {

	MoveWidgetTo('u10', GetNum('0'), GetNum('0'),'linear',250);

}

}
gv_vAlignTable['u102'] = 'top';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u76'] = 'top';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u107'] = 'center';gv_vAlignTable['u32'] = 'center';gv_vAlignTable['u62'] = 'center';gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u119'] = 'center';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u115'] = 'center';gv_vAlignTable['u30'] = 'center';document.getElementById('u8_img').tabIndex = 0;

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

SetWidgetNotSelected('u6');
SetWidgetSelected('u8');
}
});
gv_vAlignTable['u60'] = 'center';gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u122'] = 'center';gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u100'] = 'top';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u79'] = 'center';gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u97'] = 'top';gv_vAlignTable['u124'] = 'center';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u41'] = 'center';document.getElementById('u71_img').tabIndex = 0;

u71.style.cursor = 'pointer';
$axure.eventManager.click('u71', function(e) {

if (true) {

SetWidgetNotSelected('u69');
SetWidgetSelected('u71');
}
});
gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u75'] = 'top';gv_vAlignTable['u58'] = 'center';gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u126'] = 'center';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u130'] = 'center';gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u22'] = 'center';gv_vAlignTable['u13'] = 'top';gv_vAlignTable['u52'] = 'center';gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u68'] = 'top';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u128'] = 'center';gv_vAlignTable['u28'] = 'center';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u54'] = 'center';gv_vAlignTable['u99'] = 'top';gv_vAlignTable['u113'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u111'] = 'center';document.getElementById('u69_img').tabIndex = 0;

u69.style.cursor = 'pointer';
$axure.eventManager.click('u69', function(e) {

if (true) {

SetWidgetSelected('u69');
SetWidgetNotSelected('u71');
}
});
gv_vAlignTable['u120'] = 'top';gv_vAlignTable['u4'] = 'center';document.getElementById('u6_img').tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

SetWidgetSelected('u6');
SetWidgetNotSelected('u8');
}
});
gv_vAlignTable['u96'] = 'top';gv_vAlignTable['u91'] = 'center';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u26'] = 'center';gv_vAlignTable['u65'] = 'top';gv_vAlignTable['u56'] = 'center';gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u109'] = 'center';gv_vAlignTable['u132'] = 'center';gv_vAlignTable['u5'] = 'top';gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u72'] = 'center';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u101'] = 'top';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u117'] = 'center';gv_vAlignTable['u74'] = 'top';