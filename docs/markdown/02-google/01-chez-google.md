
## Les possibilités chez Google

<img class="center" style="width: 1400px" src="./assets/images/schema_ai_google.PNG"/>

<!-- .element: class="list-fragment" -->

Notes:

* Model garden choisir votre model selon les besoins.
* Ai platform: disposition d'outil pour entrainer model ou servir des models.
* Possible d'etendre un model avec call api ou utilisation de Retrieval-Augmented Generation (RAG)
* Search conversation: moteur de recherche inteligent sur document ou autre.
* Gemini solution deployé par google en SAAS.
* GCP cloud platform qui héberge le tout Il y a model gardent avec plus de 130 modèles possibles

Vertex AI combine la fonctionnalité du modèle de base avec la recherche et la conversation pour permettre aux développeurs de créer facilement et rapidement des chatbots, des voicebots, des recherches de connaissances et bien d'autres cas d'utilisation.

Les praticiens de l'IA, comme les data scientists et les ingénieurs ML, peuvent facilement accéder aux modèles de base et aux outils nécessaires pour régler, déployer et surveiller ces modèles dans Vertex AI Platform.

Et bien sûr, tout est construit sur notre infrastructure de classe mondiale, spécialement conçue pour les charges de travail d’IA.

##==##

## Vertex AI Model Garden

* Google Foundation Models
    * *gemini 1.0 Pro* =>  génération de texte
    * *gemini 1.5 Pro/1.0 Ultra* =>  génération de texte à partir de données multimodales (texte, image, code)
    * *Palm 2* => génération de texte à partir de descriptions textuelles
    * *Imagen* => génération d'images à partir de descriptions textuelles
    * *Chrip* => reconnaissance vocale universelle
    * *Codey* => génération et analyse de code
    * *Embeddings* => recherche dans des textes et documents
<!-- .element: class="list-fragment" -->

Notes:
* Gemini 1.5 pro model de moyenne tailles. Model moyen 
* Il pourra supporter 1 millions token
* *Imagen* list d'attente pour l'instant
Gemini est une famille de modèles d'IA générative conçus pour les cas d'utilisation multimodaux. Il est capable de traiter des informations provenant de plusieurs modalités, y compris des images, des vidéos et du texte.

Les modèles PaLM 2 offrent d'excellents résultats pour les tâches de raisonnement avancée, la classification, la réponse à des questions, la traduction et la génération de langage naturel. Sa grande taille lui permet d'apprendre des schémas et des relations complexes dans le langage, afin de générer du texte de haute qualité pour diverses applications.

##==##

## Vertex AI Model Garden

* Google Task Specific Models (disponible par api)
    * *speech-to-txt* => audio en texte
    * *text-to-speech* => texte en audio
    * *natural-language* => analyse avancée du texte pour extraire des entités
    * *translation* => traduction de texte
    * *doc AI OCR* => reconnaitre les informations dans un document
    * *occupancy analytics* => detection d'élements dans une video ou image
    * *vision* => analyse d'image ou video
    * *video intelligent* => extraire des données d'une video
<!-- .element: class="list-fragment" -->

Notes:

* Speech-to-text: Conversion précise et fluide de l'audio en texte, avec prise en charge de différents dialectes et environnements bruyants.

* Text-to-speech: Génération de voix naturelles et expressives à partir de texte, pour une expérience utilisateur optimale.

* Natural-language: Analyse avancée du texte pour extraire des entités, des sentiments et des relations, avec une grande précision.

* Translation: Traduction de texte précise et fluide dans plus de 100 langues, en tenant compte du contexte et du style.

* Doc AI OCR: Reconnaissance intelligente des informations dans les documents numérisés, y compris les champs de formulaires, les tableaux et les textes manuscrits.

* Occupancy analytics: Détection et suivi précis des personnes et des objets dans les vidéos et les images, pour une meilleure gestion des espaces et des flux.

* Vision: Analyse approfondie des images et des vidéos pour identifier des objets, des scènes et des activités, avec des applications dans de nombreux domaines.

* Video intelligent: Extraction automatique de données pertinentes à partir de vidéos, comme les personnes, les véhicules, les plaques d'immatriculation et les événements, pour une surveillance et une analyse vidéo plus efficaces.
    * Analyse vidéo précise qui reconnaît plus de 20 000 objets, lieux et actions
    * Extrayez des métadonnées riches au niveau de la vidéo, du plan ou de l'image.
    * Créez vos propres étiquettes d'entité personnalisées avec AutoML Video Intelligence.
    * Obtenez des insights en quasi-temps réel à l'aide du service d'annotation des vidéos en streaming et des déclencheurs d'événements basés sur des objets.
    * Offrez à vos clients des expériences captivantes avec une sélection des meilleurs moments, des recommandations et bien plus encore.

##==##

## Vertex AI Model Garden

* Partner & Open Ecosystem 
    * *llama 2 (meta)* => génération de texte
    * *mistral AI* => génération de texte
    * *Falcon* => génération de code
<!-- .element: class="list-fragment" -->

Notes:

*Llama 2 (Meta)*
Modèle de langage de grande taille (LLM) développé par Meta AI
Capable de générer du texte, de traduire des langues, d'écrire différents types de contenu créatif et de répondre à vos questions de manière informative

*Mistral AI*
Plateforme d'IA française offrant une suite de modèles pour la génération de texte, la traduction, la classification et l'analyse de sentiment

*Falcon*
Modèle de langage open source développé par Hugging Face
Spécialisé dans la génération de code
Capable de générer du code Python, JavaScript, Java, C++ et Go