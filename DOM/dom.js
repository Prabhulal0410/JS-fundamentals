const formConfig = [

    {
        type: "text",
        label: "Full Name",
        name: "fullName",
        placeholder: "Enter Full Name",
        required: true
    },

    {
        type: "email",
        label: "Email",
        name: "email",
        placeholder: "Enter Email",
        required: true
    },

    {
        type: "password",
        label: "Password",
        name: "password",
        placeholder: "Enter Password",
        required: true
    },

    {
        type: "number",
        label: "Age",
        name: "age",
        placeholder: "Enter Age"
    },

    {
        type: "select",
        label: "Country",
        name: "country",
        options: [
            "India",
            "USA",
            "Canada",
            "Japan"
        ]
    },

    {
        type: "checkbox",
        label: "Accept Terms",
        name: "terms"
    }

];

const form = document.getElementById("myForm");

formConfig.forEach(field => {

    const label = document.createElement("label");
    label.innerText = field.label;

    form.appendChild(label);

    let element;

    if (field.type === "select") {

        element = document.createElement("select");

        field.options.forEach(option => {

            const optionElement = document.createElement("option");

            optionElement.value = option;

            optionElement.innerText = option;

            element.appendChild(optionElement);

        });

    }

    else if (field.type === "checkbox") {

        element = document.createElement("input");

        element.type = "checkbox";

    }

    else {

        element = document.createElement("input");

        element.type = field.type;

        element.placeholder = field.placeholder;

    }

    element.name = field.name;

    if (field.required) {

        element.required = true;

    }

    form.appendChild(element);

});

const button = document.createElement("button");

button.type = "submit";

button.innerText = "Submit";

form.appendChild(button);

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const formData = {};

    formConfig.forEach(field => {

        const element = form.elements[field.name];

        if (field.type === "checkbox") {

            formData[field.name] = element.checked;

        }

        else {

            formData[field.name] = element.value;

        }

    });

    console.log(formData);

    alert(JSON.stringify(formData, null, 2));

});