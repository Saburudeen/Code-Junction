//1
class Person {
    constructor(firstName, lastName, age, gender, occupation, email, phoneNumber, address) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.occupation = occupation;
      this.email = email;
      this.phoneNumber = phoneNumber;
      this.address = address;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getAge() {
      return this.age;
    }
  
    getGender() {
      return this.gender;
    }
  
    getOccupation() {
      return this.occupation;
    }
  
    getEmail() {
      return this.email;
    }
  
    getPhoneNumber() {
      return this.phoneNumber;
    }
  
    getAddress() {
      return this.address;
    }
  
    setFirstName(firstName) {
      this.firstName = firstName;
    }
  
    setLastName(lastName) {
      this.lastName = lastName;
    }
  
    setAge(age) {
      this.age = age;
    }
  
    setGender(gender) {
      this.gender = gender;
    }
  
    setOccupation(occupation) {
      this.occupation = occupation;
    }
  
    setEmail(email) {
      this.email = email;
    }
  
    setPhoneNumber(phoneNumber) {
      this.phoneNumber = phoneNumber;
    }
  
    setAddress(address) {
      this.address = address;
    }
  }
  //2
   class Uberprice{
    constructor(distance,time)
    {
      this.distance = distance;
      this.time = time;
      this.fare = 8.00;
      this.minfare = 4;
      this.kmfare = 5;
    }
    calculation()
    {
      const timecost = this.time * this.minfare;
      const distance = this.distance * this.kmfare;
      const Uberfare = this.fare+timecost+distance;
      return Uberfare;
    }
   }
   const rride = new Uberprice(14,320);
   console.log(rride.calculation());
