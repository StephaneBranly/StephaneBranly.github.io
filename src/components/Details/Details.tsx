import './Details.scss'
import { AiOutlineMail, AiOutlineCalendar, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai"
export interface DetailsProps {
   
}

const Details = (props: DetailsProps) => {
   return <section  className='resume_section' id='details'>
        <h2>Détails</h2>
        <section className='details_content'>
        <ul>
            <li>
                <a href='mailto:stephanebranly+webresume@gmail.com' type='mailto'>
                    <div className='detail_content'>
                        <AiOutlineMail className='detail_icon'/><span className='detail_text'>stephanebranly@gmail.com</span>
                    </div>
                </a>
            </li>
            <li>
                <div className='detail_content'>
                    <AiOutlineCalendar className='detail_icon' /><span className='detail_text'>22 ans</span>
                </div>
            </li>
            <li>
                <a href='https://www.linkedin.com/in/stephanebranly/'>
                    <div className='detail_content'>
                        <AiOutlineLinkedin className='detail_icon'/><span className='detail_text'>/stephanebranly</span>
                    </div>
                </a>
            </li>
            <li>
                <a href='https://github.com/StephaneBranly'>
                    <div className='detail_content'>
                        <AiOutlineGithub className='detail_icon'/><span className='detail_text'>/stephanebranly</span>
                    </div>
                </a>
            </li>
        </ul>
        </section>
    </section>
}

export default Details
