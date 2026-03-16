function maskEmail(email){
 let atindex=email.indexOf('@');
 let name=email.slice(0, atindex);
 let domain=email.slice(atindex);
 let firstnamechar=name[0];
 let lastnamechar=name[name.length-1];
 let middle='*'.repeat(name.length-2)
 return firstnamechar+middle+lastnamechar+domain
}

let email='apple.pie@edu.iq.pk';
 console.log(maskEmail(email));