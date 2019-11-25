import { Ticket } from '../models/ticket';

const MOCK_TICKETS: Ticket[] = [
    {
        id: 1,
        imageUrl: 'https://static-s.aa-cdn.net/img/ios/596402997/afbbb570fdd5871280b41baa7f2866c4',
        title: 'Moi moche et méchant',
        description: 'une place de cinéma gratuite',
        count: 1
    }, {
        id: 2,
        imageUrl: 'https://www.auchandirect.fr/backend/media/products_images/0N_202260.jpg',
        title: 'Spécialité fruits de mer *****',
        description: 'Découvrir une nouvelle adresse qui fait le parti de vous faire apprécier les crabes',
        count: 10
    }, {
        id: 3,
        imageUrl: 'https://images.pexels.com/users/avatars/157841/mayweather-vs-mcgregor-215.jpeg',
        title: 'McGregor VS Mayweather',
        description: 'Ticket pour voir le combat du siècle',
        count: 4
    }
];

export default MOCK_TICKETS;
