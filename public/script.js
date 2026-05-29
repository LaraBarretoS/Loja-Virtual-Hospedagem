async function comprar(produto, preco){
    const resposta = await fetch("/checkout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },


        body: JSON.stringify({
            produto,
            preco
        })
    })


    const dados = await resposta.json()


    const stripe = Stripe("pk_test_51Tc3YUDT6g8qtsekKQfKHukaqBIgLBNoUxJfGcPwglXTDIAFSymuSInfRB8SXoILowYPhCWCCKGNxO3POilx21dD00wARPtDM7")


    stripe.redirectToCheckout({
        sessionId: dados.id
    })
}
