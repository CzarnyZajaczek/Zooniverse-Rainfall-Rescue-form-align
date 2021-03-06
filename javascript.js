// ==UserScript==
// @name        Zooniverse Rainfall Rescue form align
// @namespace   https://github.com/CzarnyZajaczek
// @description align form with scan
// @include     https://www.zooniverse.org/projects/edh/rainfall-rescue/classify
// @version     0.5
// @author      Tomasz Dąbski "CzarnyZajaczek"
// @license     GPL-3.0 http://www.gnu.org/licenses/gpl-3.0.txt
// @grant       none
// @run-at      document-end
// ==/UserScript==


var scriptValue = {{%scriptValue}};

var setIntervalIdBox = [];

var setIntervalId = setInterval(function(){
  var scriptAddedDivId;
  var scriptLockDivId;
  var scriptAdded;
  var divElements;
  var parentDiv;
  var taskContainerElement;
  var taskContainerParent;
  var taskContainerParentButtons;
  var workflowTaskDivs;
  var workflowTaskElements;
  var inputTextarea;
  var classifierLargeImageDiv;
  var subjectViewerDiv;
  var classifierLargeImageDivDivs;
  var scriptLock;
  var headerElement;
  var scriptLockDiv;
  var formOverlayContainerDivId;
  var formOverlayContainerDiv;
//   var debugContents;
  var formRowFirstRowOffsetTop;
  var formRowHeight;
  var formRowTotalTop;
  var formPositionTop;
  var formPositionLeft;
//   var firstYearPositionLeft;
  var formPositionLeftByYear;
  var headerDiv;
  var headerContents;
  var headerTable;
  var headerTableTbody;
  var headerTR;
  var headerTD;
  var minusButton;
  var buttonContents;
  var pixelsDisplay;
  var plusButton;
  var formTable;
  var formTableTbody;
  var yearFound;
  var year;
  var formSpacerRow;
  var formTableTdI;
  var formTableTdL;
  var formRow;
  var formInput;
  var formLabel;
  var formLabelDiv;
  var workflowTaskElementDivs;
  var i;
  var j;
  var k;
  var formLabelStrong;
  var yearNumber;
  var formLabelBox;
  var yearText;
  var lastDigit;
  var lastDigitNumber;
  var newFormPositionLeft;
  var ScriptTag;
  var ScriptTagContents;
  var scriptAddedDiv;
  var formTableTdCalculated;
  var formTableTdCalculatedPlaceholder;
  var formTableTdIsDiffer;
  var formTableRows;
  var innerSpan;
  var classifierLargeImageDivNavs;
  var formTableTd;

  scriptAddedDivId = 'greasemonkey-zooniverse-rainfall-rescue-form-align';
  scriptLockDivId = 'greasemonkey-zooniverse-rainfall-rescue-form-align-reload_form_processing';
  scriptAdded = document.getElementById(scriptAddedDivId);
  if (scriptAdded) {
    if (setIntervalIdBox.length == 1) {
      clearInterval(setIntervalIdBox[0]);
    }
    return;
  }
  divElements = document.getElementsByTagName('div');
  parentDiv = false;
  for (i = 0; i < divElements.length; i++) {
    if ((' ' + divElements[i].className + ' ').indexOf(' project-page ') > -1) {
      parentDiv = divElements[i];
      break;
    }
  }
  
  
  taskContainerElement = false;
  
  for (i = 0; i < divElements.length; i++) {
    if ((' ' + divElements[i].className + ' ').indexOf(' task-container ') > -1) {
      taskContainerElement = divElements[i];
      break;
    }
  }
  
  if (!taskContainerElement) {
    return;
  }
  
  taskContainerParent = taskContainerElement.parentNode;
  if (!taskContainerParent) {
    return;
  }
  
  taskContainerParentButtons = taskContainerParent.getElementsByTagName('button');
  if (!taskContainerParentButtons) {
    return;
  }
  
  
  workflowTaskDivs = taskContainerElement.getElementsByTagName('div');
  workflowTaskElements = [];
  
  for (i = 0; i < workflowTaskDivs.length; i++) {
    if ((' ' + workflowTaskDivs[i].className + ' ').indexOf(' workflow-task ') > -1) {
      workflowTaskElements.push(workflowTaskDivs[i]);
      inputTextarea = workflowTaskDivs[i].getElementsByTagName('textarea')[0];
      if (!inputTextarea) {
        return;
      }
    }
  }
  
  if (workflowTaskElements.length < 13) {
    return;
  }
  
  classifierLargeImageDiv = false;
  
  for (i = 0; i < divElements.length; i++) {
    if ((' ' + divElements[i].className + ' ').indexOf(' classifier ') > -1) {
      if ((' ' + divElements[i].className + ' ').indexOf(' large-image ') > -1) {
      classifierLargeImageDiv = divElements[i];
      break;
      }
    }
  }
  
  if (!classifierLargeImageDiv) {
    return;
  }
  
  
  subjectViewerDiv = false;
  classifierLargeImageDivDivs = classifierLargeImageDiv.getElementsByTagName('div');

  for (i = 0; i < classifierLargeImageDivDivs.length; i++) {
    if ((' ' + classifierLargeImageDivDivs[i].className + ' ').indexOf(' subject-viewer ') > -1) {
      subjectViewerDiv = classifierLargeImageDivDivs[i];
    }
  }
  
  if (!subjectViewerDiv) {
    return;
  }
  
  
  if (!parentDiv) {
    return;
  }
  
  scriptLock = document.getElementById(scriptLockDivId);
  if (scriptLock) {
    return;
  } 
  
  headerElement = parentDiv.getElementsByTagName('header')[0];

  scriptLockDiv = document.createElement('DIV');
  scriptLockDiv.id = scriptLockDivId;
  
  parentDiv.insertBefore(scriptLockDiv, headerElement);
  
  
  
  // rearrange form
  formOverlayContainerDivId = 'greasemonkey-zooniverse-rainfall-rescue-form-aligned_verlay_form';
  formOverlayContainerDiv = document.createElement('DIV');
  formOverlayContainerDiv.id = formOverlayContainerDivId;
  
//   debugContents = document.createTextNode('-- form --');
//   formOverlayContainerDiv.appendChild(debugContents);
  formOverlayContainerDiv.style.zIndex = '10';
  classifierLargeImageDiv.style.justifyContent = 'left';
  formOverlayContainerDiv.style.position = "absolute";
  
  classifierLargeImageDiv.appendChild(formOverlayContainerDiv);
  
  formOverlayContainerDiv.style.backgroundColor = 'white';
  
  formRowFirstRowOffsetTop = "8px";
  formRowHeight = "35px"; // with borderBottom 1px = 36px
  formRowTotalTop = "19px";
  formPositionTop = "429px";
  formPositionLeft = "860px";
  
//   firstYearPositionLeft = "235px";
  
  formPositionLeftByYear = [];
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
  headerDiv = document.createElement('DIV');
  headerDiv.id = 'greasemonkey-zooniverse-rainfall-rescue-form-drag_overlay_form';
  
  headerContents = document.createTextNode('click here to drag this form');
  headerDiv.appendChild(headerContents);
  headerDiv.style.backgroundColor = "#2196F3";
  headerDiv.style.color = "#FFFFFF";
  
  headerDiv.title = "Align bottom of this header to bottom line of row containing years";
  
  // header table
  headerTable = document.createElement('TABLE');
  formOverlayContainerDiv.appendChild(headerTable);
  headerTableTbody = document.createElement('TBODY');
  headerTable.appendChild(headerTableTbody);
  headerTR = document.createElement('TR');
  headerTR.style.margin = "0px";
  headerTR.style.padding = "0px";
  
  headerTableTbody.appendChild(headerTR);
  
  headerTD = document.createElement('TD');
  headerTD.style.margin = "0px";
  headerTD.style.padding = "0px";
  headerTD.style.width = "100%";
  
  headerTR.appendChild(headerTD);
  
  headerTD.appendChild(headerDiv);
  
  minusButton = document.createElement('DIV');
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
  buttonContents = document.createTextNode('-');
  minusButton.appendChild(buttonContents);
  
  pixelsDisplay = document.createElement('DIV');
  pixelsDisplay.id = 'greasemonkey-zooniverse-rainfall-rescue-form-pixels_display';
  
  headerTD = document.createElement('TD');
  headerTD.style.margin = "0px";
  headerTD.style.padding = "0px";
  
  headerTR.appendChild(headerTD);
  
  headerTD.appendChild(pixelsDisplay);
  
  buttonContents = document.createTextNode(formRowHeight);
  pixelsDisplay.appendChild(buttonContents);
  pixelsDisplay.title = "Row has this height + 1px bottom border";
  
  plusButton = document.createElement('DIV');
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
  
  buttonContents = document.createTextNode('+');
  plusButton.appendChild(buttonContents);
  
  
  formOverlayContainerDiv.style.margin = "0px";
  formOverlayContainerDiv.style.padding = "0px";
  
  formTable = document.createElement('TABLE');
  formOverlayContainerDiv.appendChild(formTable);
  formTableTbody = document.createElement('TBODY');
  formTable.appendChild(formTableTbody);
  formTable.id = 'greasemonkey-zooniverse-rainfall-rescue-form-form_table';
  
  yearFound = false;
  year = false;
  
  for (i = 0; i < workflowTaskElements.length; i++) {
    if (i == 0) {
      
      formSpacerRow = document.createElement('TR');
      formSpacerRow.style.height = formRowFirstRowOffsetTop;
      formTableTdI = document.createElement('TD');
      formTableTdL = document.createElement('TD');
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
      formSpacerRow = document.createElement('TR');
      formSpacerRow.style.height = formRowTotalTop;
      formTableTdI = document.createElement('TD');
      formTableTdL = document.createElement('TD');
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
    
    formRow = document.createElement('TR');
    
    formTableTbody.appendChild(formRow);
    
    formRow.style.height = formRowHeight;
    formRow.className = 'greasemonkey-zooniverse-rainfall-rescue-form-form_table_row';
    
    formInput = workflowTaskElements[i].getElementsByTagName('label')[0];
    formLabelDiv = false;
    
    workflowTaskElementDivs = workflowTaskElements[i].getElementsByTagName('div');
    for (j = 0; j < workflowTaskElementDivs.length; j++) {
      if ((' ' + workflowTaskElementDivs[j].className + ' ').indexOf(' markdown ') > -1) {
        if ((' ' + workflowTaskElementDivs[j].className + ' ').indexOf(' question ') > -1) {
        formLabelDiv =workflowTaskElementDivs[j];
        break;
        }
      }
    }
    
    if (formLabelDiv.getElementsByTagName('p').length > 1) {
      k = formLabelDiv.getElementsByTagName('p').length;
      k--;
      formLabel = formLabelDiv.getElementsByTagName('p')[k];
    } else {
      formLabel = formLabelDiv.getElementsByTagName('p')[0];
    }
    
    if (!yearFound) {
      formLabelStrong = formLabel.getElementsByTagName('strong')[0];
      year = formLabelStrong.innerHTML.split(' ');
      for (j = 0; j < year.length; j++) {
        yearNumber = parseInt(year[j]);
        if (yearNumber>1000 && yearNumber<2021) {
          yearFound = true;
          break;
        }
      }
    }
    
    formLabel.style.margin = "0px";
    
    formInput.getElementsByTagName('textarea')[0].style.padding = "0px";
    
    formTableTdI = document.createElement('TD');
    
    formTableTdI.appendChild(formInput);
    
    formRow.appendChild(formTableTdI);
    
    formLabelBox = document.createElement('DIV');
    formLabelBox.appendChild(formLabel);
    
    formTableTdL = document.createElement('TD');
    
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
    yearText = year.toString();
    lastDigit = yearText[yearText.length -1];
    
    lastDigitNumber = parseInt(lastDigit);
    
    newFormPositionLeft = formPositionLeftByYear[lastDigitNumber];
    formOverlayContainerDiv.style.left = newFormPositionLeft;
//     alert('yearFound:'+yearText+' lastDigit:'+lastDigit+' lastDigitNumber:'+lastDigitNumber+' newFormPositionLeft:'+newFormPositionLeft);
  }
  
  
  // insert js in element parentDiv
  
  headerElement = parentDiv.getElementsByTagName('header')[0];
  
  ScriptTag = document.createElement('SCRIPT');
  ScriptTag.type = "text/javascript";
  
  ScriptTagContents = document.createTextNode(scriptValue);
  ScriptTag.appendChild(ScriptTagContents); 
  
  parentDiv.insertBefore(ScriptTag, headerElement);
  
  scriptAddedDiv = document.createElement('DIV');
  scriptAddedDiv.id = scriptAddedDivId;
  
  parentDiv.insertBefore(scriptAddedDiv, headerElement);
  
  // ZooniverseRainfallRescueFormAlignDecreaseSize should be referenced only after script from scriptValue is injected in page
  minusButton.onclick = function(){ ZooniverseRainfallRescueFormAlignDecreaseSize(); };
  
  // ZooniverseRainfallRescueFormAlignIncreaseSize should be referenced only after script from scriptValue is injected in page
  plusButton.onclick = function(){ ZooniverseRainfallRescueFormAlignIncreaseSize(); };
  
  // control checksum
  
  formRow = document.createElement('TR');
  
  formTableTbody.appendChild(formRow);
  formTableTdCalculated = document.createElement('TD');
  formTableTdCalculated.title = "Total calculated";
  formRow.appendChild(formTableTdCalculated);
  formRow.className = "greasemonkey-zooniverse-rainfall-rescue-form-control_checksum";
  formTableTdCalculatedPlaceholder = document.createElement('SPAN');
  formTableTdCalculatedPlaceholder.innerHTML = '&nbsp;';
  formTableTdCalculated.appendChild(formTableTdCalculatedPlaceholder);
  
  formTableTdIsDiffer = document.createElement('TD');
  formRow.appendChild(formTableTdIsDiffer);
  formTableTdIsDiffer.title = "Difference: total calculated - total inscribed";
  
  formTableRows = formTable.getElementsByTagName('tr');
  for (i = 0; i < formTableRows.length; i++) {
    if ((' ' + formTableRows[i].className + ' ').indexOf(' greasemonkey-zooniverse-rainfall-rescue-form-form_table_row ') > -1) {
      inputTextarea = formTableRows[i].getElementsByTagName('textarea')[0];
      if (inputTextarea.addEventListener) {
        inputTextarea.addEventListener("input", ZooniverseRainfallRescueFormAlignChecksum);
      } else if (inputTextarea.attachEvent) {
        inputTextarea.attachEvent("oninput", ZooniverseRainfallRescueFormAlignChecksum);
      }
    }
  }
  
  // move buttons ("done")
  
  for (i = 0; i < taskContainerParentButtons.length; i++) {
    innerSpan = taskContainerParentButtons[i].getElementsByTagName('span')[0];
    if (innerSpan.innerHTML.trim().toLowerCase() == 'done') {
      if (taskContainerParentButtons[i].addEventListener) {
        taskContainerParentButtons[i].addEventListener("click", ZooniverseRainfallRescueFormAlignReloadFormWaiter);
      } else if (taskContainerParentButtons[i].attachEvent) {
        taskContainerParentButtons[i].attachEvent("onclick", ZooniverseRainfallRescueFormAlignReloadFormWaiter);
      }
      break;
    }
  }
  
  classifierLargeImageDivNavs = classifierLargeImageDiv.getElementsByTagName('nav');
  for (i = 0; i < classifierLargeImageDivNavs.length; i++) {
    if ((' ' + classifierLargeImageDivNavs[i].className + ' ').indexOf(' task-nav ') > -1) {
      formRow = document.createElement('TR');
      
      formTableTbody.appendChild(formRow);
      formTableTd = document.createElement('TD');
      formRow.appendChild(formTableTd);
      formTableTd.colspan = "2";
      formRow.className = "greasemonkey-zooniverse-rainfall-rescue-form-task_nav";
      
      formTableTd.appendChild(classifierLargeImageDivNavs[i]);
      break;
    }
  }
  
  
  
}, 300, setIntervalIdBox, scriptValue);

setIntervalIdBox.push(setIntervalId);

