/* Diese Javascript-Datei ist für das Auswählen der Icons bei Suche/Eintragen/Editieren zuständig, damit das Icon das Bild tauscht und man erkennt, was ausgewählt wurde und was nicht. */


// Funktion zum Auswählen des "kleiner Hund"-Icons
function changeImage_smallDog() {
    const sizesField = document.getElementById("size");

    if(document.getElementById("small_dog").src.indexOf("/images/small.png")!= -1) {
        document.getElementById("small_dog").src = "/images/small_filled.png";
        //Client -> bei mehreren Größen ausgewählt

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "Klein";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"Klein");
        }
    
    }
    else if(document.getElementById("small_dog").src.indexOf("/images/small.png")== -1){
        document.getElementById("small_dog").src = "/images/small.png";

        sizesField.setAttribute('value',"");
    }          
}


// Funktion zum Auswählen des "mittlerer Hund"-Icons
function changeImage_middleDog() {
    const sizesField = document.getElementById("size");

    if (document.getElementById("middle_dog").src.indexOf("/images/middle.png")!= -1) {
        document.getElementById("middle_dog").src = "/images/middle_filled.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "Mittel";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"Mittel");
        }

    }
    else if(document.getElementById("middle_dog").src.indexOf("/images/middle.png")== -1){
        document.getElementById("middle_dog").src = "/images/middle.png";

        sizesField.setAttribute('value',"");
    }          
}


// Funktion zum Auswählen des "großer Hund"-Icons
function changeImage_bigDog() {
    const sizesField = document.getElementById("size");

    if(document.getElementById("big_dog").src.indexOf("/images/big.png")!= -1) {
        document.getElementById("big_dog").src = "/images/big_filled.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "Groß";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"Groß");
        }

    }   
    else if(document.getElementById("big_dog").src.indexOf("/images/big.png")== -1){
        document.getElementById("big_dog").src = "/images/big.png";

        sizesField.setAttribute('value',"");
    }          
}


// Funktion zum Auswählen des "männlich"-Icons
function changeImage_male() {
    const sizesField = document.getElementById("gender");

    if(document.getElementById("imgClickAndChange_male").src.indexOf("/images/male.png")!= -1) {
        document.getElementById("imgClickAndChange_male").src = "/images/male_filled.png";

        //Client -> bei mehreren Größen ausgewählt
        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "männlich";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"männlich");
        }

    }
    else if(document.getElementById("imgClickAndChange_male").src.indexOf("/images/male.png")== -1){
        document.getElementById("imgClickAndChange_male").src = "/images/male.png";

        sizesField.setAttribute('value',"");
    }          
}


// Funktion zum Auswählen des "weibich"-Icons
function changeImage_female() {
    const sizesField = document.getElementById("gender");

    if(document.getElementById("imgClickAndChange_female").src.indexOf("/images/female.png")!= -1) {
        document.getElementById("imgClickAndChange_female").src = "/images/female_filled.png";

        //Client -> bei mehreren Größen ausgewählt
        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "weiblich";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"weiblich");
        }

    }  
    else if(document.getElementById("imgClickAndChange_female").src.indexOf("/images/female.png")== -1) {
        document.getElementById("imgClickAndChange_female").src = "/images/female.png";

        sizesField.setAttribute('value',"");
    }           
}


// Funktion zum Auswählen des "junger Hund"-Icons
function changeImage_young() {
    const sizesField = document.getElementById("age");

    if(document.getElementById("imgClickAndChange_young").src.indexOf("/images/baby.png")!= -1) {
        document.getElementById("imgClickAndChange_young").src = "/images/baby_filled.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "jung";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"jung");
        }
    }  
    else if(document.getElementById("imgClickAndChange_young").src.indexOf("/images/baby.png")== -1) {
        document.getElementById("imgClickAndChange_young").src = "/images/baby.png";

        sizesField.setAttribute('value',"");
    }           
}


// Funktion zum Auswählen des "erwachsener Hund"-Icons
function changeImage_adult() {
    const sizesField = document.getElementById("age");

    if(document.getElementById("imgClickAndChange_adult").src.indexOf("/images/adult.png")!= -1) {
        document.getElementById("imgClickAndChange_adult").src = "/images/adult_filled.png";

        if(sizesField.getAttribute('value') && sizesField.getAttribute('value').match(/[^erwachsen]/ig)) {
            const newValue = sizesField.getAttribute('value') + "," + "erwachsen";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"erwachsen");
        }

    }  
    else if(document.getElementById("imgClickAndChange_adult").src.indexOf("/images/adult.png")== -1) {
        document.getElementById("imgClickAndChange_adult").src = "/images/adult.png";

        sizesField.setAttribute('value',"");
    }           
}


// Funktion zum Auswählen des "senior Hund"-Icons
function changeImage_senior() {
    const sizesField = document.getElementById("age");

    if(document.getElementById("imgClickAndChange_senior").src.indexOf("/images/senior.png")!= -1) {
        document.getElementById("imgClickAndChange_senior").src = "/images/senior_filled.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "senior";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"senior");
        }
    }  
    else if(document.getElementById("imgClickAndChange_senior").src.indexOf("/images/senior.png")== -1) {
        document.getElementById("imgClickAndChange_senior").src = "/images/senior.png";

        sizesField.setAttribute('value',"");
    }           
}


//Funktion für "Kastriert"
function changeImage_castrated() {
    if (document.getElementById("imgClickAndChange_castrated").src.indexOf("/images/castrated.png")!= -1) {
        document.getElementById("imgClickAndChange_castrated").src = "/images/castrated_filled.png";

        document.getElementById("castrated").setAttribute("value","Ja");
    }
    else if(document.getElementById("imgClickAndChange_castrated").src.indexOf("/images/castrated.png")== -1){
        document.getElementById("imgClickAndChange_castrated").src = "/images/castrated.png";

        document.getElementById("castrated").setAttribute("value","Nein");
    }          
}


// Funktion zum Auswählen des "männlich verträgich"-Icons
function changeImage_likes_male() {
    const sizesField = document.getElementById("traits");

    if (document.getElementById("imgClickAndChange_likes_male").src.indexOf("/images/likes_male.png")!= -1) {
        document.getElementById("imgClickAndChange_likes_male").src = "/images/likes_male_filled.png";
        

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "verträglich mit Männchen";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"verträglich mit Männchen");
        }
    }
    else if(document.getElementById("imgClickAndChange_likes_male").src.indexOf("/images/likes_male.png")== -1){
        document.getElementById("imgClickAndChange_likes_male").src = "/images/likes_male.png";
    
         sizesField.setAttribute('value',"");
    }          
}


// Funktion zum Auswählen des "weiblich verträgich"-Icons
function changeImage_likes_female() {
    const sizesField = document.getElementById("traits"); 

    if (document.getElementById("imgClickAndChange_likes_female").src.indexOf("/images/likes_female.png")!= -1) {
        document.getElementById("imgClickAndChange_likes_female").src = "/images/likes_female_filled.png";


        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "verträglich mit Weibchen";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"verträglich mit Weibchen");
        }
    }
    else if(document.getElementById("imgClickAndChange_likes_female").src.indexOf("/images/likes_female.png")== -1){
        document.getElementById("imgClickAndChange_likes_female").src = "/images/likes_female.png";
        
        sizesField.setAttribute('value',"");
    }          
}


// Funktion zum Auswählen des "beide verträgich"-Icons
function changeImage_both_genders() {
    const sizesField = document.getElementById("traits");

    if (document.getElementById("imgClickAndChange_both_genders").src.indexOf("/images/likes_male_and_female.png")!= -1) {
        document.getElementById("imgClickAndChange_both_genders").src = "/images/likes_male_and_female_filled.png";
    
        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "verträglich mit beiden Geschlechtern";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"verträglich mit beiden Geschlechtern");
        }
    }
    else if(document.getElementById("imgClickAndChange_both_genders").src.indexOf("/images/likes_male_and_female.png")== -1){
        document.getElementById("imgClickAndChange_both_genders").src = "/images/likes_male_and_female.png";

        sizesField.setAttribute('value',"");
    }          
}


// Funktion zum Auswählen des "Katzenlieb"-Icons
function changeImage_likes_cat() {
    const sizesField = document.getElementById("traits");

    if (document.getElementById("imgClickAndChange_likes_cat").src.indexOf("/images/likes_cat.png")!= -1) {
        document.getElementById("imgClickAndChange_likes_cat").src = "/images/likes_cat_filled.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "katzenfreundlich";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"katzenfreundlich");
        }

    }
    else if(document.getElementById("imgClickAndChange_likes_cat").src.indexOf("/images/likes_cat.png")== -1){
        document.getElementById("imgClickAndChange_likes_cat").src = "/images/likes_cat.png";

        sizesField.setAttribute('value',"");
    }          
}


// Funktion zum Auswählen des "kinderlieb"-Icons
function changeImage_likes_child() {
    const sizesField = document.getElementById("traits");

    if (document.getElementById("imgClickAndChange_likes_child").src.indexOf("/images/likes_child.png")!= -1) {
        document.getElementById("imgClickAndChange_likes_child").src = "/images/likes_child_filled.png";


        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "kinderfreundlich";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"kinderfreundlich");
        }
    }
    else if(document.getElementById("imgClickAndChange_likes_child").src.indexOf("/images/likes_child.png")== -1){
        document.getElementById("imgClickAndChange_likes_child").src = "/images/likes_child.png";

        sizesField.setAttribute('value',"");
    }          
}


// Funktion zum Auswählen des "seniorenlieb"-Icons
function changeImage_likes_senior() {
    const sizesField = document.getElementById("traits");
    
    if (document.getElementById("imgClickAndChange_likes_senior").src.indexOf("/images/likes_senior.png")!= -1) {
        document.getElementById("imgClickAndChange_likes_senior").src = "/images/likes_senior_filled.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "seniorenfreundlich";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"seniorenfreundlich");
        }
    }
    else if(document.getElementById("imgClickAndChange_likes_senior").src.indexOf("/images/likes_senior.png")== -1){
        document.getElementById("imgClickAndChange_likes_senior").src = "/images/likes_senior.png";

        sizesField.setAttribute('value',"");
    }          
}


// Funktion zum Auswählen des "likes bunny"-Icons
function changeImage_likes_bunny() {
    const sizesField = document.getElementById("traits");
    
    if (document.getElementById("imgClickAndChange_likes_bunny").src.indexOf("/images/likes_bunny.png")!= -1) {
        document.getElementById("imgClickAndChange_likes_bunny").src = "/images/likes_bunny_filled.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "kleintierfreundlich";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"kleintierfreundlich");
        }
    }
    else if(document.getElementById("imgClickAndChange_likes_bunny").src.indexOf("/images/likes_bunny.png")== -1){
        document.getElementById("imgClickAndChange_likes_bunny").src = "/images/likes_bunny.png";

        sizesField.setAttribute('value',"");
    }          
}

// Funktion zum Auswählen des "likes water"-Icons
function changeImage_likes_water() {
    const sizesField = document.getElementById("traits");
    
    if (document.getElementById("imgClickAndChange_likes_water").src.indexOf("/images/likes_water.png")!= -1) {
        document.getElementById("imgClickAndChange_likes_water").src = "/images/likes_water_filled.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "mag Wasser";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"mag Wasser");
        }
    }
    else if(document.getElementById("imgClickAndChange_likes_water").src.indexOf("/images/likes_water.png")== -1){
        document.getElementById("imgClickAndChange_likes_water").src = "/images/likes_water.png";

        sizesField.setAttribute('value',"");
    }          
}


// Funktion zum Auswählen des "Einzeltier"-Icons
function changeImage_solo() {
    const sizesField = document.getElementById("traits");

    if (document.getElementById("imgClickAndChange_solo").src.indexOf("/images/solo.png")!= -1) {
        document.getElementById("imgClickAndChange_solo").src = "/images/solo_filled.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "Einzeltier";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"Einzeltier");
        }
    }
    else if(document.getElementById("imgClickAndChange_solo").src.indexOf("/images/solo.png")== -1){
        document.getElementById("imgClickAndChange_solo").src = "/images/solo.png";

        sizesField.setAttribute('value',"");
    }          
}


// Funktion zum Auswählen des "Gruppentier"-Icons
function changeImage_group() {
    const sizesField = document.getElementById("traits");

    if (document.getElementById("imgClickAndChange_group").src.indexOf("/images/group.png")!= -1) {
        document.getElementById("imgClickAndChange_group").src = "/images/group_filled.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "Gruppentier";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"Gruppentier");
        }

    }
    else if(document.getElementById("imgClickAndChange_group").src.indexOf("/images/group.png")== -1){
        document.getElementById("imgClickAndChange_group").src = "/images/group.png";

        sizesField.setAttribute('value',"");
    }          
}


// Funktion zum Auswählen des "Jagdtrieb"-Icons
function changeImage_hunt() {
    const sizesField = document.getElementById("traits");
   
    if (document.getElementById("imgClickAndChange_hunt").src.indexOf("/images/hunt.png")!= -1) {
        document.getElementById("imgClickAndChange_hunt").src = "/images/hunt_filled.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "Jagdhund";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"Jagdhund");
        }
    }
    else if(document.getElementById("imgClickAndChange_hunt").src.indexOf("/images/hunt.png")== -1){
        document.getElementById("imgClickAndChange_hunt").src = "/images/hunt.png";

        sizesField.setAttribute('value',"");
    }          
}

// Funktion zum Auswählen des "Wachhund"-Icons
function changeImage_guard() {
    const sizesField = document.getElementById("traits");
    
    if (document.getElementById("imgClickAndChange_guard").src.indexOf("/images/guard.png")!= -1) {
        document.getElementById("imgClickAndChange_guard").src = "/images/guard_filled.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "Wachhund";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"Wachhund");
        }
    }
    else if(document.getElementById("imgClickAndChange_guard").src.indexOf("/images/guard.png")== -1){
        document.getElementById("imgClickAndChange_guard").src = "/images/guard.png";

        sizesField.setAttribute('value',"");
    }          
}


// Funktion zum Auswählen des "poo"-Icons
function changeImage_poo() {
    const sizesField = document.getElementById("traits");
    
    if (document.getElementById("imgClickAndChange_poo").src.indexOf("/images/poo.png")!= -1) {
        document.getElementById("imgClickAndChange_poo").src = "/images/poo_filled.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "stubenrein";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"stubenrein");
        }
    }
    else if(document.getElementById("imgClickAndChange_poo").src.indexOf("/images/poo.png")== -1){
        document.getElementById("imgClickAndChange_poo").src = "/images/poo.png";

        sizesField.setAttribute('value',"");
    }          
}


// Funktion zum Auswählen des "krank"-Icons
function changeImage_sick() {
    const sizesField = document.getElementById("traits");
    
    if (document.getElementById("imgClickAndChange_sick").src.indexOf("/images/sick.png")!= -1) {
        document.getElementById("imgClickAndChange_sick").src = "/images/sick_filled.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "krank";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"krank");
        }
    }
    else if(document.getElementById("imgClickAndChange_sick").src.indexOf("/images/sick.png")== -1){
        document.getElementById("imgClickAndChange_sick").src = "/images/sick.png";

        sizesField.setAttribute('value',"");
    }          
}


// Funktion zum Auswählen des "warning"-Icons
function changeImage_warning() {
    const sizesField = document.getElementById("traits");
    
    if (document.getElementById("imgClickAndChange_warning").src.indexOf("/images/warning.png")!= -1) {
        document.getElementById("imgClickAndChange_warning").src = "/images/warning_filled.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "achtung";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"achtung");
        }
    }
    else if(document.getElementById("imgClickAndChange_warning").src.indexOf("/images/warning.png")== -1){
        document.getElementById("imgClickAndChange_warning").src = "/images/warning.png";

        sizesField.setAttribute('value',"");
    }          
}       