function generatePoem() {
    const plant = document.getElementById('plantInput').value;
    const animal = document.getElementById('animalInput').value;

    const poems = [
        `In a garden of ${plant}s, so fair,
        There roams a ${animal} with a majestic stare.
        Among the ${plant}s, it loves to play,
        Bringing joy throughout the day.`,

        `The ${animal} in the field of ${plant}s,
        Dances around in graceful chants.
        With the ${plant}s all in bloom,
        The ${animal} banishes all gloom.`,

        `Under the shade of a ${plant} tree,
        The ${animal} sits so wild and free.
        It leaps and bounds without a care,
        In the garden, pure and rare.`,

        `By the meadow where ${plant}s grow,
        The ${animal} prances to and fro.
        With ${plant}s so lush and green,
        The ${animal} is the happiest ever seen.`,

        `Among the ${plant}s, the ${animal} roves,
        In the enchanted, secret groves.
        With ${plant}s whispering in the breeze,
        The ${animal} finds its ease.`,

        `In a field of ${plant}s bright,
        The ${animal} plays from day to night.
        With every ${plant} in sight,
        The ${animal} dances in pure delight.`,

        `The ${animal} and the ${plant} share,
        A friendship oh so rare.
        Together they make quite the pair,
        Spreading magic in the air.`,

        `In the forest, ${plant}s abound,
        The ${animal} makes a joyful sound.
        With ${plant}s all around,
        The ${animal} is homeward bound.`,

        `Where ${plant}s bloom and grow,
        The ${animal} moves to and fro.
        With the ${plant}s in a row,
        The ${animal}'s joy does show.`,

        `Amidst the ${plant}s tall and grand,
        The ${animal} takes its stand.
        With ${plant}s throughout the land,
        The ${animal} finds life so grand.`
    ];

    const randomPoem = poems[Math.floor(Math.random() * poems.length)];

    document.getElementById('poemOutput').innerText = randomPoem;
}
