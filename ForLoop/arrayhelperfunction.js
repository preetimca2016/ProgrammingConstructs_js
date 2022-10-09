// Array helper Functions
    // UC 7A- Calc total Wage using Array forEach traversal or reduce method
    let totEmpWage = 0;
    function sum(dailyWage) {
      totEmpWage += dailyWage;
    }
    empDailyWageArr.forEach(sum);
    console.log(
      "UC7A- Total Days: " +
        totalWorkingDays +
        " Total Hrs: " +
        totalEmpHrs +
        " Emp Wage: " +
        totEmpWage
    );
  
    function totalWages(totalWage, dailyWage) {
      return totalWage + dailyWage;
    }
    console.log(
      "UC7A - Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages)
    );