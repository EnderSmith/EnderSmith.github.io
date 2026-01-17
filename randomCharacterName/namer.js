"use strict";

const newSith = () => {
    let dice = (Math.random() * 20) + 1;
    let dice2 = (Math.random() * 20) + 1;
    let darth = darths[Math.floor(Math.random() * darths.length)]
    let output = {};
    output.canonicity = darth.canonicity;
    if (dice >= 17) {
        output.name = `Darth ${darth.name} ${darthEpithets[Math.floor(Math.random() * darthEpithets.length)]}`;
    } else {
        output.name = `Darth ${darth.name}`;
    }

    output.lightsaber = newSithSaber();
    output.lightsaber2 = dice2 <= 3 ? newSithSaber(output.lightsaber) : undefined;
    output.lightsaber3 = dice2 <= 1.1 ? newSithSaber(output.lightsaber) : undefined;
    output.lightsaber4 = output.lightsaber3 ? newSithSaber(output.lightsaber) : undefined;
    output.class = 'sith';
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
    output += dice >= 16 ? `${obis[Math.floor(Math.random() * obis.length)].toLowerCase()}`
        : dice >= 14 ? `${dis[Math.floor(Math.random() * dis.length)].toLowerCase()}`
        : ``;
    return output;
}
const newAnakin = () => {
    let dice = (Math.random() * 20) + 1;
    let output = `${obis[Math.floor(Math.random() * obis.length)]}`;
    output += dice >= 4 ? `${dis[Math.floor(Math.random() * dis.length)].toLowerCase()}`
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
    if (dice1 >= 8) {
        output += `${jediFNs[Math.floor(Math.random() * jediFNs.length)]}`;
    } else if (dice1 >= 14) {
        output += newMace();
    } else {
        output += newKenobiJinn();
    }
    if (dice2 >= 20) {
        output += ` ${skywalkers[Math.floor(Math.random() * skywalkers.length)]}`;
    } else if (dice2 >= 6) {
        output += ` ${jediLNs[Math.floor(Math.random() * jediLNs.length)]}`
    } else if (dice2 >= 5) {
        output += ` ${whitesuns[Math.floor(Math.random() * whitesuns.length)]}`
    } else if (dice2 >= 3) {
        output += ` ${newKenobiJinn()}`;
    }
    return output;
}
const newMaster = (name) => {
    let dice = (Math.random() * 20) +1;
    let output = dice >= 16 ? `Master ${name}`
        : dice < 1.2 ? `Grandmaster ${name}`
        : name;
    return output;
}

const newJedi = () => {
    let dice = (Math.random() * 20) + 1;
    let dice2 = (Math.random() * 20) + 1;
    let dice3 = (Math.random() * 20) + 1;
    let output = {};
    output.name = '';
    if (dice >= 11) { // OBI-WAN / QUI-GON
        output.name += newObiWan();
        output.name += dice2 >= 5 ? ` ${newKenobiJinn()}`
            : dice2 >= 3 ? ` ${newAnakin()}`
            : ` ${newDijon()}`;
    } else if (dice >= 10) {
        output.name += newKiAdiMundi();
    } else if (dice >= 6) {
        output.name += `${newMace()} ${newWindu()}`;
    } else {
        output.name += newGeneric();
    }
    output.name = newMaster(output.name);
    output.class = 'jedi';
    output.canonicity = 0;
    output.lightsaber = newJediSaber();
    output.lightsaber2 = dice3 <= 2 ? newJediSaber(output.lightsaber) : undefined;
    output.lightsaber3 = dice3 <= 1.1 ? newJediSaber() : undefined;
    output.lightsaber4 = output.lightsaber3 ? newJediSaber(output.lightsaber3) : undefined;

    return output;
}

const newJediSaber = (dual) => {
    let dice = (Math.random() * 20) + 1;
    let dice2 = (Math.random() * 20) + 1;
    let lightsaber = undefined;
    if (dice < 10 && dual) {
        lightsaber = dual;
    } else {
        lightsaber = dice2 <= 12 ? 'blue'
            : dice2 <= 18 ? 'green'
            : dice2 <= 20 ? 'yellow'
            : 'purple';
    }
    return lightsaber;
}

const newSithSaber = (dual) => {
    let dice = (Math.random() * 20) + 1;
    let lightsaber = dice <= 1.01 ? "synthblue"
        : dice <= 1.1 ? newJediSaber()
        : dice <= 1.4 ? "synth"
        : "red"
    if (dual && (dual === 'synth' || dual === 'synthblue' || lightsaber === 'synth' || lightsaber === 'synthblue')) lightsaber = dual;
    return lightsaber;
}

const newChiss = () => {
    let dice = (Math.random() * 20) + 1;
    let dice2 = (Math.random() * 25) + 1;
    let output = {};
    let fam = undefined;
    if (dice >= 5) {
        fam = chissFam[Math.floor(Math.random() * chissFam.length)];
    }
    let giv = chissGiv[Math.floor(Math.random() * chissGiv.length)];
    let soc = chissSoc[Math.floor(Math.random() * chissSoc.length)];
    let odo = dice2 < 1.1 ? 'odo' : '';
    if (fam) {
        output.name = `${fam[1]}${giv.toLowerCase()}${soc[1]}`;
        output.fullname = `(${fam[0]}'${giv.toLowerCase()}'${soc[0]}${odo})`
        if (fam[2] === 1) {
            output.familyRank = dice2 >= 20.9 ? `Patriarch`
                : dice2 >= 20.5 ? `Speaker`
                : dice2 >= 20.25 ? `Syndic Prime`
                : dice2 >= 20 ? `Syndic`
                : dice2 >= 18 ? `Patriel`
                : dice2 >= 16 ? `Aristocra`
                : dice2 >= 13 ? `Blood`
                : dice2 >= 10 ? `Cousin`
                : dice2 >= 4 ? `Ranking Distant`
                : dice2 >= 2 ? `Trial-born`
                : `Merit Adoptive`
        }
        output.rulingFamily = fam[2] === 1 ? `of House ${fam[0]}<br>of the Nine Ruling Families`
            : fam[2] === 2 ? `of House ${fam[0]},<br>Former Ruling Family`
            : fam[2] === 3 ? `of House ${fam[0]}<br>of the Forty Great Houses`
            : `of House ${fam[0]}`;
    } else {
        let rank = dice2 >= 20.5 ? `Supreme Admiral`
            : dice2 >= 20 ? `Supreme General`
            : dice2 >= 19 ? `Fleet Admiral`
            : dice2 >= 17 ? `Senior General`
            : dice2 >= 15 ? `Admiral`
            : dice2 >= 13 ? `General`
            : dice2 >= 10 ? `Mid Admiral`
            : dice2 >= 7 ? `Mid General`
            : dice2 >= 3 ? `Commodore`
            : dice2 >= 2 ? `Caretaker`
            : `Sky-walker`;
        output.name = `${rank} ${giv}'${soc[0]}${odo}`;
        output.rulingFamily = `of the Expansionary<br>Defense Fleet`
    }

    return output;
}

const newCanonicityNote = (canonicity) => {
    return canonicity === 3 ? `(Legends/Canon)`
        : canonicity === 2 ? `(Legends)`
        : canonicity === 1 ? `(Canon)`
        : canonicity === 99 ? `(Non-Canon)`
        : ``;
}

const newName = (callback) => {
    let output = callback();
    let card = `<div class="card ${output.class}">
            <div class="name">
                ${output.name}
            </div>
            <div class="fullname">
                ${output.fullname ? output.fullname : ''}
            </div>
            <div class="familyRank">
                <b>${output.familyRank ? output.familyRank : ''}</b> ${output.rulingFamily ? output.rulingFamily : ''}
            </div>
            <div class="canonicity">
                ${newCanonicityNote(output.canonicity)}
            </div>
            <div class="lightsaber ${output.lightsaber}"></div>
            <div class="lightsaber ${output.lightsaber2}"></div>
            <div class="lightsaber ${output.lightsaber3}"></div>
            <div class="lightsaber ${output.lightsaber4}"></div>
        </div>`;
    let current = document.getElementById('output').innerHTML;
    document.getElementById('output').innerHTML = `${card}<br>${current}`;
}

const clearPage = () => {
    document.getElementById('output').innerHTML = ``;
}

document.getElementById('newSith').addEventListener('click', () => newName(newSith));
document.getElementById('newJedi').addEventListener('click', () => newName(newJedi));
document.getElementById('newChiss').addEventListener('click', () => newName(newChiss));
document.getElementById('clear').addEventListener('click', () => clearPage());
document.addEventListener('keydown', (event) => {
    if (event.key === 'S' || event.key === 's') newName(newSith);
    if (event.key === 'J' || event.key === 'j') newName(newJedi);
    if (event.key === 'C' || event.key === 'c') newName(newChiss);
    if (event.key === 'Escape') clearPage();
    return;
});

