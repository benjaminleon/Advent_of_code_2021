input = ["fdgacbe", "cefdb", "cefbgd", "gcbe",
"fcgedb", "cgb", "dgebacf", "gc",
"cg", "cg", "fdcagb", "cbg",
"efabcd", "cedba", "gadfec", "cb",
"gecf", "egdcabf", "bgf", "bfgea",
"gebdcfa", "ecba", "ca", "fadegcb",
"cefg", "dcbef", "fcge", "gbcadfe",
"ed", "bcgafe", "cdgba", "cbgef",
"gbdfcae", "bgc", "cg", "cgb",
"fgae", "cfgab", "fg", "bagce"
]

count = 0
for digit in input:
    if len(digit) == 3 or len(digit) == 2 or len(digit) == 4 or len(digit) == 7:
        count += 1



print(f"Count: {count}")