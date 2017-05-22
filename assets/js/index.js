// Funktion zum Auswählen des "männlich"-Icons
function changeImage_male() {
    console.log("Male");
    console.log(document.getElementById("imgClickAndChange_male").src);

    if(document.getElementById("imgClickAndChange_male").src.indexOf("/images/male_unselected.png")!= -1) {
        document.getElementById("imgClickAndChange_male").src = "/images/male.png";
    }
    else if(document.getElementById("imgClickAndChange_male").src.indexOf("/images/male_unselected.png")== -1){
        document.getElementById("imgClickAndChange_male").src = "/images/male_unselected.png";
    }          
}

// Funktion zum Auswählen des "weibich"-Icons
function changeImage_female() {
    console.log("Female");
    console.log(document.getElementById("imgClickAndChange_female").src);

  
    if(document.getElementById("imgClickAndChange_female").src.indexOf("/images/female_unselected.png")!= -1) {
        document.getElementById("imgClickAndChange_female").src = "/images/female.png";
    }  
    else if(document.getElementById("imgClickAndChange_female").src.indexOf("/images/female_unselected.png")== -1) {
        document.getElementById("imgClickAndChange_female").src = "/images/female_unselected.png";
    }           
}

// Funktion zum Auswählen des "kleiner Hund"-Icons
function changeImage_smallDog() {
    console.log("small_dog");

    if(document.getElementById("small_dog").src.indexOf("/images/size_small_unselected.png")!= -1) {
        document.getElementById("small_dog").src = "/images/size_small_selected.png";
    }
    else if(document.getElementById("small_dog").src.indexOf("/images/size_small_unselected.png")== -1){
        document.getElementById("small_dog").src = "/images/size_small_unselected.png";
    }          
}

// Funktion zum Auswählen des "mittlerer Hund"-Icons
function changeImage_middleDog() {
    console.log("middle_dog");
    console.log(document.getElementById("middle_dog").src);

    if (document.getElementById("middle_dog").src.indexOf("/images/size_middle_unselected.png")!= -1) {
        document.getElementById("middle_dog").src = "/images/size_middle_selected.png";
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
        document.getElementById("big_dog").src = "/images/size_big_selected.png";
    }
    else if(document.getElementById("big_dog").src.indexOf("/images/size_big_unselected.png")== -1){
        document.getElementById("big_dog").src = "/images/size_big_unselected.png";
    }          
}
 
        