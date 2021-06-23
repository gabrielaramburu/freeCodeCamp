var Person = function(firstAndLast) {
    let firstName=firstAndLast.split(" ")[0];
    let lastName=firstAndLast.split(" ")[1];
   
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFirstName = function() {
      return firstName;
    };
    this.getLastName = function() {
       return lastName;
    };
  
    this.getFullName = function() {
      return firstName + " " + lastName;
    };
    this.setFirstName = function(first) {
      firstName = first;
      console.log(firstName);
    };
    this.setLastName = function(last) {
      lastName = last;
    };
    this.setFullName = function(full) {
       firstName=full.split(" ")[0];
       lastName=full.split(" ")[1];
    };
     
  };
  
  var bob = new Person('Bob Ross');
  bob.getFullName();
  bob.setFirstName("lll");
  console.log(bob.getFullName());
  