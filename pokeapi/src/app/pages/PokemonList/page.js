import PokemonPage from '@/app/components/PokemonPage'
import styles from './page.module.css'

export default function page(){
    return(
        <div className={styles.main} >
            <PokemonPage/>
        </div>
    )
}