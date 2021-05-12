import firebase from "firebase/app";

export default function insertPlanet() {
    let tours = [
        {
            name: 'Mercury',
            moons: ['nothing'],
            price: 999,
            radius: 2439,
            image: '/images/planets/mercury.jpg',
            model: '/models/mercury/scene.gltf',
            distance: 57910000,
            orbitalPeriod: 88,
            temperature: 349,
            temperatures: [348, 339, 346, 342, 351, 352, 344, 341, 347, 353],
            elements: [
                {name: 'Fe', number: 26},
                {name: 'Si', number: 14},
                {name: 'Al', number: 13}
            ],
            places: [
                {
                    name: 'The Dario',
                    text: 'Text',
                    image: '/images/places/mercury/the-dario.jpg'
                },
                {
                    name: 'The Vivaldi Desert',
                    text: 'Text',
                    image: '/images/places/mercury/the-vivaldi-desert.jpg'
                },
                {
                    name: 'The Copland',
                    text: 'Text',
                    image: '/images/places/mercury/the-vivaldi-desert.jpg'
                },
            ]
        },
        {
            name: 'Venus',
            moons: ['nothing'],
            price: 1299,
            radius: 6052,
            image: '/images/planets/venus.jpg',
            model: '/models/venus/scene.gltf',
            distance: 108200000,
            orbitalPeriod: 255,
            temperature: 457,
            temperatures: [459, 446, 455, 461, 453, 449, 447, 452, 454, 459],
            elements: [
                {name: 'Mg', number: 24},
                {name: 'Si', number: 14},
                {name: 'Al', number: 13}
            ],
            places: [
                {
                    name: 'The Yellow Kilimanjaro',
                    text: 'Text',
                    image: '/images/places/venus/the-yellow-kilimanjaro.jpg'
                },
                {
                    name: 'The Alpha Area',
                    text: 'Text',
                    image: '/images/places/venus/the-alpha-area.jpg'
                },
                {
                    name: 'The Big Circles',
                    text: 'Text',
                    image: '/images/places/venus/the-big-circles.jpg'
                },
            ]
        },
        {
            name: 'Mars',
            moons: ['Phobos', 'Deimos'],
            price: 2299,
            radius: 3389,
            image: '/images/planets/mars.jpg',
            model: '/models/mars/scene.gltf',
            distance: 249200000,
            orbitalPeriod: 687,
            temperature: -63,
            temperatures: [-64, -67, -71, -69, -63, -66, -63, -62, -67, -69],
            elements: [
                {name: 'O', number: 16},
                {name: 'Si', number: 14},
                {name: 'Al', number: 13}
            ],
            places: [
                {
                    name: 'The Grand Canyon',
                    text: 'Text',
                    image: '/images/places/mars/the-grand-canyon.jpg',
                },
                {
                    name: 'The Never Ending Sun',
                    text: 'Text',
                    image: '/images/places/mars/the-never-ending-sun.jpg',
                },
                {
                    name: 'The New Mexico',
                    text: 'Text',
                    image: '/images/places/mars/the-new-mexico.jpg',
                },
            ]
        },
        {
            name: 'Jupiter',
            moons: ['Metis', 'Adrastea', 'Amalthea', 'Thebe', 'Europa'],
            price: 2999,
            radius: 69911,
            image: '/images/planets/jupiter.jpg',
            model: '/models/jupiter/scene.gltf',
            distance: 778570000,
            orbitalPeriod: 4380,
            temperature: -145,
            temperatures: [-144, -147, -141, -141, -143, -146, -148, -146, -151, -149],
            elements: [
                {name: 'H', number: 1},
                {name: 'He', number: 2},
                {name: 'Ar', number: 18}
            ],
            places: [
                {
                    name: 'The Big Storm',
                    text: 'Text',
                    image: '/images/places/jupiter/the-big-storm.jpg',
                },
            ]
        },
        {
            name: 'Saturn',
            moons: ['Mimas', 'Enceladus', 'Tethys', 'Titan'],
            price: 3499,
            radius: 58232,
            image: '/images/planets/saturn.jpg',
            model: '/models/saturn/scene.gltf',
            distance: 1434e9,
            orbitalPeriod: 10585,
            temperature: -193,
            temperatures: [-194, -197, -191, -196, -193, -194, -189, -188, -191, -199],
            elements: [
                {name: 'H', number: 1},
                {name: 'He', number: 2},
                {name: 'O', number: 16}
            ],
            places: [
                {
                    name: 'The Round Dance',
                    text: 'Text',
                    image: '/images/places/saturn/the-big-storm.png',
                }
            ]
        },
        {
            name: 'Uranus',
            moons: ['Cordelia', 'Ophelia', 'Bianca', 'Cressida'],
            price: 3899,
            radius: 25362,
            image: '/images/planets/uranus.jpg',
            model: '/models/uranus/scene.gltf',
            distance: 2871e9,
            orbitalPeriod: 30660,
            temperature: -224,
            temperatures: [-224, -227, -221, -226, -228, -221, -229, -228, -221, -223],
            elements: [
                {name: 'H', number: 1},
                {name: 'He', number: 2},
                {name: 'O', number: 16}
            ],
            places: [
                {
                    name: 'The Eagle View',
                    text: 'Text',
                    image: '/images/places/uranus/the-eagle-view.png',
                },
                {
                    name: 'The Blue Rocks',
                    text: 'Text',
                    image: '/images/places/uranus/the-blue-rocks.jpeg',
                }
            ]
        },
        {
            name: 'Neptune',
            moons: ['Naiad', 'Thalassa', 'Despina'],
            price: 4499,
            radius: 24622,
            image: '/images/planets/neptune.jpg',
            model: '/models/neptune/scene.gltf',
            distance: 7618e9,
            orbitalPeriod: 60225,
            temperature: -220,
            temperatures: [-219, -221, -221, -226, -223, -221, -226, -223, -229, -225],
            elements: [
                {name: 'H', number: 1},
                {name: 'He', number: 2}
            ],
            places: [
                {
                    name: 'The Dragon Pit',
                    text: 'Text',
                    image: '/images/places/neptune/the-dragon-pit.jpg',
                },
                {
                    name: 'The Ice Desert',
                    text: 'Text',
                    image: '/images/places/neptune/the-ice-desert.jpg',
                },
                {
                    name: 'The Great Wall',
                    text: 'Text',
                    image: '/images/places/neptune/the-great-wall.jpg',
                }
            ]
        },
        {
            name: 'Pluto',
            moons: ['Charon', 'Styx', 'Nix', 'Kerberos', 'Hydra'],
            price: 4299,
            radius: 2376,
            image: '/images/planets/pluto.jpg',
            model: '/models/pluto/scene.gltf',
            distance: 5906e9,
            orbitalPeriod: 90520,
            temperature: -223,
            temperatures: [-224, -229, -224, -226, -224, -227, -223, -226, -219, -228],
            elements: [
                {name: 'N', number: 7},
                {name: 'C', number: 6},
                {name: 'O', number: 16}
            ],
            places: [
                {
                    name: 'The Open Space',
                    text: 'Text',
                    image: '/images/places/pluto/the-open-space.jpg',
                },
                {
                    name: 'The Red Rocks',
                    text: 'Text',
                    image: '/images/places/pluto/the-red-rocks.jpg',
                },
            ]
        },
        {
            name: 'Eris',
            moons: ['Dysnomia'],
            price: 5499,
            radius: 1163,
            image: '/images/planets/eris.jpg',
            model: '/models/eris/scene.gltf',
            distance: 7547e9,
            orbitalPeriod: 203670,
            temperature: -253,
            temperatures: [-254, -252, -249, -261, -254, -257, -259, -261, -254, -253],
            elements: [
                {name: 'H', number: 1},
                {name: 'He', number: 2},
                {name: 'O', number: 16}
            ],
            places: [
                {
                    name: 'The Golden Night',
                    text: 'Text',
                    image: '/images/places/eris/the-golden-night.png',
                },
                {
                    name: 'The Gray Desert',
                    text: 'Text',
                    image: '/images/places/eris/the-gray-desert.jpg',
                },
            ]
        },
        {
            name: 'Titan',
            moons: ['nothing'],
            price: 3499,
            radius: 2574,
            image: '/images/planets/titan.jpg',
            model: '/models/titan/scene.gltf',
            distance: 1400e9,
            orbitalPeriod: 16,
            temperature: -179,
            temperatures: [-180, -173, -178, -175, -176, -178, -179, -174, -175, -181],
            elements: [
                {name: 'N', number: 7},
                {name: 'Ar', number: 18},
                {name: 'C', number: 6}
            ],
            places: [
                {
                    name: 'The Methane Lake',
                    text: 'Text',
                    image: '/images/places/titan/the-methane-lake.png',
                },
                {
                    name: 'The Big Crater',
                    text: 'Text',
                    image: '/images/places/titan/the-big-crater.jpg',
                },

                {
                    name: 'The Wonderful Islands',
                    text: 'Text',
                    image: '/images/places/titan/the-wonderful-islands.jpg',
                },
            ]
        }
    ]
    tours.forEach(tour => {
        firebase.database().ref('/planets').push(tour)
    })
}
