var contact =function (id,name,email,phone) {

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) || phone.length<11) {
        console.log('invalid email or phone number')
    }
    else
    {
        this.id=id
        this.name=name
        this.email=email
        this.phone=phone
    }
}
function uniqueNumber() {
    var date = Date.now();

    if (date <= uniqueNumber.previous) {
        date = ++uniqueNumber.previous;
    } else {
        uniqueNumber.previous = date;
    }

    return date;
}

uniqueNumber.previous = 0;

function ID(){
    return uniqueNumber();
};
//var id=ID()
//var contact1 =new contact(id,'mahmoud','mahmoud_younes@outlook.com','01145550077')
var i=0
var contact_list =function () {
    var contact_obj={}
    addcontact=function (id,name,email,phone) {
        contact_obj[i]=new contact(ID(),name,email,phone)
        i++;
    }
    removecontent=function (id) {
        for(j=0;j<contact_obj.length;j++)
        {
            if(contact_obj[j].id==id)
            {
                var del=contact_obj[j]
            }
        }
       delete del;
    }
    getcontact=function (id) {
        for(j=0;j<contact_obj.length;j++)
        {
            if(contact_obj[j].id==id)
            {
                var get=contact_obj[j]
            }
        }
        console.log(get)
    }
    getall=function () {
        console.log(contact_obj)
    }
}