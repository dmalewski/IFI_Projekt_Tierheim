const small_image = Image(src="/images/size_icon_big_new.png");

 const small_doggo = "/images/size_icon_big_new.png";


// Funktion zum Auswählen des "kleiner Hund"-Icons
function changeImage_smallDog() {
    console.log("small_dog");
    if(document.getElementById("small_dog").src.indexOf("/images/size_small_unselected.png")!= -1) {
        document.getElementById("small_dog").src = "/images/size_icon_small.png";
        //Client -> bei mehreren Größen ausgewählt
        const sizesField = document.getElementById("size");
        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "Klein";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"Klein");
        }
        

        //document.getElementById("size").setAttribute("value","Klein");
    }
    else if(document.getElementById("small_dog").src.indexOf("/images/size_small_unselected.png")== -1){
        document.getElementById("small_dog").src = "/images/size_small_unselected.png";
    }          
}

// Funktion zum Auswählen des "mittlerer Hund"-Icons
function changeImage_middleDog() {
    console.log("middle_dog");
    if (document.getElementById("middle_dog").src.indexOf("/images/size_middle_unselected.png")!= -1) {
        //document.getElementById("size").setAttribute("value","Mittel");
        document.getElementById("middle_dog").src = "/images/size_icon_middle_new.png";

        //Client -> bei mehreren Größen ausgewählt
        const sizesField = document.getElementById("size");
        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "Mittel";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"Mittel");
        }
    }
    else if(document.getElementById("middle_dog").src.indexOf("/images/size_middle_unselected.png")== -1){
        document.getElementById("middle_dog").src = "/images/size_middle_unselected.png";
    }          
}

// Funktion zum Auswählen des "großer Hund"-Icons
function changeImage_bigDog() {
    console.log("big_dog");
    console.log(document.getElementById("big_dog").src);

    if(document.getElementById("big_dog").src.indexOf("/images/size_big_unselected.png")!= -1) {
        //document.getElementById("size").setAttribute("value","Groß");
        document.getElementById("big_dog").src = "/images/size_icon_big_new.png";

        //Client -> bei mehreren Größen ausgewählt
        const sizesField = document.getElementById("size");
        if(sizesField.getAttribute('value')) {
            const newValue = sizesField.getAttribute('value') + "," + "Groß";
            sizesField.setAttribute('value',newValue);
        }
        else {
            sizesField.setAttribute('value',"Groß");
        }
    }
    else if(document.getElementById("big_dog").src.indexOf("/images/size_big_unselected.png")== -1){
        document.getElementById("big_dog").src = "/images/size_big_unselected.png";
    }          
}

// Funktion zum Auswählen des "männlich"-Icons
function changeImage_male() {
    console.log("Male");
    if(document.getElementById("imgClickAndChange_male").src.indexOf("/images/male_unselected.png")!= -1) {
        //document.getElementById("gender").setAttribute("value","männlich");
        document.getElementById("imgClickAndChange_male").src = "/images/male.png";

        //Client -> bei mehreren Größen ausgewählt
        const sizesField = document.getElementById("gender");
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
    }          
}

// Funktion zum Auswählen des "weibich"-Icons
function changeImage_female() {
    console.log("Female");
    if(document.getElementById("imgClickAndChange_female").src.indexOf("/images/female_unselected.png")!= -1) {
        //document.getElementById("gender").setAttribute("value","weiblich");
        document.getElementById("imgClickAndChange_female").src = "/images/female.png";

        //Client -> bei mehreren Größen ausgewählt
        const sizesField = document.getElementById("gender");
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
    }           
}

// Funktion zum Auswählen des "junger Hund"-Icons
function changeImage_young() {
    console.log("Young");
    if(document.getElementById("imgClickAndChange_young").src.indexOf("/images/jung_ungefuellt.png")!= -1) {
        document.getElementById("age").setAttribute("value","young");
        document.getElementById("imgClickAndChange_young").src = "/images/jung_gefuellt.png";
    }  
    else if(document.getElementById("imgClickAndChange_young").src.indexOf("/images/jung_ungefuellt.png")== -1) {
        document.getElementById("imgClickAndChange_young").src = "/images/jung_ungefuellt.png";
    }           
}

// Funktion zum Auswählen des "erwachsener Hund"-Icons
function changeImage_adult() {
    console.log("Adult");
    if(document.getElementById("imgClickAndChange_adult").src.indexOf("/images/erwachsen_ungefuellt.png")!= -1) {
        document.getElementById("age").setAttribute("value","adult");
        document.getElementById("imgClickAndChange_adult").src = "/images/erwachsen_gefuellt.png";
    }  
    else if(document.getElementById("imgClickAndChange_adult").src.indexOf("/images/erwachsen_ungefuellt.png")== -1) {
        document.getElementById("imgClickAndChange_adult").src = "/images/erwachsen_ungefuellt.png";
    }           
}

// Funktion zum Auswählen des "senior Hund"-Icons
function changeImage_senior() {
    console.log("Senior");
    if(document.getElementById("imgClickAndChange_senior").src.indexOf("/images/senior_ungefuellt.png")!= -1) {
        document.getElementById("age").setAttribute("value","senior");
        document.getElementById("imgClickAndChange_senior").src = "/images/senior_gefuellt.png";
    }  
    else if(document.getElementById("imgClickAndChange_senior").src.indexOf("/images/senior_ungefuellt.png")== -1) {
        document.getElementById("imgClickAndChange_senior").src = "/images/senior_ungefuellt.png";
    }           
}


// Funktion zum Auswählen des "weiblich verträgich"-Icons
function changeImage_likes_female() {
    console.log("likes_female");
    if (document.getElementById("imgClickAndChange_likes_female").src.indexOf("/images/vertraeglich_weiblich_ungefuellt.png")!= -1) {
        document.getElementById("imgClickAndChange_likes_female").src = "/images/vertraeglich_weiblich_gefuellt.png";
    }
    else if(document.getElementById("imgClickAndChange_likes_female").src.indexOf("/images/vertraeglich_weiblich_ungefuellt.png")== -1){
        document.getElementById("imgClickAndChange_likes_female").src = "/images/vertraeglich_weiblich_ungefuellt.png";
    }          
}
 

// Funktion zum Auswählen des "männlich verträgich"-Icons
function changeImage_likes_male() {
    console.log("likes_male");
    if (document.getElementById("imgClickAndChange_likes_male").src.indexOf("/images/vertraeglich_maennlich_ungefuellt.png")!= -1) {
        document.getElementById("imgClickAndChange_likes_male").src = "/images/vertraeglich_maennlich_gefuellt.png";
    }
    else if(document.getElementById("imgClickAndChange_likes_male").src.indexOf("/images/vertraeglich_maennlich_ungefuellt.png")== -1){
        document.getElementById("imgClickAndChange_likes_male").src = "/images/vertraeglich_maennlich_ungefuellt.png";
    }          
}


// Funktion zum Auswählen des "beide verträgich"-Icons
function changeImage_both_genders() {
    console.log("both_genders");
    if (document.getElementById("imgClickAndChange_both_genders").src.indexOf("/images/vertraeglich_beide_ungefuellt.png")!= -1) {
        document.getElementById("imgClickAndChange_both_genders").src = "/images/vertraeglich_beide_gefuellt.png";
    }
    else if(document.getElementById("imgClickAndChange_both_genders").src.indexOf("/images/vertraeglich_beide_ungefuellt.png")== -1){
        document.getElementById("imgClickAndChange_both_genders").src = "/images/vertraeglich_beide_ungefuellt.png";
    }          
}
 
 // Funktion zum Auswählen des "kastriert"-Icons
function changeImage_castrated() {
    console.log("castrated");
    if (document.getElementById("imgClickAndChange_castrated").src.indexOf("/images/kastriert_ungefuellt.png")!= -1) {
        document.getElementById("imgClickAndChange_castrated").src = "/images/kastriert_gefuellt.png";
    }
    else if(document.getElementById("imgClickAndChange_castrated").src.indexOf("/images/kastriert_ungefuellt.png")== -1){
        document.getElementById("imgClickAndChange_castrated").src = "/images/kastriert_ungefuellt.png";
    }          
}

// Funktion zum Auswählen des "Wachhund"-Icons
function changeImage_solo() {
    console.log("solo");
    if (document.getElementById("imgClickAndChange_solo").src.indexOf("/images/einzeltier_ungefuellt.png")!= -1) {
        document.getElementById("imgClickAndChange_solo").src = "/images/einzeltier_gefuellt.png";
    }
    else if(document.getElementById("imgClickAndChange_solo").src.indexOf("/images/einzeltier_ungefuellt.png")== -1){
        document.getElementById("imgClickAndChange_solo").src = "/images/einzeltier_ungefuellt.png";
    }          
}

// Funktion zum Auswählen des "Gruppentier"-Icons
function changeImage_group() {
    console.log("group");
    if (document.getElementById("imgClickAndChange_group").src.indexOf("/images/gruppentier_ungefuellt.png")!= -1) {
        document.getElementById("imgClickAndChange_group").src = "/images/gruppentier_gefuellt.png";
    }
    else if(document.getElementById("imgClickAndChange_group").src.indexOf("/images/gruppentier_ungefuellt.png")== -1){
        document.getElementById("imgClickAndChange_group").src = "/images/gruppentier_ungefuellt.png";
    }          
}

// Funktion zum Auswählen des "Katzenlieb"-Icons
function changeImage_likes_cat() {
    console.log("likes_cat");
    if (document.getElementById("imgClickAndChange_likes_cat").src.indexOf("/images/katzenlieb_ungefuellt.png")!= -1) {
        document.getElementById("imgClickAndChange_likes_cat").src = "/images/katzenlieb_gefuellt.png";
    }
    else if(document.getElementById("imgClickAndChange_likes_cat").src.indexOf("/images/katzenlieb_ungefuellt.png")== -1){
        document.getElementById("imgClickAndChange_likes_cat").src = "/images/katzenlieb_ungefuellt.png";
    }          
}

// Funktion zum Auswählen des "kinderlieb"-Icons
function changeImage_likes_child() {
    console.log("likes_child");
    if (document.getElementById("imgClickAndChange_likes_child").src.indexOf("/images/kinderlieb_ungefuellt.png")!= -1) {
        document.getElementById("imgClickAndChange_likes_child").src = "/images/kinderlieb_gefuellt.png";
    }
    else if(document.getElementById("imgClickAndChange_likes_child").src.indexOf("/images/kinderlieb_ungefuellt.png")== -1){
        document.getElementById("imgClickAndChange_likes_child").src = "/images/kinderlieb_ungefuellt.png";
    }          
}

// Funktion zum Auswählen des "kinderlieb"-Icons
function changeImage_likes_senior() {
    console.log("likes_senior");
    if (document.getElementById("imgClickAndChange_likes_senior").src.indexOf("/images/seniorengeeignet_ungefuellt.png")!= -1) {
        document.getElementById("imgClickAndChange_likes_senior").src = "/images/seniorengeeignet_gefuellt.png";
    }
    else if(document.getElementById("imgClickAndChange_likes_senior").src.indexOf("/images/seniorengeeignet_ungefuellt.png")== -1){
        document.getElementById("imgClickAndChange_likes_senior").src = "/images/seniorengeeignet_ungefuellt.png";
    }          
}

// Funktion zum Auswählen des "Jagdtrieb"-Icons
function changeImage_hunt() {
    console.log("hunt");
    if (document.getElementById("imgClickAndChange_hunt").src.indexOf("/images/jagdtrieb_ungefuellt.png")!= -1) {
        document.getElementById("imgClickAndChange_hunt").src = "/images/jagdtrieb_gefuellt.png";
    }
    else if(document.getElementById("imgClickAndChange_hunt").src.indexOf("/images/jagdtrieb_ungefuellt.png")== -1){
        document.getElementById("imgClickAndChange_hunt").src = "/images/jagdtrieb_ungefuellt.png";
    }          
}

// Funktion zum Auswählen des "Wachhund"-Icons
function changeImage_guard() {
    console.log("guard");
    if (document.getElementById("imgClickAndChange_guard").src.indexOf("/images/wachhund_ungefuellt.png")!= -1) {
        document.getElementById("imgClickAndChange_guard").src = "/images/wachhund_gefuellt.png";
    }
    else if(document.getElementById("imgClickAndChange_guard").src.indexOf("/images/wachhund_ungefuellt.png")== -1){
        document.getElementById("imgClickAndChange_guard").src = "/images/wachhund_ungefuellt.png";
    }          
}

// Funktion zum Auswählen des "Anfänger"-Icons
function changeImage_beginner() {
    console.log("beginner");
    if (document.getElementById("imgClickAndChange_beginner").src.indexOf("/images/anfaenger_ungefuellt.png")!= -1) {
        document.getElementById("imgClickAndChange_beginner").src = "/images/anfaenger_gefuellt.png";
    }
    else if(document.getElementById("imgClickAndChange_beginner").src.indexOf("/images/anfaenger_ungefuellt.png")== -1){
        document.getElementById("imgClickAndChange_beginner").src = "/images/anfaenger_ungefuellt.png";
    }          
}

// Funktion zum Auswählen des "Speziell"-Icons
function changeImage_experienced() {
    console.log("experienced");
    if (document.getElementById("imgClickAndChange_experienced").src.indexOf("/images/speziell_ungefuellt.png")!= -1) {
        document.getElementById("imgClickAndChange_experienced").src = "/images/speziell_gefuellt.png";
    }
    else if(document.getElementById("imgClickAndChange_experienced").src.indexOf("/images/speziell_ungefuellt.png")== -1){
        document.getElementById("imgClickAndChange_experienced").src = "/images/speziell_ungefuellt.png";
    }          
}

// Funktion zum Auswählen des "krank"-Icons
function changeImage_sick() {
    console.log("sick");
    if (document.getElementById("imgClickAndChange_sick").src.indexOf("/images/krank_ungefuellt.png")!= -1) {
        document.getElementById("imgClickAndChange_sick").src = "/images/krank_gefuellt.png";
    }
    else if(document.getElementById("imgClickAndChange_sick").src.indexOf("/images/krank_ungefuellt.png")== -1){
        document.getElementById("imgClickAndChange_sick").src = "/images/krank_ungefuellt.png";
    }          
}



        