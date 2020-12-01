$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    const nameInput = $("input#name").val();
    const emailInput = $("input#email").val();
    const bandNameInput = $("input#bandName").val();
    const budgetInput = $("input#budget").val();
    const datesInput = $("input#dates").val();
    const lookingFor = $("input:radio[name=lookingFor]:checked").val();
    
    $("#submitButton").hide();
    $("#thankyou").show();
  });
});