// function ZooniverseRainfallRescueFormAlign() {
//   
// }

// code copied from https://www.w3schools.com/howto/howto_js_draggable.asp

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
  
  var pixelsDisplay = document.getElementById('greasemonkey-zooniverse-rainfall-rescue-form-pixels_display');
  
  var formRowHeight = pixelsDisplay.innerHTML;
  var rawNumber = formRowHeight.split('px')[0];
  
  if (rawNumber >1) {
    rawNumber--;
  }
  
  pixelsDisplay.innerHTML = rawNumber+'px';
  var formTable = document.getElementById('greasemonkey-zooniverse-rainfall-rescue-form-form_table');
  
  var formTableRows = formTable.getElementsByTagName('tr');
  
  for (i = 0; i < formTableRows.length; i++) {
    if ((' ' + formTableRows[i].className + ' ').indexOf(' ' + 'greasemonkey-zooniverse-rainfall-rescue-form-form_table_row' + ' ') > -1) {
      formTableRows[i].style.height = rawNumber+'px';
    }
  }
  
}

function ZooniverseRainfallRescueFormAlignIncreaseSize() {
  
  var pixelsDisplay = document.getElementById('greasemonkey-zooniverse-rainfall-rescue-form-pixels_display');
  
  var formRowHeight = pixelsDisplay.innerHTML;
  
  var rawNumber = formRowHeight.split('px')[0];
  
  if (rawNumber <200) {
    rawNumber++;
  }
  
  pixelsDisplay.innerHTML = rawNumber+'px';
  
  var formTable = document.getElementById('greasemonkey-zooniverse-rainfall-rescue-form-form_table');
  
  var formTableRows = formTable.getElementsByTagName('tr');
  
  for (i = 0; i < formTableRows.length; i++) {
    if ((' ' + formTableRows[i].className + ' ').indexOf(' ' + 'greasemonkey-zooniverse-rainfall-rescue-form-form_table_row' + ' ') > -1) {
      formTableRows[i].style.height = rawNumber+'px';
    }
  }
  
}

function ZooniverseRainfallRescueFormAlignReloadFormWaiter() {
  var scriptLockDivId = 'greasemonkey-zooniverse-rainfall-rescue-form-align-reload_form_processing';
  var scriptLock = document.getElementById(scriptLockDivId);
  if (scriptLock) {
    var scriptLockParent = scriptLock.parentNode;
    scriptLockParent.removeChild(scriptLock);
  }
  
  
  
  var setIntervalIdBox = [];

  var setIntervalId = setInterval(function(){
    // check for elements loaded
    
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
    
    // lock, in case of unsynced 2 calls
    var scriptLock = document.getElementById(scriptLockDivId);
    if (scriptLock) {
      return;
    }
    
    var headerElement = parentDiv.getElementsByTagName('header')[0];
  
    var scriptLockDiv = document.createElement('DIV');
    scriptLockDiv.id = scriptLockDivId;
    
    parentDiv.insertBefore(scriptLockDiv, headerElement);
    
    formOverlayContainerDiv = document.getElementById('greasemonkey-zooniverse-rainfall-rescue-form-aligned_verlay_form');
    
    
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
    
//     formOverlayContainerDiv.style.top = formPositionTop;
    formOverlayContainerDiv.style.left = formPositionLeft;
    
    // unload form elements
    var formTable = document.getElementById('greasemonkey-zooniverse-rainfall-rescue-form-form_table');
    
    var formTableRowsInputs = [];
    
    var rowsFound = 0;
    var formTableRows = formTable.getElementsByTagName('tr');
    for (i = 0; i < formTableRows.length; i++) {
      if ((' ' + formTableRows[i].className + ' ').indexOf(' ' + 'greasemonkey-zooniverse-rainfall-rescue-form-form_table_row' + ' ') > -1) {
        var formTableRowsTDs = formTableRows[i].childNodes;
        for (j = 0; j < formTableRowsTDs.length; j++) {
          var childNodes = formTableRowsTDs[j].childNodes;
          for (k = 0; k < childNodes.length; k++) {
            formTableRowsTDs[j].removeChild(childNodes[k]);
          }
        }
        formTableRowsInputs.push(formTableRows[i]);
        rowsFound++;
      }
    }
    
    
    // load form elements again into table
    
    var yearFound = false;
    var year = false;
    
    for (i = 0; i < workflowTaskElements.length; i++) {
      var rowDivs = formTableRowsInputs[i].getElementsByTagName('td');
      
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
        var year = formLabelStrong.innerHTML.split(' ');
        for (j = 0; j < year.length; j++) {
          var yearNumber = parseInt(year[j]);
          if (yearNumber>1000 && yearNumber<2021) {
            yearFound = true;
          }
        }
      }
      formLabel.style.margin = "0px";
      
      formInput.getElementsByTagName('textarea')[0].style.padding = "0px";
      
      var formTableTdI = rowDivs[0];
      
      formTableTdI.appendChild(formInput);
      
      var formLabelBox = document.createElement('DIV');
      formLabelBox.appendChild(formLabel);
      
      var formTableTdL  = rowDivs[1];
      
      formTableTdL.appendChild(formLabelBox);
    }
    
    if (yearFound) {
      // take last digit from year
      var yearText = year.toString();
      var lastDigit = yearText[yearText.length -1];
      
      var lastDigitNumber = parseInt(lastDigit);
      
      var newFormPositionLeft = formPositionLeftByYear[lastDigitNumber];
      formOverlayContainerDiv.style.left = newFormPositionLeft;
    }
    
    // add event listener to button
    
    var taskContainerParent = taskContainerElement.parentNode;
    
    var taskContainerParentButtons = taskContainerParent.getElementsByTagName('button');
    
    for (i = 0; i < taskContainerParentButtons.length; i++) {
      var innerSpan = taskContainerParentButtons[i].getElementsByTagName('span')[0];
      if (innerSpan.innerHTML.trim().toLowerCase() == 'done') {
        taskContainerParentButtons[i].addEventListener("click", ZooniverseRainfallRescueFormAlignReloadFormWaiter);
        break;
      }
    }
    
    
    // turn off timer
    
    if (setIntervalIdBox.length == 1) {
      clearInterval(setIntervalIdBox[0]);
    }
  }, 300, setIntervalIdBox);

  setIntervalIdBox.push(setIntervalId);
}

function ZooniverseRainfallRescueFormAlignReloadForm() {
  
}