// const objA ={
//     name:'User name',
//     nickName() {
//         console.log(this);
//     }
// }

// objA.nickName()

// const objB = {
//     name: "User name",
//     nickName: () => {
//         console.log(this);
//     }
// }

// objB.nickName()

const objC = {
    name: "User name",
    skills:{
        mySkill: 'html',
        nickName(){
        console.log(this);
        } 
    }
}

objC.skills.nickName()