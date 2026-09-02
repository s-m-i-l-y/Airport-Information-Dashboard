function searchFlight() {

    let flight =
        document.getElementById("flightNumber").value
        .toUpperCase();

    let result =
        document.getElementById("result");


    if (flight === "AI101") {

        result.innerHTML =
            "✈️ AI101 — Hyderabad → Delhi — On Time";

    }

    else if (flight === "6E205") {

        result.innerHTML =
            "✈️ 6E205 — Mumbai → Hyderabad — Boarding";

    }

    else if (flight === "UK808") {

        result.innerHTML =
            "✈️ UK808 — Delhi → Bangalore — Scheduled";

    }

    else if (flight === "") {

        result.innerHTML =
            "Please enter a flight number.";

    }

    else {

        result.innerHTML =
            "❌ Flight not found. Try AI101, 6E205 or UK808.";

    }

}