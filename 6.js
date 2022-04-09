input = [5,4,3,5,1,1,2,1,2,1,3,2,3,4,5,1,2,4,3,2,5,1,4,2,1,1,2,5,4,4,4,1,5,4,5,2,1,2,5,5,4,1,3,1,4,2,4,2,5,1,3,5,3,2,3,1,1,4,5,2,4,3,1,5,5,1,3,1,3,2,2,4,1,3,4,3,3,4,1,3,4,3,4,5,2,1,1,1,4,5,5,1,1,3,2,4,1,2,2,2,4,1,2,5,5,1,4,5,2,4,2,1,5,4,1,3,4,1,2,3,1,5,1,3,4,5,4,1,4,3,3,3,5,5,1,1,5,1,5,5,1,5,2,1,5,1,2,3,5,5,1,3,3,1,5,3,4,3,4,3,2,5,2,1,2,5,1,1,1,1,5,1,1,4,3,3,5,1,1,1,4,4,1,3,3,5,5,4,3,2,1,2,2,3,4,1,5,4,3,1,1,5,1,4,2,3,2,2,3,4,1,3,4,1,4,3,4,3,1,3,3,1,1,4,1,1,1,4,5,3,1,1,2,5,2,5,1,5,3,3,1,3,5,5,1,5,4,3,1,5,1,1,5,5,1,1,2,5,5,5,1,1,3,2,2,3,4,5,5,2,5,4,2,1,5,1,4,4,5,4,4,1,2,1,1,2,3,5,5,1,3,1,4,2,3,3,1,4,1,1
]

school_d = {}
for (let i = 0; i <= 8; i++) {
    school_d[i] = 0
}

example_input = [3,4,3,1,2]
input.forEach(item => {school_d[item] += 1})
// Object.entries(school_d).forEach(tuple => {
    // key = tuple[0];
    // if (school_d[key] == 0) {school_d[key] = -1}})
console.log(school_d)

for (let day = 1; day <= 256; day++) {
    // console.log("Day", day)
    let will_spawn = school_d[0]
    // console.log(will_spawn, "will spawn")
    for (let i = 1; i < Object.keys(school_d).length; i++) {
        frequency = school_d[i]
        // console.log("There are", frequency, "fish with", i, "timing")
        school_d[i - 1] = frequency
    }
    school_d[6] += will_spawn
    school_d[8] = will_spawn


    // nr_of_new_fish = new_school.length
    // for (let i = 0; i < nr_of_new_fish; i++) {
    //     new_fish = new_school[i]
    //     if (new_fish == 0) {
    //         new_school[i] = 6
    //         new_school.push(8)
    //     } else {
    //         new_school[i] -= 1
    //     }
    // }

    // nr_of_fish = school.length
    // for (let i = 0; i < nr_of_fish; i++) {
    //     fish = school[i]
    //     if (fish == 0) {
    //         school[i] = 6
    //         school.push(8)
    //         // new_school.push(8)
    //     } else {
    //         school[i] -= 1
    //     }
    // }

    // console.log(school_d)
}

nr_of_fish = 0
for (let i = 0; i < Object.keys(school_d).length; i++) {
    nr_of_fish += Math.max(0, school_d[i])
}
console.log(school_d)
console.log(nr_of_fish)
