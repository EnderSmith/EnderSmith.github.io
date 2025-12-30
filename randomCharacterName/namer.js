"use strict";

const newSith = () => {
    let dice = (Math.random() * 20) + 1;
    let output = 'Darth ';
    output += darths[Math.floor(Math.random() * darths.length)];
    if (dice >= 17) {
        output += ` ${darthEpithets[Math.floor(Math.random() * darthEpithets.length)]}`;
    }
    return output;
}

const newObiWan = () => {
    let dice = (Math.random() * 20) + 1;
    let dice2 = (Math.random() * 20) + 1;
    let dice3 = (Math.random() * 20) + 1;
    let output = dice >= 8 ? `${obis[Math.floor(Math.random() * obis.length)]}`
        : `${dis[Math.floor(Math.random() * dis.length)]}`;
    if (dice2 >= 14) {
        output += dice3 >= 8 ? `${wans[Math.floor(Math.random() * wans.length)].toLowerCase()}`
            : `${dis[Math.floor(Math.random() * dis.length)].toLowerCase()}`;
    } else {            
        output += dice3 >= 8 ? `-${wans[Math.floor(Math.random() * wans.length)]}`
            : `-${dis[Math.floor(Math.random() * dis.length)]}`;
    }
    return output;
}
const newKenobiJinn = () => {
    let dice = (Math.random() * 20) + 1;
    let output = `${wans[Math.floor(Math.random() * wans.length)]}`;
    output += dice >= 15 ? `${obis[Math.floor(Math.random() * obis.length)].toLowerCase()}`
        : dice >= 5 ? `${dis[Math.floor(Math.random() * dis.length)].toLowerCase()}`
        : ``;
    return output;
}
const newAnakin = () => {
    let dice = (Math.random() * 20) + 1;
    let output = `${obis[Math.floor(Math.random() * obis.length)]}`;
    output += dice >= 1 ? `${dis[Math.floor(Math.random() * dis.length)].toLowerCase()}`
        : `${wans[Math.floor(Math.random() * wans.length)].toLowerCase()}`;
    return output;
}
const newDijon = () => {
    let output = `${dis[Math.floor(Math.random() * dis.length)]}${wans[Math.floor(Math.random() * wans.length)].toLowerCase()}`;
    return output;
}
const newKiAdiMundi = () => {
    let output = ``;
    output += `${dis[Math.floor(Math.random() * dis.length)]}`;
    output += `-${obis[Math.floor(Math.random() * obis.length)]}`;
    output += `-${wans[Math.floor(Math.random() * wans.length)]}${dus[Math.floor(Math.random() * dus.length)].toLowerCase()}`;
    return output;
}
const newMace = () => {
    let dice = (Math.random() * 20) + 1;
    let output = ``;
    if (dice >= 17) {
        output += `${obis[Math.floor(Math.random() * obis.length)]}`;
        output += `${maces[Math.floor(Math.random() * maces.length)].toLowerCase()}`;
    } else {
        output += `${maces[Math.floor(Math.random() * maces.length)]}`;
    }
    return output;
}
const newWindu = () => {
    let output = `${wans[Math.floor(Math.random() * wans.length)]}${dus[Math.floor(Math.random() * dus.length)].toLowerCase()}`;
    return output;
}
const newGeneric = () => {
    let dice1 = (Math.random() * 20) + 1;
    let dice2 = (Math.random() * 20) + 1;
    let output = '';
    if (dice1 >= 11) {
        output += `${jediFNs[Math.floor(Math.random() * jediFNs.length)]}`;
    } else {
        output += newMace();
    }
    if (dice2 >= 20) {
        output += ` ${skywalkers[Math.floor(Math.random() * skywalkers.length)]}`;
    } else if (dice2 >= 3) {
        output += ` ${jediLNs[Math.floor(Math.random() * jediLNs.length)]}`
    } else if (dice2 >= 2) {
        output += ` ${whitesuns[Math.floor(Math.random() * whitesuns.length)]}`
    }
    return output;
}
const newMaster = (name) => {
    let dice = (Math.random() * 20) +1;
    let output = dice >= 16 ? `Master ${name}`
        : dice < .2 ? `Grandmaster ${name}`
        : name;
    return output;
}

const newJedi = () => {
    let dice = (Math.random() * 20) + 1;
    let dice2 = (Math.random() * 20) + 1;
    let output = '';
    if (dice >= 11) { // OBI-WAN / QUI-GON
        output += newObiWan();
        output += dice2 >= 16 ? ` ${newKenobiJinn()}`
            : dice2 >= 8 ? ` ${newAnakin()}`
            : ` ${newDijon()}`;
    } else if (dice >= 10) {
        output += newKiAdiMundi();
    } else if (dice >= 6) {
        output += `${newMace()} ${newWindu()}`;
    } else {
        output += newGeneric();
    }
    output = newMaster(output);
    return output;
}

const newName = (callback) => {
    let output = callback();
    let current = document.getElementById('output').innerHTML;
    document.getElementById('output').innerHTML = `${output}<br>${current}`;
}

document.getElementById('newSith').addEventListener('click', () => {
    newName(newSith);
})
document.getElementById('newJedi').addEventListener('click', () => {
    newName(newJedi);
})
