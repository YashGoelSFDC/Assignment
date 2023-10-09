function handleReset()
{
    formElement.reset();
}

function handleSubmit()
{
    alert("Form Submit Successfully!");
    formObject.submit();
}

function selectOption(id)
{
    for(let i=1; i<=2; i++)
    {
        let opt = 'option' + i;
        
        if(opt != id)
        {
            document.getElementById(opt).checked = false;
            document.getElementById(opt).removeAttribute('required');
        }    
    }
}