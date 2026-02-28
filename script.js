function voiture(initial, initial1, initial2, initial3) {

    var voiture = {};
    voiture.nombreDePassager = initial;
    voiture.nombreMaxDePassagers = initial1;
    voiture.carburant = initial2;
    voiture.kilometrage = initial3;
    voiture.monter = monter;
    voiture.descendre = descendre;
    voiture.rouler = rouler;

    return voiture;
}

var monter = function () {
    if (this.nombreDePassager < this.nombreMaxDePassagers) {
        this.nombreDePassager++;
    } else return "plus de place"

};

var descendre = function () {
    if (this.nombreDePassager > 0) {
        this.nombreDePassager--;
    } else return "personne a bord"
};

var rouler = function (mile) {
    if (this.nombreDePassager === 0) {
        return "pas de conducteur";
    }
    if (this.carburant < this.kilometrage) {
        return "carburant insuffisant";
    } else
        this.kilometrage += mile;
    this.carburant = this.carburant + kilometrage / nombreDePassager;
};

var voiture1 = voiture(7, 8, 50, 100)
voiture1.monter();
voiture1.descendre();
voiture1.rouler(100);