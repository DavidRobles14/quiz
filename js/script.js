/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var percentage = "";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val().toLowerCase();
        var q2Result = $("#question2").val().toLowerCase();
        var q3Result = $("#question3").val().toLowerCase();
        var q4Result = $("#question4").val().toLowerCase();
        var totalScore = 0;
        var error = 0;
        
        q1(q1Result);
        q2(q2Result);
        q3(q3Result);
        q4(q4Result);
        per(totalScore, name);
        
        $("button").click(function()
        {
            $("#result").html(percentage);
            $("#result").addClass("bounce");
            $(".result").append('<img width = "200px" src = "https://pm1.narvii.com/7000/ac6fe312cb3823168f5925994914e61b74b37e0er1-1016-1102v2_hq.jpg" />');
        });
        
        
        
        function q1(answer)
        {
            if(answer == "cat")
            {
                totalScore += 25;
            }
            else if(answer == "dog")
            {
                totalScore += 10;
            }
            else
            {
                error += 1;
            }
        }
        
        function q2(answer)
        {
            if(answer == "sports")
            {
                totalScore += 25;
            }
            else if(answer == "inside")
            {
                totalScore += 10;
            }
            else
            {
                error += 1;
            }
        }
        
        function q3(answer)
        {
            if(answer == "winter")
            {
                totalScore += 25;
            }
            else if(answer == "fall")
            {
                totalScore += 15;
            }
            else if(answer == "spring")
            {
                totalScore += 10;
            }
            else if(answer == "summer")
            {
                totalScore += 5;
            }
            else
            {
                error += 1;
            }
        }
        
        function q4(answer)
        {
            if(answer == "yes")
            {
                totalScore += 25;
            }
            else if(answer == "no")
            {
                totalScore += 10;
            }
            else
            {
                error += 1;
            }
        }
        
        
        function per(total, name)
        {
            if(total == 100)
            {
                percentage += "Congrants " + name + " You are " + total + "% like me";
            }
            else if(total >= 75)
            {
                percentage += "Congrants " + name + " You are " + total + "% like me";
            }
            else if(total >= 50)
            {
                percentage += "Congrants " + name + " You are " + total + "% like me";
            }
            else if(total >= 25)
            {
                percentage += "Congrants " + name + " You are " + total + "% like me";
            }
        }
    });

});
