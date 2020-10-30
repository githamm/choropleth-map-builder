    function map1() {
        var data = [
            ["CA", "California", "87"],
            ["CO", "Colorado", "35"],
            ["TX", "Texas", "32"],
            ["AZ", "Arizona", "10"],
            ["HI", "Hawaii", "6"],
            ["KS", "Kansas", "6"],
            ["LA", "Louisiana", "3"],
            ["FL", "Florida", "4"],
            ["MI", "Michigan", "2"],
            ["MO", "Missouri", "1"],
            ["OK", "Oklahoma", "1"],
            ["WA", "Washington", "4"],
            ["GA", "Georgia", "7"],
            ["OH", "Ohio", "1"],
            ["IL", "Illinois", "0"],
            ["MS", "Mississippi", "7"],
            ["NV", "Nevada", "0"],
            ["TN", "Tennessee", "0"],
            ["ID", "Idaho", "0"],
            ["UT", "Utah", "3"],
            ["DC", "District of Columbia", "4"],
            ["NJ", "New Jersey", "0"],
            ["NC", "North Carolina", "2"],
            ["AL", "Alabama", "0"],
            ["IA", "Iowa", "0"],
            ["PA", "Pennsylvania", "0"],
            ["KY", "Kentucky", "0"],
            ["NE", "Nebraska", "0"],
            ["MD", "Maryland", "0"],
            ["MA", "Massachusetts", "1"],
            ["MN", "Minnesota", "0"],
            ["NM", "New Mexico", "1"],
            ["NY", "New York", "2"],
            ["OR", "Oregon", "1"],
            ["WI", "Wisconsin", "0"],
            ["AR", "Arkansas", "0"],
            ["CT", "Connecticut", "0"],
            ["MT", "Montana", "0"],
            ["SC", "South Carolina", "0"],
            ["SD", "South Dakota", "0"],
            ["WY", "Wyoming", "0"],
            ["AK", "Alaska", "0"],
            ["DE", "Delaware", "0"],
            ["IN", "Indiana", "0"],
            ["ME", "Maine", "0"],
            ["NH", "New Hampshire", "0"],
            ["ND", "North Dakota", "0"],
            ["RI", "Rhode Island", "0"],
            ["VT", "Vermont", "0"],
            ["VA", "Virginia", "0"],
            ["WV", "West Virginia", "0"]
        ]
        for (var i in data) {
            // $("#" + data[i][0]).css("fill", "#8f6db0");
            if (data[i][2] == 0) {
                $("#map1 > #" + data[i][0]).css("fill", "#fff");
            }
            if (data[i][2] > 0 && 5 >= data[i][2]) {
                // $("#" + data[i][0]).css("opacity", 0.25);
                $("#map1 > #" + data[i][0]).css("fill", "#cbc9e2");
            }
            if (data[i][2] >= 6 && 25 >= data[i][2]) {
                // $("#" + data[i][0]).css("opacity", 0.5);
                $("#map1 > #" + data[i][0]).css("fill", "#9e9ac8");
            }
            if (data[i][2] >= 26 && 50 >= data[i][2]) {
                // $("#" + data[i][0]).css("opacity", 0.75);
                $("#map1 > #" + data[i][0]).css("fill", "#756bb1");
            }
            if (data[i][2] >= 51) {
                // $("#" + data[i][0]).css("opacity", 1);
                $("#map1 > #" + data[i][0]).css("fill", "#54278f");
            }
        }
        $(".state").mouseover(function(e) {
            if (navigator.userAgent.indexOf("Firefox") != -1) {

                pos = $("#timeline1").offset()
                thex = e.pageX - pos.left + 10;
                they = e.pageY - pos.top + 10;
                if (thex > $("#timeline1").width() - 200) { thex = $("#timeline1").width() - 200 };
                if (they > $("#timeline1").height() - 200) { they = $("#timeline1").height() - 100 };
            } else {

                pos = $("#timeline1").offset()
                thex = event.pageX - pos.left + 10;
                they = event.pageY - pos.top + 10;
                if (thex > $("#timeline1").width() - 200) { thex = $("#timeline1").width() - 200 };
                if (they > $("#timeline1").height() - 200) { they = $("#timeline1").height() - 100 };
            }


            for (var i = 0; i < data.length; i++) {
                if (this.id == data[i][0]) {
                    if (data[i][2] == 1) {
                        $("#timeline1").append('<div class="hoverbox" style="top:' + they + 'px; left:' + thex + 'px;"><div class="statename">' + data[i][1] + '</div><div class="statepct">' + data[i][2] + ' recruit</div></div>');
                    } else {
                        $("#timeline1").append('<div class="hoverbox" style="top:' + they + 'px; left:' + thex + 'px;"><div class="statename">' + data[i][1] + '</div><div class="statepct">' + data[i][2] + ' recruits</div></div>');
                    }
                }
            }
        });

        $(".state").mouseleave(function() {
            $(".hoverbox").remove();
        });
    };

    function map2() {
        var data = [
            ["CA", "California", "66"],
            ["CO", "Colorado", "50"],
            ["TX", "Texas", "33"],
            ["AZ", "Arizona", "3"],
            ["HI", "Hawaii", "8"],
            ["KS", "Kansas", "7"],
            ["LA", "Louisiana", "7"],
            ["FL", "Florida", "6"],
            ["MI", "Michigan", "3"],
            ["MO", "Missouri", "1"],
            ["OK", "Oklahoma", "8"],
            ["WA", "Washington", "1"],
            ["GA", "Georgia", "1"],
            ["OH", "Ohio", "4"],
            ["IL", "Illinois", "2"],
            ["MS", "Mississippi", "0"],
            ["NV", "Nevada", "1"],
            ["TN", "Tennessee", "5"],
            ["ID", "Idaho", "3"],
            ["UT", "Utah", "1"],
            ["DC", "District of Columbia", "0"],
            ["NJ", "New Jersey", "4"],
            ["NC", "North Carolina", "1"],
            ["AL", "Alabama", "3"],
            ["IA", "Iowa", "1"],
            ["PA", "Pennsylvania", "2"],
            ["KY", "Kentucky", "2"],
            ["NE", "Nebraska", "1"],
            ["MD", "Maryland", "0"],
            ["MA", "Massachusetts", "0"],
            ["MN", "Minnesota", "1"],
            ["NM", "New Mexico", "0"],
            ["NY", "New York", "0"],
            ["OR", "Oregon", "0"],
            ["WI", "Wisconsin", "1"],
            ["AR", "Arkansas", "0"],
            ["CT", "Connecticut", "1"],
            ["MT", "Montana", "0"],
            ["SC", "South Carolina", "1"],
            ["SD", "South Dakota", "0"],
            ["WY", "Wyoming", "0"],
            ["AK", "Alaska", "0"],
            ["DE", "Delaware", "0"],
            ["IN", "Indiana", "0"],
            ["ME", "Maine", "0"],
            ["NH", "New Hampshire", "0"],
            ["ND", "North Dakota", "0"],
            ["RI", "Rhode Island", "0"],
            ["VT", "Vermont", "0"],
            ["VA", "Virginia", "0"],
            ["WV", "West Virginia", "0"]
        ];
        for (var i in data) {
            // $("#" + data[i][0]).css("fill", "#8f6db0");
            if (data[i][2] == 0) {
                $("#map2 > #" + data[i][0]).css("fill", "#fff");
            }
            if (data[i][2] > 0 && 5 >= data[i][2]) {
                // $("#" + data[i][0]).css("opacity", 0.25);
                $("#map2 > #" + data[i][0]).css("fill", "#cbc9e2");
            }
            if (data[i][2] >= 6 && 25 >= data[i][2]) {
                // $("#" + data[i][0]).css("opacity", 0.5);
                $("#map2 > #" + data[i][0]).css("fill", "#9e9ac8");
            }
            if (data[i][2] >= 26 && 50 >= data[i][2]) {
                // $("#" + data[i][0]).css("opacity", 0.75);
                $("#map2 > #" + data[i][0]).css("fill", "#756bb1");
            }
            if (data[i][2] >= 51) {
                // $("#" + data[i][0]).css("opacity", 1);
                $("#map2 > #" + data[i][0]).css("fill", "#54278f");
            }
        }
        $(".state").mouseover(function(e) {
            if (navigator.userAgent.indexOf("Firefox") != -1) {

                pos = $("#timeline2").offset()
                thex = e.pageX - pos.left + 10;
                they = e.pageY - pos.top + 10;
                if (thex > $("#timeline2").width() - 200) { thex = $("#timeline2").width() - 200 };
                if (they > $("#timeline2").height() - 200) { they = $("#timeline2").height() - 100 };
            } else {

                pos = $("#timeline2").offset()
                thex = event.pageX - pos.left + 10;
                they = event.pageY - pos.top + 10;
                if (thex > $("#timeline2").width() - 200) { thex = $("#timeline2").width() - 200 };
                if (they > $("#timeline2").height() - 200) { they = $("#timeline2").height() - 100 };
            }


            for (var i = 0; i < data.length; i++) {
                if (this.id == data[i][0]) {
                    if (data[i][2] == 1) {
                        $("#timeline2").append('<div class="hoverbox" style="top:' + they + 'px; left:' + thex + 'px;"><div class="statename">' + data[i][1] + '</div><div class="statepct">' + data[i][2] + ' recruit</div></div>');
                    } else {
                        $("#timeline2").append('<div class="hoverbox" style="top:' + they + 'px; left:' + thex + 'px;"><div class="statename">' + data[i][1] + '</div><div class="statepct">' + data[i][2] + ' recruits</div></div>');
                    }
                }
            }
        });

        $(".state").mouseleave(function() {
            $(".hoverbox").remove();
        });
    };

    function map3() {
        var data = [
            ["CA", "California", "64"],
            ["CO", "Colorado", "48"],
            ["TX", "Texas", "32"],
            ["AZ", "Arizona", "8"],
            ["HI", "Hawaii", "5"],
            ["KS", "Kansas", "2"],
            ["LA", "Louisiana", "6"],
            ["FL", "Florida", "3"],
            ["MI", "Michigan", "4"],
            ["MO", "Missouri", "4"],
            ["OK", "Oklahoma", "1"],
            ["WA", "Washington", "4"],
            ["GA", "Georgia", "1"],
            ["OH", "Ohio", "2"],
            ["IL", "Illinois", "2"],
            ["MS", "Mississippi", "0"],
            ["NV", "Nevada", "2"],
            ["TN", "Tennessee", "2"],
            ["ID", "Idaho", "1"],
            ["UT", "Utah", "1"],
            ["DC", "District of Columbia", "1"],
            ["NJ", "New Jersey", "0"],
            ["NC", "North Carolina", "0"],
            ["AL", "Alabama", "1"],
            ["IA", "Iowa", "1"],
            ["PA", "Pennsylvania", "0"],
            ["KY", "Kentucky", "0"],
            ["NE", "Nebraska", "0"],
            ["MD", "Maryland", "2"],
            ["MA", "Massachusetts", "0"],
            ["MN", "Minnesota", "1"],
            ["NM", "New Mexico", "1"],
            ["NY", "New York", "0"],
            ["OR", "Oregon", "1"],
            ["WI", "Wisconsin", "1"],
            ["AR", "Arkansas", "1"],
            ["CT", "Connecticut", "0"],
            ["MT", "Montana", "1"],
            ["SC", "South Carolina", "0"],
            ["SD", "South Dakota", "1"],
            ["WY", "Wyoming", "1"],
            ["AK", "Alaska", "0"],
            ["DE", "Delaware", "0"],
            ["IN", "Indiana", "0"],
            ["ME", "Maine", "0"],
            ["NH", "New Hampshire", "0"],
            ["ND", "North Dakota", "0"],
            ["RI", "Rhode Island", "0"],
            ["VT", "Vermont", "0"],
            ["VA", "Virginia", "0"],
            ["WV", "West Virginia", "0"],
        ];
        for (var i in data) {
            // $("#" + data[i][0]).css("fill", "#8f6db0");
            if (data[i][2] == 0) {
                $("#map3 > #" + data[i][0]).css("fill", "#fff");
            }
            if (data[i][2] > 0 && 5 >= data[i][2]) {
                // $("#" + data[i][0]).css("opacity", 0.25);
                $("#map3 > #" + data[i][0]).css("fill", "#cbc9e2");
            }
            if (data[i][2] >= 6 && 25 >= data[i][2]) {
                // $("#" + data[i][0]).css("opacity", 0.5);
                $("#map3 > #" + data[i][0]).css("fill", "#9e9ac8");
            }
            if (data[i][2] >= 26 && 50 >= data[i][2]) {
                // $("#" + data[i][0]).css("opacity", 0.75);
                $("#map3 > #" + data[i][0]).css("fill", "#756bb1");
            }
            if (data[i][2] >= 51) {
                // $("#" + data[i][0]).css("opacity", 1);
                $("#map3 > #" + data[i][0]).css("fill", "#54278f");
            }
        }
        $(".state").mouseover(function(e) {
            if (navigator.userAgent.indexOf("Firefox") != -1) {

                pos = $("#timeline3").offset()
                thex = e.pageX - pos.left + 10;
                they = e.pageY - pos.top + 10;
                if (thex > $("#timeline3").width() - 200) { thex = $("#timeline3").width() - 200 };
                if (they > $("#timeline3").height() - 200) { they = $("#timeline3").height() - 100 };
            } else {

                pos = $("#timeline3").offset()
                thex = event.pageX - pos.left + 10;
                they = event.pageY - pos.top + 10;
                if (thex > $("#timeline3").width() - 200) { thex = $("#timeline3").width() - 200 };
                if (they > $("#timeline3").height() - 200) { they = $("#timeline3").height() - 100 };
            }


            for (var i = 0; i < data.length; i++) {
                if (this.id == data[i][0]) {
                    if (data[i][2] == 1) {
                        $("#timeline3").append('<div class="hoverbox" style="top:' + they + 'px; left:' + thex + 'px;"><div class="statename">' + data[i][1] + '</div><div class="statepct">' + data[i][2] + ' recruit</div></div>');
                    } else {
                        $("#timeline3").append('<div class="hoverbox" style="top:' + they + 'px; left:' + thex + 'px;"><div class="statename">' + data[i][1] + '</div><div class="statepct">' + data[i][2] + ' recruits</div></div>');
                    }
                }
            }
        });

        $(".state").mouseleave(function() {
            $(".hoverbox").remove();
        });
    };

    function map4() {
        var data = [
            ["CA", "California", "89"],
            ["CO", "Colorado", "70"],
            ["TX", "Texas", "24"],
            ["AZ", "Arizona", "3"],
            ["HI", "Hawaii", "0"],
            ["KS", "Kansas", "4"],
            ["LA", "Louisiana", "3"],
            ["FL", "Florida", "3"],
            ["MI", "Michigan", "5"],
            ["MO", "Missouri", "7"],
            ["OK", "Oklahoma", "1"],
            ["WA", "Washington", "1"],
            ["GA", "Georgia", "0"],
            ["OH", "Ohio", "2"],
            ["IL", "Illinois", "4"],
            ["MS", "Mississippi", "1"],
            ["NV", "Nevada", "5"],
            ["TN", "Tennessee", "0"],
            ["ID", "Idaho", "2"],
            ["UT", "Utah", "1"],
            ["DC", "District of Columbia", "0"],
            ["NJ", "New Jersey", "1"],
            ["NC", "North Carolina", "2"],
            ["AL", "Alabama", "0"],
            ["IA", "Iowa", "2"],
            ["PA", "Pennsylvania", "2"],
            ["KY", "Kentucky", "1"],
            ["NE", "Nebraska", "2"],
            ["MD", "Maryland", "0"],
            ["MA", "Massachusetts", "1"],
            ["MN", "Minnesota", "0"],
            ["NM", "New Mexico", "0"],
            ["NY", "New York", "0"],
            ["OR", "Oregon", "0"],
            ["WI", "Wisconsin", "0"],
            ["AR", "Arkansas", "0"],
            ["CT", "Connecticut", "0"],
            ["MT", "Montana", "0"],
            ["SC", "South Carolina", "0"],
            ["SD", "South Dakota", "0"],
            ["WY", "Wyoming", "0"],
            ["AK", "Alaska", "0"],
            ["DE", "Delaware", "0"],
            ["IN", "Indiana", "0"],
            ["ME", "Maine", "0"],
            ["NH", "New Hampshire", "0"],
            ["ND", "North Dakota", "0"],
            ["RI", "Rhode Island", "0"],
            ["VT", "Vermont", "0"],
            ["VA", "Virginia", "0"],
            ["WV", "West Virginia", "0"],
        ];
        for (var i in data) {
            // $("#" + data[i][0]).css("fill", "#8f6db0");
            if (data[i][2] == 0) {
                $("#map4 > #" + data[i][0]).css("fill", "#fff");
            }
            if (data[i][2] > 0 && 5 >= data[i][2]) {
                // $("#" + data[i][0]).css("opacity", 0.25);
                $("#map4 > #" + data[i][0]).css("fill", "#cbc9e2");
            }
            if (data[i][2] >= 6 && 25 >= data[i][2]) {
                // $("#" + data[i][0]).css("opacity", 0.5);
                $("#map4 > #" + data[i][0]).css("fill", "#9e9ac8");
            }
            if (data[i][2] >= 26 && 50 >= data[i][2]) {
                // $("#" + data[i][0]).css("opacity", 0.75);
                $("#map4 > #" + data[i][0]).css("fill", "#756bb1");
            }
            if (data[i][2] >= 51) {
                // $("#" + data[i][0]).css("opacity", 1);
                $("#map4 > #" + data[i][0]).css("fill", "#54278f");
            }
        }
        $(".state").mouseover(function(e) {
            if (navigator.userAgent.indexOf("Firefox") != -1) {

                pos = $("#timeline4").offset()
                thex = e.pageX - pos.left + 10;
                they = e.pageY - pos.top + 10;
                if (thex > $("#timeline4").width() - 200) { thex = $("#timeline4").width() - 200 };
                if (they > $("#timeline4").height() - 200) { they = $("#timeline4").height() - 100 };
            } else {

                pos = $("#timeline4").offset()
                thex = event.pageX - pos.left + 10;
                they = event.pageY - pos.top + 10;
                if (thex > $("#timeline4").width() - 200) { thex = $("#timeline4").width() - 200 };
                if (they > $("#timeline4").height() - 200) { they = $("#timeline4").height() - 100 };
            }


            for (var i = 0; i < data.length; i++) {
                if (this.id == data[i][0]) {
                    if (data[i][2] == 1) {
                        $("#timeline4").append('<div class="hoverbox" style="top:' + they + 'px; left:' + thex + 'px;"><div class="statename">' + data[i][1] + '</div><div class="statepct">' + data[i][2] + ' recruit</div></div>');
                    } else {
                        $("#timeline4").append('<div class="hoverbox" style="top:' + they + 'px; left:' + thex + 'px;"><div class="statename">' + data[i][1] + '</div><div class="statepct">' + data[i][2] + ' recruits</div></div>');
                    }
                }
            }
        });

        $(".state").mouseleave(function() {
            $(".hoverbox").remove();
        });
    };

    $(document).ready(function() {
        map1();
        map2();
        map3();
        map4();
    });