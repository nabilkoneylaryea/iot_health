// add in stuff for doctor's calendars
const doctors = {
    'd1' : {
        name: 'Eka',
        speciality: 'Heart',
        status: 0,
        patientIDs: ['p2', 'p6'],

        notifications: {
            n1: {
                date: 0,
                time: 24,
                message: 'First notification!'
            },
            n2: {
                date: 1,
                time: 2,
                message: 'Second notification!'
            },
            n3: {
                date: 2,
                time: 19,
                message: 'Third notification!'
            },
            n4: {
                date: 3,
                time: 4,
                message: 'Fourth notification!'
            },
        }
    },
    'd2' : {
        name: 'Enu',
        speciality: 'General Care',
        status: 1,
        patientIDs: ['p1', 'p3', 'p5','p6'],

        notifications: {
            n1: {
                date: 0,
                time: 24,
                message: 'First notification!'
            },
            n2: {
                date: 3,
                time: 4,
                message: 'Second notification!'
            },
        }
    },
    'd3' : {
        name: 'Beau',
        speciality: 'Eyes',
        status: 0,
        patientIDs: ['p4', 'p7'],

        notifications: {
            n1: {
                date: 0,
                time: 24,
                message: 'First notification!'
            },
            n2: {
                date: 1,
                time: 2,
                message: 'Second notification!'
            },
            n3: {
                date: 2,
                time: 19,
                message: 'Third notification!'
            },
        }
    },
    
}

export default doctors;