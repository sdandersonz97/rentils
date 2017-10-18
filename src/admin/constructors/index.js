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

export const Rent = (cod, price, tenant, paymentDate) => {
    return {
        cod,
        price,
        tenant,
        paymentDate,
    }
}