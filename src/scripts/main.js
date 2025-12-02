const dataDoEvento = new Date("Jul 28, 2026 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaHoras = setInterval(function(){
	const agora = new Date();
	const timeStampAtual = agora.getTime(); 
	
	const tempoAteOEvento = timeStampDoEvento - timeStampAtual;

    const minEmMs = 1000 * 60; // Minutos
    const hrsEmMs = 1000 * 60 * 60; // Horas
    const diasEmMs = 1000 * 60 * 60 * 24; // Dias

    const segsAteOEvento = Math.floor((tempoAteOEvento % minEmMs) / 1000);
    const minAteOEvento = Math.floor((tempoAteOEvento % hrsEmMs) / minEmMs);
    const horasAteOEvento = Math.floor((tempoAteOEvento % diasEmMs) / hrsEmMs);
    const diasAteOEvento = Math.floor(tempoAteOEvento / diasEmMs);

    document.getElementById("timer").innerHTML = `${diasAteOEvento}D ${horasAteOEvento}H ${minAteOEvento}M ${segsAteOEvento}S para o evento`

}, 1000);

AOS.init();
