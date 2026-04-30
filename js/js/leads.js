import { db } from "./firebase.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.sendLead = async function(){

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if(!name || !phone){
    alert("Fill all details");
    return;
  }

  await addDoc(collection(db,"leads"),{
    name,
    phone,
    time: new Date()
  });

  alert("Lead saved ✅");

  window.location.href =
  `https://wa.me/919811084530?text=Hi I am ${name} (${phone})`;
}
