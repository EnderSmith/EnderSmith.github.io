const darths = [
    {
        name: 'Anthelion',
        canonicity:  0,
        derivation: 'grk: Anthelion, against the sun'
    },
    {
        name: 'Nadirius',
        canonicity: 0,
        derivation: 'Nadir'
    },
    {
        name: 'Cisor',
        canonicity: 0,
        derivation: 'Incisor'
    },
    {
        name: 'Cognus',
        canonicity: 2,
        derivation: 'Cognition'
    },
    {
        name: 'Trudor',
        canonicity: 0,
        derivation: 'Intruder'
    },
    {
        name: 'Fernus',
        canonicity: 0,
        derivation: 'Furnace'
    },
    {
        name: 'Vestis',
        canonicity: 0,
        derivation: 'Investment or Vestige or Vestments'
    },
    {
        name: 'Carceret',
        canonicity: 0,
        derivation: 'Incarcerate'
    },
    {
        name: 'Despotes',
        canonicity: 0,
        derivation: 'grk: Despotes, tyrant'
    },
    {
        name: 'Victus',
        canonicity: 0,
        derivation: 'lat: Invictus, undefeated'
    },
    {
        name: 'Cruxis',
        canonicity: 0,
        derivation: 'lat: Crux, cross'
    },
    {
        name: 'Domitus',
        canonicity: 0,
        derivation: 'lat: Domitus, conquered subdued'
    },
    {
        name: 'Dustrius',
        canonicity: 0,
        derivation: 'Industrious'
    },
    {
        name: 'Fensus',
        canonicity: 0,
        derivation: 'lat: Fensus, warded off or struck'
    },
    {
        name: 'Flexus',
        canonicity: 0,
        derivation: 'lat: Flexus, bent or curved'
    },
    {
        name: 'Visus',
        canonicity: 0,
        derivation: 'lat: Visus, vision or sight'
    },
    {
        name: 'Iratus',
        canonicity: 0,
        derivation: 'Irate'
    },
    {
        name: 'Scivious',
        canonicity: 0,
        derivation: 'Mischeivious or skeevy'
    },
    {
        name: 'Scarlot',
        canonicity: 0,
        derivation: 'Scarlet (red) and harlot'
    },
    {
        name: 'Valdis',
        canonicity: 0,
        derivation: 'Vivaldi (composer)'
    },
    {
        name: 'Holst',
        canonicity: 0,
        derivation: 'Holst (composer)'
    },
    {
        name: 'Vanger',
        canonicity: 0,
        derivation: 'Avenger or anger'
    },
    {
        name: 'Tchaiko',
        canonicity: 0,
        derivation: 'Tchaikovsky'
    },
    {
        name: 'Desch',
        canonicity: 0,
        derivation: 'From the musical cryptogram of composer Shostakovich: DSCH'
    },
    {
        name: 'Kaber',
        canonicity: 0,
        derivation: 'Caber, sound'
    },
    {
        name: 'Amadius',
        canonicity: 0,
        derivation: 'Amadeus Mozart (composer)'
    },
    {
        name: 'Hoven',
        canonicity: 0,
        derivation: 'Beethoven (composer)'
    },
    {
        name: 'Shern',
        canonicity: 0,
        derivation: 'Schoenberg (composer)'
    },
    {
        name: 'Ghulus',
        canonicity: 0,
        derivation: ''
    },
    {
        name: 'Bachus',
        canonicity: 0,
        derivation: 'Bach (composer) or Baccus (Roman god of wine and intoxication)'
    },
    {
        name: 'Lydian',
        canonicity: 0,
        derivation: 'Lydian (musical scale/mode)'
    },
    {
        name: 'Dorius',
        canonicity: 0,
        derivation: 'Dorian (musical scale/mode)'
    },
    {
        name: 'Enigmus',
        canonicity: 0,
        derivation: 'Enigma'
    },
    {
        name: 'Phrygian',
        canonicity: 0,
        derivation: 'Phrygian (musical scale/mode)'
    },
    {
        name: 'Ixolyd',
        canonicity: 0,
        derivation: 'Mixolydian (musical scale/mode), influenced by Ixigol/Exegol'
    },
    {
        name: 'Octaton',
        canonicity: 0,
        derivation: 'Octotonic scale (musical scale)'
    },
    {
        name: 'Diminus',
        canonicity: 0,
        derivation: 'Diminished scale (musical scale)'
    },
    {
        name: 'Tetrachor',
        canonicity: 0,
        derivation: 'Tetrachord (building block of musical modes)'
    },
    {
        name: 'Monic',
        canonicity: 0,
        derivation: 'Demonic or Harmonic (musical scale)'
    },
    {
        name: 'Melodius',
        canonicity: 0,
        derivation: 'Melodious'
    },
    {
        name: 'Stravin',
        canonicity: 0,
        derivation: 'Stravinsky (composer)'
    },
    {
        name: 'Cravenous',
        canonicity: 0,
        derivation: 'Craven and ravenous'
    },
    {
        name: 'Ravus',
        canonicity: 0,
        derivation: 'Rave or raven or ravage'
    },
    {
        name: 'Belius',
        canonicity: 0,
        derivation: 'Sibelius (composer)'
    },
    {
        name: 'Zemlin',
        canonicity: 0,
        derivation: 'Zemlinski (composer)'
    },
    {
        name: 'Roko',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Korsak',
        canonicity: 0,
        derivation: 'Rimsky-Korsakov (composer)'
    },
    {
        name: 'Rheif',
        canonicity: 0,
        derivation: 'Ralph Vaughan Williams'
    },
    {
        name: 'Koldrus',
        canonicity: 0,
        derivation: 'Cuckoldress or cuckoldry'
    },
    {
        name: 'Pardus',
        canonicity: 0,
        derivation: 'Scientific name for Leopard'
    },
    {
        name: 'Tigris',
        canonicity: 0,
        derivation: 'Scientific name for Tiger'
    },
    {
        name: 'Felis',
        canonicity: 0,
        derivation: 'Scientific genus of cats'
    },
    {
        name: 'Chaus',
        canonicity: 0,
        derivation: 'Chaos'
    },
    {
        name: 'Zenoch',
        canonicity: 0,
        derivation: 'Zenoch or Zenock, Book of Mormon prophet'
    },
    {
        name: 'Deous',
        canonicity: 0,
        derivation: 'Hideous or lat: Deus, god'
    },
    {
        name: 'Farious',
        canonicity: 0,
        derivation: 'Multifarious'
    },
    {
        name: 'Trocious',
        canonicity: 0,
        derivation: 'Attrocious'
    },
    {
        name: 'Pravitous',
        canonicity: 0,
        derivation: 'Depraved'
    },
    {
        name: 'Flagitous',
        canonicity: 0,
        derivation: 'Flagitious'
    },
    {
        name: 'Zastor',
        canonicity: 0,
        derivation: 'Disaster'
    },
    {
        name: 'Brute',
        canonicity: 0,
        derivation: 'Brute'
    },
    {
        name: 'Bane',
        canonicity: 3,
        derivation: 'Bane'
    },
    {
        name: 'Desolous',
        canonicity: 3,
        derivation: 'Desolate'
    },
    {
        name: 'Krall',
        canonicity: 1,
        derivation: 'sounds cool'
    },
    {
        name: 'Skrye',
        canonicity: 1,
        derivation: 'Scry'
    },
    {
        name: 'Guile',
        canonicity: 2,
        derivation: 'Guile'
    },
    {
        name: 'Enormous',
        canonicity: 0,
        derivation: 'Enormous'
    },
    {
        name: 'Bolical',
        canonicity: 0,
        derivation: 'Diabolical'
    },
    {
        name: 'Beast',
        canonicity: 0,
        derivation: 'Beast'
    },
    {
        name: 'Viol',
        canonicity: 0,
        derivation: 'Vile or viol (instrument)'
    },
    {
        name: 'Bor',
        canonicity: 0,
        derivation: 'Bore?'
    },
    {
        name: 'Hemoth',
        canonicity: 0,
        derivation: 'Behemoth'
    },
    {
        name: 'Heth',
        canonicity: 0,
        derivation: 'sounds cool, hell and death'
    },
    {
        name: 'Crimous',
        canonicity: 0,
        derivation: 'Crime'
    },
    {
        name: 'Viathan',
        canonicity: 0,
        derivation: 'Leviathan'
    },
    {
        name: 'Vader',
        canonicity: 3,
        derivation: 'Invader'
    },
    {
        name: 'Sidious',
        canonicity: 3,
        derivation: 'Insidious'
    },
    {
        name: 'Scabrous',
        canonicity: 0,
        derivation: 'Scabrous'
    },
    {
        name: 'Nix',
        canonicity: 0,
        derivation: 'Nix'
    },
    {
        name: 'Chimerant',
        canonicity: 0,
        derivation: 'Chimera'
    },
    {
        name: 'Spectrus',
        canonicity: 0,
        derivation: 'Spectre or spectral'
    },
    {
        name: 'Rageous',
        canonicity: 0,
        derivation: 'Outrageous and rage'
    },
    {
        name: 'Whelm',
        canonicity: 0,
        derivation: 'Overwhelm or whelm'
    },
    {
        name: 'Ignis',
        canonicity: 0,
        derivation: 'lat: Ignis, fire or flame'
    },
    {
        name: 'Ceptus',
        canonicity: 0,
        derivation: 'Deception and scepter'
    },
    {
        name: 'Lacious',
        canonicity: 0,
        derivation: 'Salacious'
    },
    {
        name: 'Tazimous',
        canonicity: 0,
        derivation: '???'
    },
    {
        name: 'Vaporous',
        canonicity: 0,
        derivation: 'Vaporous'
    },
    {
        name: 'Tern',
        canonicity: 0,
        derivation: 'Intern or eternal'
    },
    {
        name: 'Digo',
        canonicity: 0,
        derivation: '???'
    },
    {
        name: 'Letch',
        canonicity: 0,
        derivation: 'Lecherous and wretch or retch'
    },
    {
        name: 'Hibitor',
        canonicity: 0,
        derivation: 'Inhibitor'
    },
    {
        name: 'Nocent',
        canonicity: 0,
        derivation: 'Innocent'
    },
    {
        name: 'Crement',
        canonicity: 0,
        derivation: 'Increment'
    },
    {
        name: 'Tersect',
        canonicity: 0,
        derivation: 'Intersect'
    },
    {
        name: 'Jurious',
        canonicity: 0,
        derivation: 'Injurious'
    },
    {
        name: 'Ventor',
        canonicity: 0,
        derivation: 'Inventor'
    },
    {
        name: 'Carnate',
        canonicity: 0,
        derivation: 'Incarnate'
    },
    {
        name: 'Carnous',
        canonicity: 0,
        derivation: 'Carnivore'
    },
    {
        name: 'Dulgeous',
        canonicity: 0,
        derivation: 'Indulgent'
    },
    {
        name: 'Fector',
        canonicity: 0,
        derivation: 'Infector'
    },
    {
        name: 'Sular',
        canonicity: 0,
        derivation: 'Insular'
    },
    {
        name: 'Terim',
        canonicity: 0,
        derivation: 'Interim'
    },
    {
        name: 'Zade',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Zound',
        canonicity: 0,
        derivation: 'Zounds, sounds cool'
    },
    {
        name: 'Cipher',
        canonicity: 0,
        derivation: 'Cipher'
    },
    {
        name: 'Crypt',
        canonicity: 0,
        derivation: 'Crypt or decrypt'
    },
    {
        name: 'Null',
        canonicity: 0,
        derivation: 'Null'
    },
    {
        name: 'Nought',
        canonicity: 0,
        derivation: 'Nought'
    },
    {
        name: 'Naught',
        canonicity: 0,
        derivation: 'Naught'
    },
    {
        name: 'Vigor',
        canonicity: 0,
        derivation: 'Vigor or invigorate'
    },
    {
        name: 'Cault',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Phyrious',
        canonicity: 0,
        derivation: 'Fire and furious'
    },
    {
        name: 'Furious',
        canonicity: 0,
        derivation: 'Furious'
    },
    {
        name: 'Emminous',
        canonicity: 0,
        derivation: 'Emminence'
    },
    {
        name: 'Voker',
        canonicity: 0,
        derivation: 'Invoker'
    },
    {
        name: 'Quire',
        canonicity: 0,
        derivation: 'Inquire'
    },
    {
        name: 'Spire',
        canonicity: 0,
        derivation: 'Spire'
    },
    {
        name: 'Rive',
        canonicity: 0,
        derivation: 'Rive'
    },
    {
        name: 'Blathe',
        canonicity: 0,
        derivation: 'Blade'
    },
    {
        name: 'Murthe',
        canonicity: 0,
        derivation: 'Murder'
    },
    {
        name: 'Psythe',
        canonicity: 0,
        derivation: 'Psycho and scythe'
    },
    {
        name: 'Staber',
        canonicity: 0,
        derivation: 'Stabber'
    },
    {
        name: 'Dagous',
        canonicity: 0,
        derivation: 'Dagger'
    },
    {
        name: 'Vagueus',
        canonicity: 0,
        derivation: 'Vague'
    },
    {
        name: 'Plagueis',
        canonicity: 3,
        derivation: 'Plague'
    },
    {
        name: 'Mageus',
        canonicity: 0,
        derivation: 'Mage'
    },
    {
        name: 'Kyther',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Ryther',
        canonicity: 0,
        derivation: 'Writher'
    },
    {
        name: 'Wreve',
        canonicity: 0,
        derivation: 'Reave'
    },
    {
        name: 'Reave',
        canonicity: 2,
        derivation: 'Reave'
    },
    {
        name: 'Rauder',
        canonicity: 2,
        derivation: 'Marauder'
    },
    {
        name: 'Sakia',
        canonicity: 1,
        derivation: '???'
    },
    {
        name: 'Revan',
        canonicity: 3,
        derivation: 'Revanchist'
    },
    {
        name: 'Rivan',
        canonicity: 2,
        derivation: '???'
    },
    {
        name: 'Plosive',
        canonicity: 0,
        derivation: 'Implosive or explosive or possibly plosive'
    },
    {
        name: 'Bollot',
        canonicity: 0,
        derivation: 'Bullet'
    },
    {
        name: 'Krathe',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Rothe',
        canonicity: 0,
        derivation: 'sounds cool, wroth'
    },
    {
        name: 'Nachus',
        canonicity: 0,
        derivation: '???'
    },
    {
        name: 'Prive',
        canonicity: 0,
        derivation: 'Deprive'
    },
    {
        name: 'Siccant',
        canonicity: 0,
        derivation: 'Desiccant'
    },
    {
        name: 'Onus',
        canonicity: 0,
        derivation: 'Onus'
    },
    {
        name: 'Opus',
        canonicity: 0,
        derivation: 'Opus'
    },
    {
        name: 'Drought',
        canonicity: 0,
        derivation: 'Drought'
    },
    // {
    //     name: 'Faminous',
    //     canonicity: 0,
    //     derivation: 'Famine'
    // },
    {
        name: 'Coupage',
        canonicity: 0,
        derivation: 'Decoupage'
    },
    {
        name: 'Exterous',
        canonicity: 0,
        derivation: 'Dextrous'
    },
    {
        name: 'Ixigol',
        canonicity: 0,
        derivation: 'Ixigol/Exegol (Sith planet), Exegolic'
    },
    {
        name: 'Nizer',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Risive',
        canonicity: 0,
        derivation: 'Derisive'
    },
    {
        name: 'Hexagator',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Hexus',
        canonicity: 0,
        derivation: 'Hex and nexus'
    },
    {
        name: 'Zardous',
        canonicity: 0,
        derivation: 'Hazardous'
    },
    {
        name: 'Niabol',
        canonicity: 0,
        derivation: 'Exegolic'
    },
    {
        name: 'Corous',
        canonicity: 0,
        derivation: 'Rancorous'
    },
    {
        name: 'Ceiver',
        canonicity: 0,
        derivation: 'Deceiver'
    },
    {
        name: 'Vious',
        canonicity: 0,
        derivation: 'Devious'
    },
    {
        name: 'Modus',
        canonicity: 0,
        derivation: 'Modus Operandi'
    },
    {
        name: 'Vilerous',
        canonicity: 0,
        derivation: 'Devilry'
    },
    {
        name: 'Zire',
        canonicity: 0,
        derivation: 'Desire'
    },
    {
        name: 'Zirous',
        canonicity: 0,
        derivation: 'Desirous'
    },
    {
        name: 'Luxor',
        canonicity: 0,
        derivation: 'Deluxe'
    },
    {
        name: 'Miser',
        canonicity: 0,
        derivation: 'Miser'
    },
    {
        name: 'Ixis',
        canonicity: 0,
        derivation: 'Exegolic'
    },
    {
        name: 'Fang',
        canonicity: 0,
        derivation: 'Fang'
    },
    {
        name: 'Vault',
        canonicity: 0,
        derivation: 'Vault'
    },
    {
        name: 'Hault',
        canonicity: 0,
        derivation: 'Halt and vault'
    },
    {
        name: 'Gaunt',
        canonicity: 0,
        derivation: 'Gaunt'
    },
    {
        name: 'Skult',
        canonicity: 0,
        derivation: 'Skull and skulk and cult'
    },
    {
        name: 'Skulk',
        canonicity: 0,
        derivation: 'Skulk'
    },
    {
        name: 'Pulver',
        canonicity: 0,
        derivation: 'Pulverize'
    },
    {
        name: 'Haulk',
        canonicity: 0,
        derivation: 'sounds cool, hulk'
    },
    {
        name: 'Stachious',
        canonicity: 0,
        derivation: 'Mustachioed'
    },
    {
        name: 'Eaver',
        canonicity: 0,
        derivation: '???'
    },
    {
        name: 'Reather',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Trathe',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Mur',
        canonicity: 0,
        derivation: 'Murder'
    },
    {
        name: 'Xoxus',
        canonicity: 0,
        derivation: 'Exegolic'
    },
    {
        name: 'Noxus',
        canonicity: 0,
        derivation: 'Noxious'
    },
    {
        name: 'Feth',
        canonicity: 0,
        derivation: 'Faith'
    },
    {
        name: 'Nazer',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Deco',
        canonicity: 0,
        derivation: 'Art deco'
    },
    {
        name: 'Faminus',
        canonicity: 0,
        derivation: 'Famine'
    },
    {
        name: 'Phenomus',
        canonicity: 0,
        derivation: 'Phenomenon'
    },
    {
        name: 'Brood',
        canonicity: 0,
        derivation: 'Brood, sounds cool'
    },
    {
        name: 'Tyrious',
        canonicity: 0,
        derivation: 'Mysterious'
    },
    {
        name: 'Tyranus',
        canonicity: 3,
        derivation: 'lat: Tyranus, tyrant'
    },
    {
        name: 'Stegos',
        canonicity: 0,
        derivation: 'Stegosaurus (dinosaur)'
    },
    {
        name: 'Ceratus',
        canonicity: 0,
        derivation: 'Ceratosaurus (dinosaur)'
    },
    {
        name: 'Velocis',
        canonicity: 0,
        derivation: 'Velocity or velocirpator (dinosaur)'
    },
    {
        name: 'Zenos',
        canonicity: 0,
        derivation: 'Therizinosaurus (dinosaur)'
    },
    {
        name: 'Gantos',
        canonicity: 0,
        derivation: 'Gigantosaurus (dinosaur)'
    },
    {
        name: 'Sognathus',
        canonicity: 0,
        derivation: 'Compsognathus (dinosaur)'
    },
    {
        name: 'Ryonyx',
        canonicity: 0,
        derivation: 'Baryonyx (dinosaur)'
    },
    {
        name: 'Tyros',
        canonicity: 0,
        derivation: 'Batyrosaurus (dinosaur)'
    },
    {
        name: 'Karnos',
        canonicity: 0,
        derivation: 'Carnotaurus (dinosaur)'
    },
    {
        name: 'Rythos',
        canonicity: 0,
        derivation: 'Corythosaurus'
    },
    {
        name: 'Cavernous',
        canonicity: 0,
        derivation: 'Cavernous'
    },
    {
        name: 'Graveous',
        canonicity: 0,
        derivation: 'Grave'
    },
    {
        name: 'Draconyx',
        canonicity: 0,
        derivation: 'Draconian and onyx'
    },
    {
        name: 'Skarious',
        canonicity: 0,
        derivation: 'Scary'
    },
    {
        name: 'Strave',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Nodon',
        canonicity: 0,
        derivation: 'Iguanodon (dinosaur)'
    },
    {
        name: 'Kol',
        canonicity: 0,
        derivation: 'sounds cool, coal'
    },
    {
        name: 'Kosmious',
        canonicity: 0,
        derivation: 'Cosmic'
    },
    {
        name: 'Tundus',
        canonicity: 0,
        derivation: '???'
    },
    {
        name: 'Salivik',
        canonicity: 0,
        derivation: 'Saliva'
    },
    {
        name: 'Zannah',
        canonicity: 3,
        derivation: 'Possibly heb: Zanah, fornication; or Zânã, Romanian equivalent to the Greek Charities'
    },
    {
        name: 'Zeggah',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Zader',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Juliek',
        canonicity: 0,
        derivation: 'Juliet'
    },
    {
        name: 'Phobos',
        canonicity: 3,
        derivation: 'grk: Phobos, fear'
    },
    {
        name: 'Caldoth',
        canonicity: 1,
        derivation: 'Caldera'
    },
    {
        name: 'Arachnis',
        canonicity: 0,
        derivation: 'Arachnid'
    },
    {
        name: 'Siberus',
        canonicity: 1,
        derivation: 'Siberia?'
    },
    {
        name: 'Sanguis',
        canonicity: 1,
        derivation: 'lat: Sanguis, blood'
    },
    {
        name: 'Vectivus',
        canonicity: 2,
        derivation: 'Invective'
    },
    {
        name: 'Shaa',
        canonicity: 1,
        derivation: '???'
    },
    {
        name: 'Venamis',
        canonicity: 2,
        derivation: 'Venomous'
    },
    {
        name: 'Kiah',
        canonicity: 0,
        derivation: 'Amalickiah, Book of Mormon warlord'
    },
    {
        name: 'Maleval',
        canonicity: 2,
        derivation: 'Malevolent'
    },
    {
        name: 'Malak',
        canonicity: 2,
        derivation: 'Malice'
    },
    {
        name: 'Jerra',
        canonicity: 2,
        derivation: '???'
    },
    {
        name: 'Stryfe',
        canonicity: 2,
        derivation: 'Strife'
    },
    {
        name: 'Stabi',
        canonicity: 0,
        derivation: 'Stab or Stability'
    },
    {
        name: 'Pulver',
        canonicity: 0,
        derivation: 'Pulverize'
    },
    {
        name: 'Havok',
        canonicity: 2,
        derivation: 'Havoc'
    },
    {
        name: 'Vok',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Voker',
        canonicity: 0,
        derivation: 'Invoker'
    },
    {
        name: 'Exorak',
        canonicity: 0,
        derivation: 'sounds cool, Exegolic'
    },
    {
        name: 'Segre',
        canonicity: 0,
        derivation: 'Segregate'
    },
    {
        name: 'Noctyss',
        canonicity: 1,
        derivation: 'lat: Noctis, of the night'
    },
    {
        name: 'Nix',
        canonicity: 0,
        derivation: 'Nix'
    },
    {
        name: 'Nihilus',
        canonicity: 2,
        derivation: 'Nihilist'
    },
    {
        name: 'Balatros',
        canonicity: 0,
        derivation: 'Balatros (videogame)'
    },
    {
        name: 'Gluxigol',
        canonicity: 0,
        derivation: 'Exegolic'
    },
    {
        name: 'Tessera',
        canonicity: 0,
        derivation: 'Tesseract'
    },
    {
        name: 'Ghauler',
        canonicity: 0,
        derivation: 'Gall'
    },
    {
        name: 'Hagueis',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Ramage',
        canonicity: 2,
        derivation: 'Rampage and damage'
    },
    {
        name: 'Caedus',
        canonicity: 2,
        derivation: 'lat: Caederes, to cut or fell'
    },
    {
        name: 'Acheron',
        canonicity: 0,
        derivation: 'grk: Acheron, river of woe in the underworld (considered for Darth Caedus)'
    },
    {
        name: 'Judicar',
        canonicity: 0,
        derivation: 'lat: Judicar, judge (considered for Darth Caedus)'
    },
    {
        name: 'Paxis',
        canonicity: 0,
        derivation: 'lat: Pax, peace (considered for Darth Caedus)'
    },
    {
        name: 'Taral',
        canonicity: 0,
        derivation: 'ancient Sith (considered for Darth Caedus)'
    },
    {
        name: 'Theteis',
        canonicity: 0,
        derivation: 'Aesthete'
    },
    {
        name: 'Nithopsis',
        canonicity: 0,
        derivation: 'Ornithopsis (dinosaur)'
    },
    {
        name: 'Lokist',
        canonicity: 0,
        derivation: 'Locust or Loki'
    },
    {
        name: 'Zhevare',
        canonicity: 0,
        derivation: 'Inspector Javert (Les Mis)'
    },
    {
        name: 'Raptos',
        canonicity: 0,
        derivation: 'Raptor (dinosaur or bird)'
    },
    {
        name: 'Pyrus',
        canonicity: 0,
        derivation: 'grk: Pyro, fire'
    },
    {
        name: 'Arcidius',
        canonicity: 0,
        derivation: 'Arcid (bow or arch shaped)'
    },
    {
        name: 'Phaganax',
        canonicity: 0,
        derivation: 'Saurophaganax (dinosaur)'
    },
    {
        name: 'Thagomus',
        canonicity: 0,
        derivation: 'Thagomizer (dinosaur anatomy)'
    },
    {
        name: 'Stavin',
        canonicity: 0,
        derivation: 'Tastavinsaurus (dinosaur)'
    },
    {
        name: 'Stalis',
        canonicity: 0,
        derivation: '???'
    },
    {
        name: 'Titanous',
        canonicity: 0,
        derivation: 'Titan or Titanosaur'
    },
    {
        name: 'Venan',
        canonicity: 0,
        derivation: '???'
    },
    {
        name: 'Xixian',
        canonicity: 0,
        derivation: 'Xixianykus (dinosaur)'
    },
    {
        name: 'Sydon',
        canonicity: 0,
        derivation: 'sounds cool?'
    },
    {
        name: 'Stygeous',
        canonicity: 0,
        derivation: 'Stygian'
    },
    {
        name: 'Tuberous',
        canonicity: 0,
        derivation: 'Tuberous'
    },
    {
        name: 'Kanderous',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Thelix',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Leotrious',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Buke',
        canonicity: 0,
        derivation: 'Rebuke'
    },
    {
        name: 'Ilex',
        canonicity: 0,
        derivation: 'Ilex Aquifolium (poisonous plant)'
    },
    {
        name: 'Mandrak',
        canonicity: 0,
        derivation: 'Mandrake (poisonous plant)'
    },
    {
        name: 'Quellus',
        canonicity: 1,
        derivation: 'Quell'
    },
    {
        name: 'Whyrm',
        canonicity: 0,
        derivation: 'Wyrm'
    },
    {
        name: 'Rhodious',
        canonicity: 0,
        derivation: 'Rhododendron (poisonous plant)'
    },
    {
        name: 'Strychnous',
        canonicity: 0,
        derivation: 'Strychnos nux-vomica (poisonous plant)'
    },
    {
        name: 'Taxus',
        canonicity: 0,
        derivation: 'Taxus (poisonous plant)'
    },
    {
        name: 'Maxus',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Naber',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Daghor',
        canonicity: 0,
        derivation: 'Dagger'
    },
    {
        name: 'Foxus',
        canonicity: 0,
        derivation: 'Fox'
    },
    {
        name: 'Noxus',
        canonicity: 0,
        derivation: 'Noxious'
    },
    {
        name: 'Voxious',
        canonicity: 0,
        derivation: 'Noxious and Vox (voice)'
    },
    {
        name: 'Chlostros',
        canonicity: 0,
        derivation: 'Chlostrophobia'
    },
    {
        name: 'Gob',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Cnidar',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Chiron',
        canonicity: 0,
        derivation: 'grk: Kheiron, hand or surgeon'
    },
    {
        name: 'Fangor',
        canonicity: 0,
        derivation: 'Fangorious'
    },
    {
        name: 'Gorious',
        canonicity: 0,
        derivation: 'Fangorious and gore'
    },
    {
        name: 'Plicitous',
        canonicity: 0,
        derivation: 'Duplicitous'
    },
    {
        name: 'Sacious',
        canonicity: 0,
        derivation: 'Sate'
    },
    {
        name: 'Grever',
        canonicity: 0,
        derivation: 'Greive'
    },
    {
        name: 'Erratus',
        canonicity: 0,
        derivation: 'Erratic'
    },
    {
        name: 'Tathe',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Therak',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Kymion',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Crazha',
        canonicity: 0,
        derivation: 'sounds cool, crazy'
    },
    {
        name: 'Psadis',
        canonicity: 0,
        derivation: 'Sadist'
    },
    {
        name: 'Masoch',
        canonicity: 0,
        derivation: 'Masochist'
    },
    {
        name: 'Dominix',
        canonicity: 0,
        derivation: 'Dominatrix'
    },
    {
        name: 'Malthux',
        canonicity: 0,
        derivation: 'Malthusian'
    },
    {
        name: 'Whizer',
        canonicity: 0,
        derivation: 'Wiser'
    },
    {
        name: 'Rhoth',
        canonicity: 0,
        derivation: 'Wroth'
    },
    {
        name: 'Lukrous',
        canonicity: 0,
        derivation: 'Lucrous'
    },
    {
        name: 'Momin',
        canonicity: 1,
        derivation: '???'
    },
    {
        name: 'Ghrecheous',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Cherous',
        canonicity: 0,
        derivation: 'Lecherous'
    },
    {
        name: 'Iki',
        canonicity: 0,
        derivation: 'Icky (George Lucas proposed "Darth Icky" for Force Unleashed), Exegolic'
    },
    {
        name: 'Ensanious',
        canonicity: 0,
        derivation: 'Insane (George Lucas proposed "Darth Insanius" for Force Unleashed)'
    },
    {
        name: 'Izig',
        canonicity: 0,
        derivation: 'Exegolic'
    },
    {
        name: 'Motocrous',
        canonicity: 0,
        derivation: 'Motocross'
    },
    {
        name: 'Mercilous',
        canonicity: 0,
        derivation: 'Merciless'
    },
    {
        name: 'Bellus',
        canonicity: 0,
        derivation: 'lat: Bellus, beautiful or lat: Bellum, war'
    },
    {
        name: 'Kilge',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Natrix',
        canonicity: 0,
        derivation: 'Dominatrix or matrix'
    },
    {
        name: 'Fessor',
        canonicity: 0,
        derivation: 'Confessor'
    },
    {
        name: 'Crazus',
        canonicity: 0,
        derivation: 'Crazy'
    },
    {
        name: 'Vanet',
        canonicity: 0,
        derivation: 'Vanity'
    },
    {
        name: 'Evious',
        canonicity: 0,
        derivation: 'Devious'
    },
    {
        name: 'Makina',
        canonicity: 0,
        derivation: 'lat: Machina, machine'
    },
    {
        name: 'Malachor',
        canonicity: 0,
        derivation: 'Malachor (Sith planet)'
    },
    {
        name: 'Moraband',
        canonicity: 0,
        derivation: 'Moraband (Sith planet)'
    },
    {
        name: 'Korribus',
        canonicity: 0,
        derivation: 'Korriban (Sith planet)'
    },
    {
        name: 'Ziost',
        canonicity: 0,
        derivation: 'Ziost (Sith planet)'
    },
    {
        name: 'Thulus',
        canonicity: 0,
        derivation: 'Cthulu (Lovecraft)'
    },
    {
        name: 'Malice',
        canonicity: 0,
        derivation: 'Malice'
    },
    {
        name: 'Rancorous',
        canonicity: 0,
        derivation: 'Rancorous'
    },
    {
        name: 'Vitrious',
        canonicity: 0,
        derivation: 'Vitriol'
    },
    {
        name: 'Voord',
        canonicity: 1,
        derivation: 'sounds cool'
    },
    {
        name: 'Wrend',
        canonicity: 3,
        derivation: 'Rend'
    },
    {
        name: 'Terre',
        canonicity: 0,
        derivation: 'Tear or terror'
    },
    {
        name: 'Ghast',
        canonicity: 0,
        derivation: 'Ghast'
    },
    {
        name: 'Hellous',
        canonicity: 0,
        derivation: 'Hell'
    },
    {
        name: 'Severn',
        canonicity: 0,
        derivation: 'Sever or severe'
    },
    {
        name: 'Aggrus',
        canonicity: 0,
        derivation: 'Aggro'
    },
    {
        name: 'Phobious',
        canonicity: 0,
        derivation: 'Phobia'
    },
    {
        name: 'Xoxus',
        canonicity: 0,
        derivation: ''
    },
    {
        name: 'Misophsis',
        canonicity: 0,
        derivation: 'grk: Miso, hatred'
    },
    {
        name: 'Bhorr',
        canonicity: 0,
        derivation: 'Bore'
    },
    {
        name: 'Stilitous',
        canonicity: 0,
        derivation: 'sounds cool?'
    },
    {
        name: 'Vidious',
        canonicity: 0,
        derivation: 'sounds cool, video'
    },
    {
        name: 'Durzin',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Vicius',
        canonicity: 0,
        derivation: 'Viscious'
    },
    {
        name: 'Spidure',
        canonicity: 0,
        derivation: 'Spider'
    },
    {
        name: 'Avaris',
        canonicity: 0,
        derivation: 'Avarice'
    },
    {
        name: 'Vengeous',
        canonicity: 0,
        derivation: 'Vengeance'
    },
    {
        name: 'Murdrus',
        canonicity: 0,
        derivation: 'Murderous'
    },
    {
        name: 'Derus',
        canonicity: 0,
        derivation: 'Murderous'
    },
    {
        name: 'Voral',
        canonicity: 0,
        derivation: 'lat: Vorare, to eat'
    },
    {
        name: 'Vour',
        canonicity: 0,
        derivation: 'Devour'
    },
    {
        name: 'Pacious',
        canonicity: 0,
        derivation: 'Rapacious'
    },
    {
        name: 'Hensibol',
        canonicity: 0,
        derivation: 'Reprehensible, Exegolic'
    },
    {
        name: 'Thetik',
        canonicity: 0,
        derivation: 'Pathetic'
    },
    {
        name: 'Sideret',
        canonicity: 0,
        derivation: 'Inconsiderate'
    },
    {
        name: 'Torius',
        canonicity: 0,
        derivation: 'Victorious'
    },
    {
        name: 'Cynik',
        canonicity: 0,
        derivation: 'Cynic'
    },
    {
        name: 'Spiser',
        canonicity: 0,
        derivation: 'Despiser'
    },
    {
        name: 'Rocious',
        canonicity: 0,
        derivation: 'Attrocious'
    },
    {
        name: 'Livious',
        canonicity: 0,
        derivation: 'Oblivious'
    },
    {
        name: 'Vulgol',
        canonicity: 0,
        derivation: 'Vulgar, Exegolic'
    },
    {
        name: 'Verlor',
        canonicity: 0,
        derivation: 'Overlord'
    },
    {
        name: 'Gressor',
        canonicity: 0,
        derivation: 'Aggressor'
    },
    {
        name: 'Tacker',
        canonicity: 0,
        derivation: 'Attacker'
    },
    {
        name: 'Monger',
        canonicity: 0,
        derivation: 'Warmonger or fearmonger or monger'
    },
    {
        name: 'Cader',
        canonicity: 0,
        derivation: 'sounds cool?'
    },
    {
        name: 'Sailant',
        canonicity: 0,
        derivation: 'Assailant'
    },
    {
        name: 'Azgulus',
        canonicity: 0,
        derivation: 'sounds cool, Exegolic'
    },
    {
        name: 'Sequious',
        canonicity: 0,
        derivation: 'Obsequious'
    },
    {
        name: 'Volter',
        canonicity: 0,
        derivation: 'Revolt or revolting'
    },
    {
        name: 'Ghastus',
        canonicity: 0,
        derivation: 'Ghastly'
    },
    {
        name: 'Kleptus',
        canonicity: 0,
        derivation: 'grk: Klepto, to steal'
    },
    {
        name: 'Bezzler',
        canonicity: 0,
        derivation: 'Embezzler'
    },
    {
        name: 'Tormant',
        canonicity: 0,
        derivation: 'Torment'
    },
    {
        name: 'Xiete',
        canonicity: 0,
        derivation: '???'
    },
    {
        name: 'Panik',
        canonicity: 0,
        derivation: 'Panic'
    },
    {
        name: 'Cern',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Qualm',
        canonicity: 0,
        derivation: 'Qualm'
    },
    {
        name: 'Lamitous',
        canonicity: 0,
        derivation: 'Calamitous'
    },
    {
        name: 'Thorn',
        canonicity: 0,
        derivation: 'Thorn'
    },
    {
        name: 'Thork',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Thorik',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Thoro',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Zorn',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Zorrious',
        canonicity: 0,
        derivation: 'sound cool'
    },
    {
        name: 'Zorus',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Vorus',
        canonicity: 0,
        derivation: 'Carnivorous'
    },
    {
        name: 'Vorn',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Vorious',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Vengol',
        canonicity: 0,
        derivation: 'Exegolic'
    },
    {
        name: 'Onus',
        canonicity: 0,
        derivation: 'Onus'
    },
    {
        name: 'Opus',
        canonicity: 0,
        derivation: 'Opus'
    },
    // {
    //     name: 'Drought',
    //     canonicity: 0,
    //     derivation: 'Drought'
    // },
    {
        name: 'Rhetan',
        canonicity: 0,
        derivation: 'Threaten'
    },
    {
        name: 'Tenebrous',
        canonicity: 3,
        derivation: 'Tenebrous'
    },
    {
        name: 'Anguish',
        canonicity: 0,
        derivation: 'Anguish'
    },
    {
        name: 'Pain',
        canonicity: 0,
        derivation: 'Pain'
    },
    {
        name: 'Avalanx',
        canonicity: 0,
        derivation: 'Avalanche, phalanx'
    },
    {
        name: 'Astrophe',
        canonicity: 0,
        derivation: 'Catastrophe'
    },
    {
        name: 'Bider',
        canonicity: 0,
        derivation: 'Biding time'
    },
    {
        name: 'Stalker',
        canonicity: 0,
        derivation: 'Stalker'
    },
    {
        name: 'Charrik',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Raastbit',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Tesque',
        canonicity: 0,
        derivation: 'Grotesque'
    },
    {
        name: 'Thetriarch',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Driax',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Furrow',
        canonicity: 0,
        derivation: 'Furrow'
    },
    {
        name: 'Exoth',
        canonicity: 0,
        derivation: 'Exegolic'
    },
    {
        name: 'Goligol',
        canonicity: 0,
        derivation: 'Exegolic'
    },
    {
        name: 'Frauzt',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Staurm',
        canonicity: 0,
        derivation: 'Storm'
    },
    {
        name: 'Gaal',
        canonicity: 0,
        derivation: 'Gall'
    },
    {
        name: 'Dascious',
        canonicity: 0,
        derivation: 'Audacious'
    },
    {
        name: 'Hyve',
        canonicity: 0,
        derivation: 'Hive'
    },
    {
        name: 'Swyrm',
        canonicity: 0,
        derivation: 'Swarm, wyrm'
    },
    {
        name: 'Immolus',
        canonicity: 0,
        derivation: 'Immolate'
    },
    {
        name: 'Burninator',
        canonicity: 0,
        derivation: 'Trogdor, the Burninator'
    },
    {
        name: 'Jeerius',
        canonicity: 0,
        derivation: 'Jeer, serious, sounds cool'
    },
    {
        name: 'Machious',
        canonicity: 0,
        derivation: 'Machinations'
    },
    {
        name: 'Kophonos',
        canonicity: 0,
        derivation: 'Cacophony'
    },
    {
        name: 'Pandimous',
        canonicity: 0,
        derivation: 'Pandemonium'
    },
    {
        name: 'Laulus',
        canonicity: 0,
        derivation: 'Lawless'
    },
    {
        name: 'Scaaf',
        canonicity: 0,
        derivation: 'Scoff'
    },
    {
        name: 'Mizri',
        canonicity: 0,
        derivation: 'Misery'
    },
    {
        name: 'Sondius',
        canonicity: 0,
        derivation: '???'
    },
    {
        name: 'Norrid',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Lurryd',
        canonicity: 0,
        derivation: 'Lurid'
    },
    {
        name: 'Othlyss',
        canonicity: 0,
        derivation: '???'
    },
    {
        name: 'Xistent',
        canonicity: 0,
        derivation: 'Existential'
    },
    {
        name: 'Purient',
        canonicity: 0,
        derivation: 'Purient'
    },
    {
        name: 'Prudent',
        canonicity: 0,
        derivation: 'Prudent'
    },
    {
        name: 'Quaver',
        canonicity: 0,
        derivation: 'Quaver'
    },
    {
        name: 'Wrestus',
        canonicity: 0,
        derivation: 'Wrest'
    },
    {
        name: 'Ragnorus',
        canonicity: 0,
        derivation: 'Ragnarok (Norse mythology)'
    },
    {
        name: 'Clypsus',
        canonicity: 0,
        derivation: 'Apocalypse or Eclypse'
    },
    {
        name: 'Sykniss',
        canonicity: 0,
        derivation: 'Sickness'
    },
    {
        name: 'Laavlyss',
        canonicity: 0,
        derivation: 'Loveless'
    },
    {
        name: 'Taver',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Ravik',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Ravik',
        canonicity: 1,
        derivation: '???'
    },
    {
        name: 'Ultix',
        canonicity: 0,
        derivation: 'Ultimate, sounds cool'
    },
    {
        name: 'Harlus',
        canonicity: 0,
        derivation: 'Harlot'
    },
    {
        name: 'Vikariot',
        canonicity: 0,
        derivation: 'Vicarious'
    },
    {
        name: 'Viber',
        canonicity: 0,
        derivation: 'Viber'
    },
    {
        name: 'Wasteous',
        canonicity: 0,
        derivation: 'Waste'
    },
    {
        name: 'Pterassus',
        canonicity: 0,
        derivation: 'Pterosaur (prehistoric creature)'
    },
    {
        name: 'Xadious',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Thraxus',
        canonicity: 0,
        derivation: 'Anthrax, sounds cool'
    },
    {
        name: 'Yuxer',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Draver',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Zuvre',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Ferion',
        canonicity: 0,
        derivation: 'Luciferian'
    },
    {
        name: 'Habeus',
        canonicity: 0,
        derivation: 'lat: Habeus Corpus, show me the body'
    },
    {
        name: 'Corpus',
        canonicity: 0,
        derivation: 'lat: Habeus Corpus, show me the body'
    },
    {
        name: 'Adamancis',
        canonicity: 0,
        derivation: 'Adamant'
    },
    {
        name: 'Aurodious',
        canonicity: 0,
        derivation: 'Aurodium (in-universe type of high quality gold)'
    },
    {
        name: 'Belligerix',
        canonicity: 0,
        derivation: 'Belligerent'
    },
    {
        name: 'Calibus',
        canonicity: 0,
        derivation: 'Caliber or excaliber'
    },
    {
        name: 'Chaleaux',
        canonicity: 0,
        derivation: 'Shallow'
    },
    {
        name: 'Decimet',
        canonicity: 0,
        derivation: 'Decimate'
    },
    {
        name: 'Erotis',
        canonicity: 0,
        derivation: 'Erotic'
    },
    {
        name: 'Fornix',
        canonicity: 0,
        derivation: 'lat: Fornix, arch or vaulted chamber'
    },
    {
        name: 'Fuul',
        canonicity: 0,
        derivation: 'Fool'
    },
    {
        name: 'Fortis',
        canonicity: 0,
        derivation: 'lat: Brave, strong, powerful'
    },
    {
        name: 'Gravitous',
        canonicity: 0,
        derivation: 'Gravitas'
    },
    {
        name: 'Grandious',
        canonicity: 0,
        derivation: 'Grandiose'
    },
    {
        name: 'Hazaar',
        canonicity: 0,
        derivation: 'Hazard, bizarre'
    },
    {
        name: 'Hostilus',
        canonicity: 0,
        derivation: 'Hostile'
    },
    {
        name: 'Izar',
        canonicity: 0,
        derivation: 'Bizarre'
    },
    {
        name: 'Jokkus',
        canonicity: 0,
        derivation: 'Joke?'
    },
    {
        name: 'Korruptus',
        canonicity: 0,
        derivation: 'Corrupt'
    },
    {
        name: 'Lustillus',
        canonicity: 0,
        derivation: 'Lust'
    },
    {
        name: 'Modalous',
        canonicity: 0,
        derivation: 'Modal'
    },
    {
        name: 'Modulous',
        canonicity: 0,
        derivation: 'Modulate'
    },
    {
        name: 'Nether',
        canonicity: 0,
        derivation: 'Nether'
    },
    {
        name: 'Ookious',
        canonicity: 0,
        derivation: 'Spooky or ooky'
    },
    {
        name: 'Odious',
        canonicity: 0,
        derivation: 'Odious'
    },
    {
        name: 'Priver',
        canonicity: 0,
        derivation: 'Depriver'
    },
    {
        name: 'Quader',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Reezer',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Ronious',
        canonicity: 0,
        derivation: 'Erronious'
    },
    {
        name: 'Stereosk',
        canonicity: 0,
        derivation: 'Stereo'
    },
    {
        name: 'Terrous',
        canonicity: 0,
        derivation: 'Terror or terrorist'
    },
    {
        name: 'Uthern',
        canonicity: 0,
        derivation: 'Other'
    },
    {
        name: 'Vincer',
        canonicity: 0,
        derivation: 'Convincer'
    },
    {
        name: 'Viron',
        canonicity: 0,
        derivation: 'Environ'
    },
    {
        name: 'Wyvernous',
        canonicity: 0,
        derivation: 'Wyvern'
    },
    // {
    //     name: 'Wyrm',
    //     canonicity: 0,
    //     derivation: 'Wyrm'
    // },
    {
        name: 'Wyyrd',
        canonicity: 0,
        derivation: 'oe: Wyrd, fate, or Weird'
    },
    {
        name: 'Xandov',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Xebrous',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Xane',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Yeul',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Zrazicus',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Zwalik',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Appetite',
        canonicity: 0,
        derivation: 'Appetite'
    },
    {
        name: 'Blight',
        canonicity: 0,
        derivation: 'Blight'
    },
    {
        name: 'Crathe',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Demond',
        canonicity: 0,
        derivation: 'Demon or diamond'
    },
    {
        name: 'Diamox',
        canonicity: 0,
        derivation: 'Diamond, Exegolic'
    },
    {
        name: 'Ether',
        canonicity: 0,
        derivation: 'Ether'
    },
    {
        name: 'Evikast',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Fjorn',
        canonicity: 0,
        derivation: 'Forlorn, sounds cool'
    },
    {
        name: 'Ghash',
        canonicity: 0,
        derivation: 'Gash'
    },
    {
        name: 'Hilk',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Ignious',
        canonicity: 0,
        derivation: 'lat: Ignis, fire or flame'
    },
    {
        name: 'Jareth',
        canonicity: 0,
        derivation: 'King Jareth, Labyrinth'
    },
    {
        name: 'Karath',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Lavel',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Maladous',
        canonicity: 0,
        derivation: 'Malady'
    },
    {
        name: 'Nevermour',
        canonicity: 0,
        derivation: 'Nevermore'
    },
    {
        name: 'Odox',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Pilfur',
        canonicity: 0,
        derivation: 'Pilfer'
    },
    {
        name: 'Quizik',
        canonicity: 0,
        derivation: 'Quizical'
    },
    {
        name: 'Rotash',
        canonicity: 0,
        derivation: 'sounds cool?'
    },
    {
        name: 'Slaink',
        canonicity: 0,
        derivation: 'Slain and slink, sounds cool'
    },
    {
        name: 'Trusk',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Ulgol',
        canonicity: 0,
        derivation: 'Exegolic'
    },
    {
        name: 'Valker',
        canonicity: 0,
        derivation: 'sounds ocol'
    },
    {
        name: 'Wintious',
        canonicity: 0,
        derivation: 'Winter'
    },
    {
        name: 'Xogog',
        canonicity: 0,
        derivation: 'Exegolic'
    },
    {
        name: 'Yodrexus',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Zulius',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Schism',
        canonicity: 0,
        derivation: 'Schism'
    },
    {
        name: 'Farrow',
        canonicity: 0,
        derivation: 'Farrow'
    },
    {
        name: 'Desic',
        canonicity: 0,
        derivation: 'Geodesic'
    },
    {
        name: 'Amortek',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Aortek',
        canonicity: 0,
        derivation: 'Aortic'
    },
    {
        name: 'Amuil',
        canonicity: 0,
        derivation: 'Amulet'
    },
    {
        name: 'Alterra',
        canonicity: 0,
        derivation: 'Alter'
    },
    {
        name: 'Bullek',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Brancid',
        canonicity: 0,
        derivation: 'sounds cool, rancid'
    },
    {
        name: 'Belyyr',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Claw',
        canonicity: 0,
        derivation: 'Claw'
    },
    {
        name: 'Cosmosis',
        canonicity: 0,
        derivation: 'Cosmos, osmosis'
    },
    {
        name: 'Corvid',
        canonicity: 0,
        derivation: 'Corvid'
    },
    {
        name: 'Crauv',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Cineret',
        canonicity: 0,
        derivation: 'Incinerate'
    },
    {
        name: 'Crucifor',
        canonicity: 0,
        derivation: 'Cruciform'
    },
    {
        name: 'Digh',
        canonicity: 0,
        derivation: 'Die'
    },
    {
        name: 'Droxel',
        canonicity: 0,
        derivation: 'sounds cool, hydroxyl'
    },
    {
        name: 'Dashir',
        canonicity: 0,
        derivation: 'Dasher'
    },
    {
        name: 'Durret',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Ender',
        canonicity: 0,
        derivation: 'Ender'
    },
    {
        name: 'Elios',
        canonicity: 0,
        derivation: 'grk: Helios, the sun'
    },
    {
        name: 'Errah',
        canonicity: 0,
        derivation: 'Error'
    },
    {
        name: 'Euvory',
        canonicity: 0,
        derivation: 'sounds cool?'
    },
    {
        name: 'Etchid',
        canonicity: 0,
        derivation: 'Wretched and etched'
    },
    {
        name: 'Fervor',
        canonicity: 0,
        derivation: 'Fervor'
    },
    {
        name: 'Festern',
        canonicity: 0,
        derivation: 'Fester'
    },
    {
        name: 'Fantatus',
        canonicity: 0,
        derivation: 'Fantasia'
    },
    {
        name: 'Fryden',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Famish',
        canonicity: 0,
        derivation: 'Famish'
    },
    {
        name: 'Graven',
        canonicity: 0,
        derivation: 'Graven'
    },
    {
        name: 'Govurn',
        canonicity: 0,
        derivation: 'Govern'
    },
    {
        name: 'Glaum',
        canonicity: 0,
        derivation: 'Glom'
    },
    {
        name: 'Hydra',
        canonicity: 0,
        derivation: 'Hydra (Greek mythology)'
    },
    {
        name: 'Hierogant',
        canonicity: 0,
        derivation: 'Hierophant and arrogant'
    },
    // {
    //     name: 'Havok',
    //     canonicity: 0,
    //     derivation: 'Havoc'
    // },
    {
        name: 'Hastious',
        canonicity: 0,
        derivation: 'Hasty'
    },
    {
        name: 'Haberd',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Hunger',
        canonicity: 0,
        derivation: 'Hunger'
    },
    {
        name: 'Ignobol',
        canonicity: 0,
        derivation: 'Ignoble, Exegolic'
    },
    {
        name: 'Ignomix',
        canonicity: 0,
        derivation: 'Ignominious, Exegolic'
    },
    {
        name: 'Irradiat',
        canonicity: 0,
        derivation: 'Irradiate'
    },
    {
        name: 'Ibidious',
        canonicity: 0,
        derivation: 'lat: Ibidem, in the same place'
    },
    {
        name: 'Ixtorious',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Jennix',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Jarlik',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Jecter',
        canonicity: 0,
        derivation: 'Interjector'
    },
    {
        name: 'Kavka',
        canonicity: 0,
        derivation: 'Franz Kafka (writer)'
    },
    {
        name: 'Kthorroth',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Kageous',
        canonicity: 0,
        derivation: 'Cage and outrageous'
    },
    {
        name: 'Knash',
        canonicity: 0,
        derivation: 'Gnash'
    },
    {
        name: 'Knaarl',
        canonicity: 0,
        derivation: 'Gnarl'
    },
    {
        name: 'Lurkula',
        canonicity: 0,
        derivation: 'Lurk and Dracula, sounds cool'
    },
    {
        name: 'Lathspel',
        canonicity: 0,
        derivation: 'oe: Láðspel, bad news'
    },
    {
        name: 'Lakruel',
        canonicity: 0,
        derivation: 'esp: La Cruel, the Cruel'
    },
    {
        name: 'Lazerface (wip)',
        canonicity: 0,
        derivation: 'Laser-face (intentionally poorly contrived name)'
    },
    {
        name: 'Laur',
        canonicity: 0,
        derivation: 'Lower or glower'
    },
    {
        name: 'Morogol',
        canonicity: 0,
        derivation: 'Exegolic'
    },
    {
        name: 'Meerla',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Mneemon',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Mogun',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Murdern',
        canonicity: 0,
        derivation: 'Murder'
    },
    {
        name: 'Nidus',
        canonicity: 0,
        derivation: 'Nidus'
    },
    {
        name: 'Nanduum',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Nervaal',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Orken',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Onyk',
        canonicity: 0,
        derivation: 'Onyx'
    },
    {
        name: 'Orroborr',
        canonicity: 0,
        derivation: 'Ouroboros (Norse mythology)'
    },
    {
        name: 'Omen',
        canonicity: 0,
        derivation: 'Omen'
    },
    {
        name: 'Ptyrlus',
        canonicity: 0,
        derivation: 'Tireless'
    },
    {
        name: 'Psikiot',
        canonicity: 0,
        derivation: 'Psychic'
    },
    {
        name: 'Quadratus',
        canonicity: 0,
        derivation: 'Quadratus'
    },
    {
        name: 'Queaseous',
        canonicity: 0,
        derivation: 'Queasy'
    },
    {
        name: 'Quake',
        canonicity: 0,
        derivation: 'Quake'
    },
    {
        name: 'Qankerous',
        canonicity: 0,
        derivation: 'Cankerous'
    },
    {
        name: 'Rontague',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Rhydo',
        canonicity: 0,
        derivation: 'Rhydonium (in-universe toxic, volatile fuel)'
    },
    {
        name: 'Rheddon',
        canonicity: 0,
        derivation: 'Redden'
    },
    {
        name: 'Riolet',
        canonicity: 0,
        derivation: 'Violet and riot, sounds cool'
    },
    {
        name: 'Riot',
        canonicity: 0,
        derivation: 'Riot'
    },
    {
        name: 'Ruthilus',
        canonicity: 0,
        derivation: 'Ruthless'
    },
    {
        name: 'Snaarl',
        canonicity: 0,
        derivation: 'Snarl'
    },
    {
        name: 'Spurious',
        canonicity: 0,
        derivation: 'Spurious'
    },
    {
        name: 'Solituur',
        canonicity: 0,
        derivation: 'Solitude'
    },
    {
        name: 'Sturmundrang',
        canonicity: 0,
        derivation: 'de: Sturm und drang, storm and stress'
    },
    {
        name: 'Sermonix',
        canonicity: 0,
        derivation: 'Sermon'
    },
    {
        name: 'Spineous',
        canonicity: 0,
        derivation: 'Spiny'
    },
    {
        name: 'Snickety',
        canonicity: 0,
        derivation: 'Persnickety'
    },
    {
        name: 'Typhoon',
        canonicity: 0,
        derivation: 'Typhoon'
    },
    {
        name: 'Taxid',
        canonicity: 0,
        derivation: 'Taxidermy'
    },
    {
        name: 'Tyber',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Umbra',
        canonicity: 0,
        derivation: 'Umbra'
    },
    {
        name: 'Uvule',
        canonicity: 0,
        derivation: 'Uvula'
    },
    {
        name: 'Uggo',
        canonicity: 0,
        derivation: 'Exegolic'
    },
    {
        name: 'Udon',
        canonicity: 0,
        derivation: 'Udon noodles'
    },
    {
        name: 'Vanitrix',
        canonicity: 0,
        derivation: 'Vanity'
    },
    {
        name: 'Vericos',
        canonicity: 0,
        derivation: 'Vericose'
    },
    {
        name: 'Vixus',
        canonicity: 0,
        derivation: 'Vixen'
    },
    {
        name: 'Vesta',
        canonicity: 0,
        derivation: 'Vesta (a type of match) or Vesta (Roman mythology)'
    },
    {
        name: 'Vascus',
        canonicity: 0,
        derivation: 'Vascular'
    },
    {
        name: 'Wermin',
        canonicity: 0,
        derivation: 'Vermin'
    },
    {
        name: 'Warzek',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Woolamander',
        canonicity: 0,
        derivation: 'Woolamander (in-universe apelike creature of Yavin)'
    },
    {
        name: 'Xire',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Xed',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Xetor',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Xhol',
        canonicity: 0,
        derivation: 'Exegolic'
    },
    {
        name: 'Yrxom',
        canonicity: 0,
        derivation: 'Irksome, Exegolic'
    },
    {
        name: 'Yiv',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Yizt',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Yatro',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Zro',
        canonicity: 0,
        derivation: 'Zero, sounds cool'
    },
    {
        name: 'Zelid',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Zozette',
        canonicity: 0,
        derivation: 'sounds cool'
    },
    {
        name: 'Zhurk',
        canonicity: 0,
        derivation: 'Jerk, sounds cool'
    },
    
    {
        name: 'Sion',
        canonicity: 2,
        derivation: 'Scion'
    },
    {
        name: 'Ruin',
        canonicity: 2,
        derivation: 'Ruin'
    },
    {
        name: 'Eradicus',
        canonicity: 0,
        derivation: 'Eradicate (considered by Abel G. Peña for Darth Ruin)'
    },
    {
        name: 'Fatalis',
        canonicity: 0,
        derivation: 'lat: Fatalis, of fate, destined, deadly (considered by Abel G. Peña for Darth Ruin)'
    },
    {
        name: 'Solopsis',
        canonicity: 0,
        derivation: 'Solipsis (considered by Abel G. Peña for Darth Ruin)'
    },
    {
        name: 'Necros',
        canonicity: 0,
        derivation: 'grk: Necros, dead, corpse (considered by Abel G. Peña for Darth Ruin)'
    },
    {
        name: 'Reaper',
        canonicity: 0,
        derivation: 'Reaper (considered by Abel G. Peña for Darth Ruin)'
    },
    {
        name: 'Vilzad',
        canonicity: 0,
        derivation: `Devil's advocate`
    },
    {
        name: 'Tankerous',
        canonicity: 0,
        derivation: 'Contankerous'
    },
    {
        name: 'Prudish',
        canonicity: 0,
        derivation: 'Prudish'
    },
    {
        name: 'Vyre',
        canonicity: 0,
        derivation: 'Virus'
    },
    {
        name: 'Golgoth',
        canonicity: 0,
        derivation: 'Golgotha, from aramaic: Gulgulta; Exegolic'
    },
    {
        name: 'Tallic',
        canonicity: 0,
        derivation: 'Metallic'
    },
    {
        name: 'Aegis',
        canonicity: 0,
        derivation: 'Aegis'
    },
    {
        name: 'Acklay',
        canonicity: 0,
        derivation: 'Acklay'
    },
    {
        name: 'Acrid',
        canonicity: 0,
        derivation: 'Acrid'
    },
    {
        name: 'Fearlous',
        canonicity: 0,
        derivation: 'Fearless'
    },
    {
        name: 'Kherrlous',
        canonicity: 0,
        derivation: 'Careless'
    },
    {
        name: 'Endlous',
        canonicity: 0,
        derivation: 'Endless'
    },
    {
        name: 'Frigidous',
        canonicity: 0,
        derivation: 'Frigid'
    },
    {
        name: 'Turgious',
        canonicity: 0,
        derivation: 'Turgid'
    },
    {
        name: 'Scorn',
        canonicity: 0,
        derivation: 'Scorn'
    },
    {
        name: 'Stidious',
        canonicity: 0,
        derivation: 'Fastidious'
    },
    {
        name: 'Lygian',
        canonicity: 0,
        derivation: 'Religion'
    },
    {
        name: 'Traage',
        canonicity: 0,
        derivation: 'Tragedy, rage'
    },
    {
        name: 'Scorn',
        canonicity: 0,
        derivation: 'Scorn'
    },
    {
        name: 'Berrat',
        canonicity: 0,
        derivation: 'Berate'
    },
    {
        name: 'Oasis',
        canonicity: 0,
        derivation: 'Oasis'
    },
    {
        name: 'Frayen',
        canonicity: 0,
        derivation: 'Fray'
    },
    {
        name: 'Colden',
        canonicity: 0,
        derivation: 'Cold'
    },
    // {
    //     name: 'Reezen',
    //     canonicity: 0,
    //     derivation: 'sounds cool'
    // },
    {
        name: 'Cavorn',
        canonicity: 0,
        derivation: 'Cavern'
    },
    {
        name: 'Thespia',
        canonicity: 0,
        derivation: 'Thespian'
    },
    {
        name: 'Ardor',
        canonicity: 0,
        derivation: 'Ardor'
    },
    {
        name: 'Jader',
        canonicity: 0,
        derivation: 'Jade'
    },
    {
        name: 'Bolden',
        canonicity: 0,
        derivation: 'Embolden'
    },
    {
        name: 'Tremor',
        canonicity: 0,
        derivation: 'Tremor'
    },
    // 'Nucula',
    // 'Nameless',
    // 'Trembol',
]

const darthEpithets = [
    'the Wise',
    'the Gilded',
    'the Unshorn',
    'the Forsaken',
    'the Infidel',
    'the Bloody',
    'the Bloodless',
    'the Accursed',
    'the Twice-Cursed',
    'Thrice-Cursed',
    'the Blind',
    'the Bold',
    'the Foolish',
    'the Chaste',
    'the Conqueror',
    'the Cruel',
    'the Bearded',
    'the Beardless',
    'the Beautiful',
    'the Damned',
    'the Scarred',
    'the Fortunate',
    'the Ill-Fortuned',
    'the Fair',
    'Thrice-Dead',
    'the Holy Vessel',
    'the Learned',
    'the Judge',
    'the Magnificent',
    'the Mighty',
    'the Merciful',
    'the Unmerciful',
    'the Astrogator',
    'the Mad',
    'the Pious',
    'the Prudent',
    'the Proud',
    'the Ancient',
    'the Elder',
    'the Younger',
    'the Posthumous',
    'the Rash',
    'the Red',
    'the Humiliated',
    'the Silent',
    'of Exogol',
    'of Malachor',
    'of the Throne',
    'the Stout',
    'the Terrible',
    'the Wild',
    'the Free',
    'the White',
    'the Aggressor',
    'the Alchemist',
    'the High Alchemist',
    'the Great',
    'the Greater',
    'the Lesser',
    'the Sleeping',
    'of the Deep',
    'of the Mount',
    'of the Core',
    'of the Shade',
    'of the Pit',
    'of the Storms',
    'the Boneless',
    'the Brash',
    'the Beastly',
    'the Braggart',
    'the Worse',
    'the Worst',
    'the Fallen',
    'the Unvanquished',
    'the Unseen',
    'the Singer',
    'the Eloquent',
    'the Once-Forgotten',
    'the Exile',
    'the Grim',
    'Krayt-Slayer',
    'Jedi-Slayer',
    'the Evangelist',
    'the Heartless',
    'the Hopeless',
    'the Once-Patient',
    'the Fiery',
    'the Furious',
    'the Impatient',
    'the Patient',
    'Kyber-Crusher',
    'the Invincible',
    'the Cold-Hearted',
    'the Last',
    'the First',
    'the Second',
    'the First and Last',
    'the Lawgiver',
    'the Lover',
    'the Loveless',
    'the Heartbroken',
    'the Weeping',
    'the Prophet',
    'the Seer',
    'the Oracle',
    'Peacebringer',
    'the Poet',
    'of Legend',
    'the Many-Eyed',
    'the Many-Toothed',
    'the Fanged',
    'the Treacherous',
    'the Tyrant',
    'the Caped',
    'the Cloaked',
    'of the Cowl',
    'the Wicked',
    'the Prescient',
    'the Unshorn',
    'the Crusader',
    'the Fallen',
]