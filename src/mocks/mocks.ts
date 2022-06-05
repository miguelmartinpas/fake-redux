import { User } from "../type/User"

const getLoggedUser = (): User | null => (
    {
        name: 'Batman',
        avatar: 'https://cdn2.iconfinder.com/data/icons/super-hero/154/batman-comics-hero-avatar-head-mask-512.png',
        lastLogin: new Date().toISOString(),
    }
)

const getGuestUser = (): User | null => null

export const getUser = (isLogged: boolean): User | null => {
    return isLogged ? getLoggedUser() : getGuestUser();
}

export const getTasks = (withTasks: boolean) => {
    if (!withTasks) { 
        return [];
    }

    return [
        {
            task: 'Lucas ipsum dolor sit amet tatooine fett antilles amidala organa ventress mustafar organa sidious utapau.', 
            done: false
        },
        {
            task: 'Dooku dantooine kit organa kessel jawa hutt. R2-d2 kenobi vader hutt kenobi jade dooku darth ben.', 
            done: true
        },
        {
            task: 'C-3po organa grievous calamari kit jinn. Kashyyyk mace moff hutt coruscant.', 
            done: true
        },
        {
            task: 'Kenobi amidala mothma endor darth mandalore mandalorians hutt leia.', 
            done: true
        },
        {
            task: 'Hutt boba darth darth lando bespin hutt ventress mandalorians.', 
            done: true
        },
        {
            task: 'Skywalker moff solo binks mon mon wedge qui-gon tatooine.', 
            done: false
        },
        {
            task: 'KSolo greedo darth moff.', 
            done: false
        },
        {
            task: 'Solo chewbacca ewok solo darth moff dagobah twi´lek calrissian.', 
            done: true
        }
    ];
}
