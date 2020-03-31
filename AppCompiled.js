// ==UserScript==
// @name        Zooniverse Rainfall Rescue form align
// @namespace   https://github.com/CzarnyZajaczek
// @description align form with scan
// @include     https://www.zooniverse.org/projects/edh/rainfall-rescue/classify
// @version     0.1
// @author      Tomasz Dąbski "CzarnyZajaczek"
// @license     GPL-3.0 http://www.gnu.org/licenses/gpl-3.0.txt
// @grant       none
// @run-at      document-end
// ==/UserScript==


var scriptValue = "// function ZooniverseRainfallRescueFormAlign() {\n"+
"//   \n"+
"// }\n"+
"// code copied from https://www.w3schools.com/howto/howto_js_draggable.asp\n"+
"// Make the DIV element draggable:\n"+
"ZooniverseRainfallRescueFormAligndragElement(document.getElementById(\"greasemonkey-zooniverse-rainfall-rescue-form-aligned_verlay_form\"));\n"+
"function ZooniverseRainfallRescueFormAligndragElement(elmnt) {\n"+
"  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;\n"+
"  if (document.getElementById(\"greasemonkey-zooniverse-rainfall-rescue-form-drag_overlay_form\")) {\n"+
"    // if present, the header is where you move the DIV from:\n"+
"    document.getElementById(\"greasemonkey-zooniverse-rainfall-rescue-form-drag_overlay_form\").onmousedown = dragMouseDown;\n"+
"  } else {\n"+
"    // otherwise, move the DIV from anywhere inside the DIV:\n"+
"    elmnt.onmousedown = dragMouseDown;\n"+
"  }\n"+
"  function dragMouseDown(e) {\n"+
"    e = e || window.event;\n"+
"    e.preventDefault();\n"+
"    // get the mouse cursor position at startup:\n"+
"    pos3 = e.clientX;\n"+
"    pos4 = e.clientY;\n"+
"    document.onmouseup = closeDragElement;\n"+
"    // call a function whenever the cursor moves:\n"+
"    document.onmousemove = elementDrag;\n"+
"  }\n"+
"  function elementDrag(e) {\n"+
"    e = e || window.event;\n"+
"    e.preventDefault();\n"+
"    // calculate the new cursor position:\n"+
"    pos1 = pos3 - e.clientX;\n"+
"    pos2 = pos4 - e.clientY;\n"+
"    pos3 = e.clientX;\n"+
"    pos4 = e.clientY;\n"+
"    // set the element's new position:\n"+
"    elmnt.style.top = (elmnt.offsetTop - pos2) + \"px\";\n"+
"    elmnt.style.left = (elmnt.offsetLeft - pos1) + \"px\";\n"+
"  }\n"+
"  function closeDragElement() {\n"+
"    // stop moving when mouse button is released:\n"+
"    document.onmouseup = null;\n"+
"    document.onmousemove = null;\n"+
"  }\n"+
"}\n"+
"function ZooniverseRainfallRescueFormAlignDecreaseSize() {\n"+
"  \n"+
"  var pixelsDisplay = document.getElementById('greasemonkey-zooniverse-rainfall-rescue-form-pixels_display');\n"+
"  \n"+
"  var formRowHeight = pixelsDisplay.innerHTML;\n"+
"  var rawNumber = formRowHeight.split('px')[0];\n"+
"  \n"+
"  if (rawNumber >1) {\n"+
"    rawNumber--;\n"+
"  }\n"+
"  \n"+
"  pixelsDisplay.innerHTML = rawNumber+'px';\n"+
"  var formTable = document.getElementById('greasemonkey-zooniverse-rainfall-rescue-form-form_table');\n"+
"  \n"+
"  var formTableRows = formTable.getElementsByTagName('tr');\n"+
"  \n"+
"  for (i = 0; i < formTableRows.length; i++) {\n"+
"    if ((' ' + formTableRows[i].className + ' ').indexOf(' ' + 'greasemonkey-zooniverse-rainfall-rescue-form-form_table_row' + ' ') > -1) {\n"+
"      formTableRows[i].style.height = rawNumber+'px';\n"+
"    }\n"+
"  }\n"+
"  \n"+
"}\n"+
"function ZooniverseRainfallRescueFormAlignIncreaseSize() {\n"+
"  \n"+
"  var pixelsDisplay = document.getElementById('greasemonkey-zooniverse-rainfall-rescue-form-pixels_display');\n"+
"  \n"+
"  var formRowHeight = pixelsDisplay.innerHTML;\n"+
"  \n"+
"  var rawNumber = formRowHeight.split('px')[0];\n"+
"  \n"+
"  if (rawNumber <200) {\n"+
"    rawNumber++;\n"+
"  }\n"+
"  \n"+
"  pixelsDisplay.innerHTML = rawNumber+'px';\n"+
"  \n"+
"  var formTable = document.getElementById('greasemonkey-zooniverse-rainfall-rescue-form-form_table');\n"+
"  \n"+
"  var formTableRows = formTable.getElementsByTagName('tr');\n"+
"  \n"+
"  for (i = 0; i < formTableRows.length; i++) {\n"+
"    if ((' ' + formTableRows[i].className + ' ').indexOf(' ' + 'greasemonkey-zooniverse-rainfall-rescue-form-form_table_row' + ' ') > -1) {\n"+
"      formTableRows[i].style.height = rawNumber+'px';\n"+
"    }\n"+
"  }\n"+
"  \n"+
"}\n"+
"function ZooniverseRainfallRescueFormAlignReloadFormWaiter() {\n"+
"  var scriptLockDivId = 'greasemonkey-zooniverse-rainfall-rescue-form-align-reload_form_processing';\n"+
"  var scriptLock = document.getElementById(scriptLockDivId);\n"+
"  if (scriptLock) {\n"+
"    var scriptLockParent = scriptLock.parentNode;\n"+
"    scriptLockParent.removeChild(scriptLock);\n"+
"  }\n"+
"  \n"+
"  \n"+
"  \n"+
"  var setIntervalIdBox = [];\n"+
"  var setIntervalId = setInterval(function(){\n"+
"    // check for elements loaded\n"+
"    \n"+
"    var divElements = document.getElementsByTagName('div');\n"+
"    var parentDiv = false;\n"+
"    for (i = 0; i < divElements.length; i++) {\n"+
"      if ((' ' + divElements[i].className + ' ').indexOf(' ' + 'project-page' + ' ') > -1) {\n"+
"        parentDiv = divElements[i];\n"+
"        break;\n"+
"      }\n"+
"    }\n"+
"    \n"+
"    \n"+
"    var taskContainerElement = false;\n"+
"    \n"+
"    for (i = 0; i < divElements.length; i++) {\n"+
"      if ((' ' + divElements[i].className + ' ').indexOf(' ' + 'task-container' + ' ') > -1) {\n"+
"        taskContainerElement = divElements[i];\n"+
"        break;\n"+
"      }\n"+
"    }\n"+
"    \n"+
"    if (!taskContainerElement) {\n"+
"      return;\n"+
"    }\n"+
"    \n"+
"    \n"+
"    var workflowTaskDivs = taskContainerElement.getElementsByTagName('div');\n"+
"    var workflowTaskElements = [];\n"+
"    \n"+
"    for (i = 0; i < workflowTaskDivs.length; i++) {\n"+
"      if ((' ' + workflowTaskDivs[i].className + ' ').indexOf(' ' + 'workflow-task' + ' ') > -1) {\n"+
"        workflowTaskElements.push(workflowTaskDivs[i]);\n"+
"      }\n"+
"    }\n"+
"    \n"+
"    if (workflowTaskElements.length < 13) {\n"+
"      return;\n"+
"    }\n"+
"    \n"+
"    var classifierLargeImageDiv = false;\n"+
"    \n"+
"    for (i = 0; i < divElements.length; i++) {\n"+
"      if ((' ' + divElements[i].className + ' ').indexOf(' ' + 'classifier' + ' ') > -1) {\n"+
"        if ((' ' + divElements[i].className + ' ').indexOf(' ' + 'large-image' + ' ') > -1) {\n"+
"        classifierLargeImageDiv = divElements[i];\n"+
"        break;\n"+
"        }\n"+
"      }\n"+
"    }\n"+
"    \n"+
"    if (!classifierLargeImageDiv) {\n"+
"      return;\n"+
"    }\n"+
"    \n"+
"    \n"+
"    var subjectViewerDiv = false;\n"+
"    var classifierLargeImageDivDivs = classifierLargeImageDiv.getElementsByTagName('div');\n"+
"    for (i = 0; i < classifierLargeImageDivDivs.length; i++) {\n"+
"      if ((' ' + classifierLargeImageDivDivs[i].className + ' ').indexOf(' ' + 'subject-viewer' + ' ') > -1) {\n"+
"        subjectViewerDiv = classifierLargeImageDivDivs[i];\n"+
"      }\n"+
"    }\n"+
"    \n"+
"    if (!subjectViewerDiv) {\n"+
"      return;\n"+
"    }\n"+
"    \n"+
"    \n"+
"    if (!parentDiv) {\n"+
"      return;\n"+
"    }\n"+
"    \n"+
"    // lock, in case of unsynced 2 calls\n"+
"    var scriptLock = document.getElementById(scriptLockDivId);\n"+
"    if (scriptLock) {\n"+
"      return;\n"+
"    }\n"+
"    \n"+
"    var headerElement = parentDiv.getElementsByTagName('header')[0];\n"+
"  \n"+
"    var scriptLockDiv = document.createElement('DIV');\n"+
"    scriptLockDiv.id = scriptLockDivId;\n"+
"    \n"+
"    parentDiv.insertBefore(scriptLockDiv, headerElement);\n"+
"    \n"+
"    formOverlayContainerDiv = document.getElementById('greasemonkey-zooniverse-rainfall-rescue-form-aligned_verlay_form');\n"+
"    \n"+
"    \n"+
"    var formPositionTop = \"429px\";\n"+
"    var formPositionLeft = \"860px\";\n"+
"    \n"+
"  //   var firstYearPositionLeft = \"235px\";\n"+
"    \n"+
"    var formPositionLeftByYear = [];\n"+
"    formPositionLeftByYear.push(\"235px\"); //0\n"+
"    formPositionLeftByYear.push(\"296px\"); //1\n"+
"    formPositionLeftByYear.push(\"353px\"); //2\n"+
"    formPositionLeftByYear.push(\"412px\");//3\n"+
"    formPositionLeftByYear.push(\"470px\");//4\n"+
"    formPositionLeftByYear.push(\"529px\");//5\n"+
"    formPositionLeftByYear.push(\"587px\");//6\n"+
"    formPositionLeftByYear.push(\"646px\");//7\n"+
"    formPositionLeftByYear.push(\"704px\");//8\n"+
"    formPositionLeftByYear.push(\"763px\");//9\n"+
"    \n"+
"//     formOverlayContainerDiv.style.top = formPositionTop;\n"+
"    formOverlayContainerDiv.style.left = formPositionLeft;\n"+
"    \n"+
"    // unload form elements\n"+
"    var formTable = document.getElementById('greasemonkey-zooniverse-rainfall-rescue-form-form_table');\n"+
"    \n"+
"    var formTableRowsInputs = [];\n"+
"    \n"+
"    var rowsFound = 0;\n"+
"    var formTableRows = formTable.getElementsByTagName('tr');\n"+
"    for (i = 0; i < formTableRows.length; i++) {\n"+
"      if ((' ' + formTableRows[i].className + ' ').indexOf(' ' + 'greasemonkey-zooniverse-rainfall-rescue-form-form_table_row' + ' ') > -1) {\n"+
"        var formTableRowsTDs = formTableRows[i].childNodes;\n"+
"        for (j = 0; j < formTableRowsTDs.length; j++) {\n"+
"          var childNodes = formTableRowsTDs[j].childNodes;\n"+
"          for (k = 0; k < childNodes.length; k++) {\n"+
"            formTableRowsTDs[j].removeChild(childNodes[k]);\n"+
"          }\n"+
"        }\n"+
"        formTableRowsInputs.push(formTableRows[i]);\n"+
"        rowsFound++;\n"+
"      }\n"+
"      \n"+
"      if ((' ' + formTableRows[i].className + ' ').indexOf(' ' + 'greasemonkey-zooniverse-rainfall-rescue-form-control_checksum' + ' ') > -1) {\n"+
"        var tdElements = formTableRows[i].getElementsByTagName('td');\n"+
"        var formTableTdCalculated = tdElements[0];\n"+
"        var formTableTdIsDiffer = tdElements[1];\n"+
"        \n"+
"        var childNodes = formTableTdCalculated.childNodes;\n"+
"        for (k = 0; k < childNodes.length; k++) {\n"+
"          formTableTdCalculated.removeChild(childNodes[k]);\n"+
"        }\n"+
"        var childNodes = formTableTdIsDiffer.childNodes;\n"+
"        for (k = 0; k < childNodes.length; k++) {\n"+
"          formTableTdIsDiffer.removeChild(childNodes[k]);\n"+
"        }\n"+
"      }\n"+
"    }\n"+
"    \n"+
"    \n"+
"    // load form elements again into table\n"+
"    \n"+
"    var yearFound = false;\n"+
"    var year = false;\n"+
"    \n"+
"    for (i = 0; i < workflowTaskElements.length; i++) {\n"+
"      var rowDivs = formTableRowsInputs[i].getElementsByTagName('td');\n"+
"      \n"+
"      var formInput = workflowTaskElements[i].getElementsByTagName('label')[0];\n"+
"      var formLabel;\n"+
"      var formLabelDiv = false;\n"+
"      \n"+
"      var workflowTaskElementDivs = workflowTaskElements[i].getElementsByTagName('div');\n"+
"      for (j = 0; j < workflowTaskElementDivs.length; j++) {\n"+
"        if ((' ' + workflowTaskElementDivs[j].className + ' ').indexOf(' ' + 'markdown' + ' ') > -1) {\n"+
"          if ((' ' + workflowTaskElementDivs[j].className + ' ').indexOf(' ' + 'question' + ' ') > -1) {\n"+
"          formLabelDiv =workflowTaskElementDivs[j];\n"+
"          break;\n"+
"          }\n"+
"        }\n"+
"      }\n"+
"      \n"+
"      if (formLabelDiv.getElementsByTagName('p').length > 1) {\n"+
"        var k = formLabelDiv.getElementsByTagName('p').length;\n"+
"        k--;\n"+
"        formLabel = formLabelDiv.getElementsByTagName('p')[k];\n"+
"      } else {\n"+
"        formLabel = formLabelDiv.getElementsByTagName('p')[0];\n"+
"      }\n"+
"      if (!yearFound) {\n"+
"        var formLabelStrong = formLabel.getElementsByTagName('strong')[0];\n"+
"        var year = formLabelStrong.innerHTML.split(' ');\n"+
"        for (j = 0; j < year.length; j++) {\n"+
"          var yearNumber = parseInt(year[j]);\n"+
"          if (yearNumber>1000 && yearNumber<2021) {\n"+
"            yearFound = true;\n"+
"          }\n"+
"        }\n"+
"      }\n"+
"      formLabel.style.margin = \"0px\";\n"+
"      \n"+
"      formInput.getElementsByTagName('textarea')[0].style.padding = \"0px\";\n"+
"      \n"+
"      var formTableTdI = rowDivs[0];\n"+
"      \n"+
"      formTableTdI.appendChild(formInput);\n"+
"      \n"+
"      var formLabelBox = document.createElement('DIV');\n"+
"      formLabelBox.appendChild(formLabel);\n"+
"      \n"+
"      var formTableTdL  = rowDivs[1];\n"+
"      \n"+
"      formTableTdL.appendChild(formLabelBox);\n"+
"    }\n"+
"    \n"+
"    if (yearFound) {\n"+
"      // take last digit from year\n"+
"      var yearText = year.toString();\n"+
"      var lastDigit = yearText[yearText.length -1];\n"+
"      \n"+
"      var lastDigitNumber = parseInt(lastDigit);\n"+
"      \n"+
"      var newFormPositionLeft = formPositionLeftByYear[lastDigitNumber];\n"+
"      formOverlayContainerDiv.style.left = newFormPositionLeft;\n"+
"    }\n"+
"    \n"+
"    // add event listener to button\n"+
"    \n"+
"    var taskContainerParent = taskContainerElement.parentNode;\n"+
"    \n"+
"    var taskContainerParentButtons = taskContainerParent.getElementsByTagName('button');\n"+
"    \n"+
"    for (i = 0; i < taskContainerParentButtons.length; i++) {\n"+
"      var innerSpan = taskContainerParentButtons[i].getElementsByTagName('span')[0];\n"+
"      if (innerSpan.innerHTML.trim().toLowerCase() == 'done') {\n"+
"        taskContainerParentButtons[i].addEventListener(\"click\", ZooniverseRainfallRescueFormAlignReloadFormWaiter);\n"+
"        break;\n"+
"      }\n"+
"    }\n"+
"    \n"+
"    // control checksum\n"+
"    \n"+
"    var formTableRows = formTable.getElementsByTagName('tr');\n"+
"    for (i = 0; i < formTableRows.length; i++) {\n"+
"      if ((' ' + formTableRows[i].className + ' ').indexOf(' ' + 'greasemonkey-zooniverse-rainfall-rescue-form-form_table_row' + ' ') > -1) {\n"+
"        var inputTextarea = formTableRows[i].getElementsByTagName('textarea')[0];\n"+
"        \n"+
"        inputTextarea.addEventListener(\"input\", ZooniverseRainfallRescueFormAlignChecksum);\n"+
"      }\n"+
"    }\n"+
"    \n"+
"    \n"+
"    // turn off timer\n"+
"    \n"+
"    if (setIntervalIdBox.length == 1) {\n"+
"      clearInterval(setIntervalIdBox[0]);\n"+
"    }\n"+
"  }, 300, setIntervalIdBox);\n"+
"  setIntervalIdBox.push(setIntervalId);\n"+
"}\n"+
"function ZooniverseRainfallRescueFormAlignChecksum() {\n"+
"  \n"+
"  var formTable = document.getElementById('greasemonkey-zooniverse-rainfall-rescue-form-form_table');\n"+
"  \n"+
"  \n"+
"  var formTableRows = formTable.getElementsByTagName('tr');\n"+
"  \n"+
"  var sumValue = 0;\n"+
"  var difference = 0;\n"+
"  var isDiffer = false;\n"+
"  var maxPrecision = 0;\n"+
"  \n"+
"  for (i = 0; i < formTableRows.length; i++) {\n"+
"    if ((' ' + formTableRows[i].className + ' ').indexOf(' ' + 'greasemonkey-zooniverse-rainfall-rescue-form-form_table_row' + ' ') > -1) {\n"+
"      var inputTextarea = formTableRows[i].getElementsByTagName('textarea')[0];\n"+
"      \n"+
"      var inputValue = parseFloat(inputTextarea.value);\n"+
"      if (isNaN(inputValue)) {\n"+
"        inputValue = 0;\n"+
"      }\n"+
"//       alert(1);\n"+
"      var numberText = inputTextarea.value.trim().replace(',', '.');\n"+
"//       alert(2);\n"+
"      if (numberText.indexOf('.') > -1) {\n"+
"//       alert(3);\n"+
"        var numberParts = numberText.split('.');\n"+
"//       alert(4);\n"+
"        var numberPrecision = numberParts[1].length;\n"+
"//       alert(5);\n"+
"        if (numberPrecision> maxPrecision) {\n"+
"//       alert(6);\n"+
"          maxPrecision = numberPrecision;\n"+
"        }\n"+
"      }\n"+
"      if (i<13) {\n"+
"        sumValue = sumValue + inputValue;\n"+
"      } else {\n"+
"        var tmpsumValue = sumValue;\n"+
"        var tmpinputValue = inputValue;\n"+
"        if (maxPrecision > 0) {\n"+
"//       alert(7);\n"+
"          for (j=0; j<maxPrecision; j++) {\n"+
"//       alert(8);\n"+
"            tmpsumValue = tmpsumValue * 10;\n"+
"            tmpinputValue = tmpinputValue * 10;\n"+
"          }\n"+
"//       alert(9);\n"+
"        }\n"+
"        tmpsumValue = Math.round(tmpsumValue);\n"+
"//       alert(10);\n"+
"        tmpinputValue = Math.round(tmpinputValue);\n"+
"//       alert(11);\n"+
"        \n"+
"        \n"+
"        if (tmpsumValue == tmpinputValue) {\n"+
"          isDiffer = false;\n"+
"        } else {\n"+
"          isDiffer = true;\n"+
"          difference = inputValue - sumValue;\n"+
"        }\n"+
"      }\n"+
"    }\n"+
"    \n"+
"    if ((' ' + formTableRows[i].className + ' ').indexOf(' ' + 'greasemonkey-zooniverse-rainfall-rescue-form-control_checksum' + ' ') > -1) {\n"+
"      var tdElements = formTableRows[i].getElementsByTagName('td');\n"+
"      var formTableTdCalculated = tdElements[0];\n"+
"      var formTableTdIsDiffer = tdElements[1];\n"+
"      \n"+
"      var childNodes = formTableTdCalculated.childNodes;\n"+
"      for (k = 0; k < childNodes.length; k++) {\n"+
"        formTableTdCalculated.removeChild(childNodes[k]);\n"+
"      }\n"+
"      var childNodes = formTableTdIsDiffer.childNodes;\n"+
"      for (k = 0; k < childNodes.length; k++) {\n"+
"        formTableTdIsDiffer.removeChild(childNodes[k]);\n"+
"      }\n"+
"      \n"+
"      var checksumSpan = document.createElement('span');\n"+
"      var checksumContents = document.createTextNode(sumValue);\n"+
"      checksumSpan.appendChild(checksumContents);\n"+
"      formTableTdCalculated.appendChild(checksumSpan);\n"+
"      \n"+
"      var summarySpan = document.createElement('span');\n"+
"      if (!isDiffer) {\n"+
"        var summaryContents = document.createTextNode('equal');\n"+
"      } else {\n"+
"        var summaryContents = document.createTextNode(difference);\n"+
"        if (difference > 0) {\n"+
"          summarySpan.style.color = 'red';\n"+
"        } else {\n"+
"          summarySpan.style.color = 'blue';\n"+
"        }\n"+
"      }\n"+
"      \n"+
"      summarySpan.appendChild(summaryContents);\n"+
"      formTableTdIsDiffer.appendChild(summarySpan);\n"+
"    }\n"+
"  }\n"+
"}";

var setIntervalIdBox = [];

var setIntervalId = setInterval(function(){
  var scriptAddedDivId = 'greasemonkey-zooniverse-rainfall-rescue-form-align';
  var scriptLockDivId = 'greasemonkey-zooniverse-rainfall-rescue-form-align-reload_form_processing';
  var scriptAdded = document.getElementById(scriptAddedDivId);
  if (scriptAdded) {
    if (setIntervalIdBox.length == 1) {
      clearInterval(setIntervalIdBox[0]);
    }
    return;
  }
  var divElements = document.getElementsByTagName('div');
  var parentDiv = false;
  for (i = 0; i < divElements.length; i++) {
    if ((' ' + divElements[i].className + ' ').indexOf(' ' + 'project-page' + ' ') > -1) {
      parentDiv = divElements[i];
      break;
    }
  }
  
  
  var taskContainerElement = false;
  
  for (i = 0; i < divElements.length; i++) {
    if ((' ' + divElements[i].className + ' ').indexOf(' ' + 'task-container' + ' ') > -1) {
      taskContainerElement = divElements[i];
      break;
    }
  }
  
  if (!taskContainerElement) {
    return;
  }
  
  
  var workflowTaskDivs = taskContainerElement.getElementsByTagName('div');
  var workflowTaskElements = [];
  
  for (i = 0; i < workflowTaskDivs.length; i++) {
    if ((' ' + workflowTaskDivs[i].className + ' ').indexOf(' ' + 'workflow-task' + ' ') > -1) {
      workflowTaskElements.push(workflowTaskDivs[i]);
    }
  }
  
  if (workflowTaskElements.length < 13) {
    return;
  }
  
  var classifierLargeImageDiv = false;
  
  for (i = 0; i < divElements.length; i++) {
    if ((' ' + divElements[i].className + ' ').indexOf(' ' + 'classifier' + ' ') > -1) {
      if ((' ' + divElements[i].className + ' ').indexOf(' ' + 'large-image' + ' ') > -1) {
      classifierLargeImageDiv = divElements[i];
      break;
      }
    }
  }
  
  if (!classifierLargeImageDiv) {
    return;
  }
  
  
  var subjectViewerDiv = false;
  var classifierLargeImageDivDivs = classifierLargeImageDiv.getElementsByTagName('div');

  for (i = 0; i < classifierLargeImageDivDivs.length; i++) {
    if ((' ' + classifierLargeImageDivDivs[i].className + ' ').indexOf(' ' + 'subject-viewer' + ' ') > -1) {
      subjectViewerDiv = classifierLargeImageDivDivs[i];
    }
  }
  
  if (!subjectViewerDiv) {
    return;
  }
  
  
  if (!parentDiv) {
    return;
  }
  
  var scriptLock = document.getElementById(scriptLockDivId);
  if (scriptLock) {
    return;
  } 
  
  var headerElement = parentDiv.getElementsByTagName('header')[0];

  var scriptLockDiv = document.createElement('DIV');
  scriptLockDiv.id = scriptLockDivId;
  
  parentDiv.insertBefore(scriptLockDiv, headerElement);
  
  
  
  // rearrange form
  var formOverlayContainerDivId = 'greasemonkey-zooniverse-rainfall-rescue-form-aligned_verlay_form';
  var formOverlayContainerDiv = document.createElement('DIV');
  formOverlayContainerDiv.id = formOverlayContainerDivId;
  
//   var debugContents = document.createTextNode('-- form --');
//   formOverlayContainerDiv.appendChild(debugContents);
  formOverlayContainerDiv.style.zIndex = '10';
  classifierLargeImageDiv.style.justifyContent = 'left';
  formOverlayContainerDiv.style.position = "absolute";
  
  classifierLargeImageDiv.appendChild(formOverlayContainerDiv);
  
  formOverlayContainerDiv.style.backgroundColor = 'white';
  
  var formRowFirstRowOffsetTop = "8px";
  var formRowHeight = "35px"; // with borderBottom 1px = 36px
  var formRowTotalTop = "19px";
  var formPositionTop = "429px";
  var formPositionLeft = "860px";
  
//   var firstYearPositionLeft = "235px";
  
  var formPositionLeftByYear = [];
  formPositionLeftByYear.push("235px"); //0
  formPositionLeftByYear.push("296px"); //1
  formPositionLeftByYear.push("353px"); //2
  formPositionLeftByYear.push("412px");//3
  formPositionLeftByYear.push("470px");//4
  formPositionLeftByYear.push("529px");//5
  formPositionLeftByYear.push("587px");//6
  formPositionLeftByYear.push("646px");//7
  formPositionLeftByYear.push("704px");//8
  formPositionLeftByYear.push("763px");//9
  
  formOverlayContainerDiv.style.top = formPositionTop;
  formOverlayContainerDiv.style.left = formPositionLeft;
  
  // draggable header
  var headerDiv = document.createElement('DIV');
  headerDiv.id = 'greasemonkey-zooniverse-rainfall-rescue-form-drag_overlay_form';
  
  var headerContents = document.createTextNode('click here to drag this form');
  headerDiv.appendChild(headerContents);
  headerDiv.style.backgroundColor = "#2196F3";
  headerDiv.style.color = "#FFFFFF";
  
  headerDiv.title = "Align bottom of this header to bottom line of row containing years";
  
  // header table
  var headerTable = document.createElement('TABLE');
  formOverlayContainerDiv.appendChild(headerTable);
  var headerTableTbody = document.createElement('TBODY');
  headerTable.appendChild(headerTableTbody);
  var headerTR = document.createElement('TR');
  headerTR.style.margin = "0px";
  headerTR.style.padding = "0px";
  
  headerTableTbody.appendChild(headerTR);
  
  
  headerTD = document.createElement('TD');
  headerTD.style.margin = "0px";
  headerTD.style.padding = "0px";
  headerTD.style.width = "100%";
  
  headerTR.appendChild(headerTD);
  
  headerTD.appendChild(headerDiv);
  
  var minusButton = document.createElement('DIV');
  minusButton.id = 'greasemonkey-zooniverse-rainfall-rescue-form-minus_button';
  minusButton.style.backgroundColor = "red";
  minusButton.style.width = "30px";
  minusButton.style.height = "30px";
  
  headerTD = document.createElement('TD');
  headerTD.style.margin = "0px";
  headerTD.style.padding = "0px";
  
  headerTR.appendChild(headerTD);
  
  headerTD.appendChild(minusButton);
  var buttonContents = document.createTextNode('-');
  minusButton.appendChild(buttonContents);
  minusButton.onclick = function(){ ZooniverseRainfallRescueFormAlignDecreaseSize(); };
  
  var pixelsDisplay = document.createElement('DIV');
  pixelsDisplay.id = 'greasemonkey-zooniverse-rainfall-rescue-form-pixels_display';
  
  headerTD = document.createElement('TD');
  headerTD.style.margin = "0px";
  headerTD.style.padding = "0px";
  
  headerTR.appendChild(headerTD);
  
  headerTD.appendChild(pixelsDisplay);
  
  var buttonContents = document.createTextNode(formRowHeight);
  pixelsDisplay.appendChild(buttonContents);
  pixelsDisplay.title = "Row has this height + 1px bottom border";
  
  var plusButton = document.createElement('DIV');
  plusButton.id = 'greasemonkey-zooniverse-rainfall-rescue-form-plus_button';
  plusButton.style.backgroundColor = "green";
  plusButton.style.width = "30px";
  plusButton.style.height = "30px";
  
  headerTD = document.createElement('TD');
  headerTD.style.margin = "0px";
  headerTD.style.padding = "0px";
  
  headerTR.appendChild(headerTD);
  
  headerTD.appendChild(plusButton);
  
  var buttonContents = document.createTextNode('+');
  plusButton.appendChild(buttonContents);
  plusButton.onclick = function(){ ZooniverseRainfallRescueFormAlignIncreaseSize(); };
  
  
  formOverlayContainerDiv.style.margin = "0px";
  formOverlayContainerDiv.style.padding = "0px";
  
  var formTable = document.createElement('TABLE');
  formOverlayContainerDiv.appendChild(formTable);
  var formTableTbody = document.createElement('TBODY');
  formTable.appendChild(formTableTbody);
  formTable.id = 'greasemonkey-zooniverse-rainfall-rescue-form-form_table';
  
  var yearFound = false;
  var year = false;
  
  for (i = 0; i < workflowTaskElements.length; i++) {
    if (i == 0) {
      
      var formSpacerRow = document.createElement('TR');
      formSpacerRow.style.height = formRowFirstRowOffsetTop;
      var formTableTdI = document.createElement('TD');
      var formTableTdL = document.createElement('TD');
      formSpacerRow.appendChild(formTableTdI);
      formSpacerRow.appendChild(formTableTdI);
      
      formTableTdI.style.height = formRowFirstRowOffsetTop;
      formTableTdL.style.height = formRowFirstRowOffsetTop;
      formTableTdI.style.margin = "0px";
      formTableTdI.style.padding = "0px";
      formTableTdL.style.margin = "0px";
      formTableTdL.style.padding = "0px";
      
      formTableTbody.appendChild(formSpacerRow);
    }
    if (i == 12) {
      var formSpacerRow = document.createElement('TR');
      formSpacerRow.style.height = formRowTotalTop;
      var formTableTdI = document.createElement('TD');
      var formTableTdL = document.createElement('TD');
      formSpacerRow.appendChild(formTableTdI);
      formSpacerRow.appendChild(formTableTdL);
      
      formTableTdI.style.height = formRowTotalTop;
      formTableTdL.style.height = formRowTotalTop;
      formTableTdI.style.margin = "0px";
      formTableTdI.style.padding = "0px";
      formTableTdL.style.margin = "0px";
      formTableTdL.style.padding = "0px";
      
      formTableTbody.appendChild(formSpacerRow);
    }
    
    var formRow = document.createElement('TR');
    
    formTableTbody.appendChild(formRow);
    
    formRow.style.height = formRowHeight;
    formRow.className = 'greasemonkey-zooniverse-rainfall-rescue-form-form_table_row';
    
    var formInput = workflowTaskElements[i].getElementsByTagName('label')[0];
    var formLabel;
    var formLabelDiv = false;
    
    var workflowTaskElementDivs = workflowTaskElements[i].getElementsByTagName('div');
    for (j = 0; j < workflowTaskElementDivs.length; j++) {
      if ((' ' + workflowTaskElementDivs[j].className + ' ').indexOf(' ' + 'markdown' + ' ') > -1) {
        if ((' ' + workflowTaskElementDivs[j].className + ' ').indexOf(' ' + 'question' + ' ') > -1) {
        formLabelDiv =workflowTaskElementDivs[j];
        break;
        }
      }
    }
    
    if (formLabelDiv.getElementsByTagName('p').length > 1) {
      var k = formLabelDiv.getElementsByTagName('p').length;
      k--;
      formLabel = formLabelDiv.getElementsByTagName('p')[k];
    } else {
      formLabel = formLabelDiv.getElementsByTagName('p')[0];
    }
    
    if (!yearFound) {
      var formLabelStrong = formLabel.getElementsByTagName('strong')[0];
      year = formLabelStrong.innerHTML.split(' ');
      for (j = 0; j < year.length; j++) {
        var yearNumber = parseInt(year[j]);
        if (yearNumber>1000 && yearNumber<2021) {
          yearFound = true;
          break;
        }
      }
    }
    
    formLabel.style.margin = "0px";
    
    formInput.getElementsByTagName('textarea')[0].style.padding = "0px";
    
    var formTableTdI = document.createElement('TD');
    
    formTableTdI.appendChild(formInput);
    
    formRow.appendChild(formTableTdI);
    
    var formLabelBox = document.createElement('DIV');
    formLabelBox.appendChild(formLabel);
    
    var formTableTdL  = document.createElement('TD');
    
    formTableTdL.appendChild(formLabelBox);
    
    formRow.appendChild(formTableTdL);
    
//     formTableTdL.style.height = formRowHeight;
//     formTableTdI.style.height = formRowHeight;
    formTableTdI.style.margin = "0px";
    formTableTdI.style.padding = "0px";
    formTableTdL.style.margin = "0px";
    formTableTdL.style.padding = "0px";
    
    formTableTdL.style.borderBottom = "1px solid";
    formTableTdI.style.borderBottom = "1px solid";
    formTableTdL.style.borderBottomColor = "#000000";
    formTableTdI.style.borderBottomColor = "#000000";
  }
  
  
  if (yearFound) {
    // take last digit from year
    var yearText = year.toString();
    var lastDigit = yearText[yearText.length -1];
    
    var lastDigitNumber = parseInt(lastDigit);
    
    var newFormPositionLeft = formPositionLeftByYear[lastDigitNumber];
    formOverlayContainerDiv.style.left = newFormPositionLeft;
//     alert('yearFound:'+yearText+' lastDigit:'+lastDigit+' lastDigitNumber:'+lastDigitNumber+' newFormPositionLeft:'+newFormPositionLeft);
  }
  
  
  // insert js in element parentDiv
  
  var headerElement = parentDiv.getElementsByTagName('header')[0];
  
  var ScriptTag = document.createElement('SCRIPT');
  ScriptTag.type = "text/javascript";
  
  var ScriptTagContents = document.createTextNode(scriptValue);
  ScriptTag.appendChild(ScriptTagContents); 
  
  parentDiv.insertBefore(ScriptTag, headerElement);
  
  var scriptAddedDiv = document.createElement('DIV');
  scriptAddedDiv.id = scriptAddedDivId;
  
  parentDiv.insertBefore(scriptAddedDiv, headerElement);
  
  var taskContainerParent = taskContainerElement.parentNode;
  
  var taskContainerParentButtons = taskContainerParent.getElementsByTagName('button');
  
  for (i = 0; i < taskContainerParentButtons.length; i++) {
    var innerSpan = taskContainerParentButtons[i].getElementsByTagName('span')[0];
    if (innerSpan.innerHTML.trim().toLowerCase() == 'done') {
      taskContainerParentButtons[i].addEventListener("click", ZooniverseRainfallRescueFormAlignReloadFormWaiter);
      break;
    }
  }
  
  var classifierLargeImageDivNavs = classifierLargeImageDiv.getElementsByTagName('nav');
  
  for (i = 0; i < classifierLargeImageDivNavs.length; i++) {
    if ((' ' + classifierLargeImageDivNavs[i].className + ' ').indexOf(' ' + 'task-nav' + ' ') > -1) {
      var formRow = document.createElement('TR');
      
      formTableTbody.appendChild(formRow);
      var formTableTd = document.createElement('TD');
      formRow.appendChild(formTableTd);
      formTableTd.colspan = "2";
      formRow.className = "greasemonkey-zooniverse-rainfall-rescue-form-task_nav";
      
      formTableTd.appendChild(classifierLargeImageDivNavs[i]);
      break;
    }
  }
  
  // control checksum
  
  var formRow = document.createElement('TR');
  
  formTableTbody.appendChild(formRow);
  var formTableTdCalculated = document.createElement('TD');
  formRow.appendChild(formTableTdCalculated);
  formRow.className = "greasemonkey-zooniverse-rainfall-rescue-form-control_checksum";
  
  var formTableTdIsDiffer = document.createElement('TD');
  formRow.appendChild(formTableTdIsDiffer);
  
  var formTableRows = formTable.getElementsByTagName('tr');
  for (i = 0; i < formTableRows.length; i++) {
    if ((' ' + formTableRows[i].className + ' ').indexOf(' ' + 'greasemonkey-zooniverse-rainfall-rescue-form-form_table_row' + ' ') > -1) {
      var inputTextarea = formTableRows[i].getElementsByTagName('textarea')[0];
      
      inputTextarea.addEventListener("input", ZooniverseRainfallRescueFormAlignChecksum);
    }
  }
  
  
}, 300, setIntervalIdBox, scriptValue);

setIntervalIdBox.push(setIntervalId);

