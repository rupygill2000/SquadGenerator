

                    var playeraverage;
                    var Tot_Player = {};
                    //Getting Players Data from Json File
                    $(document).ready(function () {
                    //To get data from Web Api
                    /* loadJSON("Url for the web API to load players.json", gotData,'jsonp');
                     function gotData(playersData) {

                             }*/
                      $.getJSON('../JsonData/players.json', function (playersData) {
                     var playersD = '';
                    //Count total number of players in Json file
                      parseInt(Tot_Player = Object.keys(playersData.players).length);
                    //$.each(playersData.players, function () {
                     $.each(playersData, function(key, value) {
                     $.each(value, function(key, players) {
                     playersD += '<tr>';
                     playersD += '<td>' + players.firstName + ' ' + players.lastName + '</td>';
                     var sum = 0;
                     for (var i = 0; i < players.skills.length; i++) {
                     playersD += '<td>' + parseFloat(players.skills[i].rating) + '</td>';
                     sum = sum + parseFloat(players.skills[i].rating);
                  
                     }
                     playeraverage = sum / 3;
              
                    playersD += '<td>' + parseInt(playeraverage) + '</td>';
                    playersD += '</tr>';
                
                     }
                     )
                 });
      
                         //alert(playersD);
                    var HTMLTable = $('#playerstable').append(playersD);
          
                    //var HTMLTable = $('#playerstable')
                    HTMLTable.DataTable({
           
                         "columns": [
                         { "data": "Player" },
                         { "data": "Shooting" },
                         { "data": "Skating" },
                         { "data": "Checking" },
                         { "data": "Average" }

                         ],

                         "order": [[4, "desc"]],
                         'iDisplayLength': 100
                        });
            
        
                 //console.log(Tot_Player);
                 //console.log(playeraverage);
       

                });
                //Always hide the waiting table on load
                $("#RemainingGroup").hide();
   
        });


        function SquadGenerator() {
  
  
            var Tot_Squads = parseInt(document.getElementById("Squads_Counter").value);
            var PlayersInSquad = Math.floor(Tot_Player / Tot_Squads);
            //  alert(PlayersInSquad);
            var NoTeamCount = parseInt(Tot_Player % Tot_Squads);
            // Groups are only possible if divsion of Tot_Player/Tot_Squads results zero modulus, greater than 1, less than Tot_Players
            var poss = Tot_Player / Tot_Squads;
             //  alert('#playerstable'.rows.length);
             wtList = Tot_Player - NoTeamCount;

            //If Input Value is greater than the no of players than emit the user message and refresh the page.
                if (Tot_Squads > Tot_Player) {
                     function displayMess() {
                     var Mess = ("Total Number of Squads should be less than the total number of players");
                     return Mess;


                        }
                     window.location.reload();
                             }
        //Looping through the players table

          $(document).ready(function () {
        //Here put the unassigned players to the waiting list table
        if (parseInt(NoTeamCount) != 0) {
            var waitD = '';
            $("#RemainingGroup").show();
            for (var i = Tot_Player ; i > wtList ; i--) {
                
                $cells = $('#playerstable tbody tr:eq(' + i + ')').children();
                waitD += '<tr id="WaitTr">';
                    $cells.each(function (index, cell) {


                        waitD += '<td>' + cell.textContent + '</td>';

                    });
                    waitD += '</tr>';
               
            }
        $('#WaitingTable').append(waitD);
    }
        
        //Hiding the initial players table
        $("#createWaitList").hide();

        $("#Squad_Gen").hide();

        //Get half of the waiting list
        var hlf = parseInt(wtList/2);

      
        //Dynamically creating the tables based on required squads

        //varibale to be used in reverse loop
        var revLo = wtList;
        var ranArray = new Array();
        for (var ran = 1; ran <= parseInt(Tot_Squads); ran++) {
            ranArray.push(ran);
        }
        
       // alert(ranArray);
        //For Loop for number of squad tables
              // for (var j = 1; j <= Tot_Squads; j++) {
        var CountS = 1;
        for (var m = ranArray, f = ranArray.length; f--;) {
            var j = m.splice(Math.floor(Math.random() * (f + 1)), 1)[0];
            // alert(j);
            
            var tables = ['Player', 'Shooting', 'Skating', 'Checking', 'Average'];
            //Assing a dynamic id to the dynamic tables
            var content = "<table id=squad"+j+"><thead>";
            var tblCount = 0;
            //Loop to put each header for the table
            content += '<tr>';
            content += '<td style="border:0px;font-weight: bold;color:rgb(0, 140, 255);font-size: 16px;">' + 'Squad ' + CountS + '</td>';
            content += '</tr>';
            content += '<tr>';
            content += '';
            CountS += 1;
            for (var k = 0; k < 5; k++) {
                content += '<th id="tbHeader">' + tables[k] + ' </th>';

            }

            content += "</tr>";
            //Elements in each table
            
             var elemTables = parseInt(wtList / Tot_Squads);
            
            var grt = 1;
            var lwt = wtList;
         
            //If condition to see if Tot_Squads is even or not
            if (elemTables % 2 == 0) {
                var a = j;
               // for (var a = j; a <= (Math.floor((wtList / 2))) ; a += Tot_Squads) {
                for (var Counter = 1; Counter <= (elemTables/2) ; Counter++) {
                    $cells = $('#playerstable tbody tr:eq(' + a + ')').children();
                    content += '<tr id="tbRow" style="color:black; font-size: 12px; border:1px solid black; text-align:center;border-color: rgb(166, 166, 166);">';
                    $cells.each(function (index, cell) {
                    content += '<td>' + cell.textContent + '</td>';
                                });
                    a += Tot_Squads;
                    

                    }
                //Loop to put lowest numbers into the table
                var b = revLo;
                for (var Counter = 1; Counter <= (elemTables / 2) ; Counter++ ) {


                    $cells = $('#playerstable tbody tr:eq(' + b + ')').children();
                    content += '<tr id="tbRow" style="color:black; font-size: 12px; border:1px solid black; text-align:center;border-color: rgb(166, 166, 166);">';
                    $cells.each(function (index, cell) {


                        content += '<td>' + cell.textContent + '</td>';


                    });

                    b -= Tot_Squads

                }
            }
            else {
                var a = j;
                for (var Counter = 1; Counter <= Math.floor(elemTables/2); Counter++) {

                    // alert(Math.round(wtList / 2));
                    $cells = $('#playerstable tbody tr:eq(' + a + ')').children();
                    content += '<tr id="tbRow" style="color:black; font-size: 12px; border:1px solid black; text-align:center;border-color: rgb(166, 166, 166);">';
                    $cells.each(function (index, cell) {


                        content += '<td>' + cell.textContent + '</td>';


                    });

                    a += Tot_Squads

                }
                //Loop to put lowest numbers into the table
                var b = (revLo)
                for (var Counter = 1; Counter <= Math.round(elemTables/2);Counter++ ) {


                    $cells = $('#playerstable tbody tr:eq(' + b + ')').children();
                    content += '<tr id="tbRow" style="color:black; font-size: 12px; border:1px solid black; text-align:center;border-color: rgb(166, 166, 166);">';
                    $cells.each(function (index, cell) {


                        content += '<td>' + cell.textContent + '</td>';


                    });


                    b -= Tot_Squads
                   // alert(oCounter);
                }
            }
               // alert(revLo);
                revLo -= 1;

                content += '</tr>';
                content += '</thead></table>';

                //alert(content);
            
               
         $('#squadDiv').append(content);
          
         
            
            //There are three columns in each table for which we need to calculate the average
            
      }
       
        
       

      

      

        
    }

  


    )
   
};
