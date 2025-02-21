// -----------------------------------------------task 1: ---------------------------------------------
// do console.log the  secondary school location of sopia
let data = {
    sopia: {
        id: 33,
        study: [
            {
                primary: [
                    { school_name: 'sbc primary school' },
                    { location: 'chadgow thana' },
                ],
            },
            {
                secondary: [
                    { scone_name2: 'abc scondary school' },
                    { location: 'hillview abasik' },
                ],
            }
        ],
    }
}

// 1.const secondarySchoolLocationIs = data.sopia;//{ id: 33, study: [ { primary: [Array] }, { secondary: [Array] } ] }

/*2.
const secondarySchoolLocationIs = data.sopia.study[1] ;
 {
  secondary: [
    { scone_name2: 'abc scondary school' },
    { location: 'hillview abasik' }
  ]
} */

/*3.

  const secondarySchoolLocationIs = data.sopia.study[1].secondary;
  [
  { scone_name2: 'abc scondary school' },
  { location: 'hillview abasik' }
]  */

const secondarySchoolLocationIs = data.sopia.study[1].secondary[1]?.location;// hillview abasik
console.log(secondarySchoolLocationIs)




//-------------------------------------------------- task 2: ---------------------------------------------------
// console.log kortee hobe california k & country (UK) K
/* (red color) value ta accss korte hobe.ERPOR ABR (DC ROAD) value taw access korte hobe. */
let student = {
    2222: {
        name: "jack",
        section: 'C',
        class: "IX",
        address: {
            "building no": 12,
            'street': "st jonson",
            "city holo": "california",
            "country": 'UK',
        }
    },

    3333: [
        {
            name: "harry",
            section: "D",
            class: "X",
            address: {
                "building no": 85,
                "street no": "DC ROAD",
                "city holo": "kochu khet",
                "country": "bangladesh",
            },
        

       
            isred: true,
            color: 'red color',
            "tar chele asee": [
                { 
                    "1st boy": 'sahil',
                    study1: [
                      {
                        primary:   
                        {name:'ddd primary school',
                            location:'calofornia',
                        },
                        secondary:   
                        {name:'ttt socondary school',
                            location:'calofornia',
                        },
                      },
                       
                    ],
                
                },
            ],
        },
    ]
}

const dhakaIs = student["2222"].address?.["city holo"];//california
const dhakaCountry = student["2222"].address?.country;//UK
console.log(dhakaIs)
console.log(dhakaCountry)


// (DC ROAD) access:
const dc = student[3333][0]?.address?.['street no'];//DC ROAD
console.log(dc)

// (ttt socondary school) console e dekatee hobe.

 /*  
  const tttSchool = student[3333][0]["tar chele asee"][0].study1;
  output: 
 {
    primary: { name: 'ddd primary school', location: 'calofornia' },
    secondary: { name: 'ttt socondary school', location: 'calofornia' }
  } */

//  const tttSchool = student[3333][0]["tar chele asee"][0].study1[0].secondary;//output: { name: 'ttt socondary school', location: 'calofornia' }

 const tttSchool = student[3333][0]["tar chele asee"][0].study1[0].secondary.name;//output: ttt socondary school
 console.log(tttSchool)