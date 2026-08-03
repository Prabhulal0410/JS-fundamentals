const formConfig = [

{
    type:"text",
    label:"Full Name",
    name:"fullName",
    placeholder:"Enter Full Name",
    required:true
},

{
    type:"email",
    label:"Email",
    name:"email",
    placeholder:"Enter Email",
    required:true
},

{
    type:"password",
    label:"Password",
    name:"password",
    placeholder:"Enter Password",
    required:true
},

{
    type:"number",
    label:"Age",
    name:"age",
    placeholder:"Enter Age"
},

{
    type:"radio",
    label:"Gender",
    name:"gender",
    required:true,
    options:[
        "Male",
        "Female",
        "Other"
    ]
},

{
    type:"select",
    label:"Country",
    name:"country",
    options:[
        "India",
        "USA",
        "Canada",
        "Japan"
    ]
},

{
    type:"checkbox",
    label:"Accept Terms & Conditions",
    name:"terms"
}

];

const form=document.getElementById("myForm");

formConfig.forEach(field=>{

    const label=document.createElement("label");

    label.innerText=field.label;

    form.appendChild(label);

    let element;

    if(field.type==="select"){

        element=document.createElement("select");

        field.options.forEach(option=>{

            const optionElement=document.createElement("option");

            optionElement.value=option;

            optionElement.innerText=option;

            element.appendChild(optionElement);

        });

    }

    else if(field.type==="radio"){

        element=document.createElement("div");

        element.className="radio-group";

        field.options.forEach(option=>{

            const radioLabel=document.createElement("label");

            const radio=document.createElement("input");

            radio.type="radio";

            radio.name=field.name;

            radio.value=option;

            if(field.required){
                radio.required=true;
            }

            radioLabel.appendChild(radio);

            radioLabel.append(" "+option);

            element.appendChild(radioLabel);

        });

    }

    else if(field.type==="checkbox"){

        element=document.createElement("div");

        element.className="checkbox-group";

        const checkbox=document.createElement("input");

        checkbox.type="checkbox";

        checkbox.name=field.name;

        element.appendChild(checkbox);

    }

    else{

        element=document.createElement("input");

        element.type=field.type;

        element.name=field.name;

        element.placeholder=field.placeholder;

        if(field.required){

            element.required=true;

        }

    }

    form.appendChild(element);

});

const button=document.createElement("button");

button.type="submit";

button.innerText="Submit";

form.appendChild(button);

form.addEventListener("submit",function(e){

    e.preventDefault();

    const formData={};

    formConfig.forEach(field=>{

        if(field.type==="radio"){

            const selected=document.querySelector(
                `input[name="${field.name}"]:checked`
            );

            formData[field.name]=selected?selected.value:"";

        }

        else if(field.type==="checkbox"){

            formData[field.name]=form.elements[field.name].checked;

        }

        else{

            formData[field.name]=form.elements[field.name].value;

        }

    });

    console.log(formData);

    alert(JSON.stringify(formData,null,2));

});