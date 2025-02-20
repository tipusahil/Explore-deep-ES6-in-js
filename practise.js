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
// console.log kortee hobe dhaka k
/* (red color) value ta accss korte hobe. */
let student = {
    2222: {
        name: "jack",
        section: 'C',
        class: "IX",
        address: {
            "building no": 12,
            'street': "st jonson",
            "city": "dhaka",
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
                "city": "kochu khet",
                "country": "bangladesh",
            },
        },

      {
     isred: true,
     color:'red color',
      }
    ]
}

const dhakaIs =
console.log(dhakaIs)