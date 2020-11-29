class User{
    constructor(){
        this.name = null;
        this.email = null;
        this.index = null;
    }
    updateUsercount(count){
        database.ref('Usercount').update({
            Usercount : count
        })
    }
    updateUser(name,email){
        var user = 'Users'+this.index;
        database.ref(user).set({
            name : name,
            email : email
        })
    }
}