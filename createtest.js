window.onload = function(){
  
  let dropdownCheckboxes = document.getElementsByClassName('dropdownCheckbox');
  
  [].forEach.call(dropdownCheckboxes, function(checkbox) {
    checkbox.addEventListener('change', function() {
      let targetId = this.id + "List";
      let targetDiv = document.getElementById(targetId);
  
      if(this.checked) {
        targetDiv.style.display = "block";
      } else {
        targetDiv.style.display = "none";
      }
    });
  });
}

var categoryCheckbox = document.getElementById('categoryCheckboxId');
var bodyRegionCheckbox = document.getElementById('bodyRegionCheckboxId');
var treatmentTechniqueCheckbox = document.getElementById('treatmentTechniqueCheckboxId');
var generateTestBtn = document.getElementById('generateTestBtn');
var checkboxes = [categoryCheckbox, bodyRegionCheckbox, treatmentTechniqueCheckbox];
checkboxes.forEach(function(checkbox){
  checkbox.addEventListener('change', function(){
    if(categoryCheckbox.checked || bodyRegionCheckbox.checked || treatmentTechniqueCheckbox.checked){
      generateTestBtn.disabled = false;
    }
    else{
      generateTestBtn.disabled = true;
    }
  });
});
