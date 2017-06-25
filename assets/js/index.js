
// Funktion zum Auswählen des "kleiner Hund"-Icons
function changeImage_smallDog() {
    const sizesField = document.getElementById("size");

    console.log("small_dog");
    if(document.getElementById("small_dog").src.indexOf("/images/small_ungefuellt.png")!= -1) {
        document.getElementById("small_dog").src = "/images/small_gefuellt.png";
        //Client -> bei mehreren Größen ausgewählt

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "Klein";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"Klein");
        }
        

        //document.getElementById("size").setAttribute("value","Klein");
    }
    else if(document.getElementById("small_dog").src.indexOf("/images/small_ungefuellt.png")== -1){
        document.getElementById("small_dog").src = "/images/small_ungefuellt.png";

        sizesField.setAttribute('value',"");
    }          
}

// Funktion zum Auswählen des "mittlerer Hund"-Icons
function changeImage_middleDog() {
    const sizesField = document.getElementById("size");
    console.log("middle_dog");
    if (document.getElementById("middle_dog").src.indexOf("/images/middle_ungefuellt.png")!= -1) {
        document.getElementById("middle_dog").src = "/images/middle_gefuellt.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "Mittel";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"Mittel");
        }
    }
    else if(document.getElementById("middle_dog").src.indexOf("/images/middle_ungefuellt.png")== -1){
        document.getElementById("middle_dog").src = "/images/middle_ungefuellt.png";

        sizesField.setAttribute('value',"");
    }          
}

// Funktion zum Auswählen des "großer Hund"-Icons
function changeImage_bigDog() {
    const sizesField = document.getElementById("size");

    if(document.getElementById("big_dog").src.indexOf("/images/big_ungefuellt.png")!= -1) {
        document.getElementById("big_dog").src = "/images/big_gefuellt.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "Groß";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"Groß");
        }
    }
    else if(document.getElementById("big_dog").src.indexOf("/images/big_ungefuellt.png")== -1){
        document.getElementById("big_dog").src = "/images/big_ungefuellt.png";

        sizesField.setAttribute('value',"");
    }          
}

// Funktion zum Auswählen des "männlich"-Icons
function changeImage_male() {
    const sizesField = document.getElementById("gender");
    console.log("Male");
    if(document.getElementById("imgClickAndChange_male").src.indexOf("/images/male_unselected.png")!= -1) {
        //document.getElementById("gender").setAttribute("value","männlich");
        document.getElementById("imgClickAndChange_male").src = "/images/male.png";

        //Client -> bei mehreren Größen ausgewählt
        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "männlich";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"männlich");
        }

    }
    else if(document.getElementById("imgClickAndChange_male").src.indexOf("/images/male_unselected.png")== -1){
        document.getElementById("imgClickAndChange_male").src = "/images/male_unselected.png";

        sizesField.setAttribute('value',"");
    }          
}

// Funktion zum Auswählen des "weibich"-Icons
function changeImage_female() {
    const sizesField = document.getElementById("gender");
    console.log("Female");
    if(document.getElementById("imgClickAndChange_female").src.indexOf("/images/female_unselected.png")!= -1) {
        //document.getElementById("gender").setAttribute("value","weiblich");
        document.getElementById("imgClickAndChange_female").src = "/images/female.png";

        //Client -> bei mehreren Größen ausgewählt
        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "weiblich";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"weiblich");
        }
    }  
    else if(document.getElementById("imgClickAndChange_female").src.indexOf("/images/female_unselected.png")== -1) {
        document.getElementById("imgClickAndChange_female").src = "/images/female_unselected.png";

        sizesField.setAttribute('value',"");
    }           
}

// Funktion zum Auswählen des "junger Hund"-Icons
function changeImage_young() {
    const sizesField = document.getElementById("age");
    console.log("Young");
    if(document.getElementById("imgClickAndChange_young").src.indexOf("/images/baby_ungefuellt.png")!= -1) {
        document.getElementById("imgClickAndChange_young").src = "/images/baby_gefuellt.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "jung";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"jung");
        }
    }  
    else if(document.getElementById("imgClickAndChange_young").src.indexOf("/images/baby_ungefuellt.png")== -1) {
        document.getElementById("imgClickAndChange_young").src = "/images/baby_ungefuellt.png";

        sizesField.setAttribute('value',"");
    }           
}

// Funktion zum Auswählen des "erwachsener Hund"-Icons
function changeImage_adult() {
    const sizesField = document.getElementById("age");

    console.log("Adult");
    if(document.getElementById("imgClickAndChange_adult").src.indexOf("/images/father_ungefuellt.png")!= -1) {
        document.getElementById("imgClickAndChange_adult").src = "/images/father_gefuellt.png";

        if(sizesField.getAttribute('value') && sizesField.getAttribute('value').match(/[^erwachsen]/ig)) {
            const newValue = sizesField.getAttribute('value') + "," + "erwachsen";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"erwachsen");
        }
    }  
    else if(document.getElementById("imgClickAndChange_adult").src.indexOf("/images/father_ungefuellt.png")== -1) {
        document.getElementById("imgClickAndChange_adult").src = "/images/father_ungefuellt.png";

        sizesField.setAttribute('value',"");
    }           
}

// Funktion zum Auswählen des "senior Hund"-Icons
function changeImage_senior() {
    const sizesField = document.getElementById("age");

    console.log("Senior");
    if(document.getElementById("imgClickAndChange_senior").src.indexOf("/images/old_ungefuellt.png")!= -1) {
        document.getElementById("imgClickAndChange_senior").src = "/images/old_gefuellt.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "senior";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"senior");
        }
    }  
    else if(document.getElementById("imgClickAndChange_senior").src.indexOf("/images/old_ungefuellt.png")== -1) {
        document.getElementById("imgClickAndChange_senior").src = "/images/old_ungefuellt.png";

        sizesField.setAttribute('value',"");
    }           
}


// Funktion zum Auswählen des "männlich verträgich"-Icons
function changeImage_likes_male() {
    const sizesField = document.getElementById("traits");

    console.log("likes_male");
    if (document.getElementById("imgClickAndChange_likes_male").src.indexOf("/images/likes_male.png")!= -1) {
        document.getElementById("imgClickAndChange_likes_male").src = "/images/likes_male_filled.png";
        

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "likes_male";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"likes_male");
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


    console.log("likes_female");
    if (document.getElementById("imgClickAndChange_likes_female").src.indexOf("/images/likes_female.png")!= -1) {
        document.getElementById("imgClickAndChange_likes_female").src = "/images/likes_female_filled.png";


        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "likes_female";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"likes_female");
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

    console.log("both_genders");
    if (document.getElementById("imgClickAndChange_both_genders").src.indexOf("/images/likes_male_and_female.png")!= -1) {
        document.getElementById("imgClickAndChange_both_genders").src = "/images/likes_male_and_female_filled.png";
    
        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "both_genders";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"both_genders");
        }
    }
    else if(document.getElementById("imgClickAndChange_both_genders").src.indexOf("/images/likes_male_and_female.png")== -1){
        document.getElementById("imgClickAndChange_both_genders").src = "/images/likes_male_and_female.png";

        sizesField.setAttribute('value',"");
    }          
}
 
 // Funktion zum Auswählen des "kastriert"-Icons
// function changeImage_castrated() {
//     const sizesField = document.getElementById("traits");

//     console.log("castrated");
//     if (document.getElementById("imgClickAndChange_castrated").src.indexOf("/images/kastriert_ungefuellt.png")!= -1) {
//         document.getElementById("imgClickAndChange_castrated").src = "/images/kastriert_gefuellt.png";
    
//         if(sizesField.getAttribute('value')) {
//             const newValue = sizesField.getAttribute('value') + "," + "castrated";
//             sizesField.setAttribute('value',newValue);
//         }
//         else {
//             sizesField.setAttribute('value',"castrated");
//         }

//     }
//     else if(document.getElementById("imgClickAndChange_castrated").src.indexOf("/images/kastriert_ungefuellt.png")== -1){
//         document.getElementById("imgClickAndChange_castrated").src = "/images/kastriert_ungefuellt.png";

//         sizesField.setAttribute('value',"");
//     }          
// }

function changeImage_castrated() {
    console.log("castrated");
    if (document.getElementById("imgClickAndChange_castrated").src.indexOf("/images/castrated_ungefuellt.png")!= -1) {
        document.getElementById("imgClickAndChange_castrated").src = "/images/castrated_gefuellt.png";

        document.getElementById("imgClickAndChange_castrated").setAttribute("Ja");
    }
    else if(document.getElementById("imgClickAndChange_castrated").src.indexOf("/images/castrated_ungefuellt.png")== -1){
        document.getElementById("imgClickAndChange_castrated").src = "/images/castrated_ungefuellt.png";

        document.getElementById("imgClickAndChange_castrated").setAttribute("Nein");
    }          
}

// Funktion zum Auswählen des "Wachhund"-Icons
function changeImage_solo() {
    const sizesField = document.getElementById("traits");

    console.log("solo");
    if (document.getElementById("imgClickAndChange_solo").src.indexOf("/images/solo.png")!= -1) {
        document.getElementById("imgClickAndChange_solo").src = "/images/solo_filled.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "solo";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"solo");
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
    console.log("group");
    if (document.getElementById("imgClickAndChange_group").src.indexOf("/images/group.png")!= -1) {
        document.getElementById("imgClickAndChange_group").src = "/images/group_filled.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "group";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"group");
        }

    }
    else if(document.getElementById("imgClickAndChange_group").src.indexOf("/images/group.png")== -1){
        document.getElementById("imgClickAndChange_group").src = "/images/group.png";

        sizesField.setAttribute('value',"");
    }          
}

// Funktion zum Auswählen des "Katzenlieb"-Icons
function changeImage_likes_cat() {
    const sizesField = document.getElementById("traits");
    console.log("likes_cat");
    if (document.getElementById("imgClickAndChange_likes_cat").src.indexOf("/images/likes_cat.png")!= -1) {
        document.getElementById("imgClickAndChange_likes_cat").src = "/images/likes_cat_filled.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "likes_cat";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"likes_cat");
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

    console.log("likes_child");
    if (document.getElementById("imgClickAndChange_likes_child").src.indexOf("/images/likes_child.png")!= -1) {
        document.getElementById("imgClickAndChange_likes_child").src = "/images/likes_child_filled.png";


        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "likes_child";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"likes_child");
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
    console.log("likes_senior");
    if (document.getElementById("imgClickAndChange_likes_senior").src.indexOf("/images/likes_senior.png")!= -1) {
        document.getElementById("imgClickAndChange_likes_senior").src = "/images/likes_senior_filled.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "likes_senior";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"likes_senior");
        }
    }
    else if(document.getElementById("imgClickAndChange_likes_senior").src.indexOf("/images/likes_senior.png")== -1){
        document.getElementById("imgClickAndChange_likes_senior").src = "/images/likes_senior.png";

        sizesField.setAttribute('value',"");
    }          
}

// Funktion zum Auswählen des "Jagdtrieb"-Icons
function changeImage_hunt() {
    const sizesField = document.getElementById("traits");
    console.log("hunt");
    if (document.getElementById("imgClickAndChange_hunt").src.indexOf("/images/hunt.png")!= -1) {
        document.getElementById("imgClickAndChange_hunt").src = "/images/hunt_filled.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "hunt";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"hunt");
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
    console.log("guard");
    if (document.getElementById("imgClickAndChange_guard").src.indexOf("/images/guard.png")!= -1) {
        document.getElementById("imgClickAndChange_guard").src = "/images/guard_filled.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "guard";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"guard");
        }
    }
    else if(document.getElementById("imgClickAndChange_guard").src.indexOf("/images/guard.png")== -1){
        document.getElementById("imgClickAndChange_guard").src = "/images/guard.png";

        sizesField.setAttribute('value',"");
    }          
}

// Funktion zum Auswählen des "Anfänger"-Icons
function changeImage_beginner() {
    const sizesField = document.getElementById("traits");

    console.log("beginner");
    if (document.getElementById("imgClickAndChange_beginner").src.indexOf("/images/anfaenger_ungefuellt.png")!= -1) {
        document.getElementById("imgClickAndChange_beginner").src = "/images/anfaenger_gefuellt.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "beginner";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"beginner");
        }
    }
    else if(document.getElementById("imgClickAndChange_beginner").src.indexOf("/images/anfaenger_ungefuellt.png")== -1){
        document.getElementById("imgClickAndChange_beginner").src = "/images/anfaenger_ungefuellt.png";

        sizesField.setAttribute('value',"");
    }          
}

// Funktion zum Auswählen des "Speziell"-Icons
function changeImage_experienced() {
    const sizesField = document.getElementById("traits");
    console.log("experienced");
    if (document.getElementById("imgClickAndChange_experienced").src.indexOf("/images/speziell_ungefuellt.png")!= -1) {
        document.getElementById("imgClickAndChange_experienced").src = "/images/speziell_gefuellt.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "experienced";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"experienced");
        }
    }
    else if(document.getElementById("imgClickAndChange_experienced").src.indexOf("/images/speziell_ungefuellt.png")== -1){
        document.getElementById("imgClickAndChange_experienced").src = "/images/speziell_ungefuellt.png";

        sizesField.setAttribute('value',"");
    }          
}

// Funktion zum Auswählen des "krank"-Icons
function changeImage_sick() {
    const sizesField = document.getElementById("traits");
    console.log("sick");
    if (document.getElementById("imgClickAndChange_sick").src.indexOf("/images/sick.png")!= -1) {
        document.getElementById("imgClickAndChange_sick").src = "/images/sick_filled.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "sick";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"sick");
        }
    }
    else if(document.getElementById("imgClickAndChange_sick").src.indexOf("/images/sick.png")== -1){
        document.getElementById("imgClickAndChange_sick").src = "/images/sick.png";

        sizesField.setAttribute('value',"");
    }          
}

// Funktion zum Auswählen des "likes bunny"-Icons
function changeImage_likes_bunny() {
    const sizesField = document.getElementById("traits");
    console.log("likes_bunny");
    if (document.getElementById("imgClickAndChange_likes_bunny").src.indexOf("/images/likes_bunny.png")!= -1) {
        document.getElementById("imgClickAndChange_likes_bunny").src = "/images/likes_bunny_filled.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "likes_bunny";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"likes_bunny");
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
    console.log("likes_water");
    if (document.getElementById("imgClickAndChange_likes_water").src.indexOf("/images/likes_water.png")!= -1) {
        document.getElementById("imgClickAndChange_likes_water").src = "/images/likes_water_filled.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "likes_water";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"likes_water");
        }
    }
    else if(document.getElementById("imgClickAndChange_likes_water").src.indexOf("/images/likes_water.png")== -1){
        document.getElementById("imgClickAndChange_likes_water").src = "/images/likes_water.png";

        sizesField.setAttribute('value',"");
    }          
}

// Funktion zum Auswählen des "poo"-Icons
function changeImage_poo() {
    const sizesField = document.getElementById("traits");
    console.log("poo");
    if (document.getElementById("imgClickAndChange_poo").src.indexOf("/images/poo.png")!= -1) {
        document.getElementById("imgClickAndChange_poo").src = "/images/poo_filled.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "poo";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"poo");
        }
    }
    else if(document.getElementById("imgClickAndChange_poo").src.indexOf("/images/poo.png")== -1){
        document.getElementById("imgClickAndChange_poo").src = "/images/poo.png";

        sizesField.setAttribute('value',"");
    }          
}

// Funktion zum Auswählen des "poo"-Icons
function changeImage_warning() {
    const sizesField = document.getElementById("traits");
    console.log("warning");
    if (document.getElementById("imgClickAndChange_warning").src.indexOf("/images/warning.png")!= -1) {
        document.getElementById("imgClickAndChange_warning").src = "/images/warning_filled.png";

        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "warning";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"warning");
        }
    }
    else if(document.getElementById("imgClickAndChange_warning").src.indexOf("/images/warning.png")== -1){
        document.getElementById("imgClickAndChange_warning").src = "/images/warning.png";

        sizesField.setAttribute('value',"");
    }          
}




        