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

const checkboxes = ["categoryCheckbox", "bodyRegionCheckbox", "treatmentTechniquesCheckbox"];
const nestedCheckboxes = ["nestedCategoryCheckbox", "nestedBodyRegionCheckbox", "nestedTreatmentTechniquesCheckbox"];
let btnGenerateTest;
window.onload = function() {
    btnGenerateTest = document.createElement("button");
    btnGenerateTest.innerHTML = "Generate Test";
    btnGenerateTest.disabled = true;
    btnGenerateTest.style.position = "fixed";
    btnGenerateTest.style.bottom = "5px";
    btnGenerateTest.style.left = "5px";
    document.body.appendChild(btnGenerateTest);
    checkboxes.forEach((id, index) => {
        const chkBox = document.getElementById(id);
        if (chkBox != null) {
            chkBox.addEventListener("change", function() {
                updateButtons(this, nestedCheckboxes[index]);
            });
        }
    });
    nestedCheckboxes.forEach((id) => {
        const nestedCheckboxes = document.getElementById(id);
        const checkboxes = nestedCheckboxes.getElementsByTagName("input");
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].addEventListener("change", function() {
                updateButtons(this, id);
            });
        }
    });
};
function updateButtons(checkbox, nestedId) {
    const nestedCheckboxes = document.getElementById(nestedId);
    const checkboxes = nestedCheckboxes.getElementsByTagName("input");
    let atLeastOneChecked = checkbox.checked;
    for (let i = 0; i < checkboxes.length && !atLeastOneChecked; i++) {
        if (checkboxes[i].checked) {
            atLeastOneChecked = true;
        }
    }
    btnGenerateTest.disabled = !atLeastOneChecked;
}
