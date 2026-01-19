"use strict";

const newSith = () => {
    let dice0 = (Math.random() * 20) + 1;
    let dice = (Math.random() * 20) + 1;
    let dice2 = (Math.random() * 20) + 1;
    let dice3 = (Math.random() * 20) + 1;
    let darth = darths[Math.floor(Math.random() * darths.length)]
    let output = {};
    output.canonicity = darth.canonicity;
    if (dice0 > 1) {
        output.darth = 'Darth'
    }  
    output.name = `${darth.name}`;
    if (dice >= 17) {
        output.epithet = darthEpithets[Math.floor(Math.random() * darthEpithets.length)];
    }

    output.lightsaber = newSithSaber();
    output.lightsaber2 = dice2 <= 3 ? newSithSaber(output.lightsaber) : undefined;
    output.lightsaber3 = dice2 <= 1.1 ? newSithSaber(output.lightsaber) : undefined;
    output.lightsaber4 = output.lightsaber3 ? newSithSaber(output.lightsaber) : undefined;
    output.class = 'sith';
    output.aka = dice3 <= 4 && output.darth ? newJedi().name : undefined;
    return output;
}

const newObiWan = () => {
    let dice = (Math.random() * 20) + 1;
    let dice2 = (Math.random() * 20) + 1;
    let dice3 = (Math.random() * 20) + 1;
    let output = dice >= 8 ? `${obis[Math.floor(Math.random() * obis.length)]}`
        : `${dis[Math.floor(Math.random() * dis.length)]}`;
    output = output[0] === 'I' && output[2] != 'p' && output[2] != 'z' ? output.slice(1).charAt(0).toUpperCase() + output.slice(2) : output; //unsure
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
    output = output[0] === 'I' && output[2] != 'p' && output[2] != 'z' ? output.slice(1).charAt(0).toUpperCase() + output.slice(2) : output; //unsure
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
        output = output[0] === 'I' && output[2] != 'p' && output[2] != 'z' ? output.slice(1).charAt(0).toUpperCase() + output.slice(2) : output; //unsure
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
    if (dice >= 14) { // OBI-WAN / QUI-GON
        output.name += newObiWan();
        output.name += dice2 >= 5 ? ` ${newKenobiJinn()}`
            : dice2 >= 3 ? ` ${newAnakin()}`
            : ` ${newDijon()}`;
    } else if (dice >= 13) {
        output.name += newKiAdiMundi();
    } else if (dice >= 10) {
        output.name += `${newMace()} ${newWindu()}`;
    } else if (dice >= 9) {
        output.name += `${newRodian().name} ${newWindu()}`;
    } else if (dice >= 8.5) {
        output = newWookiee();
    } else {
        output.name += newGeneric();
    }
    output.jediRank = newMaster('');
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
    let dice2 = (Math.random() * 20) + 1;
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
    return canonicity === 3 ? `Appears in Legends & Canon`
        : canonicity === 2 ? `Appears in Legends`
        : canonicity === 1 ? `Appears in Canon`
        : canonicity === -1 ? `Does not appear in Canon`
        : ``;
}

const newRodian = () => {
    let dice = (Math.random() * 20) + 1;
    let output = {};
    if (dice <= 5) { 
        output.name = `${rodianPrebaked[Math.floor(Math.random() * rodianPrebaked.length)]}`;
    }
    let fname = `${rodianFirst[Math.floor(Math.random() * rodianFirst.length)]}${rodianLast[Math.floor(Math.random() * rodianLast.length)]}`;
    let lname = `${rodianFirst[Math.floor(Math.random() * rodianFirst.length)]}${rodianLast[Math.floor(Math.random() * rodianLast.length)]}`;
    if (dice <= 20.5) {
        output.name = `${fname} ${lname}`;
    }
    output.name = fname;
    console.log('newRodian');
    return output;
}

const newWookiee = () => {
    let dice = (Math.random() * 20) + 1;
    // let dice2 = (Math.random() * 20) + 1;
    let output = {};
    
    let prefix = wookieePre[Math.floor(Math.random() * wookieePre.length)];
    let suffix = wookieeSuf[Math.floor(Math.random() * wookieeSuf.length)];
    // let lastPrefix = wookieePre[Math.floor(Math.random() * wookieePre.length)];
    // let lastSuffix = wookieeSuf[Math.floor(Math.random() * wookieeSuf.length)];

    if (prefix.nick || suffix.nick) {
        output.name = `"${prefix.nick ? prefix.nick : suffix.nick}"`;
        output.fullname = `(${prefix.prefix + suffix.suffix})`;
        if (dice > 15) {
            output.name = prefix.prefix + suffix.suffix;
            output.nick, output.fullname = undefined;
            console.log('nickname override');
        }
    } else {
        output.name = prefix.prefix + suffix.suffix
    }
    console.log('newWookiee')
    return output;
}

const newName = (callback) => {
    let output = callback();
    let card = `<div class="card ${output.class}">
            <div class="name">
                ${output.jediRank ? `${output.jediRank} ` : ''}
                ${output.darth ? `${output.darth} ` : ''}
                ${output.name}${output.canonicity ? `*` : ''}
                ${output.epithet ? ` ${output.epithet}` : ''}
            </div>
            <div class="fullname">
                ${output.fullname ? output.fullname : ''}
                ${output.aka ? `(a.k.a ${output.aka})` : ''}
            </div>
            <div class="familyRank">
                <b>${output.familyRank ? output.familyRank : ''}</b> ${output.rulingFamily ? output.rulingFamily : ''}
            </div>
            <div class="lightsaber ${output.lightsaber}"></div>
            <div class="lightsaber ${output.lightsaber2}"></div>
            <div class="lightsaber ${output.lightsaber3}"></div>
            <div class="lightsaber ${output.lightsaber4}"></div>
            <div class="canonicity">
                <sup>${output.canonicity ? `*(${newCanonicityNote(output.canonicity)})` : ''}</sup>
            </div>
        </div>`;
    let cards = document.getElementsByClassName('card');
    if (cards.length >= 10) cards[9].remove();
    // document.getElementsByTagName('body')[0].style.height = '100vh';
    let current = document.getElementById('output').innerHTML;
    document.getElementById('output').innerHTML = `${card}${current}`;
}

const clearPage = () => {
    document.getElementById('output').innerHTML = ``;
}

document.getElementById('newSith').addEventListener('click', () => newName(newSith));
document.getElementById('newJedi').addEventListener('click', () => newName(newJedi));
document.getElementById('newChiss').addEventListener('click', () => newName(newChiss));
document.getElementById('newRodian').addEventListener('click', () => newName(newRodian));
document.getElementById('newWookiee').addEventListener('click', () => newName(newWookiee));
document.getElementById('clear').addEventListener('click', () => clearPage());
document.addEventListener('keydown', (event) => {
    if (event.key === 'S' || event.key === 's') newName(newSith);
    if (event.key === 'J' || event.key === 'j') newName(newJedi);
    if (event.key === 'C' || event.key === 'c') newName(newChiss);
    if (event.key === 'R' || event.key === 'r') newName(newRodian);
    if (event.key === 'W' || event.key === 'w') newName(newWookiee);
    if (event.key === 'Escape') clearPage();
    return;
});

