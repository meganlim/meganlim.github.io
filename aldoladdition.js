var visualize = document.getElementById('visualize');
var vis = document.getElementById("vis");

visualize.addEventListener('click', function(e) {
      vis.innerHTML = '<div class="first"> <img src = "https://i.imgur.com/sqZlQz6.png" style="width:50%"> </div>';
});





var currStep = 0;
var stepsOfReaction = ['<img src = "https://i.imgur.com/6PtSijm.png" style="width:20%; padding-right:30px">',
'<img src = "https://i.imgur.com/vJqrsMs.png" style="width:22%; padding-right:30px">',
'<img src="https://i.imgur.com/ZZnBBzd.png" style="width:22%">',
'<img src="https://i.imgur.com/qS94jbR.png" style="width:20%">',
'<img src="https://i.imgur.com/F4MrmW6.png" style="width:20%">'];
var aldolButton = document.getElementById('aldolButton');
var aldol = document.getElementById("aldol");

aldolButton.addEventListener('click', function(e) {
  if (currStep < stepsOfReaction.length) {
      aldol.innerHTML += '<div class="appear">' + stepsOfReaction[currStep] + '</div>';
      currStep++;
      document.getElementById('curr').textContent = currStep;
    }
});
