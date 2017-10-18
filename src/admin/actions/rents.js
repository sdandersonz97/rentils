import { rentsRef } from '../../utils/firebaseHelpers'

export const addCompanyRent = (companyId, values) => () => 
    rentsRef(companyId).push(values)