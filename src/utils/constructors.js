export const Rental = (cod, cost, address, max, min, description) => {
    return {
        cod,
        cost,
        address,
        max,
        min,
        description
    }
}

export const Rent = (price, tenant, paymentDate, rentalId, uid) => {
    return {
        price,
        tenant,
        paymentDate,
        rentalId,
        uid
    }
}

export const Expense = (mount, description, uid, rentalId) => {
    return {
        mount,
        description,
        uid,
        rentalId
    }
}

export const Payment = (mount, rentId, uid, observation, quantity) => {
    return {
        mount,
        rentId,
        uid,
        observation,
        quantity
    }
}