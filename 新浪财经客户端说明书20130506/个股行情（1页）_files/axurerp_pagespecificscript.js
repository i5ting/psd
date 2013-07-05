for(var i = 0; i < 181; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

if (bIE) document.getElementById('u86').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u86'); });
else {
    document.getElementById('u86').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u86'); }, true);
    document.getElementById('u86').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u86'); }, true);
}

widgetIdToDragFunction['u86'] = function() {
var e = windowEvent;

if (true) {

	MoveWidgetBy('u86',0,widgetDragInfo.yDelta,'none',500);

}
else
if (true) {

	MoveWidgetTo('u86', GetNum('0'), GetNum('45'),'none',500);

}

}
gv_vAlignTable['u115'] = 'top';gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u156'] = 'center';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u79'] = 'center';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u140'] = 'top';gv_vAlignTable['u135'] = 'top';document.getElementById('u42_img').tabIndex = 0;

u42.style.cursor = 'pointer';
$axure.eventManager.click('u42', function(e) {

if (true) {

SetWidgetNotSelected('u46');
SetWidgetNotSelected('u40');
SetWidgetSelected('u42');
SetWidgetNotSelected('u44');
}
});
gv_vAlignTable['u55'] = 'top';gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u105'] = 'top';gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u67'] = 'top';gv_vAlignTable['u65'] = 'top';gv_vAlignTable['u120'] = 'top';gv_vAlignTable['u152'] = 'center';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u108'] = 'top';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u62'] = 'top';gv_vAlignTable['u141'] = 'top';gv_vAlignTable['u133'] = 'top';gv_vAlignTable['u34'] = 'top';document.getElementById('u89_img').tabIndex = 0;

u89.style.cursor = 'pointer';
$axure.eventManager.click('u89', function(e) {

if (true) {

SetWidgetNotSelected('u91');
SetWidgetNotSelected('u87');
SetWidgetSelected('u89');
	MoveWidgetTo('u86', GetNum('0'), GetNum('45'),'linear',250);

SetGlobalVariableValue('OnLoadVariable', '2');

}
});
gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u103'] = 'top';gv_vAlignTable['u164'] = 'center';gv_vAlignTable['u66'] = 'top';gv_vAlignTable['u112'] = 'top';document.getElementById('u44_img').tabIndex = 0;

u44.style.cursor = 'pointer';
$axure.eventManager.click('u44', function(e) {

if (true) {

SetWidgetNotSelected('u46');
SetWidgetNotSelected('u40');
SetWidgetNotSelected('u42');
SetWidgetSelected('u44');
}
});
gv_vAlignTable['u57'] = 'top';gv_vAlignTable['u119'] = 'top';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u125'] = 'top';gv_vAlignTable['u41'] = 'center';gv_vAlignTable['u172'] = 'center';gv_vAlignTable['u149'] = 'center';gv_vAlignTable['u54'] = 'top';gv_vAlignTable['u88'] = 'center';gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u26'] = 'top';document.getElementById('u174_img').tabIndex = 0;

u174.style.cursor = 'pointer';
$axure.eventManager.click('u174', function(e) {

if (true) {

	SetPanelState('u162', 'pd2u162','none','',500,'none','',500);

}
});
gv_vAlignTable['u128'] = 'top';gv_vAlignTable['u85'] = 'top';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u10'] = 'top';gv_vAlignTable['u100'] = 'center';document.getElementById('u144_img').tabIndex = 0;

u144.style.cursor = 'pointer';
$axure.eventManager.click('u144', function(e) {

if (false) {

	MoveWidgetBy('u143', GetNum('0'), GetNum('415'),'none',500);

}
});
gv_vAlignTable['u166'] = 'center';gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u61'] = 'top';gv_vAlignTable['u116'] = 'top';gv_vAlignTable['u158'] = 'center';gv_vAlignTable['u74'] = 'top';gv_vAlignTable['u123'] = 'top';gv_vAlignTable['u33'] = 'top';gv_vAlignTable['u160'] = 'center';gv_vAlignTable['u92'] = 'center';document.getElementById('u46_img').tabIndex = 0;

u46.style.cursor = 'pointer';
$axure.eventManager.click('u46', function(e) {

if (true) {

SetWidgetSelected('u46');
SetWidgetNotSelected('u40');
SetWidgetNotSelected('u42');
SetWidgetNotSelected('u44');
}
});
gv_vAlignTable['u71'] = 'top';gv_vAlignTable['u98'] = 'center';gv_vAlignTable['u127'] = 'top';gv_vAlignTable['u43'] = 'center';document.getElementById('u169_img').tabIndex = 0;

u169.style.cursor = 'pointer';
$axure.eventManager.click('u169', function(e) {

if (true) {

	SetPanelState('u162', 'pd0u162','swing','down',500,'none','',500);

}
});
gv_vAlignTable['u56'] = 'top';gv_vAlignTable['u150'] = 'top';gv_vAlignTable['u168'] = 'center';gv_vAlignTable['u154'] = 'center';document.getElementById('u40_img').tabIndex = 0;

u40.style.cursor = 'pointer';
$axure.eventManager.click('u40', function(e) {

if (true) {

SetWidgetNotSelected('u46');
SetWidgetSelected('u40');
SetWidgetNotSelected('u42');
SetWidgetNotSelected('u44');
}
});
gv_vAlignTable['u139'] = 'top';document.getElementById('u87_img').tabIndex = 0;

u87.style.cursor = 'pointer';
$axure.eventManager.click('u87', function(e) {

if (true) {

SetWidgetNotSelected('u91');
SetWidgetSelected('u87');
SetWidgetNotSelected('u89');
	MoveWidgetTo('u86', GetNum('0'), GetNum('45'),'linear',250);

SetGlobalVariableValue('OnLoadVariable', '2');

}
});
gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u104'] = 'top';gv_vAlignTable['u121'] = 'top';gv_vAlignTable['u109'] = 'top';gv_vAlignTable['u84'] = 'top';gv_vAlignTable['u170'] = 'center';gv_vAlignTable['u76'] = 'center';gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u177'] = 'center';gv_vAlignTable['u94'] = 'center';gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u102'] = 'center';gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u147'] = 'center';document.getElementById('u163_img').tabIndex = 0;

u163.style.cursor = 'pointer';
$axure.eventManager.click('u163', function(e) {

if (true) {

	SetPanelState('u162', 'pd1u162','none','',500,'swing','up',500);

}
});
document.getElementById('u91_img').tabIndex = 0;

u91.style.cursor = 'pointer';
$axure.eventManager.click('u91', function(e) {

if (true) {

SetWidgetSelected('u91');
SetWidgetNotSelected('u87');
SetWidgetNotSelected('u89');
	MoveWidgetTo('u86', GetNum('0'), GetNum('45'),'linear',250);

SetGlobalVariableValue('OnLoadVariable', '2');

}
});
gv_vAlignTable['u131'] = 'top';gv_vAlignTable['u64'] = 'top';gv_vAlignTable['u70'] = 'top';gv_vAlignTable['u24'] = 'center';gv_vAlignTable['u117'] = 'top';gv_vAlignTable['u113'] = 'top';gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u132'] = 'top';gv_vAlignTable['u175'] = 'center';gv_vAlignTable['u129'] = 'top';u173.tabIndex = 0;

u173.style.cursor = 'pointer';
$axure.eventManager.click('u173', function(e) {

if (true) {

}
});
gv_vAlignTable['u111'] = 'top';document.getElementById('u171_img').tabIndex = 0;

u171.style.cursor = 'pointer';
$axure.eventManager.click('u171', function(e) {

if (true) {

	SetPanelState('u162', 'pd2u162','swing','down',500,'none','',500);

}
});
gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u178'] = 'top';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u96'] = 'center';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u124'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u145'] = 'center';gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u59'] = 'top';gv_vAlignTable['u137'] = 'top';gv_vAlignTable['u90'] = 'center';gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u161'] = 'top';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u77'] = 'top';gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u107'] = 'top';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u136'] = 'top';gv_vAlignTable['u180'] = 'center';gv_vAlignTable['u28'] = 'top';