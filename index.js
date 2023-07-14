// code your solution here


function saturdayFun(activity = "roller-skate"){
    return(`This Saturday, I want to ${activity}!`);
}
console.log(saturdayFun());

let mondayWork = function (activity = "go to the office"){
    return(`This Monday, I will ${activity}.`);
};
console.log(mondayWork("work from home"));

function outer(name,msg="welcome"){
    function innerF(grade, sit="take a seat"){
        return `Dear ${name}, ${msg} this is grade ${grade} kindly ${sit}`};
    return innerF};
    console.log(outer("Jax")(2));

    function song(name ,mes="Hey listen to" ,){
        return function(artist,year){
            return ` ${mes} ${name} by ${artist} it was release in ${year}`;
        };
    }
    console.log(song("whine fi mi")("1da banton","2010"));
    
    
             function wrapAdjective(str="*"){
                return function inner(type="special"){
                    return `You are ${str}${type}${str}!`
                }  
             };
             console.log(wrapAdjective("%")("trying"));

    