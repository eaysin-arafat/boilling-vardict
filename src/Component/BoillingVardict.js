export default function BoillingVardict({celsius = 0}) {
    if (celsius >= 100){
        return <p>The water would boil.</p>
        }
        return <p>The water would not boil.</p>
}

