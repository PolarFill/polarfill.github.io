const dispositivo = () => {
    const agentedocaos = navigator.userAgent;

    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(agentedocaos)) {
        return "tablet";
    } else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(agentedocaos)) {
        return "mobile";
    }
    return "pc";

};

if (dispositivo == mobile) or(dispositivo == "tablet")
var link = document.createElement('link');
link.href = 'mobile/indexM.css';
link.rel = 'stylesheet';
link.type = 'text/css';

document.body.appendChild(link);