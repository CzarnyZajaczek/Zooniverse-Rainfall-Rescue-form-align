// ==UserScript==
// @name        Zooniverse Rainfall Rescue form align
// @namespace   https://github.com/CzarnyZajaczek
// @description align form with scan
// @include     https://www.zooniverse.org/projects/edh/rainfall-rescue/classify
// @version     0.3
// @author      Tomasz Dąbski "CzarnyZajaczek"
// @license     GPL-3.0 http://www.gnu.org/licenses/gpl-3.0.txt
// @grant       none
// @run-at      document-end
// ==/UserScript==


var scriptValue = {{%scriptValue}};

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
  minusButton.title = "Decrease height of input form rows";
  
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
  plusButton.title = "Increase height of input form rows";
  
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

