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

export const Rent = (price, tenant, paymentDate) => {
    return {
        price,
        tenant,
        paymentDate,
    }
}