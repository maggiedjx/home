
$(function() {
    
    $('#question1').hide();
    $('#question2').hide();
    $('#question3').hide();
    $('#question4').hide();
    $('#question5').hide();
    $('#question6').hide();
    
    $('#resultsBox').hide();
    $('#restartBtn').hide();
    
    var points = 0;
    
    $('#startBtn').click(function() {
        $('#intro').hide();
        $('#question1').show();
    });
    
    $('input:radio[name="colorRadios"]').change(function () {
        var choice = $('input:radio[name=colorRadios]:checked').val();
        
        points = points + parseInt(choice);
        
        console.log(points);
        
        $('#quest1Btn').removeAttr("disabled");
    });

    $('#quest1Btn').click(function() {
        $('#question1').hide();
        $('#question2').show();
        
        $(".progress-bar").css("background-color", "#f63a0f");
        $(".progress-bar").css("width", "5%");
    });
    
    $('input:radio[name="commentRadio"]').change(function () {
        var choice = $('input:radio[name=commentRadio]:checked').val();
        
        points = points + parseInt(choice);
        
        console.log(points);
        
        $('#quest2Btn').removeAttr("disabled");
    });

    $('#quest2Btn').click(function() {
        $('#question2').hide();
        $('#question3').show();
        
        $(".progress-bar").css("background-color", "#f27011");
        $(".progress-bar").css("width", "25%");
    });

    $('input:radio[name="attractRadio"]').change(function () {
        var choice = $('input:radio[name=attractRadio]:checked').val();
        
        points = points + parseInt(choice);
        
        console.log(points);
        
        $('#quest3Btn').removeAttr("disabled");
    });

    $('#quest3Btn').click(function() {
        $('#question3').hide();
        $('#question4').show();
        
        $(".progress-bar").css("background-color", "#f2b01e");
        $(".progress-bar").css("width", "50%");
    });
    
     $('input:radio[name="releaseRadio"]').change(function () {
        var choice = $('input:radio[name=commentRadio]:checked').val();
        
        points = points + parseInt(choice);
        
        console.log(points);
        
        $('#quest4Btn').removeAttr("disabled");
    });

    $('#quest4Btn').click(function() {
        $('#question4').hide();
        $('#question5').show();
        
        $(".progress-bar").css("background-color", "#f2d31b");
        $(".progress-bar").css("width", "75%");
    });

     $('input:radio[name="believeRadio"]').change(function () {
        var choice = $('input:radio[name=believeRadio]:checked').val();
        
        points = points + parseInt(choice);
        
        console.log(points);
        
        $('#quest5Btn').removeAttr("disabled");
    });

    $('#quest5Btn').click(function() {
        $('#question5').hide();
        $('#question6').show();
        
        $(".progress-bar").css("background-color", "#e8f00f");
        $(".progress-bar").css("width", "90%");
    });
    $('#restartBtn').click(function() {
        
        $('#resultsBox').hide();
        $('#intro').show();
        points = 0;
    });
    
     $('input:radio[name="genderRadio"]').change(function () {
        var choice = $('input:radio[name=genderRadio]:checked').val();
        
        points = points + parseInt(choice);
        
        console.log(points);
        
        $('#quest6Btn').removeAttr("disabled");
    });
    
     $('#quest6Btn').click(function() {
         
          var result; 
        if (points  < 6) {
             result = 'introverted + feelings + thinking + intuition';
        } else if (points < 10) {
           result = 'straightforward + honest + pragmatic';
        } else {
            result = 'enthusiasm + lively + brave';
        }
        $('#results').html(result);
        $('#question6').hide();
        $('#resultsBox').show();
        
        $(".progress-bar").css("background-color", "#86e01e");
        $(".progress-bar").css("width", "100%");
    });

});




