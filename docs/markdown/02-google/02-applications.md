

## Demonstration gemini 1.5 pro

* [demo youtube gemini multimodal](https://youtu.be/wa0MT8OwHuk?si=WUxoc8Dx_8evCmNT)
* [demo youtube gemini reasoning](https://www.youtube.com/watch?v=LHKL_210CcU)
* [demo youtube gemini code](https://www.youtube.com/watch?v=SSnsmqIj1MI)
<!-- .element: class="list-fragment" -->

##==##

## Applications rencontrés chez des clients: Problématique

Besoin:
* Valider qu'une pièce produite est conforme dans l'atelier 
* Actuelement controle de la pièce par un humain qui prendre entre 30 à 90 sec

##==##

## Applications rencontrés chez des clients: Problématique

Solution:
* Utiliser une solution basé sur modèle Vision entrainé avec image en défauts et image en état
* Héberger sur Vertex Ai dans GCP 
* Photo prise par téléphone et réponse en direct si image conforme ou non avec déssin des zones potentiels en défaut
<!-- .element: class="list-fragment" -->

Notes:
Un client a utilisé un modèle de reconnaissance d'image entrainer et héberger avec Vertex AI.
Le but reconnaitre des défauts sur des pièces produites.
