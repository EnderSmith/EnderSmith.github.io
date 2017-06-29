var probChord = {
  c: {
    key: {
      c: "C",
      db: "Db",
      d: "D",
      eb: "Eb",
      e: "E",
      f: "F",
      fs: "F#",
      g: "G",
      ab: "Ab",
      a: "A",
      bb: "Bb",
      b: "B"
    },
    first: .17,
    next: {
      dm: .11,
      d: .15,
      em: .23,
      e: .27,
      f: .52,
      g: .81,
      am: .95,
      bb: 1
    }
  },
  dm: {
    key: {
      c: "Dm",
      db: "Ebm",
      d: "Em",
      eb: "Fm",
      e: "F#m",
      f: "Gm",
      fs: "G#m",
      g: "Am",
      ab: "Bbm",
      a: "Bm",
      bb: "Cm",
      b: "C#m"
    },
    first: .27,
    next: {
      c: .18,
      em: .3,
      e: .35,
      f: .54,
      g: .75,
      am: .97,
      bb: 1
    }
  },
  d: {
    key: {
      c: "D",
      db: "Eb",
      d: "E",
      eb: "F",
      e: "F#",
      f: "G",
      fs: "G#",
      g: "A",
      ab: "Bb",
      a: "B",
      bb: "C",
      b: "C#"
    },
    first: 0,
    next: {
      c: .11,
      dm: .17,
      em: .22,
      e: .28,
      fm: .31,
      f: .53,
      g: .77,
      am: .95,
      a: .98,
      bb: 1
    }
  },
  em: {
    key: {
      c: "Em",
      db: "Fm",
      d: "F#m",
      eb: "Gm",
      e: "G#m",
      f: "Am",
      fs: "A#m",
      g: "Bm",
      ab: "Cm",
      a: "C#m",
      bb: "Dm",
      b: "D#m"
    },
    first: .34,
    next: {
      c: .07,
      dm: .19,
      d: .21,
      e: .23,
      f: .6,
      g: .7,
      am: 1
    }
  },
  e: {
    key: {
      c: "E",
      db: "F",
      d: "F#",
      eb: "G",
      e: "G#",
      f: "A",
      fs: "A#",
      g: "B",
      ab: "C",
      a: "C#",
      bb: "D",
      b: "D#"
    },
    first: .38,
    next: {
      c: .07,
      dm: .15,
      em: .19,
      f: .40,
      g: .44,
      am: 1
    }
  },
  fm: {
    key: {
      c: "Fm",
      db: "Gbm",
      d: "Gm",
      eb: "Abm",
      e: "Am",
      f: "Bbm",
      fs: "Bm",
      g: "Cm",
      ab: "Dbm",
      a: "Dm",
      bb: "Ebm",
      b: "Em"
    },
    first: 0,
    next: {
      c: .53,
      dm: .63,
      em: .70,
      f: .75,
      g: .91,
      am: .95,
      bb: 1
    }
  },
  f: {
    key: {
      c: "F",
      db: "Gb",
      d: "G",
      eb: "Ab",
      e: "A",
      f: "Bb",
      fs: "B",
      g: "C",
      ab: "Db",
      a: "D",
      bb: "Eb",
      b: "E"
    },
    first: .58,
    next: {
      c: .35,
      dm: .42,
      em: .48,
      e: .51,
      fm: .53,
      g: .85,
      am: .98,
      bb: 1
    }
  },
  g: {
    key: {
      c: "G",
      db: "Ab",
      d: "A",
      eb: "Bb",
      e: "B",
      f: "C",
      fs: "C#",
      g: "D",
      ab: "Eb",
      a: "E",
      bb: "F",
      b: "F#"
    },
    first: .78,
    next: {
      c: .24,
      dm: .35,
      em: .44,
      f: .67,
      am: .96,
      bb: 1
    }
  },
  am: {
    key: {
      c: "Am",
      db: "Bbm",
      d: "Bm",
      eb: "Cm",
      e: "C#m",
      f: "Dm",
      fs: "D#m",
      g: "Em",
      ab: "Fm",
      a: "F#m",
      bb: "Gm",
      b: "G#m"
    },
    first: .96,
    next: {
      c: .15,
      dm: .25,
      d: .28,
      em: .38,
      e: .43,
      f: .72,
      g: .97,
      bb: 1
    }
  },
  a: {
    key: {
      c: "A",
      db: "Bb",
      d: "B",
      eb: "C",
      e: "C#",
      f: "D",
      fs: "D#",
      g: "E",
      ab: "F",
      a: "F#",
      bb: "G",
      b: "G#"
    },
    first: 0,
    next: {
      c: .11,
      dm: .45,
      d: .1,
      f: .14,
      g: .11,
      am: .04,
      bb: .05
    }
  },
  bb: {
    key: {
      c: "Bb",
      db: "B",
      d: "C",
      eb: "Db",
      e: "D",
      f: "Eb",
      fs: "E",
      g: "F",
      ab: "Gb",
      a: "G",
      bb: "Ab",
      b: "A"
    },
    first: 1,
    next: {
      c: .26,
      dm: .34,
      e: .39,
      f: .72,
      g: .83,
      am: 1
    }
  }
};
