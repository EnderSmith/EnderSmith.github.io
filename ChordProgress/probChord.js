var probChord = {
  c: {
    name: "C",
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
    name: "Dm",
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
    name: "D",
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
    name: "Em",
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
    name: "E",
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
    name: "Fm",
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
    name: "F",
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
    name: "G",
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
    name: "Am",
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
    name: "A",
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
    name: "Bb",
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
