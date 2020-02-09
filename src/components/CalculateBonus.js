
export default function CalculateBonus (reports) {

    function TimeInMinutes(time) {
        return (+time[0]) * 60 + (+time[1]);
    }

    function ConvertTime(input) {
        return input.split(':')
    }

    function TimeDiff(value) {
        // 540 being time conversion for 9:00am
        if ( value > 540 ) {
            return 0
        } else {
            return (540 - value)
        }
    }

    reports.forEach(function(report){
        var a = ConvertTime(report.monday);
        var b = ConvertTime(report.tuesday);
        var c = ConvertTime(report.wednesday);
        var d = ConvertTime(report.thursday);
        var e = ConvertTime(report.friday);

        var aMinutes = TimeInMinutes(a);
        var bMinutes = TimeInMinutes(b);
        var cMinutes = TimeInMinutes(c);
        var dMinutes = TimeInMinutes(d);
        var eMinutes = TimeInMinutes(e);
        // report.mondayTime = aMinutes;
        // report.tuesdayTime = bMinutes;
        report.bonus = (Math.round(( ( 
            (TimeDiff(aMinutes)) + (TimeDiff(bMinutes)) + (TimeDiff(cMinutes)) + (TimeDiff(dMinutes)) + (TimeDiff(eMinutes)) )/10 ) * 50 ));
    });

    return reports;
}

