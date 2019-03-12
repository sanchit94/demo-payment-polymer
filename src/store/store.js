let cardMapping = {
    food: "C1",
    petrol: "C2",
    other: "C3"
}

let formData = {
    amount: undefined,
    cardnumber: "4633604200213466",
    cvv: undefined,
    expiry: undefined,
    card: "HDFC",
    outlet: cardMapping.food,
    label: 'food'
}

let transDemo = [{
        status: 'Success',
        amount: 2000,
        purpose: 'Food'
    },
    {
        status: 'Failed',
        amount: 2400,
        purpose: 'Petrol'
    }];


export { formData, cardMapping, transDemo }