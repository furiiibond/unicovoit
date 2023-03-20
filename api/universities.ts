export interface University {
    id: string,
    name: string,
    country: string,
    format: RegExp,
}

/**
 * List and email format of all supported universities
 */
const universities: University[] = [
    {
        id: 'iut-val',
        name: 'IUT de Valence',
        country: 'France',
        format: /^[A-Za-z\-]+\.[A-Za-z\-]+@etu\.univ-grenoble-alpes\.fr$/
    }, {
        id: 'inp-esisar',
        name: 'ESISAR Valence',
        country: 'France',
        format: /^[A-Za-z\-]+\.[A-Za-z\-]+@etu\.esisar\.grenoble-inp\.fr$/
    }, {
        id: 'inp',
        name: 'IAE de Valence',
        country: 'France',
        format: /^[A-Za-z]+\.[A-Za-z]+@univ-grenoble-alpes\.fr$/
    }
]

export default universities
