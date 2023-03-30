import Locale from './locale_interface'

export default <Locale>{
    aboutPage: {
        content: [
            `Cova est une initiative étudiante pour encourager le covoiturage entre étudiants.`,
            `Ce service est basé sur la confiance entre les étudiants.
            `,
            `Les {termsOfUse} et {privacyPolicy} sont disponibles sur le site web.`,
            `Pour nous contacter, veuillez utiliser le {contactForm}.`,
            `Créé par JC.`,
            `Logo par Céli.`,
        ],
        thankYouDonors: 'Merci aux étudiants',
        makeADonation: '',
        unicovoitIsGreen: "Cova est plus propre que {cleanerThan}% des pages testées par",
    },
    activityPage: {
        title: 'Mon activité',
        bookings: 'Réservations',
        offers: 'Mes annonces',
        upcomingTrips: 'Trajets à venir',
        pastTrips: 'Trajets passés',
    },
    appBar: {
        home: 'Accueil',
        about: 'À propos',
        login: 'Connexion',
        myActivity: 'Mes activités',
        myProfile: 'Mon profil',
        publishTrip: 'Publier un trajet',
    },
    book: {
        title: 'Réserver une place',
        booked: 'Trajet réservé !',
        requestSent: 'Demande de réservation envoyée !',
        warning: `Cova ne gère pas les paiements en ligne.{0}
                C'est à vous de convenir d'un moyen de paiement avec le conducteur.`,
        departure: 'Départ',
        arrival: 'Arrivée',
        dateAndTime: 'Date et Heure',
        price: 'Prix du trajet',
        distance: 'Distance',
        sendBooking: 'Envoyer la réservation',
        afterConfirmationContactExchanged: 'Une fois la réservation confirmée, vos informations de contact seront envoyées à votre conducteur et vous recevrez les leurs.',
    },
    builtForMobileWarning: 'Cova est optimisé pour les appareils mobiles. En utilisant un ordinateur, vous pouvez avoir des problèmes de performances.',
    chat: {
        recentChats: 'Recent chats',
    },
    contactForm: 'formulaire de contact',
    contact: {
        title: 'Contact',
        subtitle: `Utilisez ce formulaire pour nous contacter.{0}
            Laissez-nous une adresse mail afin que nous puissions vous répondre.`,
        name: 'Nom',
        email: 'Adresse email',
        message: 'Message',
        send: 'Envoyer',
        sent: 'Message envoyé',
    },
    credits: {
        illustrations: 'Illustration de la collection',
        logo: 'Logo par'
    },
    error: {
        genericError: 'Une erreur est survenue',
        notFound: 'Page non trouvée',
        details: 'Voir plus de détails',
        backToPrevious: 'Retour à la page précédente',
        tryAgain: 'Merci de réessayer plus tard.',
        unknown: 'Non précisé',
        required: 'Requis',
        tooLong: 'Trop long',
        tooShort: 'Trop court',
        tooHigh: 'Trop élevé',
        invalid: 'Invalide',
        tripDoesntExist: 'Ce trajet n\'existe pas',
    },
    faq: {
        title: 'FAQ',
        content: [
            {
                title: "Comment fonctionne Cova ?",
                content: `Avec Cova, vous pouvez proposer vos trajets, qu'ils soient courts ou longs, à d'autres étudiants afin de couvrir vos frais.
                        Vous pouvez également trouver des conducteurs pour vos trajets.<br>
                          `
            }, {
                title: "Les utilisateurs sont-ils tous des étudiants ?",
                content: `Oui. Il est obligatoire de vérifier son statut étudiant avant de faire une réservation ou déposer une annonce.
                        Cette vérification se fait par votre adresse mail étudiante.`
            }, {
                title: "Quelle forme de paiement est utilisée sur Cova ?",
                content: `Sur Cova, les paiements sont effectués en point Cova. Vous pouvez convertir vos points en euros et inversement. En ce moment, 1 point = 0.05€ = 1Km parcouru.`
            }, {
                title: "Comment puis-je contacter mon conducteur/passager ?",
                content: `Les coordonnées de chacun seront transmises par Cova au moment de la réservation.`
            }, {
                title: "Est-ce que je peux réserver plusieurs places sur un trajet ?",
                content: `Non. Les trajets sont réservés aux étudiants, donc vous devez avoir un compte Cova et vérifier votre statut étudiant avant de pouvoir réserver un trajet.`
            }, {
                title: "Comment est-ce que Cova se finance ?",
                content: `Cova prend une commission de 20% de commissions pour les conducteurs qui souhaitent récupérer leurs points en euros. Et 10% pour les passagers`
            }, {
                title: "Comment traitez-vous mes données ?",
                content: `Les informations concernant les trajets et les utilisateurs sont stockées sur les serveurs d'Cova en Allemagne. Ces informations ne sont pas communiquées à des tiers.<br>
                        Les informations de connexion (identifiant, mot de passe) sont gérées par Auth0 sur des serveurs en Europe.<br>
                        Vous trouverez plus de détails dans notre <a href='/legal/privacy'>Politique de Confidentialité</a>.`
            }, {
                title: "Qui a développé cette application ?",
                content: "Cette application a été développée par finxol, un étudiant de l'IUT de Vannes (Bretagne)."
            }, {
                icon: "mdi-message-processing-outline",
                title: "Comment puis-je contacter Cova ?",
                content: `Vous pouvez envoyer un mail à <a href="mailto:support@cova.fr" target="_blank" rel="noopener noreferrer">support@cova.fr</a>,
                        utiliser le <a href="/contact">formulaire de contact</a>,
                        ou nous contacter sur <a href="https://instagram.com/cova" target="_blank" rel="noopener noreferrer">Instagram</a>.`
            }
        ],
    },
    form: {
        submit: 'Envoyer',
        cancel: 'Annuler',
        delete: 'Supprimer',
        ok: 'OK',
        required: 'Requis',
        optional: 'Facultatif',
        errors: {
            invalid: 'Invalide',
            invalidEmail: 'Email invalide',
            invalidPassword: 'Mot de passe invalide',
        },
        departureCity: 'Lieu de départ',
        arrivalCity: 'Lieu d\'arrivée',
        departureDate: 'Date de départ',
        preciseAddress: 'Adresse précise',
        time: 'Heure',
        city: 'Ville',
        search: 'Rechercher',
    },
    home: {
        cookieWarning: "Cova utilise des cookies. Pour en savoir plus, consultez notre {privacyPolicy}",
        title: 'On va où ?',
        advantages: [
            {
                title: 'Petits Prix',
                content: 'Cova contribue à maintenir des prix bas en ne prenant aucune commission sur les trajets.'
            },
            {
                title: 'Sécurité',
                content: 'Profitez de trajets exclusivement entre étudiants.'
            },
            {
                title: 'Transparence',
                content: 'Cova est conçu pour des étudiants, par des étudiants. Nous vous disons tout ce que vous devez savoir sur les frais de covoiturage.'
            }
        ],
        presentation: {
            title: 'Cova, c\'est quoi ?',
            description: `<p> Cova est une plateforme de covoiturage pour les étudiants. </p>
                        <p>L'objectif est d'encourager le covoiturage entre étudiants dans la ville de Valence. </p>`
        },
    },
    login: {
        title: 'Connexion',
        description: 'En vous inscrivant, vous acceptez les {termsOfUse} et la {privacyPolicy}.',
        universitiesList: 'Pour vous inscrire, vous devez être étudiant de l\'une des universités suivantes :',
        addUniversityRequest: 'Si vous souhaitez ajouter votre université, prenez contact avec nous sur {email} ou le {contactForm}.',
        login: 'Me connecter',
    },
    learnMore: 'En savoir plus',
    profile: {
        title: 'Mon profil',
        user: 'Utilisateur',
        publicProfile: 'Profil public',
        university: 'Université',
        bio: 'Présentation',
        nickname: 'Nom d\'utilisateur',
        contactInfo: {
            title: 'Contact',
            description: 'Ces informations seront transmises à vos conducteurs ou passagers une fois la réservation confirmée.',
            email: 'Adresse email',
            phone: 'Téléphone',
            addPhone: 'Ajouter un numéro de téléphone',
            snapchat: 'Snapchat',
            addSnapchat: 'Ajouter un compte Snapchat',
            instagram: 'Instagram',
            addInstagram: 'Ajouter un compte Instagram',
            messenger: 'Facebook Messenger',
            addMessenger: 'Ajouter un compte Facebook Messenger',
        },
        preferences: {
            title: 'Préférences de trajet',
            description: `Vous pouvez définir ici si vous préférez voyager avec des fumeurs, animaux, musique ou non.
                    Définissez également si vous voulez accepter automatiquement les réservations.`,
            smokePref: {
                title: 'Trajet fumeur',
                yes: 'La fumée ne me dérange pas',
                no: 'Je préfère voyager non fumeur',
            },
            petsPref: {
                title: 'Trajet avec animaux',
                yes: 'Les animaux de compagnie sont les bienvenus !',
                no: 'Je préfère voyager sans animaux de compagnie',
            },
            musicPref: {
                title: 'Trajet en musique',
                yes: 'Je fais le trajet en musique !',
                no: 'Je préfère voyager sans musique',
            },
        },
        confirmEmail: {
            short: 'Cliquez sur le lien reçu pour vérifier votre adresse mail.',
            title: 'Pourquoi vérifier votre adresse mail ?',
            description: `Vérifier votre adresse mail nous permet de nous assurer que vous êtes bien le propriétaire du compte,
                    et que l'adresse ne contient pas d'erreur.{0}
                    Si l'adresse est incorrecte, vous ne recevrez pas nos mails de confirmation et de notification.`
        },
    },
    privacyPolicy: 'Politique de Confidentialité',
    settings: {
        title: 'Paramètres',
        changeTheme: 'Passer en mode {0}',
        lightTheme: 'clair',
        darkTheme: 'sombre',
        logout: 'Se déconnecter',
        deleteAccount: {
            short: 'Supprimer mon compte',
            title: 'Voulez-vous vraiment supprimer votre compte ?',
            description: 'Cela supprimera tous vos trajets, réservations, et vos informations personnelles.',
            warning: 'Cette action est irréversible.',
        },
        version: 'Version {0}',
    },
    termsOfUse: "Conditions d'Utilisation",
    tripAdd: {
        title: 'Proposer un trajet',
        offline: 'Vous n\'êtes pas connecté à internet. Vous ne pouvez pas enregistrer de nouveaux trajet.',
        added: 'Trajet ajouté',
        seeTrips: 'Voir les trajets',
        next: 'Suivant',
        back: 'Retour',
        send: 'Envoyer',
        departureCity: {
            title: 'Lieu de départ',
            subtitle: 'Sélectionnez un lieu précis ou une ville',
        },
        arrivalCity: {
            title: 'Lieu d\'arrivée',
            subtitle: 'Sélectionnez un lieu précis ou une ville',
        },
        departureDate: {
            title: 'Date et heure de départ',
        },
        seats: {
            title: 'Nombre de places',
            subtitle: 'Le nombre de passagers que vous pouvez transporter',
            short: 'Places',
        },
        price: {
            title: 'Prix',
            subtitle: 'Fixez le prix par passager',
        },
        description: {
            title: 'Description',
            subtitle: '(Exemples: flexibilité des horaires, flexibilité des points de rencontre et de dépose, taille des bagages, etc.)',
        },
        priceExplanation: {
            short: 'Nous estimons que ce trajet vous coutera environ',
            title: 'Comment le prix est-il estimé ?',
            description: `Nous basons notre estimation sur la consommation moyenne d'une voiture, ici 6 L/100km,
                        et la distance du trajet, en prenant en compte le prix moyen du SP95-E10 en France.{0}
                        Les péages ne sont pas pris en compte.`,
        },
    },
    trips: {
        title: 'Trajets',
        noTrips: 'Aucun trajet disponible',
        nothingToShow: 'Rien à afficher pour le moment !',
        offline: 'La recherche de trajets n\'est pas disponible en mode hors-ligne. Veuillez vous connecter à internet.',
    },
    trip: {
        title: 'Trajet',
        placesRemaining: {
            singular: 'place restante',
            plural: 'places restantes',
        },
        deleteTrip: {
            short: 'Supprimer le trajet',
            confirmation: {
                title: 'Voulez-vous vraiment supprimer ce trajet ?',
                description: `Nous notifierons tous les utilisateurs qui ont réservé une place sur ce trajet.`,
            },
            success: {
                title: 'Trajet supprimé',
                description: 'Nous avons notifié tous les passagers.',
            },
        },
        autoBook: 'Acceptation automatique',
        pendingRequests: 'Vous avez une demande de réservation en attente',
        noBookings: 'Aucune demande de réservation',
        bookings: 'Réservations',
        acceptOrRejectBookings: 'Acceptez ou refusez les demandes de réservation',
        refuse: 'Refuser',
        confirmRefusal: 'Voulez-vous vraiment refuser cette réservation ?',
        seatBooked: 'Vous avez réservé une place sur ce trajet.',
        seatBookedPending: 'Vous avez une réservation en attente sur ce trajet.',
        confirmBookingCancellation: 'Voulez-vous vraiment annuler votre réservation ?',
    },
    verify: {
        title: 'Vérification',
        subtitle: 'Avant de pouvoir utiliser Cova, vous devez vérifier votre statut étudiant.',
        description: `Nous utilisons la vérification de votre adresse mail étudiante afin de valider votre profil étudiant.
                        Cette vérification est renouvelée chaque année.{0}
                        Nous n'utiliserons pas cette adresse à l'avenir.`,
        enterEmail: 'Entrez votre adresse mail universitaire',
        verify: 'Vérifier',
        enterCode: 'Entrez le code reçu par mail',
        notReceived: 'Vous n\'avez rien reçu ?',
        resend: 'Renvoyer le code',
        incorrectCode: 'Le code entré est incorrect.',
        correctEmail: 'Corriger l\'adresse mail ?',
        emailAlreadyUsed: 'L\'adresse mail entrée est déjà utilisée.',
        emailNotRecognised: `Le format de votre adresse mail n'est pas reconnu.
                    Votre université n'est peut-être pas encore prise en charge par Cova.`,
        success: 'Statut étudiant vérifié !',
    },
}
