import { ADD_COMPANY_RENTAL } from './types'
import { rentalsRef } from '../../utils/firebaseHelpers'

export const addCompanyRental = (companyId, values) => () => 
    rentalsRef(companyId).push(values)