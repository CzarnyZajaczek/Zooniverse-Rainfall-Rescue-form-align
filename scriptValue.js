// function ZooniverseRainfallRescueFormAlign() {
//   
// }

// code of function ZooniverseRainfallRescueFormAligndragElement() copied from https://www.w3schools.com/howto/howto_js_draggable.asp and slightly adapted (function name and DOM ids)

// Make the DIV element draggable:
ZooniverseRainfallRescueFormAligndragElement(document.getElementById("greasemonkey-zooniverse-rainfall-rescue-form-aligned_verlay_form"));

function ZooniverseRainfallRescueFormAligndragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("greasemonkey-zooniverse-rainfall-rescue-form-drag_overlay_form")) {
    // if present, the header is where you move the DIV from:
    document.getElementById("greasemonkey-zooniverse-rainfall-rescue-form-drag_overlay_form").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function ZooniverseRainfallRescueFormAlignDecreaseSize() {
  var pixelsDisplay;
  var formRowHeight;
  var rawNumber;
  var formTable;
  var formTableRows;
  var i;
  
  pixelsDisplay = document.getElementById('greasemonkey-zooniverse-rainfall-rescue-form-pixels_display');
  
  formRowHeight = pixelsDisplay.innerHTML;
  rawNumber = formRowHeight.split('px')[0];
  
  if (rawNumber >1) {
    rawNumber--;
  }
  
  pixelsDisplay.innerHTML = rawNumber+'px';
  formTable = document.getElementById('greasemonkey-zooniverse-rainfall-rescue-form-form_table');
  
  formTableRows = formTable.getElementsByTagName('tr');
  
  for (i = 0; i < formTableRows.length; i++) {
    if ((' ' + formTableRows[i].className + ' ').indexOf(' greasemonkey-zooniverse-rainfall-rescue-form-form_table_row ') > -1) {
      formTableRows[i].style.height = rawNumber+'px';
    }
  }
  
}

function ZooniverseRainfallRescueFormAlignIncreaseSize() {
  var pixelsDisplay;
  var formRowHeight;
  var rawNumber;
  var formTable;
  var formTableRows;
  var i;
  
  pixelsDisplay = document.getElementById('greasemonkey-zooniverse-rainfall-rescue-form-pixels_display');
  
  formRowHeight = pixelsDisplay.innerHTML;
  
  rawNumber = formRowHeight.split('px')[0];
  
  if (rawNumber <200) {
    rawNumber++;
  }
  
  pixelsDisplay.innerHTML = rawNumber+'px';
  
  formTable = document.getElementById('greasemonkey-zooniverse-rainfall-rescue-form-form_table');
  
  formTableRows = formTable.getElementsByTagName('tr');
  
  for (i = 0; i < formTableRows.length; i++) {
    if ((' ' + formTableRows[i].className + ' ').indexOf(' greasemonkey-zooniverse-rainfall-rescue-form-form_table_row ') > -1) {
      formTableRows[i].style.height = rawNumber+'px';
    }
  }
  
}

function ZooniverseRainfallRescueFormAlignReloadFormWaiter() {
  var scriptLockDivId;
  var scriptLock;
  var scriptLockParent;
  var setIntervalIdBox;
  var setIntervalId;
  
  scriptLockDivId = 'greasemonkey-zooniverse-rainfall-rescue-form-align-reload_form_processing';
  scriptLock = document.getElementById(scriptLockDivId);
  if (scriptLock) {
    scriptLockParent = scriptLock.parentNode;
    scriptLockParent.removeChild(scriptLock);
  }
  
  
  
  setIntervalIdBox = [];

  setIntervalId = setInterval(function(){
    // check for elements loaded
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
    var formPositionTop;
    var formPositionLeft;
//   var firstYearPositionLeft;
    var formPositionLeftByYear;
    var formTable;
    var formTableRowsInputs;
    var rowsFound;
    var formTableRows;
    var formTableRowsTDs;
    var i;
    var j;
    var k;
    var childNodes;
    var tdElements;
    var formTableTdCalculated;
    var formTableTdIsDiffer;
    var yearFound;
    var year;
    var rowDivs;
    var formInput;
    var formLabel;
    var formLabelDiv;
    var workflowTaskElementDivs;
    var formLabelStrong;
    var yearNumber;
    var formTableTdI;
    var formLabelBox;
    var formTableTdL;
    var yearText;
    var lastDigit;
    var lastDigitNumber;
    var newFormPositionLeft;
    var innerSpan;
    var formOverlayContainerDiv;

    
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
    
    // lock, in case of unsynced 2 calls
    scriptLock = document.getElementById(scriptLockDivId);
    if (scriptLock) {
      return;
    }
    
    headerElement = parentDiv.getElementsByTagName('header')[0];
  
    scriptLockDiv = document.createElement('DIV');
    scriptLockDiv.id = scriptLockDivId;
    
    parentDiv.insertBefore(scriptLockDiv, headerElement);
    
    formOverlayContainerDiv = document.getElementById('greasemonkey-zooniverse-rainfall-rescue-form-aligned_verlay_form');
    
    
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
    
//     formOverlayContainerDiv.style.top = formPositionTop;
    formOverlayContainerDiv.style.left = formPositionLeft;
    
    // unload form elements
    formTable = document.getElementById('greasemonkey-zooniverse-rainfall-rescue-form-form_table');
    
    formTableRowsInputs = [];
    
    rowsFound = 0;
    formTableRows = formTable.getElementsByTagName('tr');
    for (i = 0; i < formTableRows.length; i++) {
      if ((' ' + formTableRows[i].className + ' ').indexOf(' greasemonkey-zooniverse-rainfall-rescue-form-form_table_row ') > -1) {
        formTableRowsTDs = formTableRows[i].childNodes;
        for (j = 0; j < formTableRowsTDs.length; j++) {
          childNodes = formTableRowsTDs[j].childNodes;
          for (k = 0; k < childNodes.length; k++) {
            formTableRowsTDs[j].removeChild(childNodes[k]);
          }
        }
        formTableRowsInputs.push(formTableRows[i]);
        rowsFound++;
      }
      
      if ((' ' + formTableRows[i].className + ' ').indexOf(' greasemonkey-zooniverse-rainfall-rescue-form-control_checksum ') > -1) {
        tdElements = formTableRows[i].getElementsByTagName('td');
        formTableTdCalculated = tdElements[0];
        formTableTdIsDiffer = tdElements[1];
        
        childNodes = formTableTdCalculated.childNodes;
        for (k = 0; k < childNodes.length; k++) {
          formTableTdCalculated.removeChild(childNodes[k]);
        }
        childNodes = formTableTdIsDiffer.childNodes;
        for (k = 0; k < childNodes.length; k++) {
          formTableTdIsDiffer.removeChild(childNodes[k]);
        }
      }
    }
    
    
    // load form elements again into table
    
    yearFound = false;
    year = false;
    
    for (i = 0; i < workflowTaskElements.length; i++) {
      rowDivs = formTableRowsInputs[i].getElementsByTagName('td');
      
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
          }
        }
      }
      formLabel.style.margin = "0px";
      
      formInput.getElementsByTagName('textarea')[0].style.padding = "0px";
      
      formTableTdI = rowDivs[0];
      
      formTableTdI.appendChild(formInput);
      
      formLabelBox = document.createElement('DIV');
      formLabelBox.appendChild(formLabel);
      
      formTableTdL = rowDivs[1];
      
      formTableTdL.appendChild(formLabelBox);
    }
    
    if (yearFound) {
      // take last digit from year
      yearText = year.toString();
      lastDigit = yearText[yearText.length -1];
      
      lastDigitNumber = parseInt(lastDigit);
      
      newFormPositionLeft = formPositionLeftByYear[lastDigitNumber];
      formOverlayContainerDiv.style.left = newFormPositionLeft;
    }
    
    // add event listener to button
    
    taskContainerParent = taskContainerElement.parentNode;
    
    taskContainerParentButtons = taskContainerParent.getElementsByTagName('button');
    
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
    
    // control checksum
    
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
    
    
    // turn off timer
    
    if (setIntervalIdBox.length == 1) {
      clearInterval(setIntervalIdBox[0]);
    }
  }, 300, setIntervalIdBox);

  setIntervalIdBox.push(setIntervalId);
}

function ZooniverseRainfallRescueFormAlignChecksum() {
  var formTable;
  var formTableRows;
  var sumValue;
  var difference;
  var isDiffer;
  var maxPrecision;
  var inputTextarea;
  var inputValue;
  var numberText;
  var numberParts;
  var numberPrecision;
  var tmpsumValue;
  var tmpinputValue;
  var tdElements;
  var formTableTdCalculated;
  var formTableTdIsDiffer;
  var childNodes;
  var i;
  var j;
  var k;
  var checksumSpan;
  var checksumContents;
  var summarySpan;
  var summaryContents;

  formTable = document.getElementById('greasemonkey-zooniverse-rainfall-rescue-form-form_table');
  
  
  formTableRows = formTable.getElementsByTagName('tr');
  
  sumValue = 0;
  difference = 0;
  isDiffer = false;
  maxPrecision = 0;
  
  for (i = 0; i < formTableRows.length; i++) {
    if ((' ' + formTableRows[i].className + ' ').indexOf(' greasemonkey-zooniverse-rainfall-rescue-form-form_table_row ') > -1) {
      inputTextarea = formTableRows[i].getElementsByTagName('textarea')[0];
      
      inputValue = parseFloat(inputTextarea.value);
      if (isNaN(inputValue)) {
        inputValue = 0;
      }
//       alert(1);
      numberText = inputTextarea.value.trim().replace(',', '.');
//       alert(2);
      if (numberText.indexOf('.') > -1) {
//       alert(3);
        numberParts = numberText.split('.');
//       alert(4);
        numberPrecision = numberParts[1].length;
//       alert(5);
        if (numberPrecision> maxPrecision) {
//       alert(6);
          maxPrecision = numberPrecision;
        }
      }
      if (i<13) {
        sumValue = sumValue + inputValue;
      } else {
        tmpsumValue = sumValue;
        tmpinputValue = inputValue;
        if (maxPrecision > 0) {
//       alert(7);
          for (j=0; j<maxPrecision; j++) {
//       alert(8);
            tmpsumValue = tmpsumValue * 10;
            tmpinputValue = tmpinputValue * 10;
          }
//       alert(9);
        }
        tmpsumValue = Math.round(tmpsumValue);
//       alert(10);
        tmpinputValue = Math.round(tmpinputValue);
//       alert(11);
        
        
        if (tmpsumValue == tmpinputValue) {
          isDiffer = false;
        } else {
          isDiffer = true;
          difference = inputValue - sumValue;
        }
      }
    }
    
    if ((' ' + formTableRows[i].className + ' ').indexOf(' greasemonkey-zooniverse-rainfall-rescue-form-control_checksum ') > -1) {
      tdElements = formTableRows[i].getElementsByTagName('td');
      formTableTdCalculated = tdElements[0];
      formTableTdIsDiffer = tdElements[1];
      
      childNodes = formTableTdCalculated.childNodes;
      for (k = 0; k < childNodes.length; k++) {
        formTableTdCalculated.removeChild(childNodes[k]);
      }
      childNodes = formTableTdIsDiffer.childNodes;
      for (k = 0; k < childNodes.length; k++) {
        formTableTdIsDiffer.removeChild(childNodes[k]);
      }
      
      checksumSpan = document.createElement('span');
      checksumContents = document.createTextNode(sumValue);
      checksumSpan.appendChild(checksumContents);
      formTableTdCalculated.appendChild(checksumSpan);
      
      summarySpan = document.createElement('span');
      if (!isDiffer) {
        summaryContents = document.createTextNode('equal');
        summarySpan.style.color = 'green';
        summarySpan.style.fontWeight = 'bold';
      } else {
        summarySpan.style.fontWeight = 'normal';
        summarySpan.style.color = 'red';
        if (difference > 0) {
          summaryContents = document.createTextNode('+'+difference);
//           summarySpan.style.color = 'red';
        } else {
          summaryContents = document.createTextNode(difference);
//           summarySpan.style.color = 'blue';
        }
      }
      
      summarySpan.appendChild(summaryContents);
      formTableTdIsDiffer.appendChild(summarySpan);
    }
  }
}


function ZooniverseRainfallRescueFormAlignCommaDot() {
  
}