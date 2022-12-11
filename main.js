
$(document).ready(function(){
  var video = document.getElementById('vid');
  var option1 = $("#option1");
  var option2 = $("#option2");
  var option3 = $("#option3");
  option1.hide();
  option2.hide();
  option3.hide();

  option1.click(function(){
    sceneIndex = scene[sceneIndex].option1result;
    loadscene();
  });

  option2.click(function(){
    sceneIndex = scene[sceneIndex].option2result;
    loadscene();
  });

  option3.click(function(){
    sceneIndex = scene[sceneIndex].option3result;
    loadscene();
  });

  loadscene();

  function loadscene () {
    video.src = scene[sceneIndex].vid;
    video.play();

    option1.hide();
    option2.hide();
    option3.hide();

    setTimeout(function () {
      if(scene[sceneIndex].option1){
        option1.show();
        option1.html("<h1>"+scene[sceneIndex].option1+"</h1");
      }
      if(scene[sceneIndex].option2){
        option2.show();
        option2.html("<h1>"+scene[sceneIndex].option2+"</h1");
      }
      if(scene[sceneIndex].option3){
        option3.show();
        option3.html("<h1>"+scene[sceneIndex].option3+"</h1");
      }
    }, scene[sceneIndex].videoTime*1000);

  }

});

var sceneIndex = 1;

var scene = [];

scene[0] ={
}

scene[1] = {
  vid : "Scene 1.mp4",
  option1 : "Continue story",
  option1result: 2,
  videoTime : 4
}

scene[2] = {
  vid : "Scene 2.mp4",
  option1 : "News",
  option2 : "Politics",
  option1result: 3,
  option2result: 3,
  videoTime : 10
}

scene[3] = {
  vid : "Scene 3.mp4",
  option1 : "Lease Option 1",
  option2 : "Lease Option 2",
  option1result: 4,
  option2result: 4,
  videoTime : 10
}

scene[4] = {
  vid : "Scene 4.mp4",
  option1 : "Go into his room and talk to him",
  option2 : "Go into your own room to work",
  option1result: 5,
  option2result: 5,
  videoTime : 10
}

scene[5] = {
  vid : "Scene 5.mp4",
  option1 : "Let him in",
  option2 : "Tell him to leave",
  option1result: 6.1,
  option2result: 6.2,
  videoTime : 7
}

scene[6.1] = {
  vid : "Scene 6.1.mp4",
  option1 : "Continue story",
  option1result: 7,
  videoTime : 5
}

scene[6.2] = {
  vid : "Scene 6.2.mp4",
  option1 : "Continue story",
  option1result: 7,
  videoTime : 5
}

scene[7] = {
  vid : "Scene 7.mp4",
  option1 : "Continue story",
  option1result: 8,
  videoTime : 5
}

scene[8] = {
  vid : "Scene 8.mp4",
  option1 : "Continue story",
  option1result: 9,
  videoTime : 5
}

scene[9] = {
  vid : "Scene 9.mp4",
  option1 : "Ignore",
  option2 : "Find out what’s going on",
  option1result: 10.1,
  option2result: 10.2,
  videoTime : 7
}

scene[10.1] = {
  vid : "Scene 10.1.mp4",
  option1 : "Keep ignoring",
  option2 : "Find another place to live",
  option1result: 11.1,
  option2result: 11.1,
  videoTime : 7
}

scene[11.1] = {
  vid : "Scene 11.1.mp4",
  option1 : "Ignore and go on with your life",
  option2 : "Attend the funeral",
  option1result: 12.1,
  option2result: 12.1,
  videoTime : 7
}

scene[12.1] = {
  vid : "Scene 12.1.mp4",
  videoTime : 5
}

scene[10.2] = {
  vid : "Scene 10.2.mp4",
  option1 : "Suggest going to the hospital",
  option2 : "Do nothing",
  option1result: 11.2,
  option2result: 11.1,
  videoTime : 7
}

scene[11.2] = {
  vid : "Scene 11.2.mp4",
  option1 : "Take time out to help them",
  option2 : "Mind your own business",
  option1result: 12.2,
  option2result: 11.1,
  videoTime : 7
}

scene[12.2] = {
  vid : "Scene 12.2.mp4",
  option1 : "Kindly refuse",
  option2 : "Speak at the funeral",
  option1result: 12.1,
  option2result: 13.2,
  videoTime : 7
}

scene[13.2] = {
  vid : "Scene 13.2.mp4",
  option1 : "Find another place to live",
  option2 : "Give Grandpa a part of it",
  option1result: 14.2,
  option2result: 14.2,
  videoTime : 7
}

scene[14.2] = {
  vid : "Scene 14.2.mp4",
  option1 : "Continue story",
  option1result: 15.2,
  videoTime : 5
}

scene[15.2] = {
  vid : "Scene 15.2.mp4",
  videoTime : 5
}
