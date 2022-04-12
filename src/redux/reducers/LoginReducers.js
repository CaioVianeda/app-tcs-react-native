const initialState = {name: '', surname: '', birthdate: '' , cpf: '', }

const LoginReducer= (state=[], action)=>{

    switch(action.type) {

        case 'editName':
            return {...state, name: action.payload }
        
        case 'editSurname':
            return {...state, surname: action.payload }

        case 'editBirthdate':
            return {...state, birthdate: action.payload }

        case 'editCpf':
            return {...state, cpf: action.payload }

        default:
            return initialState;
    }

}

export default LoginReducer;