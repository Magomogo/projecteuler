var num = '73167176531330624919225119674426574742355349194934' +
    '9698352031277450632623957831801698480186947885184' +
    '8586156078911294949545950173795833195285320880551' +
    '1254069874715852386305071569329096329522744304355' +
    '6689664895044524452316173185640309871112172238311' +
    '6222989342338030813533627661428280644448664523874' +
    '3035890729629049156044077239071381051585930796086' +
    '7017242712188399879790879227492190169972088809377' +
    '6572733300105336788122023542180975125454059475224' +
    '5258490771167055601360483958644670632441572215539' +
    '5369781797784617406495514929086256932197846862248' +
    '8397224137565705605749026140797296865241453510047' +
    '8216637048440319989000889524345065854122758866688' +
    '1642717147992444292823086346567481391912316282458' +
    '1786645835912456652947654568284891288314260769004' +
    '2421902267105562632111110937054421750694165896040' +
    '0719840385096245544436298123098787992724428490918' +
    '8458015616609791913387549920052406368991256071760' +
    '0588611646710940507754100225698315520005593572972' +
    '71636269561882670428252483600823257530420752963450',
    product = function (substr) {
        return substr.split('').reduce(function (memo, n) { return memo * parseInt(n, 10)}, 1);
    },
    result = 0;

for (var i = 0; i < num.length - 5; i++) {
    var substr = num.substr(i, 5);
    if (substr.indexOf('0') === -1) {
        result = Math.max(result, product(substr));
    }
}

console.log(result === 40824);

