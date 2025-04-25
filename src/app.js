





window.onload = function () {
    //write your code here
    console.log("Hello Rigo from the console!");


    let who = ['me levante con el pie izquierdo', 'amaneci lento hoy', 'mañana sera un mejor dia', 'hoy tengo hambre'];
    let action = ['que dia es hoy', 'no me quiero bañar', 'un dia a la vez', 'no quiero trabajar'];
    let what = ['tengo flojera', 'hoy es festivo', 'busca un error'];
    let when = ['yo no se mañana', 'hellou', 'tengo hambre', 'no quiero cocinar', 'me duele la cabeza'];

    console.log(who.concat(action, what, when))
    console.log(action)
    console.log(what)
    console.log(when)

    let whoRandom = Math.floor(Math.random() * who.length);
    let actionRandom = Math.floor(Math.random() * action.length);
    let whatRandom = Math.floor(Math.random() * what.length);
    let whenRandom = Math.floor(Math.random() * when.length);

    document.getElementById("theexcuse").innerHTML = who[whoRandom] + " " + action[actionRandom] + " " + what[whatRandom] + " " + when[whenRandom]
};

