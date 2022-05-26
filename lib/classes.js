function Employee(data, role, teamName) {
   this.teamName = function() {
      if(teamName !== undefined) {
         return teamName;
      }
      if(data.teamName !== undefined) {
         return data.teamName;
      }
   };
   this.role = role;
   this.name = data.employeeName;
   this.id = data.employeeId;
   this.email = data.employeeEmail;
   this.github = data.employeeGithub;
   this.school = data.employeeSchool;
   this.officeNumber = data.managerOffice;

   return this;
}

module.exports = Employee;