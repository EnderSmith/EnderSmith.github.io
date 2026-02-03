"use strict";

const newDice = (sides, continuous) => {
    let dice = (Math.random() * sides) + 1;
    if (!continuous) {
        dice = Math.floor(dice)
    }
    return dice;
}

const rando = (array) => array[Math.floor(Math.random() * array.length)];

const newSith = () => {
    let dice0 = newDice(20, true);
    let dice = newDice(20, true);
    let dice2 = newDice(20, true);
    let dice3 = newDice(20, true);
    let darth = rando(darths);
    let output = {};
    output.canonicity = darth.canonicity;
    if (dice0 > 1) {
        output.darth = 'Darth'
    }  
    output.name = `${darth.name}`;
    if (dice >= 17) {
        output.epithet = rando(darthEpithets);
    }

    output.lightsaber = newSithSaber();
    if (!output.lightsaber.includes('staff')) {
        output.lightsaber2 = dice2 <= 3 ? newSithSaber(output.lightsaber) : undefined;
        output.lightsaber3 = dice2 <= 1.1 ? newSithSaber(output.lightsaber) : undefined;
        output.lightsaber4 = output.lightsaber3 && !output.lightsaber3.includes('dagger') ? newSithSaber(output.lightsaber) : undefined;
        output.lightsaber4 = output.lightsaber3 && output.lightsaber3.includes('dagger') ? output.lightsaber3 : output.lightsaber4;
    }
    output.class = 'sith';
    output.aka = dice3 <= 4 && output.darth ? newJedi().name : undefined;
    return output;
}

const newObiWan = () => {
    let dice = newDice(20, true);
    let dice2 = newDice(20, true);
    let dice3 = newDice(20, true);
    let output = dice >= 8 ? `${rando(obis)}`
        : `${rando(dis)}`;
    output = output[0] === 'I' && output[2] != 'p' && output[2] != 'z' ? output.slice(1).charAt(0).toUpperCase() + output.slice(2) : output; //unsure
    if (dice2 >= 14) {
        output += dice3 >= 8 ? `${rando(wans).toLowerCase()}`
            : `${rando(dis).toLowerCase()}`;
    } else {            
        output += dice3 >= 8 ? `-${rando(wans)}`
            : `-${rando(dis)}`;
    }
    return output;
}
const newKenobiJinn = () => {
    let dice = newDice(20, true);
    let output = `${rando(wans)}`;
    output += dice >= 16 ? `${rando(obis).toLowerCase()}`
        : dice >= 14 ? `${rando(dis).toLowerCase()}`
        : ``;
    return output;
}
const newAnakin = () => {
    let dice = newDice(20, true);
    let output = `${rando(obis)}`;
    output = output[0] === 'I' && output[2] != 'p' && output[2] != 'z' ? output.slice(1).charAt(0).toUpperCase() + output.slice(2) : output; //unsure
    output += dice >= 4 ? `${rando(dis).toLowerCase()}`
        : `${rando(wans).toLowerCase()}`;
    return output;
}
const newDijon = () => {
    let output = `${rando(dis)}${rando(wans).toLowerCase()}`;
    return output;
}
const newKiAdiMundi = () => {
    let output = ``;
    output += `${rando(dis)}-${rando(obis)}-${rando(wans)}${rando(dus).toLowerCase()}`;
    return output;
}
const newMace = () => {
    let dice = newDice(20, true);
    let output = ``;
    if (dice >= 17) {
        output += `${rando(obis)}`;
        output = output[0] === 'I' && output[2] != 'p' && output[2] != 'z' ? output.slice(1).charAt(0).toUpperCase() + output.slice(2) : output; //unsure
        output += `${rando(maces).toLowerCase()}`;
    } else {
        output += `${rando(maces)}`;
    }
    return output;
}
const newWindu = () => {
    let output = `${rando(wans)}${rando(dus).toLowerCase()}`;
    return output;
}
const newGeneric = () => {
    let dice1 = newDice(20, true);
    let dice2 = newDice(20, true);
    let output = '';
    if (dice1 >= 8) {
        output += `${rando(jediFNs)}`;
    } else if (dice1 >= 14) {
        output += newMace();
    } else {
        output += newKenobiJinn();
    }
    if (dice2 >= 20) {
        output += ` ${rando(skywalkers)}`;
    } else if (dice2 >= 6) {
        output += ` ${rando(jediLNs)}`
    } else if (dice2 >= 5) {
        output += ` ${rando(whitesuns)}`
    } else if (dice2 >= 3) {
        output += ` ${newKenobiJinn()}`;
    }
    return output;
}
const newMaster = (name) => {
    let dice = newDice(20, true);
    let output = dice >= 16 ? `Master ${name}`
        : dice < 1.2 ? `Grandmaster ${name}`
        : name;
    return output;
}

const newJedi = () => {
    let dice = newDice(20, true);
    let dice2 = newDice(20, true);
    let dice3 = newDice(20, true);
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
        let rodian = newRodian();
        output.name += `${rodian.fname ? rodian.fname : rodian.name}`;
        output.name += dice2 >= 15 ? ` ${newWindu()}`
            : dice2 >= 10 ? ` ${rodian.lname ? rodian.lname : newKenobiJinn()}`
            : dice2 >= 9 ? ` ${newMace()}`
            : '';
    } else if (dice >= 8.8) {
        output = newWookiee2();
    } else if (dice >= 8.75) {
        output = newSullustan();
    } else {
        output.name += newGeneric();
    }
    output.jediRank = newMaster('');
    output.class = 'jedi';
    output.canonicity = 0;
    output.lightsaber = newJediSaber();
    if (!output.lightsaber.includes('staff')) {
        output.lightsaber2 = dice3 <= 2 ? newJediSaber(output.lightsaber) : undefined;
        output.lightsaber3 = dice3 <= 1.05 ? newJediSaber() : undefined;
        output.lightsaber4 = output.lightsaber3 ? newJediSaber(output.lightsaber2) : undefined;
    }

    return output;
}

const newJediSaber = (dual) => {
    let dice = newDice(20, true);
    let dice2 = newDice(20, true);
    let dice3 = newDice(20, true);
    let dice4 = newDice(20, true);
    let lightsaber = undefined;
    if (dual && dual.includes('white')) {
        lightsaber = dual;
    } else if (dice < 8 && dual) {
        lightsaber = dual;
    } else {
        lightsaber = dice2 <= 1.01 ? 'white'
            : dice2 <= 12 ? 'blue'
            : dice2 <= 18 ? 'green'
            : dice2 <= 20 ? 'yellow'
            : 'purple';
    }
    if (!dual && dice4 <= 1.5) {
        lightsaber = `${lightsaber} staff`;
    } else if ((dual && dual.includes('shoto')) || (dual && dice3 <= 3) || dice3 <= 1.01) {
        lightsaber = `${dual && dice < 15 ? dual : lightsaber} shoto`;  
    }
    if (dual && dual.includes('staff')) return '';
    return lightsaber;
}

const newSithSaber = (dual) => {
    let dice = newDice(20, true);
    let dice2 = newDice(20, true);
    let dice3 = newDice(20, true);
    let dice4 = newDice(20, true);
    let lightsaber = dice <= 1.01 ? "synthblue"
        : dice <= 1.1 ? newJediSaber()
        : dice <= 1.4 ? "synth"
        : "red"

    if (!dual && dice4 <= 3) {
        lightsaber = `${lightsaber} staff`;
    } else {
        if (dual && (dual === 'synth' || dual === 'synthblue' || lightsaber === 'synth' || lightsaber === 'synthblue')) lightsaber = dual;
        if ((dual && dual.includes('shoto')) || (dual && dice2 <= 2) || dice2 <= 1.01) lightsaber = `${lightsaber} shoto`;
        if ((dual && !lightsaber.includes('shoto') && dice3 <= 1.5) || dice3 <= 1.005) lightsaber = `${lightsaber} dagger`;
    }
    if (dual && dual.includes('staff')) return '';
    return lightsaber;
}

// const newStaffSaber = (color) => {
//     // TODO: THIS IS SUCH A HACKY SOLUTION, PLEASE FIX
//     return `${color} staff"></div><div class = "lightsaber ${color} staff2`
// }

const newChiss = () => {
    let dice = newDice(20, true);
    let dice2 = newDice(20, true);
    let output = {};
    let fam = undefined;
    if (dice >= 5) {
        fam = rando(chissFam);
    }
    let giv = rando(chissGiv);
    let soc = rando(chissSoc);
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
    output.class = 'chiss';
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
    let dice = newDice(20, true);
    let output = {};
    output.class = 'rodian';
    if (dice <= 5) { 
        output.name = `${rando(rodianPrebaked)}`;
        return output;
    }
    let fname = `${rando(rodianFirst)}${rando(rodianLast)}`;
    let lname = `${rando(rodianFirst)}${rando(rodianLast)}`;
    output.name = fname;
    if (dice <= 8) {
        output.name = `${fname} ${lname}`;
        output.fname = fname;
        output.lname = lname;
    }
    console.log('newRodian');
    return output;
}

const newWookiee = () => {
    let dice = newDice(20, true);
    // let dice2 = newDice(20, true);
    let output = {};
    
    let prefix = rando(wookieePre);
    let suffix = rando(wookieeSuf);
    // let lastPrefix = wookieePre[Math.floor(Math.random() * wookieePre.length)];
    // let lastSuffix = wookieeSuf[Math.floor(Math.random() * wookieeSuf.length)];
    // let prefixFlaggedEndings = [
    //     'k',
    //     'r',
    //     'w',
    // ]
    // if (prefixFlaggedEndings.includes(prefix.prefix.at(-1))) {
    //     suffix.suffix = suffix.suffix.at(0)
    // }

    if (prefix.nick || suffix.nick) {
        output.name = `${prefix.prefix + suffix.suffix}`;
        output.nick = `"${prefix.nick ? prefix.nick : suffix.nick}"`;
        if (dice > 15) {
            output.name = prefix.prefix + suffix.suffix;
            output.nick = undefined;
            console.log('nickname override');
        }
    } else {
        output.name = prefix.prefix + suffix.suffix;
    }
    output.class = 'wookiee'
    console.log('newWookiee')
    return output;
}

const newWookiee2 = () => {
    let dice = newDice(20, true);
    // let dice2 = newDice(20, true);
    let output = {};
    
    let wookiee = rando(wookiees2);
    output.name = wookiee.name;
    output.nick = wookiee.nicks.length && dice <= 10 ? rando(wookiee.nicks) : undefined;
    output.class = 'wookiee'
    console.log('newWookiee2')
    return output;
}

// const everyWookiee = () => {
//     let output = {};
//     output.name = 'test';
//     output.fullname = '';
//     wookieePre.forEach((prefix) => {
//         wookieeSuf.forEach((suffix) => {
//             output.fullname += `{ name: '${prefix.prefix}${suffix.suffix}', nicks: ['${prefix.nick}']},<br>`
//         })
//     })
//     return output;
// }

const newSullustan = () => {
    let dice = newDice(20, true);
    let output = {};
    if (dice <= 10) {
        // output.name = `${sullNumFNames[Math.floor(Math.random() * sullNumFNames.length)]} ${sullNumLNames[Math.floor(Math.random() * sullNumLNames.length)]}`;
        let fname = rando(sullNumFNames);
        let lname = rando(sullNumLNames);
        output.name = `${fname.name} ${lname.name}`;
        // if (fname.canonicity || lname.canonicity) {
        //     output.canonicity = 
        // }
    } else if (dice <= 15) {
        let fname = rando(sullSymFNames);
        let lname = rando(sullSymLNames);
        output.name = `${fname.name} ${lname.name}`;
    } else if (dice <= 18) {
        let fname = rando(sullMathFNames);
        let lname = rando(sullMathLNames);
        output.name = `${fname.name} ${lname.name}`;
    } else if (dice <= 21) {
        let fname = rando(sullPuncFNames);
        let lname = rando(sullPuncLNames);
        output.name = `${fname.name} ${lname.name}`;
    }
    output.class = 'sullustan';
    console.log('newSullustan');
    return output;
}

const newName = (callback) => {
    let output = callback();
    let card = `
        <div
            class="card ${output.class}
            title=""
        ">
            <div class="name">
                ${output.jediRank ? `${output.jediRank} ` : ''}
                ${output.darth ? `${output.darth} ` : ''}
                ${output.name}${output.canonicity ? `*` : ''}
                ${output.epithet ? ` ${output.epithet}` : ''}
            </div>
            <div class="fullname">
                ${output.nick ? output.nick : ''}
                ${output.fullname ? output.fullname : ''}
                ${output.aka ? `(a.k.a ${output.aka})` : ''}
            </div>
            <div class="familyRank">
                <b>${output.familyRank ? output.familyRank : ''}</b> ${output.rulingFamily ? output.rulingFamily : ''}
            </div>
            ${(output.lightsaber && output.lightsaber.includes('staff')) ? `<div class="lightsaber ${output.lightsaber}"></div><div class="lightsaber ${output.lightsaber}2"></div>`
                : (output.lightsaber && output.lightsaber.includes('cross')) ? `<div class="lightsaber ${output.lightsaber}"></div>`
                : `<div class="lightsaber ${output.lightsaber}"></div>
                <div class="lightsaber ${output.lightsaber2}"></div>
                <div class="lightsaber ${output.lightsaber3}"></div>
                <div class="lightsaber ${output.lightsaber4}"></div>`}
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

console.log(`darths: ${darths.length}`);
console.log(`jedi: uncountable`);
console.log(`rodians: ${(rodianFirst.length * rodianLast.length) + rodianPrebaked.length}`);
console.log(`wookiees: ${wookiees2.length}`);
console.log(`chiss: ${(chissFam.length * chissGiv.length * chissSoc.length) + (chissGiv.length * chissSoc.length)}`);

document.getElementById('newSith').addEventListener('click', () => newName(newSith));
document.getElementById('newJedi').addEventListener('click', () => newName(newJedi));
document.getElementById('newChiss').addEventListener('click', () => newName(newChiss));
document.getElementById('newRodian').addEventListener('click', () => newName(newRodian));
document.getElementById('newWookiee').addEventListener('click', () => newName(newWookiee2));
// document.getElementById('newSullustan').addEventListener('click', () => newName(newSullustan));
document.getElementById('clear').addEventListener('click', () => clearPage());
document.addEventListener('keydown', (event) => {
    if (event.ctrlKey || event.metaKey) return;
    if (event.key === 'S' || event.key === 's') newName(newSith);
    if (event.key === 'J' || event.key === 'j') newName(newJedi);
    if (event.key === 'C' || event.key === 'c') newName(newChiss);
    if (event.key === 'R' || event.key === 'r') newName(newRodian);
    if (event.key === 'W' || event.key === 'w') newName(newWookiee2);
    if (event.key === '9') newName(newSullustan);
    if (event.key === '!') { 
        let dice = newDice(20, true);
        newName(
            dice <= 14 ? newJedi
            : dice <= 18 ? newSith
            : dice <= 19 ? newRodian
            : dice <= 20 ? newWookiee2
            : newChiss
        );
    };
    if (event.key === 'Escape') clearPage();
    return;
});

