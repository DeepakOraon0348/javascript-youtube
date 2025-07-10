class User {
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email=value;
    }
    get password(){
        return this._password.toUpperCase()
    }//password variable ,jo constractor wala same hii eshi liye call stack full ho ja raha hii.
    //getter means jo value hum get karna chah rahe hii

    set password(value){
        this._password = value.toUpperCase();
    }
    //setter ka user set karne ke liye kya jata hii. ye data base me set karta hii.
}
const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);
console.log(hitesh.password);

