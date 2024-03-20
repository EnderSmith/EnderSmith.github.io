"use strict";
const noteNames = {
    flat:  ['C&nbsp;', 'Db', 'D&nbsp;', 'Eb', 'E&nbsp;', 'F&nbsp;', 'Gb', 'G&nbsp;', 'Ab', 'A&nbsp;', 'Bb', 'B '],
    sharp: ['C&nbsp;', 'C#', 'D&nbsp;', 'D#', 'E&nbsp;', 'F&nbsp;', 'F#', 'G&nbsp;', 'G#', 'A&nbsp;', 'A#', 'B ']
};

const normalizeArray = (array) => {
    let currentNormal = 0;
    let bestSum = 0;
    // for (let startNote = 0; startNote < array.length; startNote++) {
    //     let sum = 0;
    //     for (let note = 0; note < array.length; note++) {
    //         let lookupNote = (note + startNote) % array.length;
    //         sum += array[lookupNote] * (array.length - note) * (array.length - note);
    //     }
    //     if (sum > bestSum) {
    //         bestSum = sum;
    //         currentNormal = startNote;
    //     }
    // }
    let output = {
        array: [],
        trans: currentNormal,
        normality: bestSum
    };
    output.array = array.slice(currentNormal);
    for (let i = 0; i < currentNormal; i++) {
        output.array.push(array[i]);
    }
    return output;
};

const transFromArray = (array, trans, useSharps) => {
    let output = '';
    for (let note = 0; note < array.length; note++) {
        const transNote = (note + trans) % array.length;
        output += array[note] ? `&nbsp;${useSharps ? noteNames.sharp[transNote] : noteNames.flat[transNote]}&nbsp;` : '';
    }
    return output;
};

const transName = (trans) => {
    return trans < 10 ? `T-${trans}` : `T${trans}`;
}

const invrsName = (invrs) => {
    return invrs < 10 ? `I-${invrs}` : `I${invrs}`;
}

const allTransFromArray = (array, useSharps, isInverted) => {
    const norm = normalizeArray(array);
    let output = '';
    for (let trans = 0; trans < norm.array.length; trans++) {
        if (!isInverted) {
            output += `${transName(trans)}: ${transFromArray(norm.array, trans, useSharps)}<br>`
        } else {
            output += `${invrsName(trans)}: ${transFromArray(norm.array, trans, useSharps)}<br>`
        }
    }
    return output;
};

const allInvrsFromArray = (array, useSharps) => {
    array.reverse();
    return allTransFromArray(array, useSharps, true);
};

const update = () => {
    let array = [];
    for (let i = 0; i < 12; i++) {
        array.push(document.getElementById(`${i}`).checked ? 1 : 0);
        
    }
    document.getElementById('output').innerHTML = `TRANSPOSITIONS:<br>${allTransFromArray(array)}<br>INVERSIONS:<br>${allInvrsFromArray(array)}`
}