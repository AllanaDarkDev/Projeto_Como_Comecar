import { websites, websitesWithCertification } from "./dataBank.js";


const results = document.getElementById("resultado");
const certificationToggle = document.getElementById("meu-toggle");
const submitButton = document.getElementById("submition");


submitButton.addEventListener("click", getData);


function getData() {

    const age_input = document.getElementById("idade");
    const scholarity_input = document.getElementById("escolaridade");
    const workload_input = document.getElementById("cargahoraria");


    results.innerHTML = "";


    if (
        age_input.value === "" ||
        scholarity_input.value === "" ||
        workload_input.value === ""
    ) {
        alert("Por favor, preencha todos os campos antes de continuar.");
        return;
    }


    const user_age = Number(age_input.value);
    const user_scholarity = scholarity_input.value;
    const user_workload = Number(workload_input.value);


    if (certificationToggle.checked) {

        filtercertification(
            user_age,
            user_scholarity,
            user_workload,
            results
        );

    } else {

        filter(
            user_age,
            user_scholarity,
            user_workload
        );

    }
}


function filter(user_age, user_scholarity, user_workload) {

    let i = 1;


    const h2 = document.createElement("h2");
    h2.textContent = "Resultados Encontrados";

    results.append(h2);


    for (let course of websites) {

        const ageOkay =
            course.age === "notSpecific" ||
            user_age >= course.age;


        const scholarityOkay =
            course.scholarity === "freeScholarity" ||
            course.scholarity === user_scholarity;


        const workloadOkay =
            course.workload === "freeWorkload" ||
            course.workload === "many" ||
            (
                course.workload >= user_workload - 5 &&
                course.workload <= user_workload + 5
            );


        if (ageOkay && scholarityOkay && workloadOkay) {

            const div = document.createElement("div");

            div.id = `resultN${i}`;
            div.className = "resultsdivs";


            const h3 = document.createElement("h3");
            const h4 = document.createElement("h4");

            h4.textContent = course.foundation;
            h3.textContent = course.name;

            const p = document.createElement("p");
            const br = document.createElement("br");

            p.textContent = course.description;


            const link = document.createElement("a");

            link.textContent = "Acessar curso";
            link.href = course.link;
            link.target = "_blank";
            link.className = "resultsdivs";

            div.append(h3);
            div.append(h4);
            div.append(br);
            div.append(p);
            div.append(br);

            div.append(link);

            results.append(div);


            i++;
        }
    }
}


function filtercertification(
    user_age,
    user_scholarity,
    user_workload,
    section
) {

    let i = 1;


    const h2 = document.createElement("h2");

    h2.textContent = "Resultados Encontrados";

    section.append(h2);


    for (let course of websitesWithCertification) {

        const ageOkay =
            course.age === "notSpecific" ||
            user_age >= course.age;


        const scholarityOkay =
            course.scholarity === "freeScholarity" ||
            course.scholarity === user_scholarity;


        const workloadOkay =
            course.workload === "freeWorkload" ||
            course.workload === "many" ||
            (
                course.workload >= user_workload - 5 &&
                course.workload <= user_workload + 5
            );


        if (ageOkay && scholarityOkay && workloadOkay) {

            const div = document.createElement("div");

            div.id = `resultN${i}`;
            div.className = "resultsdivs";


            const h3 = document.createElement("h3");
            const h4 = document.createElement("h4");

            h4.textContent = course.foundation;
            h3.textContent = course.name;

            const p = document.createElement("p");
            const br = document.createElement("br");

            p.textContent = course.description;


            const link = document.createElement("a");

            link.textContent = "Acessar curso";
            link.href = course.link;
            link.target = "_blank";
            link.className = "resultsdivs";

            div.append(h3);
            div.append(h4);
            div.append(br);
            div.append(p);
            div.append(br);

            div.append(link);

            results.append(div);


            i++;
        }
    }
}