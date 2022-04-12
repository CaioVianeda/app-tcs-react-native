
const initialState = {cbo: '', doctor: '', data: '' , dayweek: '', 
hourInitial: 8, hourFinal:18, definitHour: '', att: [{}]}

const SchedulesReducer = (state=[], action)=>{

    switch(action.type) {

        case 'editCbo':
            return {...state, cbo: action.payload }
        
        case 'editDoctor':
            return {...state, doctor: action.payload }

        case 'editData':
            return {...state, data: action.payload }

        case 'editDayweek':
            return {...state, dayweek: action.payload }

        case 'editHourInitial':
            return {...state, hourInitial: action.payload }

        case 'editHourFinal':
            return {...state, hourFinal: action.payload }

        case 'editDefinitHour':
            return {...state, definitHour: action.payload }

        case 'editAtt':
            return {...state, att: action.payload }

        default:
            return initialState;
    }

}

export default SchedulesReducer;