function calculateTotal(baddiePrice) {
    let goombas = document.getElementById("goombas_caught");
    let bob_ombs = document.getElementById("bob-ombs_caught");
    let cheeps_cheeps = document.getElementById("cheep-cheeps_caught");
    let total_cost = document.getElementById("total_cost");

    price = (parseInt(goombas.value) * 5) + (parseInt(bob_ombs.value) * 7) + (parseInt(cheeps_cheeps.value) * 11);

    total_cost.value = price;
}