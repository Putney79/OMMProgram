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

var categoryCheckbox = document.querySelector('#categoryCheckbox');
var bodyRegionCheckbox = document.querySelector('#bodyRegionCheckbox');
var treatmentTechniquesCheckbox = document.querySelector('#treatmentTechniquesCheckbox');
var categoryNestedCheckbox = document.querySelector('#nestedCategoryCheckbox');
var bodyRegionNestedCheckbox = document.querySelector('#nestedBodyRegionCheckbox');
var treatmentTechniquesNestedCheckbox = document.querySelector('#nestedTreatmentTechniquesCheckbox');
// Enable the Generate Test button if the appropriate conditions are met
function enableGenerateTestButton() {
  if (
    (categoryCheckbox.checked || Array.from(categoryNestedCheckbox.querySelectorAll('input[type="checkbox"]')).some(cb => cb.checked)) ||
    (bodyRegionCheckbox.checked || Array.from(bodyRegionNestedCheckbox.querySelectorAll('input[type="checkbox"]')).some(cb => cb.checked)) ||
    (treatmentTechniquesCheckbox.checked || Array.from(treatmentTechniquesNestedCheckbox.querySelectorAll('input[type="checkbox"]')).some(cb => cb.checked))
  ) {
    generateTestBtn.disabled = false;
  } else
    generateTestBtn.disabled = true;
}
// Check if generateTestBtn should be enabled whenever a checkbox is clicked
categoryCheckbox.addEventListener('change', enableGenerateTestButton);
categoryNestedCheckbox.addEventListener('change', enableGenerateTestButton);
bodyRegionCheckbox.addEventListener('change', enableGenerateTestButton);
bodyRegionNestedCheckbox.addEventListener('change', enableGenerateTestButton);
treatmentTechniquesCheckbox.addEventListener('change', enableGenerateTestButton);
treatmentTechniquesNestedCheckbox.addEventListener('change', enableGenerateTestButton);
