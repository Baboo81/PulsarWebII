import style from './homePage.module.css';
import NavBar from '../../components/NavBar/NavBar';
import { Fragment } from 'react'; 

const title = "Pulsar";
const title2 = "WEB";
const skills = [
    'Un design inspiré',
    'Contact client personnalisé',
    'Approche digitalisée'
]

function Title ({color, fontSize}) {
    return <h1 style = {
                {
                    color : color,
                    fontSize : fontSize
                }
                        }> {title}
           </h1>
}

function Title2 ({color, fontSize}) {
    return <h1 style = {
                {
                        color : color,
                        fontSize : fontSize
                }
                       }> {title2}
            </h1>
}

const HomePage = () => {

    return (
        <div class="container">
            <div class="row">
                    <div class="col-md-6">
                        <p class="p-4 mx-5">
                            {skills.map(skill => (<li key={skill}> {skill} </li>))}
                        </p>
                    </div>
                    <div class="col-md-6">
                        <Title color="#6486ac" fontSize="16em" />
                        <Title2 color="#6486ac" fontSize="10em"/>
                    </div>
             </div>
        </div>
    )
}

export default HomePage