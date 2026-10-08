let certificationi = 0;
let i = 0;
import { websites, websitesWithCertification } from "./dataBank.js";
const courses = document.getElementById("todososcursos");

for (let course of websites) {
    const div = document.createElement("div");

    div.id = `resultN${i}`;
    div.className = "resultsdivs";


    const h3 = document.createElement("h3");

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
    div.append(br);
    div.append(p);
    div.append(br);

    div.append(link);

    courses.append(div);


    i++;
}

for (let course of websitesWithCertification) {
    const div = document.createElement("div");

    div.id = `resultN${certificationi}`;
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

    courses.append(div);


    certificationi++;
}