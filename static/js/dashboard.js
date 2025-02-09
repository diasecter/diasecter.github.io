const regions = [
    "Tanger-Tétouan-Al Hoceima", 
    "L'Oriental", 
    "Fès-Meknès", 
    "Rabat-Salé-Kénitra", 
    "Béni Mellal-Khénifra", 
    "Casablanca-Settat", 
    "Marrakech-Safi", 
    "Drâa-Tafilalet", 
    "Souss-Massa", 
    "Guelmim-Oued Noun", 
    "Laâyoune-Sakia El Hamra", 
    "Dakhla-Oued Ed-Dahab"
];

const provincesByRegion = {
    
    "Tanger-Tétouan-Al Hoceima": [
        { value: "Al Hoceima", name: "Al Hoceima" },
        { value: "Chefchaouen", name: "Chefchaouen" },
        { value: "Fahs-Anjra", name: "Fahs-Anjra" },
        { value: "Larache", name: "Larache" },
        { value: "M'diq-Fnideq", name: "M'diq-Fnideq" },
        { value: "Ouezzane", name: "Ouezzane" },
        { value: "Tanger-Assilah", name: "Tanger-Assilah" },
        { value: "Tétouan", name: "Tétouan" }
    ],
    "L'Oriental": [
        { value: "Berkane", name: "Berkane" },
        { value: "Driouch", name: "Driouch" },
        { value: "Figuig", name: "Figuig" },
        { value: "Guercif", name: "Guercif" },
        { value: "Jerada", name: "Jerada" },
        { value: "Nador", name: "Nador" },
        { value: "Oujda-Angad", name: "Oujda-Angad" },
        { value: "Taourirt", name: "Taourirt" }
    ],
    "Fès-Meknès": [
        { value: "Boulemane", name: "Boulemane" },
        { value: "El Hajeb", name: "El Hajeb" },
        { value: "Fès", name: "Fès" },
        { value: "Ifrane", name: "Ifrane" },
        { value: "Meknès", name: "Meknès" },
        { value: "Moulay Yacoub", name: "Moulay Yacoub" },
        { value: "Sefrou", name: "Sefrou" },
        { value: "Taounate", name: "Taounate" },
        { value: "Taza", name: "Taza" }
    ],
    "Rabat-Salé-Kénitra": [
        { value: "Kénitra", name: "Kénitra" },
        { value: "Khémisset", name: "Khémisset" },
        { value: "Rabat", name: "Rabat" },
        { value: "Salé", name: "Salé" },
        { value: "Sidi Slimane", name: "Sidi Slimane" },
        { value: "Sidi-Kacem", name: "Sidi-Kacem" },
        { value: "Skhirate-Témara", name: "Skhirate-Témara" }
    ],
    "Béni Mellal-Khénifra": [
        { value: "Azilal", name: "Azilal" },
        { value: "Béni Mellal", name: "Béni Mellal" },
        { value: "Fquih Ben Salah", name: "Fquih Ben Salah" },
        { value: "Khénifra", name: "Khénifra" },
        { value: "Khouribga", name: "Khouribga" }
    ],
    "Casablanca-Settat": [
        { value: "Benslimane", name: "Benslimane" },
        { value: "Berrechid", name: "Berrechid" },
        { value: "Casablanca", name: "Casablanca" },
        { value: "El Jadida", name: "El Jadida" },
        { value: "Médiouna", name: "Médiouna" },
        { value: "Mohammédia", name: "Mohammédia" },
        { value: "Nouaceur", name: "Nouaceur" },
        { value: "Settat", name: "Settat" },
        { value: "Sidi Bennour", name: "Sidi Bennour" }
    ],
    "Marrakech-Safi": [
        { value: "Al Haouz", name: "Al Haouz" },
        { value: "Chichaoua", name: "Chichaoua" },
        { value: "El Kelaâ Des Sraghna", name: "El Kelaâ Des Sraghna" },
        { value: "Essaouira", name: "Essaouira" },
        { value: "Marrakech", name: "Marrakech" },
        { value: "Rehamna", name: "Rehamna" },
        { value: "Safi", name: "Safi" },
        { value: "Youssoufia", name: "Youssoufia" }
    ],
    "Drâa-Tafilalet": [
        { value: "Errachidia", name: "Errachidia" },
        { value: "Midelt", name: "Midelt" },
        { value: "Ouarzazate", name: "Ouarzazate" },
        { value: "Tinghir", name: "Tinghir" },
        { value: "Zagora", name: "Zagora" }
    ],
    "Souss-Massa": [
        { value: "Agadir Ida Ou Tanane", name: "Agadir Ida Ou Tanane" },
        { value: "Chtouka-Ait Baha", name: "Chtouka-Ait Baha" },
        { value: "Inezgane-Ait Melloul", name: "Inezgane-Ait Melloul" },
        { value: "Taroudannt", name: "Taroudannt" },
        { value: "Tata", name: "Tata" },
        { value: "Tiznit", name: "Tiznit" }
    ],
    "Guelmim-Oued Noun": [
        { value: "Assa-Zag", name: "Assa-Zag" },
        { value: "Guelmim", name: "Guelmim" },
        { value: "Sidi Ifni", name: "Sidi Ifni" },
        { value: "Tan-Tan", name: "Tan-Tan" }
    ],
    "Laâyoune-Sakia El Hamra": [
        { value: "Boujdour", name: "Boujdour" },
        { value: "Es-Semara", name: "Es-Semara" },
        { value: "Laâyoune", name: "Laâyoune" },
        { value: "Tarfaya", name: "Tarfaya" }
    ],
    "Dakhla-Oued Ed-Dahab": [
        { value: "Aousserd", name: "Aousserd" },
        { value: "Oued Ed Dahab", name: "Oued Ed Dahab" }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const regionSelect = document.getElementById('region');
    const provinceSelect = document.getElementById('province');

    regions.forEach(region => {
        const option = document.createElement('option');
        option.value = region;
        option.textContent = region;
        regionSelect.appendChild(option);
    });

    regionSelect.addEventListener('change', () => {
        const selectedRegion = regionSelect.value;
        provinceSelect.innerHTML = '<option value="">Sélectionner une province</option>';

        if (provincesByRegion[selectedRegion]) {
            provincesByRegion[selectedRegion].forEach(province => {
                const option = document.createElement('option');
                option.value = province.value;
                option.textContent = province.name;
                provinceSelect.appendChild(option);
            });
        }
    });
});







const kpi = {
    "Données Générales": {
        "Situation Générale": {
            "Démographie": [
                { "name": "Nombre d’habitants", "value": 1000000, "type": "integer" },
                { "name": "Evolution entre les deux recensements RGPH", "value": "2%", "type": "percentage" },
                { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²", "type": "string" },
                { "name": "Population urbaine/rurale", "value": "70%/30%", "type": "ratio" }
            ],
            "Socio-économie": [
                { "name": "Revenu médian par famille", "value": "15,000 MAD", "type": "currency" },
                { "name": "Taux de chômage", "value": "18.80", "type": "percentage" },
                { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%", "type": "ratio" },
                { "name": "Répartition des emplois", "value": "35,000", "type": "integer" },
                { "name": "Taux de scolarité", "value": "92%", "type": "percentage" }
            ],
            "Voies de communication": [
                { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300, "type": "integer" },
                { "name": "Voies ferrées", "value": 50, "type": "integer" },
                { "name": "Transport scolaire; Urbain; en commun", "value": 500, "type": "integer" },
                { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10", "type": "integer" }
            ],
            "Services publics": [
                { "name": "Hôpitaux", "value": 20, "type": "integer" },
                { "name": "Administration d’État", "value": 50, "type": "integer" },
                { "name": "Installations Militaires", "value": 15, "type": "integer" },
                { "name": "Caserne des pompiers", "value": 10, "type": "integer" },
                { "name": "Services pénitentiaires", "value": 5, "type": "integer" }
            ],
            "Enseignement": [
                { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves", "type": "string" },
                { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves", "type": "string" },
                { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves", "type": "string" },
                { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants", "type": "string" },
                { "name": "Campus universitaires", "value": 3, "type": "integer" }
            ],
            "Santé": [
                { "name": "Existence d'un centre hospitalier", "value": "Oui", "type": "boolean" },
                { "name": "Centre de santé", "value": 50, "type": "integer" },
                { "name": "Maisons de Maternité", "value": 10, "type": "integer" },
                { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes", "type": "string" }
            ],
            "Habitat": [
                { "name": "Zones d’immeubles", "value": 20, "type": "integer" },
                { "name": "Zones villas", "value": 15, "type": "integer" },
                { "name": "Quartiers de recasement", "value": 10, "type": "integer" },
                { "name": "Bidonvilles", "value": 5, "type": "integer" },
                { "name": "Quartiers sous-équipés", "value": 8, "type": "integer" },
                { "name": "Zones d’Aménagement Progressif", "value": 12, "type": "integer" }
            ],
            "Carte politique": [
                { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%", "type": "string" },
                { "name": "Partis de l’opposition", "value": "Parti B", "type": "string" },
                { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D", "type": "string" }
            ],
            "Syndicat": [
                { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B", "type": "string" }
            ]
        }
    },
    "Environnement Territorial": {
        "Délinquance": {
            "Atteintes aux biens": [
                { "name": "Cambriolages", "value": 500, "type": "integer" },
                { "name": "Vols des véhicules", "value": 200, "type": "integer" },
                { "name": "Destruction et dégradation des biens publics et privés", "value": 150, "type": "integer" },
                { "name": "Vols à main armée", "value": 50, "type": "integer" },
                { "name": "Vols à l’arrachée", "value": 100, "type": "integer" }
            ],
            "Atteintes aux personnes": [
                { "name": "Violences intra-familiales", "value": 300, "type": "integer" },
                { "name": "Vols avec agression/violence", "value": 150, "type": "integer" },
                { "name": "Outrages envers les autorités publiques", "value": 75, "type": "integer" },
                { "name": "Coups et blessures", "value": 400, "type": "integer" },
                { "name": "Crimes; meurtres", "value": 30, "type": "integer" },
                { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20, "type": "integer" }
            ]
        },
        "Incivilités": {
            "Sûreté routière": [
                { "name": "Nombre d’accidents de la route", "value": 1000, "type": "integer" },
                { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves", "type": "string" },
                { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B", "type": "string" }
            ],
            "Criminalité": [
                { "name": "Contrebande", "value": 50, "type": "integer" },
                { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30, "type": "integer" },
                { "name": "Trafic des psychotropes", "value": 80, "type": "integer" },
                { "name": "Trafic des stupéfiants", "value": 100, "type": "integer" },
                { "name": "Terrorisme", "value": 5, "type": "integer" }
            ]
        }
    }
};


 

const data = {
    "Tanger-Tétouan-Al Hoceima": {
        "Al Hoceima": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "1%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "100 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "90%/10%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "10,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "10,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 1200},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Chefchaouen": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Fahs-Anjra": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Larache": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "M'diq-Fnideq": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Ouezzane": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Tanger-Assilah": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Tétouan": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
    },
    "L'Oriental": {
        "Berkane": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Driouch": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Figuig": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Guercif": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Jerada": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Nador": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Oujda-Angad": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Taourirt": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
    },
    "Fès-Meknès": {
        "Boulemane": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "El Hajeb": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Fès": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Ifrane": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Meknès": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Moulay Yacoub": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Sefrou": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Taounate": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Taza": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
    },
    "Rabat-Salé-Kénitra": {
        "Kénitra": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Khémisset": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Rabat": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Salé": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Sidi Sliman": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Sidi-Kacem": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Skhirate-Témara": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
    },
    "Béni Mellal-Khénifra": {
        "Azilal": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Béni Mellal": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Fquih Ben Salah": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Khénifra": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Khouribga": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
    },
    "Casablanca-Settat": {
        "Benslimane": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Berrechid": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Casablanca": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "El Jadida": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Médiouna": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Mohammédia": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Nouaceur": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Settat": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Sidi Bennour": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
    },
    "Marrakech-Safi": {
        "Al Haouz": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Chichaoua": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "El Kelaâ Des Sraghna": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Essaouira": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Marrakech": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Rehamna": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Safi": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Youssoufia": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
    },
    "Drâa-Tafilalet": {
        "Errachidia": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Midelt": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Ouarzazate": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Tinghir": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Zagora": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
    },
    "Souss-Massa": {
        "Agadir Ida Ou Tanane": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Chtouka-Ait Baha": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Inezgane-Ait Melloul": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Taroudannt": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Tata": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Tiznit": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
    },
    "Guelmim-Oued Noun": {
        "Assa-Zag": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Guelmim": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Sidi Ifni": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Tan-Tan": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
    },
    "Laâyoune-Sakia El Hamra": {
        "Boujdour": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Es-Semara": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Laâyoune": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Tarfaya": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
    },
    "Dakhla-Oued Ed-Dahab": {
        "Aousserd": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
        "Oued Ed Dahab": {
            "Données Générales": {
                "Situation Générale": {
                    "Démographie": [
                        { "name": "Nombre d’habitants", "value": 1000000},
                        { "name": "Evolution entre les deux recensements RGPH", "value": "2%"},
                        { "name": "Densité démographique par rapport à la superficie", "value": "120 hab/km²"},
                        { "name": "Population urbaine/rurale", "value": "70%/30%"}
                    ],
                    "Socio-économie": [
                        { "name": "Revenu médian par famille", "value": "15,000 MAD"},
                        { "name": "Taux de chômage", "value": "18.80"},
                        { "name": "Structure économie locale (Agricole/Industrielle)", "value": "60%/40%"},
                        { "name": "Répartition des emplois", "value": "35,000"},
                        { "name": "Taux de scolarité", "value": "92%"}
                    ],
                    "Voies de communication": [
                        { "name": "Axes routiers (autoroutes; RN/RR/RP)", "value": 300},
                        { "name": "Voies ferrées", "value": 50},
                        { "name": "Transport scolaire; Urbain; en commun", "value": 500},
                        { "name": "Gares routières; Ferroviaires; aéroports; ports; Marina", "value": "10"}
                    ],
                    "Services publics": [
                        { "name": "Hôpitaux", "value": 20},
                        { "name": "Administration d’État", "value": 50},
                        { "name": "Installations Militaires", "value": 15},
                        { "name": "Caserne des pompiers", "value": 10},
                        { "name": "Services pénitentiaires", "value": 5}
                    ],
                    "Enseignement": [
                        { "name": "Écoles primaires et nombre des élèves", "value": "200 écoles / 30,000 élèves"},
                        { "name": "Collèges et nombre des élèves", "value": "100 collèges / 15,000 élèves"},
                        { "name": "Lycées et nombre des élèves", "value": "50 lycées / 10,000 élèves"},
                        { "name": "Université et nombre des étudiants", "value": "1 université / 5,000 étudiants"},
                        { "name": "Campus universitaires", "value": 3}
                    ],
                    "Santé": [
                        { "name": "Existence d'un centre hospitalier", "value": "Oui"},
                        { "name": "Centre de santé", "value": 50},
                        { "name": "Maisons de Maternité", "value": 10},
                        { "name": "Nombre de médecins spécialistes/généralistes", "value": "200 spécialistes / 500 généralistes"}
                    ],
                    "Habitat": [
                        { "name": "Zones d’immeubles", "value": 20},
                        { "name": "Zones villas", "value": 15},
                        { "name": "Quartiers de recasement", "value": 10},
                        { "name": "Bidonvilles", "value": 5},
                        { "name": "Quartiers sous-équipés", "value": 8},
                        { "name": "Zones d’Aménagement Progressif", "value": 12}
                    ],
                    "Carte politique": [
                        { "name": "Répartition des sièges par partis politiques", "value": "Parti A: 50%, Parti B: 30%, Parti C: 20%"},
                        { "name": "Partis de l’opposition", "value": "Parti B"},
                        { "name": "Sensibilités politiques marginales (Gauche radicale)", "value": "Parti D"}
                    ],
                    "Syndicat": [
                        { "name": "Syndicats les plus représentatifs", "value": "Syndicat A, Syndicat B"}
                    ]
                }
            },
            "Environnement Territorial": {
                "Délinquance": {
                    "Atteintes aux biens": [
                        { "name": "Cambriolages", "value": 500},
                        { "name": "Vols des véhicules", "value": 200},
                        { "name": "Destruction et dégradation des biens publics et privés", "value": 150},
                        { "name": "Vols à main armée", "value": 50},
                        { "name": "Vols à l’arrachée", "value": 100}
                    ],
                    "Atteintes aux personnes": [
                        { "name": "Violences intra-familiales", "value": 300},
                        { "name": "Vols avec agression/violence", "value": 150},
                        { "name": "Outrages envers les autorités publiques", "value": 75},
                        { "name": "Coups et blessures", "value": 400},
                        { "name": "Crimes; meurtres", "value": 30},
                        { "name": "Agressions avec arme blanche; fusil de chasse", "value": 20}
                    ]
                },
                "Incivilités": {
                    "Sûreté routière": [
                        { "name": "Nombre d’accidents de la route", "value": 1000},
                        { "name": "Nombre des blessés légers/graves", "value": "700 légers / 300 graves"},
                        { "name": "Axes routiers les plus touchés", "value": "Axe A, Axe B"}
                    ],
                    "Criminalité": [
                        { "name": "Contrebande", "value": 50},
                        { "name": "Vente illégale des boissons alcoolisées frelatées", "value": 30},
                        { "name": "Trafic des psychotropes", "value": 80},
                        { "name": "Trafic des stupéfiants", "value": 100},
                        { "name": "Terrorisme", "value": 5}
                    ]
                }
            }
        },
    },
};





document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.querySelector('.menu');
    const kpiContainer = document.querySelector('.kpi-grid');

    // Generate menu and KPIs from kpi
    for (const [volet, axes] of Object.entries(kpi)) {
        // Create Volet
        const voletElement = document.createElement('div');
        voletElement.classList.add('volet');
        const voletLink = document.createElement('a');
        voletLink.classList.add('volet-link');
        voletLink.textContent = volet;
        voletLink.href = '#';
        voletLink.dataset.volet = volet;
        voletElement.appendChild(voletLink);

        // Create Axes
        const axesList = document.createElement('ul');
        axesList.classList.add('axes');
        for (const [axe, declinaisons] of Object.entries(axes)) {
            const axeLink = document.createElement('a');
            axeLink.classList.add('axes-link');
            axeLink.textContent = axe;
            axeLink.href = '#';
            axeLink.dataset.axes = axe;

            axesList.appendChild(axeLink);

            // Create Déclinaisons
            for (const [declinaison, kpis] of Object.entries(declinaisons)) {
                const declinaisonItem = document.createElement('li');
                declinaisonItem.classList.add('déclinaisons');

                const declinaisonLink = document.createElement('a');
                declinaisonLink.classList.add('declinaison-link');
                declinaisonLink.textContent = declinaison;
                declinaisonLink.href = '#';
                declinaisonLink.dataset.volet = volet;
                declinaisonLink.dataset.axes = axe;
                declinaisonLink.dataset.declinaison = declinaison;

                declinaisonItem.appendChild(declinaisonLink);
                axesList.appendChild(declinaisonItem);

                /* Create KPI Section
                const kpiSection = document.createElement('div');
                kpiSection.classList.add('kpi-section');
                kpiSection.dataset.volet = volet;
                kpiSection.dataset.axes = axe;
                kpiSection.dataset.declinaison = declinaison;

                const kpiTitle = document.createElement('h2');
                kpiTitle.textContent = declinaison;
                kpiSection.appendChild(kpiTitle);

                const kpiItems = document.createElement('div');
                kpiItems.classList.add('kpi-items');
                kpis.forEach(kpi => {
                    const kpiItem = document.createElement('div');
                    kpiItem.classList.add('kpi-item');
                    kpiItem.innerHTML = `
                        <span>${kpi.name}</span>
                        <strong>${kpi.value}</strong>
                    `;
                    kpiItems.appendChild(kpiItem);
                });

                kpiSection.appendChild(kpiItems);
                kpiContainer.appendChild(kpiSection);
                */
            }
        }

        voletElement.appendChild(axesList);
        menuContainer.appendChild(voletElement);
    }
});



// filter and kpi
/*
document.addEventListener("DOMContentLoaded", () => {
    const declinaisonLinks = document.querySelectorAll(".declinaison-link");
    const kpiSelection = document.getElementById("kpi-selection");
    const regionSelect = document.getElementById("region");
    const provinceSelect = document.getElementById("province");

    let volet = null;
    let axes = null;
    let selectedKpi = null; // Stores selected KPI
    let selectedRegion = null;
    let selectedProvince = null;


    // **Event listener for KPI selection**
    declinaisonLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            volet = link.dataset.volet;
            axes = link.dataset.axes;
            selectedKpi = link.dataset.declinaison;
            // Update selected KPI and refresh KPIs
            updateKpiDisplay();
        });
    });

    // **Event listeners for Region & Province selection**
    regionSelect.addEventListener("change", () => {
        selectedRegion = regionSelect.value;
        selectedProvince = null; // Reset province when region changes
        provinceSelect.innerHTML = `<option value="">Sélectionner une province</option>`; // Clear province dropdown

        if (selectedRegion && data[selectedRegion]) {
            Object.keys(data[selectedRegion]).forEach((province) => {
                const option = document.createElement("option");
                option.value = province;
                option.textContent = province;
                provinceSelect.appendChild(option);
            });
        }

        updateKpiDisplay();
    });

    provinceSelect.addEventListener("change", () => {
        selectedProvince = provinceSelect.value;
        updateKpiDisplay();
    });

    // **Update KPI display based on selections**
    function updateKpiDisplay() {
        if (!selectedKpi) return;

        let kpiData = {};

        if (selectedProvince) {
            // Province selected → Fetch KPI directly
            kpiData = extractKpiFromProvince(selectedRegion, selectedProvince, selectedKpi);
        } else if (selectedRegion) {
            // Region selected → Aggregate KPIs from all provinces
            kpiData = aggregateKpiForRegion(selectedRegion, selectedKpi);
        }

        displayKpiResults(selectedKpi, kpiData);
    }

    // **Extract KPI data for a selected province**
    function extractKpiFromProvince(region, province, kpiType) {
        const provinceData = data[region]?.[province];

        if (!provinceData) return {};

        let kpiValues = {};

        for (const volet in provinceData) {
            for (const axes in provinceData[volet]) {
                for (const declinaison in provinceData[volet][axes]) {
                    if (declinaison === kpiType) {
                        provinceData[volet][axes][declinaison].forEach(kpi => {
                            if (typeof kpi.value === "number") { // Show only numerical values
                                kpiValues[kpi.name] = kpi.value;
                            }
                        });
                    }
                }
            }
        }

        return kpiValues;
    }

    // **Aggregate KPI data for a selected region**
    function aggregateKpiForRegion(region, kpiType) {
        let aggregatedValues = {};

        if (!data[region]) return {};

        for (const province in data[region]) {
            const provinceData = data[region][province];

            for (const volet in provinceData) {
                for (const axes in provinceData[volet]) {
                    for (const declinaison in provinceData[volet][axes]) {
                        if (declinaison === kpiType) {
                            provinceData[volet][axes][declinaison].forEach(kpi => {
                                if (typeof kpi.value === "number") { // Only sum numerical values
                                    aggregatedValues[kpi.name] = (aggregatedValues[kpi.name] || 0) + kpi.value;
                                }
                            });
                        }
                    }
                }
            }
        }

        return aggregatedValues;
    }

    // **Display KPI results**
    function displayKpiResults(title, kpiData) {
        kpiSelection.innerHTML = `<h3>${volet} > ${axes} ><h2>${title}</h2>`;
        const kpiItems = document.createElement("div");
        kpiItems.classList.add("kpi-items");

        for (const [name, value] of Object.entries(kpiData)) {
            const kpiItem = document.createElement("div");
            kpiItem.classList.add("kpi-item");
            kpiItem.innerHTML = `<span>${name}</span> <strong>${value}</strong>`;
            kpiItems.appendChild(kpiItem);
        }

        kpiSelection.appendChild(kpiItems);
    }
});
*/







document.addEventListener("DOMContentLoaded", () => {
    const declinaisonLinks = document.querySelectorAll(".declinaison-link");
    const kpiSelection = document.getElementById("kpi-selection");
    const regionSelect = document.getElementById("region");
    const provinceSelect = document.getElementById("province");

    let volet = null;
    let axes = null;
    let selectedKpi = null;
    let selectedRegion = null;
    let selectedProvince = null;

    // **Event listener for KPI selection**
    declinaisonLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            volet = link.dataset.volet;
            axes = link.dataset.axes;
            selectedKpi = link.dataset.declinaison;
            updateKpiDisplay();
        });
    });

    // **Event listener for region selection**
    regionSelect.addEventListener("change", () => {
        selectedRegion = regionSelect.value;
        selectedProvince = null; // Reset province selection
        provinceSelect.innerHTML = '<option value="">Sélectionner une province</option>';

        if (provincesByRegion[selectedRegion]) {
            provincesByRegion[selectedRegion].forEach(province => {
                const option = document.createElement("option");
                option.value = province.value;
                option.textContent = province.name;
                provinceSelect.appendChild(option);
            });
        }

        updateKpiDisplay();
    });

    // **Event listener for province selection**
    provinceSelect.addEventListener("change", () => {
        selectedProvince = provinceSelect.value;
        updateKpiDisplay();
    });

    // **Update KPI display based on selections**
    function updateKpiDisplay() {
        if (!selectedKpi) return;
    
        let kpiData = {};
    
        if (selectedProvince) {
            // Province selected → Fetch KPI directly
            kpiData = extractKpiFromProvince(selectedRegion, selectedProvince, selectedKpi);
        } else if (selectedRegion) {
            // Region selected (without province) → Aggregate KPIs from all provinces
            kpiData = aggregateKpiForRegion(selectedRegion, selectedKpi);
        } else {
            // No region or province selected → Show Morocco-wide KPI
            kpiData = aggregateKpiForMorocco(selectedKpi);
        }
    
        displayKpiResults(selectedKpi, kpiData);
    }
    

    // **Aggregate KPIs for a Region**
    function aggregateKpiForRegion(region, kpiType) {
        let aggregatedValues = {};
        let totalProvinces = 0;
    
        if (!data[region]) return {};
    
        for (const province in data[region]) {
            const provinceData = data[region][province];
    
            for (const volet in provinceData) {
                for (const axes in provinceData[volet]) {
                    for (const declinaison in provinceData[volet][axes]) {
                        if (declinaison === kpiType) {
                            provinceData[volet][axes][declinaison].forEach(kpi => {
                                let key = kpi.name;
    
                                // Handle different KPI types
                                if (kpi.type === "integer") {
                                    aggregatedValues[key] = (aggregatedValues[key] || 0) + kpi.value;
                                } else if (kpi.type === "percentage") {
                                    aggregatedValues[key] = (aggregatedValues[key] || 0) + parseFloat(kpi.value);
                                    totalProvinces++;
                                } else if (kpi.type === "boolean") {
                                    if (kpi.value === "Oui") {
                                        aggregatedValues[key] = "Oui";
                                    }
                                } else if (kpi.type === "currency") {
                                    aggregatedValues[key] = (aggregatedValues[key] || 0) + parseFloat(kpi.value.replace(/\D/g, ''));
                                    totalProvinces++;
                                } else if (kpi.type === "ratio") {
                                    let [a, b] = kpi.value.split('/').map(val => parseFloat(val.replace(/\D/g, '')));
                                    aggregatedValues[key] = aggregatedValues[key] || { sumA: 0, sumB: 0 };
                                    aggregatedValues[key].sumA += a;
                                    aggregatedValues[key].sumB += b;
                                    totalProvinces++;
                                } else if (kpi.type === "string") {
                                    let intValue = parseInt(kpi.value.replace(/\D/g, ''), 10);
                                    aggregatedValues[key] = (aggregatedValues[key] || 0) + intValue;
                                }
                            });
                        }
                    }
                }
            }
        }
    
        // Normalize values
        for (const key in aggregatedValues) {
            if (typeof aggregatedValues[key] === "number" && totalProvinces > 0) {
                aggregatedValues[key] = (aggregatedValues[key] / totalProvinces).toFixed(2);
            } else if (typeof aggregatedValues[key] === "object") {
                aggregatedValues[key] = `${(aggregatedValues[key].sumA / totalProvinces).toFixed(2)}/${(aggregatedValues[key].sumB / totalProvinces).toFixed(2)}`;
            }
        }
    
        return aggregatedValues;
    }
    

    // ** Function to Aggregate Data for Morocco**
    function aggregateKpiForMorocco(kpiType) {
        let aggregatedData = {};

        Object.keys(data).forEach(region => {
            let regionData = aggregateKpiForRegion(region, kpiType);
            for (const [key, value] of Object.entries(regionData)) {
                aggregatedData[key] = (aggregatedData[key] || 0) + parseFloat(value);
            }
        });

        return aggregatedData;
    }

    // **Extract KPI data for a selected province**
    function extractKpiFromProvince(region, province, kpiType) {
        const provinceData = data[region]?.[province];
        if (!provinceData) return {};
        return extractKpisFromData(provinceData, kpiType);
    }

    function extractKpisFromData(provinceData, kpiType) {
        let kpiValues = {};

        for (const volet in provinceData) {
            for (const axes in provinceData[volet]) {
                for (const declinaison in provinceData[volet][axes]) {
                    if (declinaison === kpiType) {
                        provinceData[volet][axes][declinaison].forEach(kpi => {
                            kpiValues[kpi.name] = kpi.value;
                        });
                    }
                }
            }
        }

        return kpiValues;
    }

    // **Display KPI results**
    function displayKpiResults(title, kpiData) {
        kpiSelection.innerHTML = `<h3>${volet} > ${axes} > <h2>${title}</h2></h3>`;
        const kpiItems = document.createElement("div");
        kpiItems.classList.add("kpi-items");

        for (const [name, value] of Object.entries(kpiData)) {
            const kpiItem = document.createElement("div");
            kpiItem.classList.add("kpi-item");
            kpiItem.innerHTML = `<span>${name}</span> <strong>${value}</strong>`;
            kpiItems.appendChild(kpiItem);
        }

        kpiSelection.appendChild(kpiItems);
    }

    // **Show default Morocco-wide data for "Démographie"**
    selectedKpi = "Démographie";
    displayKpiResults("Démographie", aggregateKpiForMorocco("Démographie"));
});



