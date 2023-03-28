const hbs = require('hbs');

hbs.registerHelper('statusMeaning',function (statusCode) {
    switch (statusCode) {
        case 0: return 'ToDo'
        case 1: return 'Pending'
        default: return 'Completed'
    }
})

hbs.registerHelper('locale', (date) => {
    try {
        return date.toDateString() || date.toLocaleDateString()
    } catch (err) {
        console.error(err)
    }
})

hbs.registerHelper("_toInt", function (str) {
    return parseInt(str, 10);
});

hbs.registerHelper("_toString", function (str) {
    return str.toString()
})


