// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id="12ab"
tinderUser.name="Ankita"
tinderUser.loggedin=false
// console.log(tinderUser);

const instaUser = {
    email: "daszankita23@gmail.com",
    fullName: {
          userName: {
                firstName:"Ankita",
               lastName:"Das"
          }
    }
}
// console.log(instaUser.fullName.userName.firstName);

const obj1 = {1: "a", 2: "b" }
const obj2 = {3: "a", 4: "b" }
const obj4 = {5: "a", 6: "b" }

const obj3 = Object.assign( {}, obj1 , obj2,obj4)
// const obj3 = { obj1 , obj2}
console.log(obj3);
