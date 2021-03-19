const schedule = require('node-schedule')

// Irá executar de 5 em 5 segundos
// A partir das 18 horas de uma segunda-feira (1) de qualquer mes
const tarefa1 = schedule.scheduleJob('*/5 * 18 * * 1', function() {
    console.log('Executando tarefa 1!', new Date().getSeconds());
})

setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando tarefa');
}, 20000)

const regra = new schedule.RecurrenceRule();
// Irá executar de segunda (1) à sexta-feira (5)
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 18;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando tarefa 2', new Date().getSeconds());
})